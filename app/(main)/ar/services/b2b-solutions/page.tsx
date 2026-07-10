import Link from 'next/link';
import {
    Building2,
    Handshake,
    Rocket,
    ShieldCheck,
    Users2,
    BarChart3,
    ArrowRight,
    CheckCircle2,
    Calendar,
    Car,
    FileText,
    Globe
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Hero from '@/components/Hero';

export const metadata = {
    title: 'حلول نقل الشركات وB2B | Taxi Service KSA',
    description: 'خدمات نقل متميزة للشركات في السعودية. نتعاون مع وكالات السفر ومشغلي العمرة والشركات لتقديم نقل فاخر وموثوق.',
    keywords: [
        'حلول نقل الشركات في السعودية',
        'خدمات نقل B2B السعودية',
        'شريك نقل وكالات العمرة',
        'نقل الشركات الرياض جدة',
        'تعاقد نقل بالجملة السعودية',
        'خدمة سيارات للشركات السعودية',
    ],
    alternates: {
        canonical: 'https://taxiserviceksa.com/ar/services/b2b-solutions/',
        languages: {
            'en': 'https://taxiserviceksa.com/services/b2b-solutions/',
            'ar': 'https://taxiserviceksa.com/ar/services/b2b-solutions/',
            'x-default': 'https://taxiserviceksa.com/services/b2b-solutions/',
        },
    },
    openGraph: {
        title: 'حلول نقل الشركات وB2B | Taxi Service KSA',
        description: 'خدمات نقل متميزة للشركات في السعودية. نتعاون مع وكالات السفر ومشغلي العمرة والشركات لتقديم نقل فاخر وموثوق.',
        url: 'https://taxiserviceksa.com/ar/services/b2b-solutions/',
        locale: 'ar_SA',
        type: 'website',
    },
};

export default function B2BSolutionsArabic() {
    return (
        <main className="min-h-screen bg-white rtl" dir="rtl">
            <Hero
                title="وسّع أعمالك السياحية بلوجستيات نقل من الطراز الأول"
                subtitle="نقدّم حلول نقل موثوقة وفاخرة وعالية السعة للشركات ووكالات العمرة حول العالم."
                images={["/chauffeur-service.png"]}
            />

            {/* B2B Services Grid */}
            <section className="py-24 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-primary font-black uppercase tracking-widest text-sm mb-4 block">تخصصات B2B</span>
                        <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">مصمم للتميز في الخدمة</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">نموذج أعمالنا مبني على الموثوقية والشفافية وتقديم خدمة متميزة لعملائكم من كبار الشخصيات.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Globe,
                                title: 'وكالات العمرة | Taxi Service KSA',
                                desc: 'إدارة أسطول موثوقة لمجموعات المعتمرين من كل الأحجام، بتغطية مكة والمدينة وجدة.',
                                color: 'bg-emerald-50 text-emerald-600'
                            },
                            {
                                icon: Building2,
                                title: 'سائق خاص للشركات | Taxi Service KSA',
                                desc: 'نقل تنفيذي فاخر لرجال الأعمال والوفود وضيوف كبار الشخصيات بسيارات دفع رباعي راقية.',
                                color: 'bg-blue-50 text-blue-600'
                            },
                            {
                                icon: Users2,
                                title: 'لوجستيات المجموعات | Taxi Service KSA',
                                desc: 'تنسيق نقل الفعاليات الكبرى والمؤتمرات والمجموعات السياحية باستخدام ستاريا وهاياس وكوستر.',
                                color: 'bg-indigo-50 text-indigo-600'
                            }
                        ].map((service) => (
                            <div key={service.title} className="p-10 rounded-[2.5rem] bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-2xl hover:shadow-gray-200 transition-all duration-500 group">
                                <div className={`${service.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-8`}>
                                    <service.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-black text-gray-900 mb-4">{service.title}</h3>
                                <p className="text-gray-600 leading-relaxed mb-6">{service.desc}</p>
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-2 text-sm font-bold text-gray-700">
                                        <CheckCircle2 className="w-4 h-4 text-primary" />
                                        أسعار صافية ثابتة
                                    </li>
                                    <li className="flex items-center gap-2 text-sm font-bold text-gray-700">
                                        <CheckCircle2 className="w-4 h-4 text-primary" />
                                        أولوية في تخصيص السيارات
                                    </li>
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-24 px-4 bg-gray-950 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]"></div>
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <h2 className="text-4xl lg:text-5xl font-black text-white mb-8 leading-tight">لماذا يثق بنا <br />قادة الشركات؟</h2>
                            <div className="space-y-8">
                                {[
                                    { icon: BarChart3, title: 'فوترة مركزية | Taxi Service KSA', desc: 'فوترة موحدة وتقارير شاملة لجميع رحلات الشركة.' },
                                    { icon: ShieldCheck, title: 'معايير السلامة والعناية | Taxi Service KSA', desc: 'سائقون تم التحقق منهم، وتتبع GPS، وبروتوكولات سلامة لراحة بالكم.' },
                                    { icon: Rocket, title: 'تكامل عبر API | Taxi Service KSA', desc: 'اربط نظام الحجز لديكم مباشرة بنظام إدارة أسطولنا.' },
                                    { icon: FileText, title: 'كشوفات حساب شهرية | Taxi Service KSA', desc: 'تقارير استخدام مفصّلة وإدارة مبسطة للمصروفات.' }
                                ].map((feature) => (
                                    <div key={feature.title} className="flex gap-6">
                                        <div className="bg-white/10 p-4 rounded-2xl h-fit border border-white/5">
                                            <feature.icon className="w-6 h-6 text-primary" />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-white mb-2">{feature.title}</h4>
                                            <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-6">
                                <div className="bg-white/5 p-8 rounded-[2rem] border border-white/10 backdrop-blur-sm">
                                    <div className="text-4xl font-black text-primary mb-2">99%</div>
                                    <div className="text-gray-400 text-sm font-bold uppercase tracking-widest">وصول في الوقت المحدد</div>
                                </div>
                                <div className="bg-white/5 p-8 rounded-[2rem] border border-white/10 backdrop-blur-sm">
                                    <div className="text-4xl font-black text-white mb-2">+150</div>
                                    <div className="text-gray-400 text-sm font-bold uppercase tracking-widest">شريك عالمي</div>
                                </div>
                            </div>
                            <div className="space-y-6 mt-12">
                                <div className="bg-white/5 p-8 rounded-[2rem] border border-white/10 backdrop-blur-sm">
                                    <div className="text-4xl font-black text-white mb-2">24/7</div>
                                    <div className="text-gray-400 text-sm font-bold uppercase tracking-widest">دعم مخصص للشركات</div>
                                </div>
                                <div className="bg-white/5 p-8 rounded-[2rem] border border-white/10 backdrop-blur-sm">
                                    <div className="text-4xl font-black text-primary mb-2">5/5</div>
                                    <div className="text-gray-400 text-sm font-bold uppercase tracking-widest">متوسط تقييم كبار الشخصيات</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-6">كن شريكاً لنا اليوم</h2>
                    <p className="text-gray-600 text-lg mb-10 leading-relaxed">
                        انضم إلى شبكة شركائنا المميزين في قطاع السفر وقدّم لعملائك أوثق خدمة نقل في المملكة.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4">
                        <Link href="/contact/">
                            <Button className="w-full bg-primary hover:bg-black text-white font-black py-8 rounded-2xl text-lg shadow-xl shadow-primary/20 transition-all group">
                                استفسر عن أسعار الشركات
                                <ArrowRight className="mr-2 w-5 h-5 rotate-180 group-hover:-translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                        <a href="mailto:taxiserviceksa9988@gmail.com">
                            <Button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-900 font-black py-8 rounded-2xl text-lg transition-all">
                                راسل فريق الأعمال
                            </Button>
                        </a>
                    </div>
                    <p className="mt-8 text-sm text-gray-400 italic">عادة نرد خلال 4 ساعات عمل.</p>
                </div>
            </section>
        </main>
    );
}
