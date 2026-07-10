import { Metadata } from 'next';

import JsonLdLocation from '@/components/JsonLdLocation';
import { CheckCircle2, Clock, Shield, Star, ArrowRight, Zap, Users } from 'lucide-react';
import Hero from '@/components/Hero';
import RelatedLocations from '@/components/seo/RelatedLocations';
import RelatedRoutes from '@/components/seo/RelatedRoutes';
import MicroSemanticFAQ from '@/components/seo/MicroSemanticFAQ';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import RouteFleetSection from '@/components/RouteFleetSection';

export const metadata: Metadata = {
    title: 'تاكسي الرياض إلى دبي | نقل VIP بجمس من ٣٬٥٠٠ ريال | Taxi Service KSA',
    description: 'احجز تاكسي VIP خاص من الرياض إلى دبي. جمس يوكن / شيفروليه تاهو بسعر يبدأ من ٣٥٠٠ ريال. خدمة من الباب إلى الباب، مع مساعدة كاملة عند الحدود. الحجز متاح عبر واتساب على مدار الساعة.',
    keywords: ['تاكسي الرياض إلى دبي', 'نقل الرياض دبي', 'سعر الرياض دبي ٣٥٠٠ ريال', 'تاكسي عبور الحدود السعودية', 'نقل VIP الرياض دبي جمس'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/ar/routes/riyadh-dubai/',
        languages: {
            'en': 'https://taxiserviceksa.com/routes/riyadh-dubai/',
            'ar': 'https://taxiserviceksa.com/ar/routes/riyadh-dubai/',
            'x-default': 'https://taxiserviceksa.com/routes/riyadh-dubai/',
        },
    },
    openGraph: {
        title: 'تاكسي الرياض إلى دبي | نقل VIP بجمس ٣٬٥٠٠ ريال',
        description: 'احجز تاكسي VIP خاص من الرياض إلى دبي. جمس يوكن / شيفروليه تاهو بسعر يبدأ من ٣٥٠٠ ريال. خدمة من الباب إلى الباب، مع مساعدة كاملة عند الحدود.',
        url: 'https://taxiserviceksa.com/ar/routes/riyadh-dubai/',
        locale: 'ar_SA',
        type: 'website',
    },
};

const WA_LINK = "https://wa.me/966569487569?text=Hello%2C%20I%20want%20to%20book%20a%20VIP%20taxi%20from%20Riyadh%20to%20Dubai.%20Please%20share%20availability.";

