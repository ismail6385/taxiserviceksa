import Link from 'next/link';
import { Plane, Info } from 'lucide-react';
import WhatsAppIcon from '@/components/WhatsAppIcon';

// Urdu and Arabic versions of /riyadh-alternative-airports/. Fares and distances must match the English hub.
type Lang = 'ur' | 'ar';

const AIRPORTS = [
    { code: 'DMM', href: '/routes/riyadh-to-dammam-airport/', km: '400', fare: { ur: 'سیڈان 1,000 ریال · ایس یو وی 1,500 ریال', ar: 'سيدان 1,000 ريال · دفع رباعي 1,500 ريال' }, domestic: true },
    { code: 'BAH', href: '/routes/riyadh-bahrain/', km: '430–480', fare: { ur: 'ایس یو وی 2,000 ریال', ar: 'دفع رباعي 2,000 ريال' }, domestic: false },
    { code: 'DOH', href: '/routes/riyadh-doha/', km: '600', fare: { ur: 'جی ایم سی 3,000 ریال', ar: 'جمس 3,000 ريال' }, domestic: false },
    { code: 'JED', href: '/routes/riyadh-to-jeddah-airport/', km: '950–1,000', fare: { ur: 'سیڈان 1,000 · اسٹاریا 1,600 · جی ایم سی 2,000 ریال', ar: 'سيدان 1,000 · ستاريا 1,600 · جمس 2,000 ريال' }, domestic: true },
    { code: 'DXB', href: '/routes/riyadh-dubai/', km: '990–1,000', fare: { ur: 'سیڈان 3,500 · فورچونر 3,800 · جی ایم سی 4,500 ریال', ar: 'سيدان 3,500 · فورتشنر 3,800 · جمس 4,500 ريال' }, domestic: false },
] as const;

