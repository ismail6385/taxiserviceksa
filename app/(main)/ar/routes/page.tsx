import { Metadata } from 'next';
import Link from 'next/link';
import { Navigation, ArrowRight, MapPin, Car, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
    title: 'جميع المسارات | Taxi Service KSA - نقل بأسعار ثابتة بين المدن وعبر الحدود',
    description: 'مسارات النقل بأسعار ثابتة في السعودية: جدة إلى مكة، مكة إلى المدينة، الدمام إلى الرياض، بالإضافة إلى مسارات عبور الحدود إلى البحرين والإمارات وقطر والكويت. خدمة على مدار الساعة.',
    keywords: ['مسارات تاكسي السعودية', 'تاكسي جدة مكة', 'تاكسي مكة المدينة', 'تاكسي بين المدن السعودية', 'تاكسي عبور الحدود الخليج'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/ar/routes/',
        languages: {
            'en': 'https://taxiserviceksa.com/routes/',
            'ar': 'https://taxiserviceksa.com/ar/routes/',
            'x-default': 'https://taxiserviceksa.com/routes/',
        },
    },
};

const domesticRoutes = [
    { slug: 'jeddah-makkah', from: 'جدة', to: 'مكة المكرمة', desc: 'المسار الأكثر طلباً لمعتمري العمرة. نقل مباشر من مطار الملك عبدالعزيز.' },
    { slug: 'makkah-madinah', from: 'مكة المكرمة', to: 'المدينة المنورة', desc: 'أكمل رحلة عمرتك براحة تامة بين الحرمين الشريفين.' },
    { slug: 'madinah-jeddah', from: 'المدينة المنورة', to: 'جدة', desc: 'نقل موثوق للعودة إلى مطار جدة بعد زيارة المدينة.' },
    { slug: 'jeddah-riyadh', from: 'جدة', to: 'الرياض', desc: 'نقل تنفيذي فاخر للمسافات الطويلة بين الساحل والعاصمة.' },
    { slug: 'riyadh-jeddah', from: 'الرياض', to: 'جدة', desc: 'سيارة خاصة من الباب إلى الباب، سائقون محترفون.' },
    { slug: 'riyadh-makkah', from: 'الرياض', to: 'مكة المكرمة', desc: 'نقل مباشر ومريح من العاصمة إلى الحرم المكي.' },
    { slug: 'dammam-jeddah', from: 'الدمام', to: 'جدة', desc: 'رحلة طويلة بين المنطقة الشرقية والساحل الغربي.' },
    { slug: 'dammam-madinah', from: 'الدمام', to: 'المدينة المنورة', desc: 'نقل مباشر من المنطقة الشرقية إلى المسجد النبوي.' },
    { slug: 'dammam-makkah', from: 'الدمام', to: 'مكة المكرمة', desc: 'رحلة عمرة مريحة انطلاقاً من الدمام والخبر.' },
    { slug: 'dammam-riyadh', from: 'الدمام', to: 'الرياض', desc: 'نقل تنفيذي يومي يربط المنطقة الشرقية بالعاصمة.' },
    { slug: 'riyadh-dammam', from: 'الرياض', to: 'الدمام', desc: 'رحلة عمل مريحة من الرياض إلى الدمام والخبر.' },
    { slug: 'jeddah-taif', from: 'جدة', to: 'الطائف', desc: 'رحلة بمناظر جبلية خلابة إلى مدينة الورد.' },
    { slug: 'jeddah-yanbu', from: 'جدة', to: 'ينبع', desc: 'نقل سريع إلى المدينة الصناعية على ساحل البحر الأحمر.' },
];

const gccRoutes = [
    { slug: 'dammam-bahrain', from: 'الدمام', to: 'البحرين', desc: 'عبور جسر الملك فهد مع المساعدة في جميع الإجراءات الورقية.' },
    { slug: 'dammam-doha', from: 'الدمام', to: 'الدوحة', desc: 'نقل خاص عابر للحدود إلى قطر.' },
    { slug: 'dammam-kuwait', from: 'الدمام', to: 'الكويت', desc: 'نقل VIP بين الدول إلى مدينة الكويت.' },
    { slug: 'jeddah-dubai', from: 'جدة', to: 'دبي', desc: 'نقل تنفيذي طويل المسافة من الساحل الغربي إلى الإمارات.' },
    { slug: 'riyadh-dubai', from: 'الرياض', to: 'دبي', desc: 'نقل تنفيذي طويل المسافة من العاصمة إلى الإمارات.' },
];

function RouteCard({ href, from, to, desc }: { href: string; from: string; to: string; desc: string }) {
    return (
        <Link href={href} className="group p-6 bg-white rounded-2xl border border-gray-100 hover:border-primary transition-all shadow-sm block">
            <div className="flex justify-between items-center mb-2">
                <h3 className="font-bold text-gray-900 group-hover:text-primary transition-colors">
                    {from} ← {to}
                </h3>
                <ArrowRight className="w-4 h-4 text-gray-400 rotate-180 group-hover:-translate-x-1 transition-transform" />
            </div>
            <p className="text-sm text-gray-500">{desc}</p>
        </Link>
    );
}