export default function RiyadhDubaiRoutePageArabic() {
    const images = [
        '/hero-slide-3.webp',
        '/hero-slide-2.webp',
        '/jeddah-airport.webp'
    ];

    return (
        <div className="bg-gray-50 min-h-screen rtl" dir="rtl">
            <JsonLdLocation
                cityName="Riyadh to Dubai"
                description="Professional VIP private car service for Riyadh to Dubai. Reliable 24/7 door-to-door transfers with luxury vehicles and professional chauffeurs."
                services={[
                    { name: 'Riyadh to Dubai Taxi', description: 'Premium private GMC/Tahoe transfer from 3500 SAR.' },
                    { name: 'Executive Chauffeur', description: 'Professional drivers for business and leisure travel.' },
                    { name: 'Family SUV Service', description: 'Spacious vehicles for groups up to 7 passengers.' },
                    { name: 'Border Crossing Assistance', description: 'Driver handles all border paperwork and vehicle insurance.' }
                ]}
                image="https://taxiserviceksa.com/hero-slide-1.webp"
            />

            {/* ─── HERO ─── */}
            <Hero
                images={images}
                h1Text="تاكسي الرياض إلى دبي"
                title={
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider uppercase px-3 py-2 rounded-lg inline-block leading-snug text-xs sm:text-sm">
                        نقل VIP عبر حدود دول الخليج
                    </span>
                }
                subtitle="الرياض إلى دبي — سيارة دفع رباعي خاصة من ٣٬٥٠٠ ريال"
                location="من الباب إلى الباب · شامل المساعدة عند الحدود"
            >
                <div className="w-full max-w-xl mx-auto px-4 mt-6 flex flex-col items-center gap-4">

                    {/* Price Badges */}
                    <div className="flex flex-wrap items-center gap-2 justify-center">
                        <div className="bg-emerald-500 text-white font-black px-5 py-2.5 rounded-full shadow-lg text-base sm:text-lg tracking-tight whitespace-nowrap">
                            جمس — ٣٬٥٠٠ ريال
                        </div>
                        <div className="bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold px-4 py-2.5 rounded-full text-xs sm:text-sm whitespace-nowrap">
                            سيدان من ٢٬٠٠٠ ريال
                        </div>
                    </div>

                    {/* Single CTA — full width on mobile */}
                    <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="w-full">
                        <button className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5c] text-white font-black text-base sm:text-lg px-6 py-4 sm:py-5 rounded-2xl shadow-2xl transition-all active:scale-95">
                            <WhatsAppIcon className="w-5 h-5 fill-current shrink-0" />
                            <span>احجز عبر واتساب — رد فوري</span>
                        </button>
                    </a>

                    {/* Trust micro-line — 2 cols on mobile */}
                    <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-x-4 gap-y-1 text-white/90 text-xs sm:text-sm justify-center w-full">
                        <span className="flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> سعر ثابت</span>
                        <span className="flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> بدون رسوم خفية</span>
                        <span className="flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> متاح ٢٤/٧</span>
                        <span className="flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> +٢٥٬٠٠٠ راكب</span>
                    </div>
                </div>
            </Hero>

            {/* ─── URGENCY BANNER ─── */}
            <div className="bg-amber-500 py-3 px-4">
                <div className="max-w-5xl mx-auto flex items-center justify-center gap-2 text-white text-xs sm:text-sm font-semibold text-center">
                    <Zap className="w-4 h-4 shrink-0" />
                    <span>🔥 مقاعد نهاية الأسبوع محدودة — احجز قبل ٢٤ ساعة على الأقل لضمان سيارتك من نوع جمس</span>
                </div>
            </div>

            {/* ─── PRICING SECTION ─── */}
            <section className="bg-white py-12 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-8">
                        <span className="text-emerald-700 font-bold uppercase tracking-wider text-xs">أسعار شفافة</span>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-1">أسعار تاكسي الرياض إلى دبي</h2>
                        <p className="text-gray-500 mt-2 text-xs sm:text-sm">لكل مركبة · شامل الوقود وتأمين الحدود والرسوم · بدون رسوم مفاجئة</p>
                    </div>

                    {/* Pricing cards — stack on mobile, 3-col on sm+ */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

                        {/* Sedan */}
                        <div className="border border-gray-200 rounded-2xl p-5 bg-gray-50 flex flex-col gap-3">
                            <div className="flex sm:flex-col gap-3 sm:gap-0 items-center sm:items-start">
                                <div className="flex-1">
                                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">اقتصادية</p>
                                    <h3 className="text-lg font-bold text-gray-900">سيدان</h3>
                                    <p className="text-xs text-gray-500">كامري / سوناتا · حتى ٤ ركاب</p>
                                </div>
                                <p className="text-3xl font-black text-gray-900 sm:mt-3">٢٬٠٠٠ <span className="text-sm font-semibold text-gray-500">ريال</span></p>
                            </div>
                            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 rounded-xl text-sm transition-colors">
                                <WhatsAppIcon className="w-4 h-4 fill-current" /> احجز سيدان
                            </a>
                        </div>

                        {/* Fortuner */}
                        <div className="border border-gray-200 rounded-2xl p-5 bg-gray-50 flex flex-col gap-3">
                            <div className="flex sm:flex-col gap-3 sm:gap-0 items-center sm:items-start">
                                <div className="flex-1">
                                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">دفع رباعي قياسي</p>
                                    <h3 className="text-lg font-bold text-gray-900">تويوتا فورتشنر</h3>
                                    <p className="text-xs text-gray-500">سيارة دفع رباعي متوسطة · حتى ٦ ركاب</p>
                                </div>
                                <p className="text-3xl font-black text-gray-900 sm:mt-3">٢٬٨٠٠ <span className="text-sm font-semibold text-gray-500">ريال</span></p>
                            </div>
                            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 rounded-xl text-sm transition-colors">
                                <WhatsAppIcon className="w-4 h-4 fill-current" /> احجز فورتشنر
                            </a>
                        </div>

                        {/* GMC — Hero Card */}
                        <div className="border-2 border-emerald-500 rounded-2xl p-5 bg-emerald-50 flex flex-col gap-3 relative overflow-hidden shadow-lg">
                            <div className="absolute top-0 right-0 bg-emerald-500 text-white text-xs font-black px-3 py-1.5 rounded-bl-xl">الأكثر طلباً</div>
                            <div className="flex sm:flex-col gap-3 sm:gap-0 items-center sm:items-start">
                                <div className="flex-1">
                                    <p className="text-xs font-bold uppercase tracking-wider text-emerald-700">VIP فاخرة</p>
                                    <h3 className="text-lg font-bold text-gray-900">جمس / تاهو</h3>
                                    <p className="text-xs text-gray-600">دفع رباعي كامل الحجم · حتى ٧ ركاب</p>
                                </div>
                                <p className="text-4xl font-black text-emerald-700 sm:mt-3">٣٬٥٠٠ <span className="text-sm font-semibold text-gray-500">ريال</span></p>
                            </div>
                            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-black py-3.5 rounded-xl text-sm transition-colors shadow-md">
                                <WhatsAppIcon className="w-4 h-4 fill-current" /> احجز جمس الآن
                            </a>
                        </div>
                    </div>
                    <p className="text-center text-xs text-gray-400 mt-4">* السعر لكل مركبة. جميع الضرائب والرسوم مشمولة.</p>
                </div>
            </section>

            {/* ─── TRUST SIGNALS ─── */}
            <section className="bg-gray-900 text-white py-10 px-4">
                <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
                    <div className="flex flex-col items-center gap-2">
                        <Star className="w-6 h-6 text-amber-400 fill-amber-400" />
                        <p className="text-xl sm:text-2xl font-black">٤.٩★</p>
                        <p className="text-xs text-gray-400">متوسط التقييم</p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <Users className="w-6 h-6 text-emerald-400" />
                        <p className="text-xl sm:text-2xl font-black">+٢٥٬٠٠٠</p>
                        <p className="text-xs text-gray-400">راكب تم خدمته</p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <Shield className="w-6 h-6 text-blue-400" />
                        <p className="text-xl sm:text-2xl font-black">١٠٠٪</p>
                        <p className="text-xs text-gray-400">تأمين عند الحدود</p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <Clock className="w-6 h-6 text-purple-400" />
                        <p className="text-xl sm:text-2xl font-black">٢٤/٧</p>
                        <p className="text-xs text-gray-400">متاح دائماً</p>
                    </div>
                </div>
            </section>

            {/* ─── JOURNEY DETAILS ─── */}
            <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    <div>
                        <span className="text-emerald-700 font-bold uppercase tracking-wider text-xs">معلومات المسار</span>
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-1 mb-5">من الرياض إلى دبي: ماذا تتوقع</h2>
                        <ul className="space-y-4">
                            {[
                                { title: "نحو ١٠٠٠ كم · ١٠-١٢ ساعة", desc: "الرياض ← حدود البطحاء ← أبوظبي ← دبي. توقفات للصلاة والطعام والراحة عند الطلب." },
                                { title: "الحدود تُدار من قبل السائق", desc: "تأمين عبور المركبة، وتحضير الأوراق، وإجراءات الحدود الخليجية — كلها يتولاها سائقك الخاص." },
                                { title: "من الباب إلى الباب. بدون تنقلات.", desc: "استلام من منزلك/فندقك في الرياض، وتوصيل مباشر إلى وجهتك في دبي." },
                                { title: "سائقون ثنائيو اللغة", desc: "يتحدثون العربية والإنجليزية بطلاقة. محترفون، بزي رسمي، وذوو خبرة في هذا المسار بالتحديد." },
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
                                    <div>
                                        <p className="font-semibold text-gray-900 text-sm sm:text-base">{item.title}</p>
                                        <p className="text-xs sm:text-sm text-gray-500 mt-0.5">{item.desc}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Quick CTA card */}
                    <div className="bg-gray-900 text-white rounded-3xl p-6 sm:p-8 flex flex-col gap-5">
                        <div>
                            <h3 className="text-lg sm:text-xl font-bold mb-1">هل أنت مستعد للحجز؟</h3>
                            <p className="text-gray-400 text-sm">راسلنا عبر واتساب. احصل على التأكيد خلال أقل من ٥ دقائق.</p>
                        </div>
                        <div className="space-y-2 text-sm text-gray-300">
                            <p className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> شارك عنوان الاستلام وتاريخ السفر</p>
                            <p className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> اختر مركبتك</p>
                            <p className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> أكّد واسترخِ</p>
                        </div>
                        <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
                            <button className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5c] text-white font-black text-base py-4 rounded-2xl transition-all active:scale-95 shadow-lg">
                                <WhatsAppIcon className="w-5 h-5 fill-current shrink-0" />
                                تواصل معنا عبر واتساب
                                <ArrowRight className="w-4 h-4 shrink-0 rotate-180" />
                            </button>
                        </a>
                        <p className="text-center text-xs text-gray-500">متوسط وقت الرد: أقل من دقيقتين</p>
                    </div>
                </div>
            </section>

            {/* ─── VIDEO SECTION ─── */}
            <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 border-t border-gray-100">
                <div className="max-w-3xl mx-auto text-center">
                    <span className="text-emerald-700 font-bold uppercase tracking-wider text-xs">رحلة عميل حقيقية</span>
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-1 mb-2">شاهد: الرياض ← دبي بسيارتنا الفاخرة جمس</h2>
                    <p className="text-gray-500 text-sm mb-6">لقطات حقيقية من الطريق — شاهد الراحة والمساحة والاحترافية بنفسك.</p>

                    {/* aspect-video keeps 16:9 on all screens */}
                    <div className="w-full rounded-2xl overflow-hidden shadow-2xl border border-gray-200 aspect-video mb-6">
                        <iframe
                            src="https://www.youtube.com/embed/eu4SNAISbNk"
                            width="100%"
                            height="100%"
                            frameBorder={0}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            title="تاكسي الرياض إلى دبي VIP بسيارة جمس – فيديو رحلة حقيقية"
                            className="w-full h-full"
                        />
                    </div>

                    {/* CTA below video — stacks on mobile */}
                    <div className="bg-white border border-gray-200 rounded-2xl p-5 flex flex-col sm:flex-row items-center gap-4 shadow-sm text-right">
                        <div className="flex-1">
                            <p className="font-bold text-gray-900 text-sm sm:text-base">أُعجبت؟ احجز التجربة نفسها.</p>
                            <p className="text-xs sm:text-sm text-gray-500">جمس يوكن / شيفروليه تاهو · ٣٬٥٠٠ ريال · شامل كل شيء</p>
                        </div>
                        <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto shrink-0">
                            <button className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5c] text-white font-black px-6 py-3.5 rounded-xl text-sm transition-all active:scale-95 shadow-md whitespace-nowrap">
                                <WhatsAppIcon className="w-4 h-4 fill-current" />
                                احجز الآن عبر واتساب
                            </button>
                        </a>
                    </div>
                </div>
            </section>

            {/* ─── FAQ ─── */}
            <section className="bg-white py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-8">
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-900">الأسئلة الشائعة</h2>
                        <p className="text-gray-500 text-sm mt-1">كل ما تحتاج معرفته قبل الحجز</p>
                    </div>
                    <MicroSemanticFAQ
                        isRtl={true}
                        labels={{
                            title: 'إجابات الخبراء: الرياض إلى دبي',
                            subtitle: 'حقائق مباشرة تليها رؤى من زوايا مختلفة',
                            quickAnswer: 'إجابة سريعة',
                            perspectives: 'وجهات نظر متعددة',
                            readMore: 'عرض التفاصيل الكاملة',
                            readLess: 'عرض أقل'
                        }}
                        faqs={[
                            {
                                question: "كم تستغرق رحلة التاكسي من الرياض إلى دبي؟",
                                shortAnswer: "١٠-١٢ ساعة",
                                detailedAnswer: "إجمالي وقت القيادة من ١٠ إلى ١٢ ساعة حسب الازدحام عند الحدود. عادة ما يستغرق عبور حدود البطحاء من ٣٠ دقيقة إلى ساعتين في عطلات نهاية الأسبوع والإجازات.",
                                perspectives: []
                            },
                            {
                                question: "ما سعر تاكسي الرياض إلى دبي؟",
                                shortAnswer: "من ٢٬٠٠٠ ريال (سيدان) إلى ٣٬٥٠٠ ريال (جمس)",
                                detailedAnswer: "سيدان من ٢٬٠٠٠ ريال، تويوتا فورتشنر ٢٬٨٠٠ ريال، جمس يوكن / شيفروليه تاهو ٣٬٥٠٠ ريال. جميع الأسعار لكل مركبة، وتشمل الوقود والرسوم وتأمين عبور الحدود.",
                                perspectives: []
                            },
                            {
                                question: "هل تأمين المركبة عند الحدود مشمول؟",
                                shortAnswer: "نعم، مشمول بالكامل",
                                detailedAnswer: "نعم — تأمين عبور المركبة والرسوم والأوراق كلها مشمولة في السعر المُعلن. بدون رسوم خفية.",
                                perspectives: []
                            },
                            {
                                question: "ما المستندات التي أحتاجها لعبور الحدود؟",
                                shortAnswer: "جواز سفر ساري + تأشيرة/هوية خليجية",
                                detailedAnswer: "تحتاج إلى جواز سفر ساري المفعول والتأشيرة أو الإقامة الخليجية المناسبة. المقيمون في السعودية يحتاجون إلى إقامة سارية وتأشيرة خروج وعودة. يساعد السائق في إجراءات المركبة، لكن مستندات الركاب هي مسؤوليتهم.",
                                perspectives: []
                            },
                            {
                                question: "هل يمكنني الدفع بالريال السعودي أو الدرهم الإماراتي؟",
                                shortAnswer: "نعم — نقبل الريال والدرهم والدولار واليورو",
                                detailedAnswer: "نقبل الريال السعودي، والدرهم الإماراتي، والدولار الأمريكي، واليورو، والجنيه الإسترليني، والدينار الكويتي. يتم الدفع مباشرة للسائق نقداً أو عبر وسيلة دفع إلكترونية متفق عليها.",
                                perspectives: []
                            }
                        ]}
                    />

                    {/* FAQ bottom CTA */}
                    <div className="mt-8 text-center">
                        <p className="text-gray-500 text-sm mb-4">لا تزال لديك أسئلة؟ يرد فريقنا خلال أقل من دقيقتين.</p>
                        <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
                            <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5c] text-white font-black px-8 py-4 rounded-2xl transition-all active:scale-95 shadow-lg">
                                <WhatsAppIcon className="w-5 h-5 fill-current" />
                                تحدث معنا عبر واتساب
                            </button>
                        </a>
                    </div>
                </div>
            </section>

            {/* ─── RELATED LOCATIONS (bottom) ─── */}
            <RouteFleetSection />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-16">
                <RelatedLocations
                    currentCity="Riyadh"
                    isRtl={true}
                    labels={{
                        title: 'استكشف الوجهات القريبة من الرياض',
                        subtitle: 'اتصال سلس عبر أنحاء السعودية',
                        viewRoutes: 'عرض المسارات'
                    }}
                />
                <RelatedRoutes originSlug="riyadh" currentSlug="riyadh-dubai" title="مسارات أخرى شائعة" />
            </div>
        </div>
    );
}
