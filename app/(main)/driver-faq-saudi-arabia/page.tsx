import { Metadata } from 'next';
import Link from 'next/link';
import { HelpCircle, ChevronRight, Car, Banknote, ShieldCheck, Clock, MapPin } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Driver FAQ Saudi Arabia: Everything You Need to Know',
    description: 'Frequently asked questions about driver jobs in Saudi Arabia. Learn how to apply, car requirements, earning potential, and why VIP transit is better than Uber.',
    keywords: ['driver faq saudi arabia', 'how to become a driver in saudi', 'driver jobs in saudi arabia', 'taxi driver requirements KSA'],
    alternates: {
        canonical: '/driver-faq-saudi-arabia',
    }
};

export default function DriverFAQSudiArabia() {
    return (
        <main className="min-h-screen bg-gray-50">
            {/* Header Section */}
            <div className="bg-gray-950 text-white pt-32 pb-20 px-4 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px]"></div>
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <span className="bg-primary/20 text-primary px-4 py-1.5 rounded-full text-sm font-semibold uppercase tracking-wider mb-6 inline-block">
                        Master FAQ Guide
                    </span>
                    <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                        Driver Jobs FAQ <br className="hidden md:block"/> Saudi Arabia
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
                        Your complete guide to navigating driver requirements, earnings, and application processes for VIP chauffeur positions across the Kingdom.
                    </p>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-4xl mx-auto px-4 py-16">
                
                {/* Introduction */}
                <div className="text-center mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Common Questions From New Drivers</h2>
                    <p className="text-gray-600">We receive hundreds of applications globally. Here is everything you need to know before applying for our premium private driver network.</p>
                </div>

                {/* FAQ Grid */}
                <div className="space-y-6">
                    
                    {/* Q1 */}
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start gap-3">
                            <HelpCircle className="w-6 h-6 text-primary shrink-0 mt-0.5" /> 
                            How to become a driver in Saudi Arabia?
                        </h3>
                        <p className="text-gray-600 leading-relaxed ml-9">
                            Becoming a professional driver requires a valid Saudi driving license, a clean background check, and an approved vehicle. Once you meet the legal requirements, the best path to high income is joining a VIP private transport network rather than standard street taxis. You simply submit your application online, pass a quick interview, and get your vehicle approved for dispatch. 
                        </p>
                    </div>

                    {/* Q2 */}
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start gap-3">
                            <Car className="w-6 h-6 text-primary shrink-0 mt-0.5" /> 
                            Can I work with my own car?
                        </h3>
                        <p className="text-gray-600 leading-relaxed ml-9">
                            Yes, absolutely. In fact, operating with your own vehicle is mandatory for our premium network. We do not provide rental cars. By driving your own maintained vehicle, you keep a significantly higher percentage of your earnings and maintain complete control over your business asset.
                        </p>
                    </div>

                    {/* Q3 */}
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start gap-3">
                            <Banknote className="w-6 h-6 text-primary shrink-0 mt-0.5" /> 
                            How much do drivers earn?
                        </h3>
                        <p className="text-gray-600 leading-relaxed ml-9">
                            Earnings scale directly according to your availability and the regions you serve. An active VIP private driver handling corporate clients and airport runs typically earns between <strong>7,000 to 12,000+ SAR per month</strong>. Longer inter-city trips, such as VIP transfers between Makkah and Madinah, can accelerate these earnings significantly compared to standard inner-city driving.
                        </p>
                    </div>

                    {/* Q4 */}
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start gap-3">
                            <ShieldCheck className="w-6 h-6 text-primary shrink-0 mt-0.5" /> 
                            Is this better than Uber or Careem?
                        </h3>
                        <p className="text-gray-600 leading-relaxed ml-9">
                            For professional chauffeurs, yes. While Uber and Careem are excellent for casual, part-time work, they suffer from high commission rates and unpredictable small-fare trips. Our VIP transport network strictly focuses on high-ticket, long-distance, and corporate clients. This means fewer trips overall, but significantly higher revenue per trip, resulting in less wear-and-tear on your vehicle and higher net profits.
                        </p>
                    </div>

                    {/* Q5 */}
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start gap-3">
                            <Car className="w-6 h-6 text-primary shrink-0 mt-0.5" /> 
                            What car is required?
                        </h3>
                        <p className="text-gray-600 leading-relaxed ml-9">
                            To ensure our VIP clients receive the ultimate in safety and comfort, all vehicles must be <strong>model year 2020 or newer</strong>. We heavily prioritize mid-size to full-size sedans for corporate travel, and large SUVs (like GMC Yukons or Chevrolet Tahoes) for family and border trips. All vehicles must have flawless air conditioning and be immaculately clean.
                        </p>
                    </div>

                    {/* Q6 */}
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start gap-3">
                            <Clock className="w-6 h-6 text-primary shrink-0 mt-0.5" /> 
                            How quickly can I start?
                        </h3>
                        <p className="text-gray-600 leading-relaxed ml-9">
                            The onboarding process is rapid. Once you submit your application and verify your documents (ID, License, Vehicle Registration), our compliance team reviews it. You can typically start receiving direct trip requests and high-value bookings within <strong>24 to 48 hours</strong> of final approval.
                        </p>
                    </div>

                </div>

                {/* Call to Action & City Linking */}
                <div className="mt-16 bg-gray-900 rounded-[2.5rem] p-10 md:p-14 text-center text-white relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px]"></div>
                    <div className="relative z-10">
                        <h2 className="text-3xl font-black mb-4">Ready to Maximize Your Earnings?</h2>
                        <p className="text-gray-400 mb-8 max-w-xl mx-auto text-lg">
                            We are actively recruiting VIP drivers in targeted major cities. Select your region below to apply directly.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                            <Link href="/join-as-driver/riyadh" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/10 hover:bg-primary border border-white/20 hover:border-primary text-white font-bold py-4 px-8 rounded-xl transition-all group">
                                <MapPin className="w-5 h-5 text-gray-300 group-hover:text-white" />
                                Apply in Riyadh <ChevronRight className="w-4 h-4 ml-1" />
                            </Link>

                            <Link href="/join-as-driver/jeddah" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/10 hover:bg-primary border border-white/20 hover:border-primary text-white font-bold py-4 px-8 rounded-xl transition-all group">
                                <MapPin className="w-5 h-5 text-gray-300 group-hover:text-white" />
                                Apply in Jeddah <ChevronRight className="w-4 h-4 ml-1" />
                            </Link>

                            <Link href="/join-as-driver/makkah" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/10 hover:bg-primary border border-white/20 hover:border-primary text-white font-bold py-4 px-8 rounded-xl transition-all group">
                                <MapPin className="w-5 h-5 text-gray-300 group-hover:text-white" />
                                Apply in Makkah <ChevronRight className="w-4 h-4 ml-1" />
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    );
}
