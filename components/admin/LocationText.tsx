// Shows a booking location in admin lists. Customers often paste a Google
// Maps link instead of an address; a raw 50-character URL can't wrap and
// stretches tables off-screen, so links render as a short "Map location"
// link and plain addresses may break anywhere when space is tight.
export default function LocationText({ value, className = '' }: { value?: string | null; className?: string }) {
    const v = (value || '').trim();
    if (!v) return <span className={className}>—</span>;
    const url = v.match(/https?:\/\/\S+/)?.[0];
    if (url) {
        const label = v.replace(url, '').trim();
        return (
            <span className={`[overflow-wrap:anywhere] ${className}`}>
                {label && <>{label} </>}
                <a href={url} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="font-semibold text-blue-600 hover:underline whitespace-nowrap">📍 Map location</a>
            </span>
        );
    }
    return <span className={`[overflow-wrap:anywhere] ${className}`}>{v}</span>;
}
