import { Metadata } from 'next';
import Link from 'next/link';
import { Crown, Globe, Clock, Heart, Languages, Users, MapPin, Car, Building2, Compass, Navigation, Plane, Accessibility, Briefcase, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
    title: 'خدماتنا | حلول النقل الاحترافية في السعودية | Taxi Service KSA',
    description: 'باقة كاملة من خدمات النقل الخاص في السعودية — سائق VIP، توصيل المطار، نقل السياحة، سائق خاص، نقل الفعاليات، وأكثر. احجز الآن.',
    keywords: ['خدمات تاكسي السعودية', 'نقل العمرة', 'توصيل مطار السعودية', 'تاكسي رجال الأعمال', 'نقل سياحي السعودية', 'سائق خاص السعودية'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/ar/services/',
        languages: {
            'en': 'https://taxiserviceksa.com/services/',
            'ar': 'https://taxiserviceksa.com/ar/services/',
            'x-default': 'https://taxiserviceksa.com/services/',
        },
    },
    openGraph: {
        title: 'خدماتنا | Taxi Service KSA',
        description: 'باقة كاملة من خدمات النقل الخاص في السعودية بسائقين محترفين مرخصين.',
        url: 'https://taxiserviceksa.com/ar/services/',
        locale: 'ar_SA',
        type: 'website',
    },
};

