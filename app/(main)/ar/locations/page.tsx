import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, ArrowRight, Car, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
    title: 'مواقع خدمة التاكسي والشوفير الخاص في السعودية | Taxi Service KSA',
    description: 'خدمة نقل خاص متميزة في جميع أنحاء السعودية. شوفيرات تنفيذيون محترفون لتوصيل المطارات والجولات في جدة ومكة والمدينة والرياض والعلا والطائف.',
    alternates: {
        canonical: 'https://taxiserviceksa.com/ar/locations/',
        languages: {
            'en': 'https://taxiserviceksa.com/locations/',
            'ar': 'https://taxiserviceksa.com/ar/locations/',
            'ur': 'https://taxiserviceksa.com/ur/locations/',
            'x-default': 'https://taxiserviceksa.com/locations/',
        },
    },
};

const locations = [
    { name: 'جدة', description: 'توصيل المطار وجولات مدينة راقية في عروس البحر الأحمر.', image: '/jeddah-corniche-sunset.webp', href: '/ar/locations/jeddah/' },
    { name: 'مكة المكرمة', description: 'نقل موثوق لمعتمري العمرة والزيارات المقدسة.', image: '/makkah-kaaba-night.webp', href: '/ar/locations/makkah/' },
    { name: 'المدينة المنورة', description: 'رحلات مريحة إلى مدينة رسول الله ﷺ.', image: '/madinah-prophets-mosque.webp', href: '/ar/locations/madinah/' },
    { name: 'الرياض', description: 'نقل تنفيذي للشركات وتوصيل المطار في العاصمة.', image: '/hero-slide-1.webp', href: '/ar/locations/riyadh/' },
    { name: 'العلا', description: 'استكشف العجائب القديمة مع نقل خاص متميز.', image: '/alula-hegra-tombs.webp', href: '/ar/locations/alula/' },
    { name: 'الطائف', description: 'رحلات جبلية خلابة إلى مدينة الورد.', image: '/taif-mountains-view.webp', href: '/ar/locations/taif/' },
    { name: 'ينبع', description: 'نقل صناعي وخدمات تنفيذية على البحر الأحمر.', image: '/hero-slide-2.webp', href: '/ar/locations/yanbu/' },
    { name: 'قلعة خيبر', description: 'جولات تراثية حصرية إلى واحات خيبر القديمة.', image: '/hero-slide-2.webp', href: '/ar/locations/khayber-fort/' },
    { name: 'الدمام', description: 'توصيل المطار ونقل تنفيذي في المركز الإداري.', image: '/hero-slide-3.webp', href: '/ar/locations/dammam/' },
    { name: 'الظهران', description: 'خدمة احترافية لمراكز الطاقة والصناعة (أرامكو/إثراء).', image: '/hero-slide-5.webp', href: '/ar/locations/dhahran/' },
    { name: 'تبوك', description: 'نقل مشاريع عملاقة وخدمات بين المدن إلى نيوم والعلا.', image: '/hero-slide-1.webp', href: '/ar/locations/tabuk/' },
    { name: 'أبها', description: 'استكشف أعلى القمم وأبرد الأجواء في منطقة عسير.', image: '/hero-slide-4.webp', href: '/ar/locations/abha/' },
    { name: 'زيارات مكة', description: 'جولات روحانية شاملة ومحترمة لمواقع مكة المقدسة.', image: '/makkah-grand-mosque.webp', href: '/ar/locations/makkah-ziyarat/' },
];

export default function LocationsPageArabic() {
    return (
        <div className="bg-gray-50 min-h-screen pt-24 pb-20 rtl" dir="rtl">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="bg-gray-100 text-black font-semibold tracking-wider uppercase text-sm px-4 py-1.5 rounded-full inline-block mb-4">الوجهات</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">مواقع خدمة التاكسي والشوفير الخاص في السعودية</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        نخدم جميع المدن الرئيسية والمواقع التاريخية في السعودية. اختر وجهتك واحصل على عرض سعر لمسارك بين المدن اليوم.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {locations.map((loc, index) => (
                        <Link key={index} href={loc.href} className="group block h-full">
                            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full border border-gray-100 flex flex-col">
                                <div className="relative h-64 overflow-hidden">
                                    <Image
                                        src={loc.image}
                                        alt={loc.name}
                                        width={800}
                                        height={600}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    <div className="absolute bottom-4 right-4 text-white">
                                        <div className="flex items-center gap-2 mb-1">
                                            <MapPin className="w-5 h-5 text-primary" />
                                            <h3 className="text-2xl font-bold">{loc.name}</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6 flex-1 flex flex-col">
                                    <p className="text-gray-600 mb-6 flex-1">{loc.description}</p>
                                    <div className="flex items-center text-gray-900 font-bold group-hover:-translate-x-2 transition-transform">
                                        عرض الخدمات <ArrowRight className="mr-2 w-5 h-5 rotate-180" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="mt-16 bg-white rounded-3xl p-10 shadow-sm border border-gray-100 text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">تبحث عن مدينة أخرى؟</h2>
                    <p className="text-gray-500 mb-8 max-w-2xl mx-auto">
                        نغطي أكثر من 80 مدينة ومحافظة في جميع أنحاء السعودية. تصفح القائمة الكاملة باللغة الإنجليزية.
                    </p>
                    <Link href="/locations/">
                        <Button size="lg" variant="outline" className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white font-bold px-8 py-6 rounded-xl">
                            عرض جميع المواقع (+80) <ArrowRight className="mr-2 w-4 h-4 rotate-180" />
                        </Button>
                    </Link>
                </div>

                <div className="mt-20 border-y border-amber-200 bg-amber-50 rounded-3xl p-6 text-center shadow-md mb-12">
                    <p className="text-amber-800 text-sm font-bold flex items-center justify-center gap-2">
                        <Shield className="w-4 h-4" /> ملاحظة رسمية: نتخصص في النقل الخاص المحجوز مسبقاً، النقل بين المدن، وخدمات المطارات. لا نقدّم خدمة الاستيقاف من الشارع المحلية.
                    </p>
                </div>

                <div className="mt-20 bg-gray-900 text-white rounded-3xl p-12 text-center shadow-xl">
                    <h2 className="text-3xl font-bold mb-4 text-white">هل أنت مستعد لبدء رحلتك؟</h2>
                    <p className="text-gray-400 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
                        سواء كنت قادماً إلى مطار جدة أو الرياض أو المدينة، شوفيراتنا التنفيذيون جاهزون لاستقبالك.
                        احصل على <Link href='/booking/' className='text-white font-bold underline decoration-primary'>أفضل خدمة نقل موثوقة في السعودية</Link> بأسعار ثابتة.
                    </p>
                    <div className="flex justify-center">
                        <Link href="/booking/">
                            <Button className="bg-primary text-white hover:bg-white hover:text-black font-bold px-10 py-6 text-lg rounded-xl flex items-center gap-2">
                                <Car className="w-5 h-5" />
                                الحجز عبر واتساب
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
