import Link from 'next/link';
import React from 'react';

interface BackLinkProps {
  href: string;
  label?: string;
}

const BackLink: React.FC<BackLinkProps> = ({ href, label = '<< назад' }) => {
  return (
    <Link href={href} className="text-blue-600 hover:underline mb-4 inline-block">
      {label}
    </Link>
  );
};

export default BackLink;