import { useState, useMemo, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const B = import.meta.env.BASE_URL

const brands = {
  truffles: {
    name: 'Platinum Truffles',
    ads: [
      { text: '🖤 Ovo nije gljiva. Ovo je crno zlato iz srpskih šuma', img: `${B}truffles-01.webp`, views: '18K', viewsChange: '+55%', revenue: '€12K', revenueChange: '+180%', color: 'from-amber-600 to-yellow-700' },
      { text: '🍽️ Danas naručiš, sutra na tanjiru. Bez posrednika', img: `${B}truffles-02.webp`, views: '24K', viewsChange: '+68%', revenue: '€18K', revenueChange: '+220%', color: 'from-yellow-500 to-amber-600' },
      { text: '🍝 Jedno jelo sa tartufom i gosti se vraćaju. Garantovano', img: `${B}truffles-03.webp`, views: '31K', viewsChange: '+82%', revenue: '€22K', revenueChange: '+295%', color: 'from-amber-500 to-orange-600' },
      { text: '👐 Ručno brani. Ručno birani. Svaki komad ima priču', img: `${B}truffles-04.webp`, views: '15K', viewsChange: '+41%', revenue: '€9K', revenueChange: '+145%', color: 'from-yellow-600 to-amber-700' },
      { text: '🔪 Kad chef stavi tartuf, gostu se ne žuri. Nikad', img: `${B}truffles-05.webp`, views: '27K', viewsChange: '+72%', revenue: '€15K', revenueChange: '+210%', color: 'from-orange-500 to-amber-600' },
      { text: '🧑‍🍳 Rendaj. Mirisi. Tanjir postaje iskustvo', img: `${B}truffles-06.webp`, views: '21K', viewsChange: '+59%', revenue: '€11K', revenueChange: '+175%', color: 'from-amber-400 to-yellow-500' },
      { text: '🫙 Puna tegla = pun meni. B2B za restorane i hotele', img: `${B}truffles-07.webp`, views: '33K', viewsChange: '+85%', revenue: '€24K', revenueChange: '+310%', color: 'from-yellow-400 to-amber-500' },
      { text: '👑 Beli tartuf. 4 meseca u godini. Sad ili nikad', img: `${B}truffles-08.webp`, views: '19K', viewsChange: '+48%', revenue: '€10K', revenueChange: '+155%', color: 'from-amber-700 to-yellow-600' },
      { text: '🏔️ Iz Fruške Gore na Michelin tanjir. Direktna linija', img: `${B}truffles-09.webp`, views: '29K', viewsChange: '+76%', revenue: '€20K', revenueChange: '+260%', color: 'from-orange-400 to-amber-500' },
      { text: '🔬 Presek koji priča celu priču. Svežina se ne lažira', img: `${B}truffles-10.webp`, views: '36K', viewsChange: '+91%', revenue: '€28K', revenueChange: '+340%', color: 'from-yellow-300 to-amber-400' },
      { text: '⚫ Jedan tartuf. Jedna šuma. Nula aditiva', img: `${B}truffles-11.webp`, views: '22K', viewsChange: '+62%', revenue: '€14K', revenueChange: '+195%', color: 'from-amber-500 to-yellow-600' },
      { text: '🌑 Crni tartuf izbliza. Tekstura koja opravdava cenu', img: `${B}truffles-12.webp`, views: '14K', viewsChange: '+37%', revenue: '€7K', revenueChange: '+120%', color: 'from-yellow-500 to-orange-400' },
      { text: '📦 Od šume do vaše kuhinje za 24h. Srbija i EU', img: `${B}truffles-13.webp`, views: '25K', viewsChange: '+65%', revenue: '€16K', revenueChange: '+230%', color: 'from-amber-600 to-orange-500' },
      { text: '🔎 Pogledaj taj presek. Takav kvalitet ne nalaziš u marketu', img: `${B}truffles-14.webp`, views: '17K', viewsChange: '+44%', revenue: '€8K', revenueChange: '+140%', color: 'from-yellow-600 to-amber-500' },
      { text: '🧀 Brie + tartuf med = razlog zašto se rezervacije pune', img: `${B}truffles-15.webp`, views: '20K', viewsChange: '+52%', revenue: '€13K', revenueChange: '+185%', color: 'from-amber-400 to-orange-400' },
      { text: '🥄 Burrata, tartuf, maslinovo ulje. Tri sastojka, Michelin nivo', img: `${B}truffles-16.webp`, views: '28K', viewsChange: '+71%', revenue: '€19K', revenueChange: '+245%', color: 'from-yellow-400 to-amber-600' },
      { text: '🍯 Tartuf med koji menja sve. Kašičica na bruschetti i gotovo', img: `${B}truffles-17.webp`, views: '32K', viewsChange: '+83%', revenue: '€21K', revenueChange: '+280%', color: 'from-orange-400 to-yellow-500' },
      { text: '🫕 Tartuf med na brie-u. Dezert za odrasle. Naruči online', img: `${B}truffles-18.webp`, views: '26K', viewsChange: '+66%', revenue: '€17K', revenueChange: '+220%', color: 'from-amber-500 to-orange-500' },
    ],
  },
  medifizio: {
    name: 'Medifizio',
    ads: [
      { text: 'Rešite se bola u leđima i vratu! Popust sa 9000 na 3500 RSD', img: `${B}medifizio-01.webp`, views: '42K', viewsChange: '+91%', revenue: '€8.2K', revenueChange: '+310%', color: 'from-red-500 to-rose-600' },
      { text: 'Nema potrebe da trpite bolove u vratu. Fizikalna terapija do 19.09.', img: `${B}medifizio-02.webp`, views: '28K', viewsChange: '+63%', revenue: '€5.4K', revenueChange: '+175%', color: 'from-rose-400 to-pink-600' },
      { text: '50% popusta na prvu fizikalnu terapiju. Oslobodite se bola u kolenu', img: `${B}medifizio-03.webp`, views: '35K', viewsChange: '+78%', revenue: '€7.1K', revenueChange: '+240%', color: 'from-red-400 to-orange-500' },
      { text: 'Bol u stopalu? 50% popusta narednih 7 dana. Sa 4000 na 2000 RSD', img: `${B}medifizio-04.webp`, views: '19K', viewsChange: '+45%', revenue: '€3.8K', revenueChange: '+145%', color: 'from-rose-500 to-red-600' },
      { text: 'Bol u leđima? Oktobarska akcija, prva terapija sa 4000 na 2000', img: `${B}medifizio-05.webp`, views: '31K', viewsChange: '+71%', revenue: '€6.5K', revenueChange: '+250%', color: 'from-orange-400 to-red-500' },
      { text: 'Specijalistički ultrazvučni pregled zglobova. Sa 7500 na 3500 RSD', img: `${B}medifizio-06.webp`, views: '24K', viewsChange: '+52%', revenue: '€4.9K', revenueChange: '+195%', color: 'from-blue-400 to-teal-500' },
      { text: 'Bolovi u vratu? Popust sa 6000 na 3800 uz besplatan pregled', img: `${B}medifizio-07.webp`, views: '38K', viewsChange: '+85%', revenue: '€7.8K', revenueChange: '+280%', color: 'from-red-500 to-rose-500' },
      { text: 'Bol u ramenu? Popust sa 7500 na 3500. Bez bola i ukočenosti', img: `${B}medifizio-08.webp`, views: '22K', viewsChange: '+48%', revenue: '€4.5K', revenueChange: '+160%', color: 'from-rose-400 to-red-500' },
      { text: 'Bez bola i ukočenosti u novoj godini. Specijalistički pregled + terapija', img: `${B}medifizio-01.webp`, views: '45K', viewsChange: '+95%', revenue: '€9.1K', revenueChange: '+340%', color: 'from-red-600 to-orange-500' },
      { text: 'Sigurno rešava bol u vratu. Fizikalna terapija sa popustom', img: `${B}medifizio-02.webp`, views: '33K', viewsChange: '+72%', revenue: '€6.8K', revenueChange: '+220%', color: 'from-rose-500 to-pink-500' },
      { text: 'Povratite slobodu pokreta. Ubrzajte oporavak. Prijavite se odmah!', img: `${B}medifizio-03.webp`, views: '26K', viewsChange: '+58%', revenue: '€5.2K', revenueChange: '+190%', color: 'from-red-400 to-rose-500' },
      { text: 'Ultrazvučni pregled ramena sa 50% popusta do kraja nedelje', img: `${B}medifizio-08.webp`, views: '17K', viewsChange: '+39%', revenue: '€3.4K', revenueChange: '+135%', color: 'from-teal-400 to-blue-500' },
      { text: 'Ne čekajte da bol postane hroničan. Zakažite pregled danas', img: `${B}medifizio-05.webp`, views: '29K', viewsChange: '+65%', revenue: '€5.9K', revenueChange: '+210%', color: 'from-orange-500 to-red-600' },
      { text: 'Moderne metode fizikalne terapije. Iskusni terapeuti. Rezultati odmah', img: `${B}medifizio-06.webp`, views: '21K', viewsChange: '+47%', revenue: '€4.3K', revenueChange: '+155%', color: 'from-blue-500 to-teal-400' },
    ],
  },
  focus: {
    name: 'Focus Fizikal',
    ads: [
      { text: 'Letnja promocija! AWT anti-celulit 4 regije po ceni jedne. Sa 16000 na 4000', img: `${B}focus-01.webp`, views: '35K', viewsChange: '+82%', revenue: '€6.8K', revenueChange: '+260%', color: 'from-pink-400 to-rose-500' },
      { text: 'Novogodišnja akcija! Istopite masne naslage. Tretman lipolize sa 17000 na 12000', img: `${B}focus-02.webp`, views: '28K', viewsChange: '+65%', revenue: '€5.4K', revenueChange: '+195%', color: 'from-purple-400 to-pink-500' },
      { text: 'AWT anti-celulit do 05.10. Razbija naslage celulita, pojačava tonus mišića', img: `${B}focus-03.webp`, views: '31K', viewsChange: '+71%', revenue: '€6.1K', revenueChange: '+230%', color: 'from-rose-400 to-pink-600' },
      { text: 'EMS tretman. Zategnite stomak povoljno! Sa 9200 na 4000. Oktobarska akcija', img: `${B}focus-04.webp`, views: '24K', viewsChange: '+53%', revenue: '€4.7K', revenueChange: '+175%', color: 'from-red-400 to-rose-500' },
      { text: 'EMS tretman do kraja nedelje. Regenerišite mišiće, zategnite stomak. 4000 RSD', img: `${B}focus-05.webp`, views: '22K', viewsChange: '+48%', revenue: '€4.2K', revenueChange: '+160%', color: 'from-orange-400 to-red-500' },
      { text: 'Zateže kožu i podiže kvalitet kože. AWT anti-celulit po specijalnoj ceni', img: `${B}focus-01.webp`, views: '38K', viewsChange: '+88%', revenue: '€7.5K', revenueChange: '+290%', color: 'from-pink-500 to-fuchsia-500' },
      { text: 'Smanjite obim brzo. Ciljajte željenu regiju. Bez treninga i dijeta, prirodno', img: `${B}focus-02.webp`, views: '19K', viewsChange: '+42%', revenue: '€3.8K', revenueChange: '+145%', color: 'from-violet-400 to-purple-500' },
      { text: 'Pojačava tonus mišića. Sprečite da stomak ispada napred. Zateže i oblikuje', img: `${B}focus-04.webp`, views: '26K', viewsChange: '+58%', revenue: '€5.1K', revenueChange: '+210%', color: 'from-rose-500 to-red-500' },
      { text: 'Prijavite se odmah! 4 regije po ceni jedne, samo do 20. avgusta', img: `${B}focus-03.webp`, views: '33K', viewsChange: '+75%', revenue: '€6.5K', revenueChange: '+250%', color: 'from-pink-400 to-orange-400' },
      { text: 'Oslobodite se celulita zauvek. AWT tretman sa rezultatima od prve sesije', img: `${B}focus-01.webp`, views: '41K', viewsChange: '+93%', revenue: '€8.1K', revenueChange: '+320%', color: 'from-rose-400 to-pink-500' },
      { text: 'Lipoliza. 5000 din popusta! Smanjite obim bez operacije', img: `${B}focus-02.webp`, views: '29K', viewsChange: '+64%', revenue: '€5.7K', revenueChange: '+220%', color: 'from-purple-500 to-violet-600' },
      { text: 'Regenerišite i formirajte pravilne mišiće. EMS tretman na akciji', img: `${B}focus-05.webp`, views: '20K', viewsChange: '+45%', revenue: '€3.9K', revenueChange: '+155%', color: 'from-red-400 to-orange-500' },
      { text: 'Anti-celulit tretman koji zaista radi. Preko 500 zadovoljnih klijentkinja', img: `${B}focus-03.webp`, views: '36K', viewsChange: '+81%', revenue: '€7.1K', revenueChange: '+275%', color: 'from-pink-500 to-rose-600' },
      { text: 'Vračar. Zakažite besplatne konsultacije. Rezultati vidljivi odmah', img: `${B}focus-04.webp`, views: '17K', viewsChange: '+38%', revenue: '€3.4K', revenueChange: '+130%', color: 'from-rose-400 to-red-400' },
    ],
  },
  niwa: {
    name: 'Niwa AI',
    ads: [
      { text: 'Transform your photo into a professional photoshoot with AI', views: '12,6K', viewsChange: '+45%', revenue: '$16K', revenueChange: '+195%', color: 'from-pink-500 to-orange-400' },
      { text: 'Build it. Animate it. Own your style. Our newest feature lets you create...', views: '15,1K', viewsChange: '+4%', revenue: '$18K', revenueChange: '+14%', color: 'from-rose-400 to-pink-600' },
      { text: "Want a visual like this for your product? Here's your step-by-step", views: '11,8K', viewsChange: '+18%', revenue: '$19K', revenueChange: '+17%', color: 'from-violet-400 to-indigo-500' },
      { text: 'Adorable trend, try it now', views: '28K', viewsChange: '+70%', revenue: '$27K', revenueChange: '+95%', color: 'from-amber-400 to-rose-500' },
      { text: 'Make your brand pop with AI magic', views: '8K', viewsChange: '+22%', revenue: '$12K', revenueChange: '+65%', color: 'from-teal-400 to-cyan-500' },
      { text: 'Transform any selfie into a masterpiece', views: '9,2K', viewsChange: '+33%', revenue: '$14K', revenueChange: '+88%', color: 'from-fuchsia-500 to-purple-600' },
      { text: 'Your AI shopping assistant is here', views: '6,4K', viewsChange: '+52%', revenue: '$9K', revenueChange: '+120%', color: 'from-indigo-400 to-blue-500' },
      { text: 'Smart replies. Real conversations. Try Niwa', views: '18K', viewsChange: '+28%', revenue: '$22K', revenueChange: '+78%', color: 'from-emerald-400 to-teal-500' },
      { text: 'Boost your sales with AI-powered chat', views: '14K', viewsChange: '+61%', revenue: '$31K', revenueChange: '+142%', color: 'from-orange-400 to-red-500' },
      { text: 'Let AI handle your customer support 24/7', views: '22K', viewsChange: '+35%', revenue: '$25K', revenueChange: '+88%', color: 'from-sky-400 to-blue-600' },
      { text: 'AI that understands your customers better than you do', views: '19K', viewsChange: '+42%', revenue: '$21K', revenueChange: '+105%', color: 'from-purple-400 to-violet-600' },
      { text: 'Stop losing sales. Start converting with Niwa', views: '16K', viewsChange: '+38%', revenue: '$20K', revenueChange: '+92%', color: 'from-cyan-400 to-blue-500' },
      { text: 'One chatbot. All platforms. Zero missed leads.', views: '24K', viewsChange: '+55%', revenue: '$28K', revenueChange: '+130%', color: 'from-pink-400 to-rose-600' },
      { text: '3x more conversions with personalized AI responses', views: '31K', viewsChange: '+68%', revenue: '$35K', revenueChange: '+175%', color: 'from-amber-500 to-orange-600' },
    ],
  },
  grubin: {
    name: 'Grubin Showroom',
    ads: [
      { text: '🧸 Vaša stopala zaslužuju ovo. 3 boje, 0 kompromisa', img: `${B}grubin-01.webp`, views: '28K', viewsChange: '+65%', revenue: '€4.2K', revenueChange: '+180%', color: 'from-emerald-500 to-teal-600' },
      { text: '👞 On ne nosi papuče. On nosi Grubin. Oseti razliku', img: `${B}grubin-02.webp`, views: '35K', viewsChange: '+78%', revenue: '€5.8K', revenueChange: '+220%', color: 'from-teal-400 to-emerald-500' },
      { text: '🤍 12h na nogama? Ove klompe su napravljene za tebe', img: `${B}grubin-03.webp`, views: '22K', viewsChange: '+52%', revenue: '€3.6K', revenueChange: '+155%', color: 'from-emerald-600 to-green-700' },
      { text: '✨ Mama i ćerka set 👸 Šljokice za nju, stil za vas', img: `${B}grubin-04.webp`, views: '41K', viewsChange: '+92%', revenue: '€7.1K', revenueChange: '+310%', color: 'from-green-400 to-emerald-500' },
      { text: '🪩 Jedne papuče, svi pogledi. Metalik koji se pamti', img: `${B}grubin-05.webp`, views: '19K', viewsChange: '+45%', revenue: '€3.1K', revenueChange: '+140%', color: 'from-teal-500 to-cyan-600' },
      { text: '🌿 Boja sezone na vašim stopalima. Koža + plutani đon', img: `${B}grubin-06.webp`, views: '26K', viewsChange: '+59%', revenue: '€4.5K', revenueChange: '+195%', color: 'from-emerald-400 to-teal-500' },
      { text: '☀️ Od plaže do terase. Jedan par za celo leto', img: `${B}grubin-07.webp`, views: '33K', viewsChange: '+75%', revenue: '€5.4K', revenueChange: '+245%', color: 'from-cyan-400 to-teal-500' },
      { text: '🔥 Kamin, čaj, Grubin. Večeri kakve zaslužujete', img: `${B}grubin-08.webp`, views: '38K', viewsChange: '+85%', revenue: '€6.3K', revenueChange: '+270%', color: 'from-green-500 to-emerald-600' },
      { text: '🐻 Obuj. Zaboravi da ih imaš. To je ceo review', img: `${B}grubin-09.webp`, views: '16K', viewsChange: '+39%', revenue: '€2.8K', revenueChange: '+125%', color: 'from-teal-600 to-emerald-700' },
      { text: '🩴 Jedna tirkizna, jedna crvena. Drugarice, birajte!', img: `${B}grubin-10.webp`, views: '29K', viewsChange: '+68%', revenue: '€4.9K', revenueChange: '+210%', color: 'from-emerald-500 to-green-600' },
      { text: '💚 Teddy kolekcija stigla. Tvoje noge će ti zahvaliti', img: `${B}grubin-11.webp`, views: '44K', viewsChange: '+96%', revenue: '€8.2K', revenueChange: '+340%', color: 'from-green-400 to-teal-500' },
      { text: '👡 Zlatne kopče, crni nokti, savršeno leto. Samo Grubin', img: `${B}grubin-12.webp`, views: '24K', viewsChange: '+55%', revenue: '€3.9K', revenueChange: '+170%', color: 'from-teal-400 to-green-500' },
      { text: '🖤 Doktori ih nose. Kuvari ih nose. Vi ih zaslužujete', img: `${B}grubin-13.webp`, views: '21K', viewsChange: '+48%', revenue: '€3.5K', revenueChange: '+150%', color: 'from-emerald-600 to-teal-600' },
      { text: '🎨 Roze, zelena ili bež? Isti kvalitet, tvoj izbor', img: `${B}grubin-14.webp`, views: '31K', viewsChange: '+72%', revenue: '€5.1K', revenueChange: '+230%', color: 'from-green-500 to-cyan-500' },
      { text: '🌸 Lekari kažu: anatomski đon menja sve. Mi kažemo: i izgleda dobro', img: `${B}grubin-15.webp`, views: '27K', viewsChange: '+63%', revenue: '€4.6K', revenueChange: '+200%', color: 'from-emerald-400 to-cyan-500' },
      { text: '🏃‍♀️ Stani. Udahni. Obuj Grubin. Nastavi dalje', img: `${B}grubin-16.webp`, views: '36K', viewsChange: '+81%', revenue: '€6.1K', revenueChange: '+265%', color: 'from-teal-500 to-emerald-600' },
      { text: '🐄 11.000+ prodatih papuča. Ova je za tebe', img: `${B}grubin-17.webp`, views: '22K', viewsChange: '+50%', revenue: '€3.7K', revenueChange: '+160%', color: 'from-green-400 to-emerald-500' },
      { text: '🐆 Leopard print + teddy krzno = zimski must-have 🔥', img: `${B}grubin-18.webp`, views: '30K', viewsChange: '+70%', revenue: '€5.0K', revenueChange: '+225%', color: 'from-amber-500 to-emerald-500' },
    ],
  },
}

/* ─── V-shape offsets ── */
const vPattern = [0, 35, 60, 35, 0]
const VISIBLE = 5
const CARD_W = 220

/* ─── Circular modulo ── */
const mod = (n, m) => ((n % m) + m) % m

/* ─── Get 5 visible items from circular array ── */
function getVisible(arr, offset) {
  return Array.from({ length: VISIBLE }, (_, i) => {
    const idx = mod(offset + i, arr.length)
    return { ad: arr[idx], key: idx }
  })
}

/* ─── Ad Card ── */
function AdCard({ ad, brandName }) {
  return (
    <div className="bg-tile rounded-[14px] overflow-hidden" style={{ width: CARD_W }}>
      <div className="px-3.5 pt-3.5 pb-2">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-1.5">
            <span className="text-[9px] text-ink-5">Sponsored</span>
            <span className="text-[11px] text-ink-3 font-medium">{brandName}</span>
          </div>
          <span className="w-1 h-1 rounded-full bg-ink-4" />
        </div>
        {/* Fixed 2-line clamp with hard height — all cards identical */}
        <p
          className="text-[11px] text-ink-3 leading-[1.4] mb-2.5"
          style={{
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 2,
            overflow: 'hidden',
            height: 31,
          }}
        >
          {ad.text}
        </p>
      </div>

      {/* Media block — real image or gradient fallback */}
      {ad.img ? (
        <div className="mx-3 rounded-[10px] overflow-hidden mb-2.5" style={{ aspectRatio: '4 / 5' }}>
          <img src={ad.img} alt="" className="w-full h-full object-cover" loading="lazy" />
        </div>
      ) : (
        <div
          className={`mx-3 rounded-[10px] bg-gradient-to-br ${ad.color} flex items-center justify-center mb-2.5 opacity-80`}
          style={{ aspectRatio: '4 / 5' }}
        >
          <div className="w-10 h-10 rounded-full bg-tint" />
        </div>
      )}

      <div className="px-3.5 pb-3.5 flex gap-3">
        <div className="min-w-[86px]">
          <div className="text-[8px] text-ink-5 uppercase tracking-wider">Views</div>
          <div className="flex items-center gap-1 whitespace-nowrap">
            <span className="text-[14px] text-ink font-semibold tabular-nums">{ad.views}</span>
            <span className="text-[10px] text-ink-4">{ad.viewsChange}</span>
          </div>
        </div>
        <div className="min-w-[86px]">
          <div className="text-[8px] text-ink-5 uppercase tracking-wider">Revenue</div>
          <div className="flex items-center gap-1 whitespace-nowrap">
            <span className="text-[14px] text-ink font-semibold tabular-nums">{ad.revenue}</span>
            <span className="text-[10px] text-ink-4">{ad.revenueChange}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ─── Arrow Button ── */
function ArrowBtn({ direction, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`absolute top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-tint border border-edge-2 flex items-center justify-center transition-colors cursor-pointer hover:bg-tint-2 hover:border-edge active:bg-tint-2 ${
        direction === 'left' ? 'left-3' : 'right-3'
      }`}
      aria-label={direction === 'left' ? 'Previous' : 'Next'}
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        {direction === 'left' ? <path d="M15 18l-6-6 6-6" /> : <path d="M9 18l6-6-6-6" />}
      </svg>
    </button>
  )
}

/* ─── Card Slot — overlapping crossfade (grid stack = no flash) ── */
function CardSlot({ ad, brandName, direction, delay }) {
  return (
    <div style={{ display: 'grid', width: CARD_W }}>
      <AnimatePresence initial={false}>
        <motion.div
          key={ad.text}
          style={{ gridArea: '1 / 1' }}
          initial={{ opacity: 0, x: direction * 60 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -direction * 60 }}
          transition={{
            duration: 0.75,
            ease: [0.4, 0, 0.2, 1],
            delay,
          }}
        >
          <AdCard ad={ad} brandName={brandName} />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

/* ─── V-Shape with counter-rotating rows ── */
function VShapeCards({ ads, brandName }) {
  const [step, setStep] = useState(0)
  const [dir, setDir] = useState(1)

  /* Split ads into top row and bottom row */
  const half = Math.ceil(ads.length / 2)
  const topAds = useMemo(() => ads.slice(0, half), [ads, half])
  const bottomAds = useMemo(() => ads.slice(half), [ads, half])

  /* Reset on brand change */
  useEffect(() => { setStep(0); setDir(1) }, [ads])

  /* Top row moves with step, bottom row moves opposite */
  const topVisible = getVisible(topAds, step)
  const bottomVisible = getVisible(bottomAds, -step)

  const goRight = () => { setDir(1); setStep(s => s + 1) }
  const goLeft = () => { setDir(-1); setStep(s => s - 1) }

  /* Stagger: center first, edges last */
  const stagger = [0.15, 0.08, 0, 0.08, 0.15]

  return (
    <div className="relative">
      <ArrowBtn direction="left" onClick={goLeft} />
      <ArrowBtn direction="right" onClick={goRight} />

      <div className="flex justify-center gap-4 overflow-hidden px-4" style={{ minHeight: 540 }}>
        {Array.from({ length: VISIBLE }, (_, pos) => (
          <div
            key={pos}
            className="flex-shrink-0 flex flex-col gap-4"
            style={{ transform: `translateY(${vPattern[pos]}px)` }}
          >
            {/* Top card — slides in click direction */}
            <CardSlot
              ad={topVisible[pos].ad}
              brandName={brandName}
              direction={dir}
              delay={stagger[pos]}
            />
            {/* Bottom card — slides in OPPOSITE direction */}
            <CardSlot
              ad={bottomVisible[pos].ad}
              brandName={brandName}
              direction={-dir}
              delay={stagger[pos]}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

/* ─── Main Component ── */
export default function AppPreview() {
  /* Display order for brand tabs */
  const brandOrder = ['grubin', 'truffles', 'medifizio', 'niwa', 'focus']
  const [active, setActive] = useState('truffles')
  const brand = brands[active]

  return (
    <div className="relative mx-auto max-w-[1164px] mt-10">
      {/* Brand selector — horizontal scrollable strip */}
      <div className="relative mb-5">
        <div
          className="flex gap-6 md:gap-8 overflow-x-auto px-6 pb-0.5 -mx-4 md:mx-0 md:justify-center"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
        >
          {brandOrder.map(key => [key, brands[key]]).map(([key, b]) => (
            <button
              type="button"
              key={key}
              onClick={() => setActive(key)}
              className={`relative text-[13px] md:text-[14px] font-medium pb-2.5 whitespace-nowrap flex-shrink-0 transition-colors duration-200 cursor-pointer ${
                active === key ? 'text-ink' : 'text-ink-4 hover:text-ink-3'
              }`}
            >
              {b.name}
              <span
                className={`absolute bottom-0 left-0 right-0 h-[2px] bg-ink rounded-full transition-transform duration-300 origin-center ${
                  active === key ? 'scale-x-100' : 'scale-x-0'
                }`}
              />
            </button>
          ))}
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-tint" />
      </div>

      {/* Card container */}
      <div className="theme-dark bg-panel rounded-[16px] border border-edge-2 pt-8 pb-4 overflow-hidden relative" style={{ height: 680 }}>
        <h3 className="text-[28px] md:text-[32px] font-light text-ink text-center mb-6 tracking-wide whitespace-nowrap">{brand.name}</h3>

        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <VShapeCards ads={brand.ads} brandName={brand.name} />
          </motion.div>
        </AnimatePresence>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-panel to-transparent pointer-events-none z-10" />
      </div>
    </div>
  )
}
