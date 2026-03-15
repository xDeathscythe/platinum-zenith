const nodemailer = require('nodemailer');
const Imap = require('imap');

async function main() {
  const FROM = '"Platinum Zenith" <aleksandar@platinumzenith.com>';
  const TO = 'alnen96@gmail.com';
  const SUBJECT = 'Test mail - Devona provera Sent foldera';
  const TEXT = 'Ovo je test mail poslan iz Devona agenta. Proveravam da li SMTP cuva kopiju u Sent folderu.\n\nPozdrav,\nDevona';

  // 1. Send via SMTP
  const transport = nodemailer.createTransport({
    host: 'smtp.hostinger.com',
    port: 465,
    secure: true,
    auth: { user: 'aleksandar@platinumzenith.com', pass: 'sasasasA11+' }
  });

  const info = await transport.sendMail({ from: FROM, to: TO, subject: SUBJECT, text: TEXT });
  console.log('SENT OK:', info.messageId);

  // 2. Build raw RFC822 message for IMAP append
  const rawMsg = [
    `From: ${FROM}`,
    `To: ${TO}`,
    `Subject: ${SUBJECT}`,
    `Date: ${new Date().toUTCString()}`,
    `Message-ID: ${info.messageId}`,
    `MIME-Version: 1.0`,
    `Content-Type: text/plain; charset=utf-8`,
    ``,
    TEXT
  ].join('\r\n');

  // 3. Append to INBOX.Sent via IMAP
  const imap = new Imap({
    user: 'aleksandar@platinumzenith.com',
    password: 'sasasasA11+',
    host: 'imap.hostinger.com',
    port: 993,
    tls: true,
    tlsOptions: { rejectUnauthorized: false }
  });

  return new Promise((resolve, reject) => {
    imap.once('ready', () => {
      imap.append(rawMsg, { mailbox: 'INBOX.Sent', flags: ['\\Seen'] }, (err) => {
        if (err) {
          console.error('APPEND error:', err.message);
          imap.end();
          reject(err);
          return;
        }
        console.log('Appended to INBOX.Sent OK');

        // 4. Verify
        imap.openBox('INBOX.Sent', true, (err, box) => {
          if (err) { console.error('Open error:', err.message); imap.end(); resolve(); return; }
          console.log('INBOX.Sent total messages:', box.messages.total);

          const f = imap.seq.fetch(`${box.messages.total}:*`, {
            bodies: 'HEADER.FIELDS (FROM TO SUBJECT DATE)',
          });
          f.on('message', (msg, seqno) => {
            msg.on('body', (stream) => {
              let data = '';
              stream.on('data', c => data += c.toString());
              stream.on('end', () => console.log(`Latest Sent #${seqno}:`, data.trim().substring(0, 300)));
            });
          });
          f.once('end', () => { imap.end(); resolve(); });
        });
      });
    });
    imap.once('error', (err) => { console.error('IMAP error:', err.message); reject(err); });
    imap.connect();
  });
}

main().catch(e => console.error(e));
