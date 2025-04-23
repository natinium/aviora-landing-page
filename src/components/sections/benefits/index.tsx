import { Section } from '@/components/shared/section';
import { Cpu, Lock, Sparkles, Zap } from 'lucide-react';
import Image from 'next/image';

const content = {
  title: 'Comprehensive Financial Management',
  description:
    'Aviora offers a complete suite of tools for financial analytics, debit management, and tracking, giving you a 360-degree view of your finances.',
  benefits: [
    {
      icon: Zap,
      title: 'Real-time Analytics',
      description:
        'Gain instant insights into your financial performance with real-time data and customizable dashboards.',
    },
    {
      icon: Cpu,
      title: 'Powerful Tracking',
      description: 'Monitor transactions, set budgets, and track spending habits with ease.',
    },
    {
      icon: Lock,
      title: 'Secure Debit Management',
      description:
        'Securely manage your debts, set payment reminders, and visualize your path to financial freedom.',
    },
    {
      icon: Sparkles,
      title: 'AI-Powered Insights',
      description:
        'Leverage AI to identify trends, optimize spending, and make smarter financial decisions.',
    },
  ],
};

export const Benefits = () => {
  return (
    <Section
      id="benefits"
      className="
        bg-background
        text-foreground
        py-16
      "
    >
      <div className="mx-auto max-w-5xl space-y-12 px-6">
        <div className="relative z-10 grid items-center gap-8 md:grid-cols-2">
          <h2 className="text-3xl font-semibold sm:text-4xl">{content.title}</h2>
          <p className="max-w-sm sm:ml-auto text-sm sm:text-base text-[var(--muted-foreground)]">
            {content.description}
          </p>
        </div>
        <div className="relative rounded-xl overflow-hidden md:-mx-8">
          <div className="aspect-88/36 relative">
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] to-transparent z-10"></div>
            <Image
              src="/assets/images/dashboard.webp"
              className="absolute inset-0 z-10 w-full h-full object-cover border"
              alt="Aviora Dashboard"
              width={2797}
              height={1137}
            />
            <Image
              src="/assets/images/dashboard.webp"
              className="hidden dark:block absolute inset-0 z-10 w-full h-full object-cover border"
              alt="Aviora Dashboard"
              width={2797}
              height={1137}
            />
          </div>
        </div>
        <div className="relative mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {content.benefits.map((benefit, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center gap-2">
                <benefit.icon className="size-4 text-[var(--primary)]" />
                <h3 className="text-sm font-medium text-[var(--foreground)]">{benefit.title}</h3>
              </div>
              <p className="text-[var(--muted-foreground)] text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
