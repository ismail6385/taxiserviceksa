import { Facebook, Instagram, Twitter, Linkedin, Youtube, Star } from 'lucide-react';

export default function SocialSidebar() {
    return (
        <div className="fixed left-0 top-1/2 -translate-y-1/2 z-[100] hidden lg:flex flex-col bg-white/90 backdrop-blur-md shadow-2xl rounded-r-2xl overflow-hidden border border-gray-200/50 py-2">
            <a
                href="https://www.facebook.com/people/Taxi-Service-KSA/61573850597962/"
                target="_blank"
                rel="nofollow noopener noreferrer"
                aria-label="Facebook"
                className="p-3.5 hover:bg-[#1877F2] hover:text-white text-[#1877F2] transition-all duration-300 flex items-center justify-center group relative hover:scale-110"
                title="Facebook"
            >
                <Facebook className="w-5 h-5 shadow-sm" />
                <span className="absolute left-full ml-3 bg-gray-900 text-white text-[10px] font-bold tracking-wider uppercase px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none translate-x-[-10px] group-hover:translate-x-0 shadow-xl">
                    Facebook
                </span>
            </a>

            <a
                href="https://www.instagram.com/taxiserviceksa/"
                target="_blank"
                rel="nofollow noopener noreferrer"
                aria-label="Instagram"
                className="p-3.5 hover:bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888] hover:text-white text-[#bc1888] transition-all duration-300 flex items-center justify-center group relative hover:scale-110"
                title="Instagram"
            >
                <Instagram className="w-5 h-5" />
                <span className="absolute left-full ml-3 bg-gray-900 text-white text-[10px] font-bold tracking-wider uppercase px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none translate-x-[-10px] group-hover:translate-x-0 shadow-xl">
                    Instagram
                </span>
            </a>

            <a
                href="https://twitter.com/TaxiServiceKSA"
                target="_blank"
                rel="nofollow noopener noreferrer"
                aria-label="Twitter"
                className="p-3.5 hover:bg-black hover:text-white text-black transition-all duration-300 flex items-center justify-center group relative hover:scale-110"
                title="Twitter (X)"
            >
                <Twitter className="w-5 h-5" />
                <span className="absolute left-full ml-3 bg-gray-900 text-white text-[10px] font-bold tracking-wider uppercase px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none translate-x-[-10px] group-hover:translate-x-0 shadow-xl">
                    Twitter (X)
                </span>
            </a>

            <a
                href="https://www.linkedin.com/company/taxi-service-ksa/"
                target="_blank"
                rel="nofollow noopener noreferrer"
                aria-label="LinkedIn"
                className="p-3.5 hover:bg-[#0077b5] hover:text-white text-[#0077b5] transition-all duration-300 flex items-center justify-center group relative hover:scale-110"
                title="LinkedIn"
            >
                <Linkedin className="w-5 h-5" />
                <span className="absolute left-full ml-3 bg-gray-900 text-white text-[10px] font-bold tracking-wider uppercase px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none translate-x-[-10px] group-hover:translate-x-0 shadow-xl">
                    LinkedIn
                </span>
            </a>

            <a
                href="https://www.youtube.com/channel/UCeP44oxBUKUG5X-UhYmPMNw"
                target="_blank"
                rel="nofollow noopener noreferrer"
                aria-label="YouTube"
                className="p-3.5 hover:bg-[#FF0000] hover:text-white text-[#FF0000] transition-all duration-300 flex items-center justify-center group relative hover:scale-110"
                title="YouTube"
            >
                <Youtube className="w-5 h-5" />
                <span className="absolute left-full ml-3 bg-gray-900 text-white text-[10px] font-bold tracking-wider uppercase px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none translate-x-[-10px] group-hover:translate-x-0 shadow-xl">
                    YouTube
                </span>
            </a>

            <a
                href="https://www.pinterest.com/taxiserviceksa/"
                target="_blank"
                rel="nofollow noopener noreferrer"
                aria-label="Pinterest"
                className="p-3.5 hover:bg-[#BD081C] hover:text-white text-[#BD081C] transition-all duration-300 flex items-center justify-center group relative hover:scale-110"
                title="Pinterest"
            >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.399.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.951-7.252 4.173 0 7.41 2.967 7.41 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.367 18.62 0 12.017 0z" />
                </svg>
                <span className="absolute left-full ml-3 bg-gray-900 text-white text-[10px] font-bold tracking-wider uppercase px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none translate-x-[-10px] group-hover:translate-x-0 shadow-xl">
                    Pinterest
                </span>
            </a>

            <div className="mx-3 my-2 border-t border-gray-100"></div>

            <a
                href="https://www.trustpilot.com/review/taxiserviceksa.com"
                target="_blank"
                rel="nofollow noopener noreferrer"
                aria-label="Trustpilot"
                className="p-3.5 hover:bg-[#00b67a] hover:text-white text-[#00b67a] transition-all duration-300 flex items-center justify-center group relative hover:scale-110"
                title="Trustpilot"
            >
                <Star className="w-5 h-5 fill-current" />
                <span className="absolute left-full ml-3 bg-gray-900 text-white text-[10px] font-bold tracking-wider uppercase px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none translate-x-[-10px] group-hover:translate-x-0 shadow-xl">
                    Trustpilot
                </span>
            </a>
        </div>
    );
}
