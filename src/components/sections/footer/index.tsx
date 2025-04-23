import { Section } from '@/components/shared/section';
import Link from 'next/link';

const content = {
  description:
    'Aviora: Your comprehensive platform for financial analytics, debit management, and tracking. Empowering individuals and businesses to achieve financial clarity and control.',
  footerLinks: [
    {
      title: 'Product',
      links: [
        { label: 'Features', href: '#features' },
        { label: 'Pricing', href: '#pricing' },
        { label: 'How It Works', href: '#how-it-works' },
        { label: 'Testimonials', href: '#testimonial' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '#' },
        { label: 'Contact', href: '#contact' },
        { label: 'Careers', href: '#' },
        { label: 'Blog', href: '#' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Support', href: '#' },
        { label: 'FAQ', href: '#faq' },
        { label: 'Documentation', href: '#' },
        { label: 'API', href: '#' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', href: '#' },
        { label: 'Terms of Service', href: '#' },
        { label: 'Cookie Policy', href: '#' },
      ],
    },
  ],
  copyright: `© ${new Date().getFullYear()} Aviora. All rights reserved.`,
};

export const Footer = () => {
  return (
    <Section id="footer" className="bg-[var(--background)] py-16">
      <div className="mx-auto max-w-6xl px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="flex flex-col gap-2">
          <div className="text-xl font-bold text-[var(--foreground)]">Aviora</div>
          <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
            {content.description}
          </p>
        </div>
        {content.footerLinks.map((column, index) => (
          <div key={index} className="flex flex-col gap-2">
            <h3 className="text-sm font-semibold text-[var(--foreground)] tracking-wider uppercase">
              {column.title}
            </h3>
            <ul className="space-y-2">
              {column.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-12 border-t border-[var(--border)] py-4 text-center text-xs text-[var(--muted-foreground)]">
        {content.copyright}
      </div>
    </Section>
  );
};
