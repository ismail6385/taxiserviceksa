import Link from 'next/link';
import {
    Facebook, Instagram, Twitter, Linkedin, Car, Youtube, Share2,
    MapPin, Phone, Mail, Clock, ShieldCheck, Globe
} from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-gray-950 text-white pt-24 pb-12 border-t border-gray-900 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-900 rounded-full blur-[150px] translate-y-1/2 -translate-x-1/2"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Main Grid */}
                {/* Main Grid: Mega Footer Structure - 5 Columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-20">

                    {/* Column 1: Brand & About (RESTORED) */}
                    <div className="space-y-8">
                        <Link href="/" className="flex items-center gap-3 group w-fit">
                            <div className="bg-gradient-to-br from-primary via-blue-600 to-indigo-700 p-2.5 rounded-xl group-hover:rotate-[360deg] transition-all duration-700 shadow-lg shadow-primary/20">
                                <Car className="w-6 h-6 text-white" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-2xl font-black text-white tracking-tight leading-none">
                                    VIPTransfer<span className="text-primary">KSA</span>
                                </span>
                                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-2 block">Premium Chauffeur Service</span>
                            </div>
                        </Link>
                        <p className="text-gray-400 leading-relaxed text-sm font-medium pr-4">
                            Your trusted partner for premium transportation across Saudi Arabia. We specialize in Umrah transfers, corporate logistics, and luxury chauffeur services.
                        </p>
                        {/* Socials (Moved back here for better brand association) */}
                        <div className="flex gap-3">
                            {[
                                { title: 'Facebook', icon: Facebook, href: 'https://www.facebook.com/people/Taxi-Service-KSA/61573850597962/' },
                                { title: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/company/taxi-service-ksa/' },
                                { title: 'YouTube', icon: Youtube, href: 'https://www.youtube.com/channel/UCeP44oxBUKUG5X-UhYmPMNw' },
                                { title: 'Pinterest', icon: Share2, href: 'https://www.pinterest.com/taxiserviceksa/' }
                            ].map((social) => (
                                <a
                                    key={social.title}
                                    href={social.href}
                                    target="_blank"
                                    rel="nofollow noopener noreferrer"
                                    className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 hover:bg-primary text-gray-400 hover:text-white transition-all hover:-translate-y-1"
                                    aria-label={social.title}
                                >
                                    <social.icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Column 2: Holy Cities (Makkah & Madinah) */}
                    <div>
                        <h3 className="text-lg font-black text-white mb-6 flex items-center gap-2">
                            <div className="w-1 h-6 bg-primary rounded-full"></div>
                            Holy City Transfers
                        </h3>
                        <ul className="space-y-2">
                            {[
                                { name: 'VIP Transfer Makkah', href: '/locations/makkah/' },
                                { name: 'Makkah Clock Tower Transfer', href: '/locations/makkah/' },
                                { name: 'Jabal Omar VIP Transfer', href: '/locations/makkah/jabal-omar/' },
                                { name: 'Makkah Train Station Transfer', href: '/locations/makkah/train-station/' },
                                { name: 'VIP Transfer Madinah', href: '/locations/madinah/' },
                                { name: 'Madinah Airport VIP Transfer', href: '/locations/madinah/madinah-airport/' },
                                { name: 'Madinah Train Station Transfer', href: '/locations/madinah/train-station/' },
                                { name: 'Quba Mosque Private Transfer', href: '/locations/madinah/quba/' },
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className="text-gray-400 hover:text-white hover:translate-x-1 transition-all flex items-center gap-2 group text-sm font-medium">
                                        <div className="w-1 h-1 bg-gray-600 rounded-full group-hover:bg-primary transition-colors"></div>
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Major Hubs (Jeddah, Riyadh, Eastern) */}
                    <div>
                        <h3 className="text-lg font-black text-white mb-6 flex items-center gap-2">
                            <div className="w-1 h-6 bg-primary rounded-full"></div>
                            Executive City Transfers
                        </h3>
                        <ul className="space-y-2">
                            {[
                                { name: 'VIP Transfer Jeddah', href: '/locations/jeddah/' },
                                { name: 'Jeddah Airport Transfer', href: '/services/airport-transfers/' },
                                { name: 'Jeddah Port VIP Transfer', href: '/locations/jeddah/islamic-port/' },
                                { name: 'VIP Transfer Riyadh', href: '/locations/riyadh/' },
                                { name: 'Olaya District Transfer', href: '/locations/riyadh/olaya/' },
                                { name: 'Diriyah Gate VIP Transfer', href: '/locations/riyadh/diriyah/' },
                                { name: 'Bujairi Terrace Transfer', href: '/locations/riyadh/bujairi-terrace/' },
                                { name: 'KAFD Riyadh Transfer', href: '/locations/riyadh/kafd/' },
                                { name: 'Boulevard World Transfer', href: '/locations/riyadh/boulevard-world/' },
                                { name: 'VIP Transfer Dammam', href: '/locations/dammam/' },
                                { name: 'Al Khobar Private Transfer', href: '/locations/al-khobar/' },
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className="text-gray-400 hover:text-white hover:translate-x-1 transition-all flex items-center gap-2 group text-sm font-medium">
                                        <div className="w-1 h-1 bg-gray-600 rounded-full group-hover:bg-primary transition-colors"></div>
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Tourism & Regions */}
                    <div>
                        <h3 className="text-lg font-black text-white mb-6 flex items-center gap-2">
                            <div className="w-1 h-6 bg-primary rounded-full"></div>
                            Premium Tourist Transfers
                        </h3>
                        <ul className="space-y-2">
                            {[
                                { name: 'VIP Transfer AlUla', href: '/locations/alula/' },
                                { name: 'Hegra VIP Transfer', href: '/locations/alula/hegra/' },
                                { name: 'VIP Transfer Taif', href: '/locations/taif/' },
                                { name: 'VIP Transfer Yanbu', href: '/locations/yanbu/' },
                                { name: 'Jubail Industrial Transfer', href: '/locations/jubail/industrial-city/' },
                                { name: 'Exclusive NEOM Transfer', href: '/locations/neom/' },
                                { name: 'Abha Private Transfer', href: '/locations/abha/al-soudah/' },
                                { name: 'Bahrain VIP Transfer', href: '/routes/dammam-bahrain/' },
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className="text-gray-400 hover:text-white hover:translate-x-1 transition-all flex items-center gap-2 group text-sm font-medium">
                                        <div className="w-1 h-1 bg-gray-600 rounded-full group-hover:bg-primary transition-colors"></div>
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 5: Routes & Services */}
                    <div>
                        <h3 className="text-lg font-black text-white mb-6 flex items-center gap-2">
                            <div className="w-1 h-6 bg-primary rounded-full"></div>
                            VIP Intercity Routes
                        </h3>
                        <ul className="space-y-2">
                            {[
                                { name: 'Transfer Jeddah to Makkah', href: '/routes/jeddah-makkah/' },
                                { name: 'Transfer Makkah to Madinah', href: '/routes/makkah-madinah/' },
                                { name: 'Transfer Jeddah to Madinah', href: '/routes/jeddah-madinah/' },
                                { name: 'Transfer Jeddah to Yanbu', href: '/routes/jeddah-yanbu/' },
                                { name: 'Transfer Jeddah to Taif', href: '/routes/jeddah-taif/' },
                                { name: 'Transfer Riyadh to Dammam', href: '/routes/riyadh-dammam/' },
                                { name: 'Transfer Dammam to Bahrain', href: '/routes/dammam-bahrain/' },
                                { name: 'Jeddah Train Transfer', href: '/routes/jeddah-train-station-taxi/' },
                                { name: 'Madinah Train Transfer', href: '/routes/madinah-train-station-taxi/' },
                                { name: 'VIP Umrah Transfer', href: '/services/umrah-transport/' },
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className="text-gray-400 hover:text-white hover:translate-x-1 transition-all flex items-center gap-2 group text-sm font-medium">
                                        <div className="w-1 h-1 bg-gray-600 rounded-full group-hover:bg-primary transition-colors"></div>
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        {/* Partners links could go here or be omitted to be cleaner, I'll omit strictly partner links to save space unless requested, but keeping socials in Col 1 is standard brand behavior */}
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-sm text-gray-500 font-medium">
                        &copy; {new Date().getFullYear()} VIPTransferKSA. Premium Chauffeur Service.
                    </div>
                    <div className="flex flex-wrap justify-center gap-6">
                        <Link href="/privacy-policy/" className="text-sm text-gray-500 hover:text-primary transition-colors font-medium">Privacy Policy</Link>
                        <Link href="/terms-conditions/" className="text-sm text-gray-500 hover:text-primary transition-colors font-medium">Terms of Service</Link>
                        <Link href="/sitemap.xml" className="text-sm text-gray-500 hover:text-primary transition-colors font-medium">Sitemap</Link>
                        <Link href="/contact/" className="text-sm text-gray-500 hover:text-primary transition-colors font-medium">Support Center</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
