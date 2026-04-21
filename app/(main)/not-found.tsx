import Link from 'next/link';

export const metadata = {
  title: '404 - Page Not Found | Taxi Service KSA',
  description: 'The page you are looking for could not be found.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 py-20 text-center relative overflow-hidden bg-slate-50">
      {/* Background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-blue-100 rounded-full blur-[100px] md:blur-[120px] opacity-60 pointer-events-none" />
      
      <div className="relative z-10 flex flex-col items-center">
        <div className="relative mb-6 md:mb-8">
          <h1 className="text-[100px] md:text-[180px] font-black text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-blue-900 leading-none drop-shadow-sm select-none">
            404
          </h1>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center opacity-5 pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-48 h-48 md:w-64 md:h-64 text-blue-900">
              <path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25zM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 116 0h3a3 3 0 106 0h.375c1.036 0 1.875-.84 1.875-1.875V15H13.5z" />
              <path d="M16.5 4.5c-1.036 0-1.875.84-1.875 1.875v7.125h7.875V8.625a2.25 2.25 0 00-.659-1.591L18.091 3.28A2.25 2.25 0 0016.5 2.625v1.875z" />
            </svg>
          </div>
        </div>
        
        <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
          Looks like you're lost
        </h2>
        
        <p className="text-base md:text-xl text-slate-600 mb-10 max-w-2xl leading-relaxed px-4 md:px-0">
          We couldn't find the page you're looking for. It might have been moved, deleted, or perhaps you just took a wrong turn. Let's get you back on the right route.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-4 md:px-0">
          <Link 
            href="/"
            className="px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold text-base md:text-lg hover:bg-blue-700 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
            Back to Home
          </Link>
          <Link
            href="/booking"
            className="px-8 py-4 bg-white text-blue-600 border-2 border-blue-600 rounded-xl font-semibold text-base md:text-lg hover:bg-blue-50 hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Book a Taxi
          </Link>
        </div>
      </div>
    </div>
  );
}
