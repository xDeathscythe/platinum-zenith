/**
 * Send email via SMTP + save copy to IMAP Sent folder
 * Usage: node send-email.cjs --to "email" --subject "subj" --text "body"
 *        node send-email.cjs --to "email" --subject "subj" --html "<p>body</p>"
 *        node send-email.cjs --to "email" --subject "subj" --text "body" --html "<p>body</p>"
 */
const nodemailer = require('nodemailer');
const Imap = require('imap');

const SMTP = {
  host: 'smtp.hostinger.com',
  port: 465,
  secure: true,
  auth: { user: 'aleksandar@platinumzenith.com', pass: 'sasasasA11+' }
};

const IMAP_CFG = {
  user: 'aleksandar@platinumzenith.com',
  password: 'sasasasA11+',
  host: 'imap.hostinger.com',
  port: 993,
  tls: true,
  tlsOptions: { rejectUnauthorized: false }
};

const FROM = '"Aleksandar Nenadović | Platinum Zenith" <aleksandar@platinumzenith.com>';
const SENT_FOLDER = 'INBOX.Sent';

function parseArgs() {
  const args = process.argv.slice(2);
  const opts = {};
  for (let i = 0; i < args.length; i++) {
    if (args[i].startsWith('--')) {
      const key = args[i].slice(2);
      opts[key] = args[i + 1] || true;
      if (args[i + 1] && !args[i + 1].startsWith('--')) i++;
    }
  }
  return opts;
}

function buildRawMessage(from, to, subject, text, html, messageId) {
  const boundary = '----=_Part_' + Date.now().toString(36);
  const lines = [
    `From: ${from}`,
    `To: ${to}`,
    `Subject: ${subject}`,
    `Date: ${new Date().toUTCString()}`,
    `Message-ID: ${messageId}`,
    `MIME-Version: 1.0`,
  ];

  if (html && text) {
    lines.push(`Content-Type: multipart/alternative; boundary="${boundary}"`, '', `--${boundary}`);
    lines.push(`Content-Type: text/plain; charset=utf-8`, '', text, '', `--${boundary}`);
    lines.push(`Content-Type: text/html; charset=utf-8`, '', html, '', `--${boundary}--`);
  } else if (html) {
    lines.push(`Content-Type: text/html; charset=utf-8`, '', html);
  } else {
    lines.push(`Content-Type: text/plain; charset=utf-8`, '', text || '');
  }

  return lines.join('\r\n');
}

function appendToSent(rawMsg) {
  return new Promise((resolve, reject) => {
    const imap = new Imap(IMAP_CFG);
    imap.once('ready', () => {
      imap.append(rawMsg, { mailbox: SENT_FOLDER, flags: ['\\Seen'] }, (err) => {
        imap.end();
        if (err) reject(err);
        else resolve();
      });
    });
    imap.once('error', reject);
    imap.connect();
  });
}

async function main() {
  const opts = parseArgs();
  if (!opts.to || !opts.subject) {
    console.error('Usage: node send-email.cjs --to "email" --subject "subject" --text "body" [--html "<p>html</p>"]');
    process.exit(1);
  }

  const transport = nodemailer.createTransport(SMTP);
  const mailOpts = { from: FROM, to: opts.to, subject: opts.subject };
  if (opts.text) mailOpts.text = opts.text;
  if (opts.html) mailOpts.html = opts.html;

  const info = await transport.sendMail(mailOpts);
  console.log('SENT:', info.messageId, '→', opts.to);

  // Save to Sent folder
  const raw = buildRawMessage(FROM, opts.to, opts.subject, opts.text, opts.html, info.messageId);
  try {
    await appendToSent(raw);
    console.log('SAVED to Sent folder');
  } catch (e) {
    console.error('Warning: Could not save to Sent folder:', e.message);
  }
}

main().catch(e => { console.error('Error:', e.message); process.exit(1); });