export default function RoutesPageArabic() {
    return (
        <div className="bg-gray-50 min-h-screen pt-24 pb-20 rtl" dir="rtl">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="bg-primary text-white hover:text-black font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block mb-4">
                        جميع المسارات
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        مسارات السيارات الخاصة والشوفير في جميع أنحاء السعودية
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        مسارات بأسعار ثابتة لرحلتك إلى <Link href="/ar/locations/makkah/" className="text-primary font-bold hover:underline">مكة المكرمة</Link> والمدن الرئيسية الأخرى.
                        نقل مباشر بين المدن مع سائقين محترفين ومركبات مريحة.
                    </p>
                </div>

                <div className="mb-16">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-3">
                        <Navigation className="text-primary" /> مسارات داخل السعودية
                    </h2>
                    <p className="text-gray-500 mb-8">أشهر مسارات النقل بين المدن السعودية بأسعار ثابتة.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {domesticRoutes.map(r => (
                            <RouteCard key={r.slug} href={`/ar/routes/${r.slug}/`} from={r.from} to={r.to} desc={r.desc} />
                        ))}
                    </div>
                </div>

                <div className="mb-16 bg-gray-900 rounded-3xl p-10">
                    <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
                        <Globe className="text-primary" /> مسارات دول الخليج وعبور الحدود
                    </h2>
                    <p className="text-gray-400 mb-8">نقل تنفيذي مرخّص بين السعودية ودول الخليج المجاورة، مع تولّينا جميع إجراءات عبور الحدود.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {gccRoutes.map(r => (
                            <Link key={r.slug} href={`/ar/routes/${r.slug}/`} className="group p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-primary transition-all">
                                <div className="flex justify-between items-center mb-2">
                                    <h3 className="font-bold text-white group-hover:text-primary transition-colors">{r.from} ← {r.to}</h3>
                                    <ArrowRight className="w-4 h-4 text-gray-500 rotate-180 group-hover:-translate-x-1 transition-transform" />
                                </div>
                                <p className="text-sm text-gray-400">{r.desc}</p>
                            </Link>
                        ))}
                    </div>
                    <div className="text-center mt-8">
                        <Link href="/border-crossings/">
                            <Button size="lg" className="bg-primary text-black hover:bg-white font-bold px-8 py-6 rounded-xl">
                                عرض جميع مسارات عبور الحدود <ArrowRight className="mr-2 w-4 h-4 rotate-180" />
                            </Button>
                        </Link>
                    </div>
                </div>

                <div className="mb-16 bg-white rounded-3xl p-10 shadow-sm border border-gray-100 text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">تبحث عن وجهة أخرى؟</h2>
                    <p className="text-gray-500 mb-8 max-w-2xl mx-auto">
                        نغطي أكثر من 700 مسار في جميع أنحاء السعودية ودول الخليج، بما في ذلك النقل من فنادق مكة والمدينة، ومسارات من الدمام وتبوك. تصفح القائمة الكاملة باللغة الإنجليزية.
                    </p>
                    <Link href="/routes/">
                        <Button size="lg" variant="outline" className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white font-bold px-8 py-6 rounded-xl">
                            عرض كل المسارات (+700) <ArrowRight className="mr-2 w-4 h-4 rotate-180" />
                        </Button>
                    </Link>
                </div>

                <div className="bg-black text-white rounded-3xl p-12 text-center mb-16 shadow-2xl relative overflow-hidden">
                    <div className="relative z-10">
                        <h3 className="text-3xl font-bold mb-4 text-white">هل تحتاج مساراً مخصصاً؟</h3>
                        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                            إذا لم تجد وجهتك هنا، يمكننا تزويدك بعرض سعر. معظم الحجاج المسافرين بين المدن المقدسة يستخدمون <Link href="/ar/services/umrah-transport/" className="text-white underline font-bold hover:text-primary transition-colors">باقات نقل العمرة</Link> للحصول على أفضل قيمة.
                        </p>
                        <Link href="/booking/">
                            <Button size="lg" className="bg-primary text-white hover:bg-white hover:text-black font-bold px-10 py-6 rounded-xl">
                                <Car className="w-5 h-5 ml-2" />
                                احجز نقلك أونلاين
                            </Button>
                        </Link>
                    </div>
                </div>

                <div className="mt-16 bg-white border border-gray-100 rounded-3xl p-8 shadow-sm">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-right">
                        <div>
                            <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <Car className="w-5 h-5 text-primary" /> أسطول مميز للرحلات بين المدن
                            </h4>
                            <ul className="space-y-3">
                                <li>
                                    <Link href="/fleet/gmc-yukon/" className="text-gray-600 hover:text-primary transition-colors flex items-center justify-between group">
                                        <span>جمس يوكن (الأعلى تقييماً للرحلات الطويلة)</span>
                                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all rotate-180" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/fleet/toyota-hiace/" className="text-gray-600 hover:text-primary transition-colors flex items-center justify-between group">
                                        <span>تويوتا هايس (رحلات العمرة والمجموعات الكبيرة)</span>
                                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all rotate-180" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/fleet/" className="text-primary font-bold hover:underline">عرض جميع خيارات المركبات ←</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <MapPin className="w-5 h-5 text-primary" /> مراكز الخدمة
                            </h4>
                            <ul className="space-y-3">
                                <li>
                                    <Link href="/ar/locations/makkah/" className="text-gray-600 hover:text-primary transition-colors flex items-center justify-between group">
                                        <span>مكة المكرمة (الحرم والعمرة)</span>
                                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all rotate-180" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/ar/locations/madinah/" className="text-gray-600 hover:text-primary transition-colors flex items-center justify-between group">
                                        <span>المدينة المنورة (المسجد النبوي)</span>
                                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all rotate-180" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/locations/" className="text-primary font-bold hover:underline">عرض جميع مواقع الخدمة ←</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
