import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Users, Briefcase, Languages, Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getApprovedDriverBySlug } from '@/lib/driverOnboardingService';
import { driverLocationName, driverServiceLabel, firstVehicle, VEHICLE_PHOTO_SLOTS } from '@/lib/driver-constants';

export const dynamic = 'force-dynamic';

interface Props {
    params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const driver = await getApprovedDriverBySlug(params.slug);
    if (!driver) return { title: 'Driver Not Found | Taxi Service KSA' };

    const name = driver.display_name || 'Professional Driver';
    return {
        title: `${name} | Professional Driver | Taxi Service KSA`,
        description: driver.bio || `Book a ride with ${name}, a professional chauffeur on Taxi Service KSA.`,
        alternates: { canonical: `https://taxiserviceksa.com/drivers/${driver.slug}/` },
        // Individual driver profiles start noindex — location/route pages
        // remain the site's primary SEO surface (see driver onboarding
        // report for how to opt a profile into indexing later).
        robots: { index: false, follow: true },
    };
}

export default async function DriverProfilePage({ params }: Props) {
    const driver = await getApprovedDriverBySlug(params.slug);
    if (!driver) notFound();

    const vehicle = firstVehicle(driver);
    const locations = ((driver as any).driver_locations || []).map((l: any) => l.location_slug);
    const services = ((driver as any).driver_services || []).map((s: any) => s.service_slug);
    const name = driver.display_name || 'Professional Driver';
    const photos = vehicle?.photos || {};
    const galleryEntries = VEHICLE_PHOTO_SLOTS
        .map(slot => ({ slot: slot.key, label: slot.label, url: photos[slot.key]?.url }))
        .filter(p => p.url);

    return (
        <div className="bg-gray-50 min-h-screen">
            <section className="bg-white border-b border-gray-200">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col sm:flex-row items-center sm:items-start gap-6">
                    <div className="relative w-28 h-28 rounded-full overflow-hidden bg-gray-100 shrink-0 border-4 border-white shadow-lg">
                        {driver.profile_photo_url ? (
                            <Image src={driver.profile_photo_url} alt={name} fill className="object-cover" sizes="112px" />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center text-gray-400 text-3xl font-bold bg-gray-100">
                                {name.charAt(0).toUpperCase()}
                            </div>
                        )}
                    </div>
                    <div className="text-center sm:text-left flex-1">
                        <h1 className="text-3xl font-bold text-gray-900">{name}</h1>
                        <p className="text-gray-500 mt-1">Professional Chauffeur</p>
                        <div className="flex flex-wrap justify-center sm:justify-start gap-2 mt-4">
                            {locations.map((slug: string) => (
                                <span key={slug} className="text-xs bg-gray-100 text-gray-700 font-semibold px-3 py-1 rounded-full">{driverLocationName(slug)}</span>
                            ))}
                        </div>
                    </div>
                    <div className="w-full sm:w-auto">
                        <Button asChild size="lg" className="w-full bg-primary text-black hover:bg-primary/90 font-bold">
                            <Link href={`/booking?driver=${encodeURIComponent(driver.slug)}`}>
                                Request a Quote <ArrowRight className="w-4 h-4 ml-2" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

            <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 lg:grid-cols-3 gap-10">
                <div className="lg:col-span-2 space-y-10">
                    {driver.bio && (
                        <div>
                            <h2 className="text-xl font-bold text-gray-900 mb-3">About</h2>
                            <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">{driver.bio}</p>
                        </div>
                    )}

                    {vehicle && (
                        <div>
                            <h2 className="text-xl font-bold text-gray-900 mb-4">Vehicle</h2>
                            <div className="bg-white rounded-2xl border border-gray-200 p-6">
                                <p className="font-bold text-lg text-gray-900">{[vehicle.year, vehicle.make, vehicle.model].filter(Boolean).join(' ')}</p>
                                <p className="text-sm text-gray-500 mb-4">{vehicle.category} · {vehicle.color}</p>
                                <div className="flex gap-6 text-sm text-gray-600">
                                    {vehicle.passenger_capacity != null && <span className="flex items-center gap-1.5"><Users className="w-4 h-4 text-primary" /> {vehicle.passenger_capacity} Passengers</span>}
                                    {vehicle.luggage_capacity != null && <span className="flex items-center gap-1.5"><Briefcase className="w-4 h-4 text-primary" /> {vehicle.luggage_capacity} Luggage</span>}
                                </div>
                            </div>

                            {galleryEntries.length > 0 && (
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
                                    {galleryEntries.map(p => (
                                        <div key={p.slot} className="relative aspect-video rounded-lg overflow-hidden bg-gray-100">
                                            <Image src={p.url as string} alt={`${name}'s vehicle — ${p.label}`} fill className="object-cover" sizes="200px" />
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}

                    {services.length > 0 && (
                        <div>
                            <h2 className="text-xl font-bold text-gray-900 mb-3">Services</h2>
                            <div className="flex flex-wrap gap-2">
                                {services.map((slug: string) => (
                                    <span key={slug} className="text-sm bg-primary/10 text-primary font-semibold px-3 py-1.5 rounded-full">{driverServiceLabel(slug)}</span>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                <div className="space-y-6">
                    <div className="bg-white rounded-2xl border border-gray-200 p-6 space-y-4">
                        {driver.languages && driver.languages.length > 0 && (
                            <div className="flex items-start gap-3 text-sm">
                                <Languages className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                                <div>
                                    <p className="font-semibold text-gray-900">Languages</p>
                                    <p className="text-gray-500">{driver.languages.join(', ')}</p>
                                </div>
                            </div>
                        )}
                        {driver.years_experience != null && (
                            <div className="flex items-start gap-3 text-sm">
                                <Clock className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                                <div>
                                    <p className="font-semibold text-gray-900">Experience</p>
                                    <p className="text-gray-500">{driver.years_experience} years</p>
                                </div>
                            </div>
                        )}
                        {driver.availability && (
                            <div className="flex items-start gap-3 text-sm">
                                <Clock className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                                <div>
                                    <p className="font-semibold text-gray-900">Availability</p>
                                    <p className="text-gray-500">{driver.availability}</p>
                                </div>
                            </div>
                        )}
                    </div>

                    <Link href="/drivers/" className="text-sm text-primary hover:underline block text-center">
                        ← Back to all drivers
                    </Link>
                </div>
            </section>
        </div>
    );
}
