import { Section } from '@/components/shared/section';
import { Activity, DraftingCompass, Mail, Zap } from 'lucide-react';
import Image from 'next/image';
import { ShineBorder } from '@/components/magicui/shine-border';

const content = {
  title: 'Powerful Financial Analytics',
  description:
    "Gain deep insights into your financial data with Aviora's advanced analytics tools. Track income, expenses, and investments with customizable reports and visualizations.",
  feature1: 'Detailed Income Tracking',
  feature2: 'Expense Categorization',
  feature3: 'Investment Performance Analysis',
  feature4: 'Customizable Financial Reports',
};

export const Feature1 = () => {
  return (
    <Section id="feature-1" className="bg-[var(--background)] py-16 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-2 lg:grid-cols-5 lg:gap-24">
          <div className="lg:col-span-2">
            <div className="md:pr-6 lg:pr-0">
              <h2 className="text-3xl font-semibold lg:text-4xl text-[var(--foreground)]">
                {content.title}
              </h2>
              <p className="mt-6 text-[var(--muted-foreground)] leading-relaxed">
                {content.description}
              </p>
            </div>
            <ul className="mt-8 divide-y border-y divide-border border-border">
              <li className="flex items-center gap-3 py-3">
                <Mail className="size-5 text-[var(--primary)]" />
                <span className="text-sm sm:text-base text-[var(--foreground)]">
                  {content.feature1}
                </span>
              </li>
              <li className="flex items-center gap-3 py-3">
                <Zap className="size-5 text-primary" />
                <span className="text-sm sm:text-base text-[var(--foreground)]">
                  {content.feature2}
                </span>
              </li>
              <li className="flex items-center gap-3 py-3">
                <Activity className="size-5 text-[var(--primary)]" />
                <span className="text-sm sm:text-base text-[var(--foreground)]">
                  {content.feature3}
                </span>
              </li>
              <li className="flex items-center gap-3 py-3">
                <DraftingCompass className="size-5 text-[var(--primary)]" />
                <span className="text-sm sm:text-base text-[var(--foreground)]">
                  {content.feature4}
                </span>
              </li>
            </ul>
          </div>
          <div className="border-[var(--border)]/50 relative rounded-3xl border p-3 lg:col-span-3 h-[400px]">
            <ShineBorder shineColor={['#A07CFE', '#FE8FB5', '#FFBE7B']} />
            <div className="bg-linear-to-b relative rounded-2xl p-px h-full">
              <Image
                src="/assets/images/feature-1.png"
                className="hidden rounded-[15px] dark:block w-full h-full object-cover"
                alt="payments illustration dark"
                width={1207}
                height={929}
              />
              <Image
                src="/assets/images/feature-1.png"
                className="rounded-[15px] shadow dark:hidden w-full h-full object-cover"
                alt="payments illustration light"
                width={1207}
                height={929}
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
