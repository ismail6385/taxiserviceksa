import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { AUTHORS } from '@/lib/constants';
import { ArrowRight, User, Award, ShieldCheck, Mail, Facebook, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
    title: 'Our Editorial Team & Transport Experts | Taxi Service KSA',
    description: 'Meet the experts behind Taxi Service KSA. Our team of transport specialists and logistics experts provide the most accurate guides for pilgrimage and intercity travel in Saudi Arabia.',
    keywords: ['Taxi Service KSA team', 'Muhammad Ismail', 'Saudi travel experts', 'Umrah logistics experts'],
    alternates: {
        canonical: 'https://taxiserviceksa.com/author/',
    },
};

export default function AuthorsPage() {
    return (
        <div className="bg-gray-50 min-h-screen pt-24 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Hero */}
                <div className="text-center mb-20">
                    <span className="bg-primary/10 text-primary font-bold tracking-widest uppercase text-xs px-4 py-2 rounded-full inline-block mb-4 border border-primary/20">
                        Editorial Team
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
                        Meet Our <span className="text-primary">Experts</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        The people behind the guides. Our team combines decades of transport experience with local knowledge to ensure your journey is perfect.
                    </p>
                </div>

                {/* Authors List */}
                <div className="space-y-12 max-w-5xl mx-auto">
                    {AUTHORS.map((author, index) => (
                        <div key={index} className="bg-white rounded-[2rem] p-8 md:p-12 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-500 overflow-hidden relative group">
                            <div className="flex flex-col md:flex-row gap-10 items-center md:items-start relative z-10">
                                {/* Avatar */}
                                <div className="w-40 h-40 md:w-56 md:h-56 relative flex-shrink-0 rounded-3xl overflow-hidden shadow-2xl border-4 border-white group-hover:scale-105 transition-transform duration-500">
                                    <Image
                                        src={author.avatar || '/logo.png'}
                                        alt={author.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                {/* Content */}
                                <div className="flex-1 text-center md:text-left">
                                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-4">
                                        <h2 className="text-3xl font-black text-gray-900 tracking-tight">{author.name}</h2>
                                        <div className="flex items-center gap-1.5 bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border border-blue-100">
                                            <Award className="w-3 h-3" /> {author.role}
                                        </div>
                                    </div>
                                    
                                    <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-3xl">
                                        {author.bio}
                                    </p>

                                    {/* Socials & Profile Link */}
                                    <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-6">
                                        <Link href={`/author/${author.slug}/`}>
                                            <Button className="bg-primary text-white hover:bg-black hover:text-white font-black uppercase tracking-widest px-8 h-12 rounded-xl transition-all">
                                                View All Articles <ArrowRight className="ml-2 w-4 h-4" />
                                            </Button>
                                        </Link>

                                        <div className="flex items-center gap-4">
                                            {author.social.facebook && (
                                                <a href={author.social.facebook} target="_blank" rel="noopener noreferrer" className="p-2.5 bg-gray-50 rounded-lg text-gray-400 hover:text-blue-600 hover:bg-blue-50 transition-all">
                                                    <Facebook className="w-5 h-5" />
                                                </a>
                                            )}
                                            {author.social.linkedin && (
                                                <a href={author.social.linkedin} target="_blank" rel="noopener noreferrer" className="p-2.5 bg-gray-50 rounded-lg text-gray-400 hover:text-blue-700 hover:bg-blue-50 transition-all">
                                                    <Linkedin className="w-5 h-5" />
                                                </a>
                                            )}
                                            {author.social.twitter && (
                                                <a href={author.social.twitter} target="_blank" rel="noopener noreferrer" className="p-2.5 bg-gray-50 rounded-lg text-gray-400 hover:text-sky-500 hover:bg-sky-50 transition-all">
                                                    <Twitter className="w-5 h-5" />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Background Elements */}
                            <div className="absolute top-0 right-0 p-8 text-gray-50 group-hover:text-primary/5 transition-colors">
                                <User className="w-32 h-32 transform translate-x-10 -translate-y-10" />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Team CTA */}
                <div className="mt-20 bg-gray-900 rounded-[3rem] p-12 text-center text-white border border-white/5 relative overflow-hidden">
                    <div className="relative z-10 flex flex-col items-center">
                        <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-6">
                            <ShieldCheck className="w-8 h-8 text-primary" />
                        </div>
                        <h2 className="text-3xl font-bold mb-4">Editorial Integrity</h2>
                        <p className="text-gray-400 max-w-xl mb-10 leading-relaxed text-lg">
                            Every piece of content on Taxi Service KSA is reviewed by our logistics team to ensure travelers get the most accurate and up-to-date transport information in the Kingdom.
                        </p>
                        <Link href="/contact/">
                            <Button variant="outline" className="border-white/20 text-white hover:bg-white hover:text-black font-black uppercase tracking-widest px-10 h-14 rounded-xl">
                                Join Our Expert Team
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
