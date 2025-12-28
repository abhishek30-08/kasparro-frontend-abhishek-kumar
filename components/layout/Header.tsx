// components/layout/Header.tsx
"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

const navItems = [
  { label: 'Platform', href: '/platform' },
  { label: 'About', href: '/about' },
];

export default function Header() {
  const pathname = usePathname();
  const isDashboard = pathname?.startsWith('/app');

  // Don't show header in dashboard
  if (isDashboard) return null;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <nav className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600">
            <span className="text-lg font-bold text-white">K</span>
          </div>
          <span className="text-xl font-bold">Kasparro</span>
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-indigo-600 ${
                pathname === item.href
                  ? 'text-indigo-600'
                  : 'text-slate-600'
              }`}
            >
              {item.label}
            </Link>
          ))}

          {/* CTA Button */}
          <Link href="/app/dashboard">
            <Button className="bg-indigo-600 hover:bg-indigo-700">
              <Search className="mr-2 h-4 w-4" />
              Run Audit
            </Button>
          </Link>
        </div>
      </nav>
    </header>
  );
}