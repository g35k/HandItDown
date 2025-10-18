import React from 'react';
interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}
export function SectionHeader({
  title,
  subtitle,
  className = ''
}: SectionHeaderProps) {
  return <div className={`mb-8 ${className}`}>
      <h2 className="text-2xl font-bold tracking-wide text-gray-900 uppercase">
        {title}
      </h2>
      {subtitle && <p className="mt-2 text-lg text-gray-600">{subtitle}</p>}
    </div>;
}