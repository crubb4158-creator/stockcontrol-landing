import React from 'react';

// Bandera de Paraguay - SVG simple (~1KB vs 413KB PNG)
export const FlagPY: React.FC<{ className?: string }> = ({ className = "h-4 w-4" }) => (
    <svg viewBox="0 0 32 32" className={className}>
        <rect width="32" height="10.67" fill="#D52B1E" />
        <rect y="10.67" width="32" height="10.67" fill="#FFFFFF" />
        <rect y="21.33" width="32" height="10.67" fill="#0038A8" />
    </svg>
);

// Bandera de Brasil - SVG simple (~1KB vs 450KB PNG)
export const FlagBR: React.FC<{ className?: string }> = ({ className = "h-4 w-4" }) => (
    <svg viewBox="0 0 32 32" className={className}>
        <rect width="32" height="32" fill="#009739" />
        <polygon points="16,4 28,16 16,28 4,16" fill="#FEDD00" />
        <circle cx="16" cy="16" r="6" fill="#002776" />
    </svg>
);