const T = {
    ur: {
        badge: 'اپڈیٹ: اکتوبر 2026',
        h1: 'ریاض کی فلائٹ کینسل؟ دوسرے ایئرپورٹ تک پرائیویٹ گاڑی',
        intro: 'ریاض میں اپنے گھر یا ہوٹل سے دمام، بحرین، دوحہ، جدہ یا دبئی ایئرپورٹ تک پرائیویٹ گاڑی اور ڈرائیور۔ فکسڈ کرایہ، پوری فیملی کے لیے ایک گاڑی، اور آپ کی نئی فلائٹ کے حساب سے پک اپ کا وقت۔',
        wa: 'واٹس ایپ پر نئی فلائٹ بھیجیں',
        waText: 'السلام علیکم، میری ریاض سے فلائٹ کینسل ہو گئی ہے۔ مجھے ریاض سے اس ایئرپورٹ تک گاڑی چاہیے: ',
        statusH: 'ریاض ایئرپورٹ پر کیا ہو رہا ہے',
        status: 'اکتوبر 2026 کے شروع میں سعودی عرب پر حملوں کے بعد کنگ خالد انٹرنیشنل ایئرپورٹ (RUH) پر فلائٹس کچھ وقت کے لیے رکیں اور بہت سی فلائٹس لیٹ یا کینسل ہوئیں۔ ایئر انڈیا، انڈیگو اور کچھ دوسری ایئرلائنز نے بھی ریاض کی فلائٹس عارضی طور پر روکیں۔ ایئرپورٹ مستقل بند نہیں ہے اور صورتحال روز بدل رہی ہے۔',
        statusNote: 'کسی دوسرے ایئرپورٹ جانے سے پہلے اپنی فلائٹ ایئرلائن سے ضرور کنفرم کریں۔ ہم ٹرانسپورٹ کمپنی ہیں، فلائٹ یا سیکیورٹی کے بارے میں مشورہ نہیں دیتے۔',
        compareH: 'ریاض سے گاڑی کے ذریعے کون سے ایئرپورٹ جا سکتے ہیں',
        compareNote: 'کرایہ ایک طرف کا، پوری گاڑی کا ہے، فی سواری نہیں۔ فاصلہ تقریباً ہے۔',
        km: 'کلومیٹر',
        names: { DMM: 'دمام', BAH: 'بحرین', DOH: 'دوحہ (قطر)', JED: 'جدہ', DXB: 'دبئی' },
        noVisa: 'سعودی عرب کے اندر، ویزا کی ضرورت نہیں',
        border: 'بین الاقوامی بارڈر، ہر مسافر کو اس ملک کا ویزا یا انٹری پرمٹ چاہیے',
        details: 'تفصیل اور بکنگ',
        docsH: 'سعودی عرب میں رہنے والوں کے لیے ضروری کاغذات',
        docs: ['درست اقامہ', 'واپس آنا ہے تو ہر فرد کا ایگزٹ ری انٹری ویزا', 'ہمیشہ کے لیے جا رہے ہیں تو فائنل ایگزٹ سفر سے پہلے جاری ہو', 'بحرین، قطر یا امارات کے لیے اس ملک کا ویزا جہاں ضروری ہو', 'ہر مسافر کا اپنا پاسپورٹ، بچوں سمیت'],
        tipH: 'انڈیا یا پاکستان جانا ہے؟',
        tip: 'زیادہ تر لوگوں کے لیے دمام سب سے آسان ہے: تقریباً 4 گھنٹے کا سفر، کوئی بارڈر نہیں، اور عام طور پر یہاں سے انڈیا اور پاکستان کی ڈائریکٹ فلائٹس ہوتی ہیں۔ پہلے ایئرلائن سے پوچھیں کہ کیا وہ آپ کی سیٹ دمام یا جدہ سے کر سکتی ہے۔',
        tipLink: 'انگریزی میں مکمل گائیڈ پڑھیں',
        faqH: 'اکثر پوچھے جانے والے سوالات',
        faqs: [
            { q: 'ریاض سے دمام ایئرپورٹ کا کرایہ کتنا ہے؟', a: 'سیڈان 1,000 ریال اور ایس یو وی 1,500 ریال، ایک طرف، پوری گاڑی کا۔' },
            { q: 'ریاض سے دمام ایئرپورٹ کتنی دیر کا سفر ہے؟', a: 'تقریباً 400 کلومیٹر، لگ بھگ 4 گھنٹے کی ڈرائیو۔ انٹرنیشنل فلائٹ کے لیے روانگی سے تقریباً 8 گھنٹے پہلے ریاض سے نکلیں۔' },
            { q: 'کیا دبئی یا دوحہ کے لیے ویزا چاہیے؟', a: 'یہ آپ کی قومیت اور اقامہ پر منحصر ہے۔ بہت سے پاکستانی اور انڈین پاسپورٹ والوں کو ویزا یا انٹری پرمٹ چاہیے ہوتا ہے۔ سفر سے پہلے سرکاری ویب سائٹ پر چیک کریں۔' },
            { q: 'زیادہ سامان ہے، کون سی گاڑی لوں؟', a: 'سیڈان میں تقریباً 2 بڑے سوٹ کیس آتے ہیں، ایس یو وی میں 4 سے 5۔ بکنگ کے وقت سامان کی تعداد بتائیں۔' },
            { q: 'کیا ڈرائیور ویزا یا امیگریشن میں مدد کر سکتا ہے؟', a: 'ڈرائیور گاڑی کے کاغذات اور بارڈر پر گاڑی کا کام سنبھالتا ہے۔ ہر مسافر اپنے پاسپورٹ، ویزا اور امیگریشن کا خود ذمہ دار ہے۔' },
        ],
        ctaH: 'اپنی نئی فلائٹ بتائیں',
        cta: 'ایئرپورٹ، فلائٹ کا وقت، مسافر اور سامان بھیجیں۔ ہم گاڑی، کرایہ اور پک اپ کا وقت بتائیں گے۔',
        english: 'English',
    },
    ar: {
        badge: 'تحديث: أكتوبر 2026',
        h1: 'رحلتك من الرياض أُلغيت؟ سيارة خاصة إلى مطار آخر',
        intro: 'سيارة خاصة مع سائق من بابك في الرياض إلى مطار الدمام أو البحرين أو الدوحة أو جدة أو دبي. سعر ثابت، سيارة واحدة لعائلتك كاملة، وموعد الانطلاق يُحدَّد حسب رحلتك الجديدة.',
        wa: 'أرسل رحلتك الجديدة عبر واتساب',
        waText: 'السلام عليكم، رحلتي من الرياض أُلغيت. أحتاج سيارة من الرياض إلى مطار: ',
        statusH: 'ماذا يحدث في مطار الرياض',
        status: 'في بداية أكتوبر 2026 توقفت الرحلات في مطار الملك خالد الدولي (RUH) لفترات بعد هجمات على المملكة، وتأخر أو أُلغي عدد كبير من الرحلات، كما علّقت عدة شركات طيران أجنبية رحلاتها إلى الرياض مؤقتاً. المطار لم يُغلق بشكل دائم والوضع يتغير يومياً.',
        statusNote: 'تأكد من رحلتك مع شركة الطيران قبل التوجه إلى مطار آخر. نحن شركة نقل ولا نقدم استشارات حول الرحلات أو الأمن.',
        compareH: 'المطارات التي يمكن الوصول إليها بالسيارة من الرياض',
        compareNote: 'الأسعار لاتجاه واحد وللسيارة كاملة وليست للراكب. المسافات تقريبية.',
        km: 'كم',
        names: { DMM: 'الدمام', BAH: 'البحرين', DOH: 'الدوحة', JED: 'جدة', DXB: 'دبي' },
        noVisa: 'داخل المملكة، لا حاجة لتأشيرة',
        border: 'منفذ حدودي دولي، يحتاج كل راكب إلى إذن دخول لتلك الدولة',
        details: 'التفاصيل والحجز',
        docsH: 'المستندات المطلوبة للمقيمين في المملكة',
        docs: ['إقامة سارية', 'تأشيرة خروج وعودة لكل فرد إذا كنت ستعود', 'تأشيرة خروج نهائي صادرة قبل السفر إذا كنت مغادراً نهائياً', 'تأشيرة البحرين أو قطر أو الإمارات عند الحاجة', 'جواز سفر لكل راكب بما في ذلك الأطفال'],
        tipH: 'المواطنون الخليجيون',
        tip: 'يمكن لمواطني دول الخليج غالباً التنقل بالهوية الوطنية بين دول المجلس، لكن تحقق من الأنظمة الحالية واحمل جواز السفر أيضاً. الدمام هي الأقرب: حوالي 4 ساعات دون منفذ حدودي.',
        tipLink: 'الدليل الكامل بالإنجليزية',
        faqH: 'الأسئلة الشائعة',
        faqs: [
            { q: 'كم سعر التوصيل من الرياض إلى مطار الدمام؟', a: 'سيدان 1,000 ريال ودفع رباعي 1,500 ريال، لاتجاه واحد وللسيارة كاملة.' },
            { q: 'كم تستغرق الرحلة من الرياض إلى مطار الدمام؟', a: 'حوالي 400 كم وقرابة 4 ساعات قيادة. للرحلات الدولية انطلق من الرياض قبل الإقلاع بحوالي 8 ساعات.' },
            { q: 'كم سعر السيارة من الرياض إلى البحرين؟', a: 'سيارة دفع رباعي خاصة بـ 2,000 ريال لاتجاه واحد، شاملة الوقود ورسوم جسر الملك فهد.' },
            { q: 'كم سعر السيارة من الرياض إلى الدوحة؟', a: 'سيارة جمس خاصة بـ 3,000 ريال لاتجاه واحد حتى 6–7 ركاب.' },
            { q: 'هل يتولى السائق إجراءات الجوازات؟', a: 'يتولى السائق إجراءات السيارة عند المنفذ، أما الجوازات والتأشيرات فهي مسؤولية كل راكب.' },
        ],
        ctaH: 'أخبرنا برحلتك الجديدة',
        cta: 'أرسل المطار وموعد الرحلة وعدد الركاب والحقائب، ونرد عليك بالسيارة والسعر وموعد الانطلاق.',
        english: 'English',
    },
} as const;