export default function ServicesPageArabic() {
    const featuredServices = [
        {
            name: 'سائق VIP وفاخر',
            description: 'سائق خاص لضيوف الشرف والدبلوماسيين والرؤساء التنفيذيين وكبار الزوار. سائقون مرخصون وسريون مع أسطول كاديلاك إسكاليد وجمس يوكن ومرسيدس S-Class.',
            icon: Crown,
            href: '/ar/services/vip-chauffeur/',
        },
        {
            name: 'نقل سياحي',
            description: 'سائق خاص للسياح الأجانب في جميع أنحاء السعودية. جولات المدن، رحلات الصحراء، جولات التسوق، ورحلات العلا. سائقون يتحدثون الإنجليزية.',
            icon: Globe,
            href: '/ar/services/tourism-transport/',
        },
        {
            name: 'سائق خاص — بالساعة واليوم',
            description: 'استأجر سائقاً خاصاً بالساعة أو اليوم أو الأسبوع أو الشهر في الرياض وجدة. تسوق، اجتماعات، نزهات عائلية — حسب جدولك وسائقك.',
            icon: Clock,
            href: '/ar/services/private-driver/',
        },
        {
            name: 'نقل الفعاليات والأفراح',
            description: 'نقل منسق للأفراح والمؤتمرات والمعارض وفعاليات موسم الرياض. لوجستيات متعددة المركبات مع منسق فعاليات مخصص.',
            icon: Heart,
            href: '/ar/services/event-transport/',
        },
        {
            name: 'سائق ثنائي اللغة',
            description: 'سائق يتحدث الإنجليزية والعربية بطلاقة لضيوفكم الدوليين والزوار الأجانب.',
            icon: Languages,
            href: '/ar/services/bilingual-chauffeur/',
        },
        {
            name: 'نقل خاص للسيدات',
            description: 'نقل خاص وآمن ومحترم للسيدات في الرياض وجدة ومكة والمدينة، متوفر على مدار الساعة.',
            icon: Users,
            href: '/ar/services/women-transport/',
        },
        {
            name: 'نقل مكة',
            description: 'نقل خاص من الفندق إلى الحرم وجميع مواقع الزيارة في مكة المكرمة.',
            icon: MapPin,
            href: '/ar/services/makkah-city-transport/',
        },
        {
            name: 'نقل المدينة',
            description: 'نقل خاص من الفندق إلى المسجد النبوي وجميع مواقع الزيارة في المدينة المنورة.',
            icon: MapPin,
            href: '/ar/services/madinah-city-transport/',
        },
        {
            name: 'استئجار تويوتا هايس جماعي',
            description: 'حافلة تويوتا هايس مع سائق للمجموعات الكبيرة ووفود العمرة والفعاليات المؤسسية.',
            icon: Car,
            href: '/ar/services/group-hiace-hire/',
        },
        {
            name: 'توصيل فنادق الرياض',
            description: 'توصيل من المطار وداخل المدينة لجميع فنادق الرياض الكبرى، بسائقين يعرفون المدينة جيداً.',
            icon: Building2,
            href: '/ar/services/riyadh-hotel-transfer/',
        },
        {
            name: 'نقل العمرة VIP',
            description: 'حل نقل متكامل لرحلة العمرة مع سائقين محترفين. من مطار جدة إلى مكة، ومن مكة إلى المدينة وجميع مواقع الزيارة.',
            icon: Car,
            href: '/ar/services/umrah-transport/',
        },
        {
            name: 'استقبال المطار التنفيذي',
            description: 'خدمة استقبال VIP في جميع مطارات السعودية الرئيسية. تتبع الرحلة واستقبال داخل الصالة.',
            icon: Plane,
            href: '/ar/services/airport-transfers/',
        },
        {
            name: 'السفر المؤسسي',
            description: 'حسابات سفر مؤسسية مخصصة للشركات. فوترة شهرية، عقود متعددة الرحلات، وتخصيص أسطول لشركتك.',
            icon: Building2,
            href: '/ar/services/corporate-travel/',
        },
        {
            name: 'نقل الجولات التراثية',
            description: 'نقل للجولات التراثية إلى مواقع اليونسكو مثل العلا. سائقون محترفون بسيارات دفع رباعي للرحلات الصحراوية.',
            icon: Compass,
            href: '/ar/services/heritage-tours/',
        },
        {
            name: 'نقل بين المدن VIP',
            description: 'نقل بين جميع المدن السعودية الرئيسية. أسعار ثابتة للرياض-جدة، جدة-المدينة، وجميع الرحلات الطويلة.',
            icon: Navigation,
            href: '/ar/services/intercity/',
        },
        {
            name: 'خدمة سائق دول الخليج',
            description: 'نقل خاص عابر للحدود من السعودية إلى الإمارات والكويت وقطر والبحرين. أسعار ثابتة، مركبة خاصة واحدة.',
            icon: Globe,
            href: '/ar/services/gcc-chauffeur-service/',
        },
        {
            name: 'جولات سياحية وزيارات',
            description: 'جولات سياحية وزيارات في مكة والمدينة والطائف مع سائقين ذوي معرفة واسعة.',
            icon: MapPin,
            href: '/ar/services/tours/',
        },
        {
            name: 'نقل لذوي الاحتياجات الخاصة',
            description: 'خدمة نقل مجهزة لذوي الاحتياجات الخاصة والحجاج ذوي الإعاقة. مركبات مزودة بمنحدرات خاصة.',
            icon: Accessibility,
            href: '/ar/services/wheelchair-taxi/',
        },
        {
            name: 'حلول النقل للشركات B2B',
            description: 'حلول نقل مؤسسية للشركات والفنادق ووكالات السفر. فوترة مرنة وأسطول مخصص.',
            icon: Briefcase,
            href: '/ar/services/b2b-solutions/',
        },
    ];

    return (
        <div className="bg-gray-50 min-h-screen rtl" dir="rtl">
            <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white pt-32 pb-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto text-center">
                    <span className="bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold tracking-wider text-sm px-4 py-1.5 rounded-full inline-block mb-6">
                        خدماتنا
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                        حلول نقل احترافية<br />
                        <span className="text-white/80">بسائقين مرخصين</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        حلول نقل شاملة في جميع أنحاء السعودية. جميع مركباتنا تشمل سائقين محترفين — لا نقدم خدمة تأجير سيارات بدون سائق.
                    </p>
                </div>
            </section>

            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {featuredServices.map((service, index) => (
                            <div key={index} className="bg-gray-50 rounded-2xl overflow-hidden shadow-sm border-2 border-gray-100 hover:border-primary hover:shadow-xl transition-all h-full flex flex-col p-8">
                                <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center mb-5">
                                    <service.icon className="w-7 h-7 text-white" />
                                </div>
                                <h2 className="text-xl font-bold text-gray-900 mb-3">{service.name}</h2>
                                <p className="text-gray-600 leading-relaxed text-sm mb-6 flex-1">{service.description}</p>
                                <Link href={service.href} className="block">
                                    <Button className="w-full bg-black text-white hover:bg-gray-800 font-bold group">
                                        عرض تفاصيل الخدمة
                                        <ArrowRight className="mr-2 w-5 h-5 rotate-180 group-hover:-translate-x-1 transition-transform" />
                                    </Button>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 text-white text-center">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">جميع خدماتنا تشمل سائقين محترفين</h2>
                        <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                            لا نقدم خدمة تأجير سيارات بدون سائق. جميع مركباتنا تأتي مع سائقين مرخصين وذوي خبرة يعرفون طرق السعودية وأنظمة المرور.
                        </p>
                        <Link href="/booking/">
                            <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-bold">
                                اطلب عرض سعر لأي خدمة
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
