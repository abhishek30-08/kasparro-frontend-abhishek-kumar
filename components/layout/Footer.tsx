// components/layout/Footer.tsx
"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const footerLinks = {
  Product: [
    { label: 'Platform', href: '/platform' },
    { label: 'Features', href: '/platform#features' },
    { label: 'Pricing', href: '/platform#pricing' },
  ],
  Company: [
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '#' },
    { label: 'Contact', href: '#' },
  ],
  Resources: [
    { label: 'Documentation', href: '#' },
    { label: 'Case Studies', href: '#' },
    { label: 'API Reference', href: '#' },
  ],
};

export default function Footer() {
  const pathname = usePathname();
  const isDashboard = pathname?.startsWith('/app');

  // Don't show footer in dashboard
  if (isDashboard) return null;

  return (
    <footer className="border-t bg-slate-50">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600">
                <span className="text-lg font-bold text-white">K</span>
              </div>
              <span className="text-xl font-bold">Kasparro</span>
            </div>
            <p className="text-sm text-slate-600">
              AI-native SEO & Brand Intelligence for the AI-first search era
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="mb-4 text-sm font-semibold">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-600 transition-colors hover:text-indigo-600"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-slate-600">
              © {new Date().getFullYear()} Kasparro. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="text-sm text-slate-600 hover:text-indigo-600">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-slate-600 hover:text-indigo-600">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}