'use client';

interface LocationAutocompleteProps {
    value: string;
    onChange: (value: string) => void;
    name?: string;
    placeholder?: string;
    className?: string;
    required?: boolean;
}

// Plain free-text location field. The OpenStreetMap (Nominatim) suggestion
// lookup was removed at the owner's request; customers type the pickup or
// drop-off themselves, e.g. "my hotel in Aziziyah".
export default function LocationAutocomplete({
    value, onChange, name, placeholder, className, required,
}: LocationAutocompleteProps) {
    return (
        <div className="relative">
            <input
                name={name}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                required={required}
                autoComplete="off"
                className={className}
            />
        </div>
    );
}
