import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy | Taxi Service KSA',
    description: 'Privacy Policy for Taxi Service KSA app and website. Learn how we collect, use, and protect your personal information.',
    alternates: {
        canonical: 'https://taxiserviceksa.com/privacy/',
    },
};

export default function PrivacyPolicyPage() {
    const lastUpdated = 'May 17, 2026';

    return (
        <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm p-8 md:p-12">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
                <p className="text-sm text-gray-500 mb-8">Last updated: {lastUpdated}</p>

                <div className="prose prose-gray max-w-none space-y-8 text-gray-700">

                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-3">1. Introduction</h2>
                        <p>
                            Taxi Service KSA (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) operates the Taxi Service KSA mobile application and website at taxiserviceksa.com. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-3">2. Information We Collect</h2>
                        <p className="mb-3">We may collect the following types of information:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Personal Information:</strong> Name, email address, and phone number when you make a booking or contact us.</li>
                            <li><strong>Booking Information:</strong> Pickup and drop-off locations, travel dates, number of passengers, and vehicle preferences.</li>
                            <li><strong>Communication Data:</strong> Messages you send us via WhatsApp, email, or our contact form.</li>
                            <li><strong>Usage Data:</strong> Pages visited, features used, and time spent on our app and website (via Google Analytics).</li>
                            <li><strong>Device Information:</strong> Device type, operating system, and app version for technical support purposes.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-3">3. How We Use Your Information</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>To process and confirm your taxi bookings</li>
                            <li>To communicate with you about your booking status</li>
                            <li>To send booking confirmations, receipts, and invoices</li>
                            <li>To improve our services and app experience</li>
                            <li>To respond to your inquiries and provide customer support</li>
                            <li>To comply with legal obligations</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-3">4. Information Sharing</h2>
                        <p className="mb-3">We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Service Providers:</strong> With our drivers and logistics partners to fulfill your booking.</li>
                            <li><strong>Legal Requirements:</strong> When required by Saudi Arabian law or legal process.</li>
                            <li><strong>Business Transfer:</strong> In the event of a merger or acquisition.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-3">5. Data Storage & Security</h2>
                        <p>
                            Your data is stored securely using Supabase (PostgreSQL) with row-level security policies. We implement industry-standard security measures including HTTPS encryption, access controls, and regular security audits to protect your personal information.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-3">6. Third-Party Services</h2>
                        <p className="mb-3">Our app and website use the following third-party services:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Google Analytics:</strong> For website and app usage analytics</li>
                            <li><strong>WhatsApp:</strong> For customer communication and booking</li>
                            <li><strong>Resend:</strong> For transactional email delivery</li>
                            <li><strong>Microsoft Clarity:</strong> For user experience improvement</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-3">7. Children&apos;s Privacy</h2>
                        <p>
                            Our services are not directed to children under 13 years of age. We do not knowingly collect personal information from children under 13. If you believe we have inadvertently collected such information, please contact us immediately.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-3">8. Your Rights</h2>
                        <p className="mb-3">You have the right to:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Access the personal information we hold about you</li>
                            <li>Request correction of inaccurate data</li>
                            <li>Request deletion of your personal data</li>
                            <li>Opt out of marketing communications</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-3">9. Cookies</h2>
                        <p>
                            Our website uses cookies for analytics and to improve your browsing experience. You can control cookie settings through your browser. Disabling cookies may affect some functionality of our website.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-3">10. Changes to This Policy</h2>
                        <p>
                            We may update this Privacy Policy from time to time. We will notify you of any changes by updating the &quot;Last updated&quot; date. Continued use of our services after changes constitutes acceptance of the updated policy.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-3">11. Contact Us</h2>
                        <p>If you have any questions about this Privacy Policy, please contact us:</p>
                        <div className="mt-3 p-4 bg-gray-50 rounded-xl border border-gray-200 space-y-1">
                            <p><strong>Taxi Service KSA</strong></p>
                            <p>Email: <a href="mailto:taxiserviceksa9988@gmail.com" className="text-primary hover:underline">taxiserviceksa9988@gmail.com</a></p>
                            <p>WhatsApp: <a href="https://wa.me/966560732928" className="text-primary hover:underline">+966 56 073 2928</a></p>
                            <p>Website: <a href="https://taxiserviceksa.com" className="text-primary hover:underline">taxiserviceksa.com</a></p>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    );
}