export function altAirportsFaqSchema(lang: Lang, url: string) {
    return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        '@id': `${url}#faq`,
        inLanguage: lang,
        mainEntity: T[lang].faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    };
}

export default function AltAirportsLocalized({ lang }: { lang: Lang }) {
    const t = T[lang];
    const wa = `https://wa.me/966575806733?text=${encodeURIComponent(t.waText)}`;
    const font = lang === 'ur' ? 'leading-[2]' : 'leading-relaxed';
    return (
        <div dir="rtl" lang={lang} className={`alt-airports-page bg-[#f5f6f8] ${font}`}>
            <section className="bg-[#111827] text-white px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                <div className="max-w-4xl mx-auto">
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                        <p className="inline-flex items-center gap-2 rounded-full bg-amber-400/15 text-amber-300 px-3 py-1.5 text-xs font-bold">{t.badge}</p>
                        <Link href="/riyadh-alternative-airports/" hrefLang="en" className="text-sm text-white/70 underline">{t.english}</Link>
                    </div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-5 leading-snug">{t.h1}</h1>
                    <p className="text-lg text-white/80 mb-7 max-w-3xl">{t.intro}</p>
                    <a href={wa} target="_blank" rel="nofollow noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-6 py-4 font-bold text-white hover:bg-[#1ebe5c]">
                        <WhatsAppIcon className="w-5 h-5 fill-current" /> {t.wa}
                    </a>
                    <p className="mt-4 text-sm text-white/60" dir="ltr">+966 57 580 6733</p>
                </div>
            </section>

            <section className="px-4 sm:px-6 lg:px-8 py-10">
                <div className="max-w-4xl mx-auto rounded-2xl border border-amber-300 bg-amber-50 p-6">
                    <h2 className="text-xl md:text-2xl font-extrabold text-[#111827] mb-3">{t.statusH}</h2>
                    <p className="text-stone-700 mb-3">{t.status}</p>
                    <p className="flex gap-3 text-sm text-stone-700"><Info className="w-4 h-4 mt-1.5 text-amber-600 shrink-0" aria-hidden="true" />{t.statusNote}</p>
                </div>
            </section>

            <section className="px-4 sm:px-6 lg:px-8 pb-14">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-extrabold text-[#111827] mb-2">{t.compareH}</h2>
                    <p className="text-stone-600 mb-6">{t.compareNote}</p>
                    <ul className="space-y-3">
                        {AIRPORTS.map((a) => (
                            <li key={a.code} className="rounded-2xl bg-white border border-[#111827]/10 p-5">
                                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                                    <h3 className="text-lg font-extrabold text-[#111827] flex items-center gap-2"><Plane className="w-4 h-4 text-[#1d4ed8]" aria-hidden="true" />{t.names[a.code]} <span dir="ltr" className="text-sm text-stone-500">({a.code})</span></h3>
                                    <span className="text-sm text-stone-600"><span dir="ltr">≈ {a.km}</span> {t.km}</span>
                                </div>
                                <p className="font-bold text-[#1d4ed8] mb-1">{a.fare[lang]}</p>
                                <p className="text-sm text-stone-600 mb-3">{a.domestic ? t.noVisa : t.border}</p>
                                <Link href={a.href} className="text-sm font-semibold text-[#1d4ed8] underline">{t.details}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="bg-white px-4 sm:px-6 lg:px-8 py-14">
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="rounded-2xl bg-[#f5f6f8] p-6">
                        <h2 className="text-xl font-extrabold text-[#111827] mb-4">{t.docsH}</h2>
                        <ul className="list-disc ps-5 space-y-1.5 text-stone-700">{t.docs.map((d) => <li key={d}>{d}</li>)}</ul>
                    </div>
                    <div className="rounded-2xl bg-[#111827] text-white p-6">
                        <h2 className="text-xl font-extrabold mb-4">{t.tipH}</h2>
                        <p className="text-white/80 mb-4">{t.tip}</p>
                        <Link href={lang === 'ur' ? '/blog/riyadh-flights-cancelled-india-pakistan/' : '/blog/riyadh-flights-cancelled-travel-by-road/'} hrefLang="en" className="text-amber-300 font-semibold underline">{t.tipLink}</Link>
                    </div>
                </div>
            </section>

            <section className="px-4 sm:px-6 lg:px-8 py-14">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-extrabold text-[#111827] mb-6">{t.faqH}</h2>
                    <div className="space-y-3">
                        {t.faqs.map((f) => (
                            <details key={f.q} className="rounded-2xl bg-white border border-[#111827]/10 p-5">
                                <summary className="cursor-pointer font-bold text-[#111827]">{f.q}</summary>
                                <p className="mt-3 text-stone-700">{f.a}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-white px-4 sm:px-6 lg:px-8 py-14 text-center">
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-extrabold text-[#111827] mb-3">{t.ctaH}</h2>
                    <p className="text-stone-600 mb-6">{t.cta}</p>
                    <a href={wa} target="_blank" rel="nofollow noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-6 py-4 font-bold text-white hover:bg-[#1ebe5c]">
                        <WhatsAppIcon className="w-5 h-5 fill-current" /> {t.wa}
                    </a>
                </div>
            </section>
        </div>
    );
}
