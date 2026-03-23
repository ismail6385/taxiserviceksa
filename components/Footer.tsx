import Link from 'next/link';
import {
    Facebook, Instagram, Twitter, Linkedin, Car, Youtube, Share2,
    MapPin, Mail, Clock, ShieldCheck, Globe
} from 'lucide-react';
import WhatsAppIcon from '@/components/WhatsAppIcon';

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
                                <span className="text-2xl font-black text-white tracking-tight leading-none uppercase">
                                    Taxi Service <span className="text-primary">KSA</span>
                                </span>
                                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-2 block">Professional Chauffeur Service</span>
                            </div>
                        </Link>
                        <p className="text-gray-400 leading-relaxed text-sm font-medium pr-4">
                            Your trusted partner for premium transportation across Saudi Arabia. We specialize in Umrah transfers, corporate logistics, and luxury chauffeur services.
                        </p>

                        <div className="space-y-4">
                            <a href="mailto:info@taxiserviceksa.com" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group">
                                <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary transition-all">
                                    <Mail className="w-5 h-5 text-primary group-hover:text-white" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[10px] uppercase font-black text-gray-500 tracking-[0.2em]">Email Us</span>
                                    <span className="text-sm font-bold">info@taxiserviceksa.com</span>
                                </div>
                            </a>
                            <a href="https://wa.me/966569487569" target="_blank" rel="nofollow noopener noreferrer" className="flex items-center gap-3 text-gray-400 hover:text-emerald-400 transition-colors group">
                                <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-emerald-500/10 group-hover:bg-emerald-500 transition-all">
                                    <WhatsAppIcon className="w-5 h-5 text-emerald-500 fill-emerald-500 group-hover:text-white group-hover:fill-white" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[10px] uppercase font-black text-gray-500 tracking-[0.2em]">WhatsApp Us</span>
                                    <span className="text-sm font-bold">+966 56 948 7569</span>
                                </div>
                            </a>
                        </div>

                        {/* Socials (Moved back here for better brand association) */}
                        <div className="flex gap-3">
                            {[
                                { title: 'Facebook', icon: Facebook, href: 'https://www.facebook.com/people/Taxi-Service-KSA/61573850597962/' },
                                { title: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/company/taxi-service-ksa/' },
                                { title: 'YouTube', icon: Youtube, href: 'https://www.youtube.com/channel/UCeP44oxBUKUG5X-UhYmPMNw' },
                                {
                                    title: 'Pinterest', icon: () => (
                                        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" /></svg>
                                    ), href: 'https://www.pinterest.com/taxiserviceksa/'
                                }
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
                                { name: 'Taxi In Makkah', href: '/services/taxi-in-makkah/' },
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
                                { name: 'Taxi In Jeddah', href: '/services/taxi-in-jeddah/' },
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
                            VIP Tourist Transfers
                        </h3>
                        <ul className="space-y-2">
                            {[
                                { name: 'Taxi In Tabuk', href: '/services/taxi-in-tabuk/' },
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
                            Popular GCC Routes
                        </h3>
                        <ul className="space-y-2">
                            {[
                                { name: 'Riyadh to Dubai Taxi', href: '/routes/riyadh-dubai/' },
                                { name: 'Dammam to Doha Taxi', href: '/routes/dammam-doha/' },
                                { name: 'Jeddah to Amman Taxi', href: '/routes/jeddah-amman/' },
                                { name: 'Kuwait to Riyadh Taxi', href: '/routes/kuwait-riyadh/' },
                                { name: 'Al Batha Border Taxi', href: '/border-crossings/taxi-al-batha-border-crossing/' },
                                { name: 'King Fahd Causeway', href: '/border-crossings/taxi-king-fahd-causeway-border-crossing/' },
                                { name: 'Saudi to Bahrain VIP', href: '/routes/dammam-bahrain/' },
                                { name: 'Jeddah to Makkah VIP', href: '/routes/jeddah-makkah/' },
                                { name: 'Makkah to Madinah VIP', href: '/routes/makkah-madinah/' },
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

                </div>

                {/* Footer WhatsApp Banner */}
                <div className="mb-20 bg-gradient-to-r from-emerald-600/20 to-primary/20 border border-emerald-500/30 rounded-[3rem] p-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -mr-32 -mt-32 animate-pulse"></div>
                    <div>
                        <div className="text-2xl md:text-3xl font-black text-white mb-3">Ready to Start Your Journey?</div>
                        <p className="text-gray-400 text-lg">Book your <strong>VIP Private Transfer</strong> directly on WhatsApp for instant confirmation.</p>
                    </div>
                    <a 
                        href="https://wa.me/966569487569?text=Hello%2C%20I%20want%20to%20get%20a%20VIP%20taxi%20quote." 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-emerald-600 hover:bg-emerald-700 text-white font-black px-12 py-5 rounded-2xl text-lg shadow-xl shadow-emerald-500/30 transition-all hover:scale-105 active:scale-95 flex items-center gap-3 whitespace-nowrap"
                    >
                        <WhatsAppIcon className="w-6 h-6 fill-current" />
                        Chat with us Now
                    </a>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-sm text-gray-500 font-medium uppercase">
                        &copy; {new Date().getFullYear()} Taxi Service KSA. Professional Chauffeur Service.
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
