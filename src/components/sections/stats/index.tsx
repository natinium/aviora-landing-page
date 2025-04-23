import { Section } from '@/components/shared/section';

const content = {
  title: 'Aviora: Empowering Your Financial Journey',
  description:
    "Aviora is more than just a platform; it's a comprehensive ecosystem designed to help you achieve financial clarity and control.",
  statsDescription:
    'Join a growing community of users who trust Aviora for their financial analytics, debit management, and tracking needs.',
  users: '+10,000',
  usersLabel: 'Satisfied Users',
  transactions: '+1M',
  transactionsLabel: 'Transactions Tracked',
  quote:
    'Aviora has revolutionized the way I manage my finances. The intuitive interface and powerful tools have made tracking expenses and managing debts easier than ever before.',
  author: 'Jane Smith, Financial Consultant',
};

export const Stats = () => {
  return (
    <Section id="stats" className="bg-background py-16 md:py-32">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
        <div className="relative z-10 max-w-xl space-y-6">
          <h2 className="text-4xl font-medium lg:text-5xl">{content.title}</h2>
          <p>
            {content.description}
            <span className="font-medium">It supports an entire ecosystem</span> — from products
            innovate.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
          <div>
            <p>{content.statsDescription}</p>
            <div className="mb-12 mt-12 grid grid-cols-2 gap-2 md:mb-0">
              <div className="space-y-4">
                <div className="bg-linear-to-r from-zinc-950 to-zinc-600 bg-clip-text text-5xl font-bold text-transparent dark:from-white dark:to-zinc-800">
                  {content.users}
                </div>
                <p>{content.usersLabel}</p>
              </div>
              <div className="space-y-4">
                <div className="bg-linear-to-r from-zinc-950 to-zinc-600 bg-clip-text text-5xl font-bold text-transparent dark:from-white dark:to-zinc-800">
                  {content.transactions}
                </div>
                <p>{content.transactionsLabel}</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <blockquote className="border-l-4 pl-4">
              <p>{content.quote}</p>

              <div className="mt-6 space-y-3">
                <cite className="block font-medium">{content.author}</cite>
                <img
                  className="h-5 w-fit dark:invert"
                  src="https://html.tailus.io/blocks/customers/nvidia.svg"
                  alt="Nvidia Logo"
                  height="20"
                  width="auto"
                />
              </div>
            </blockquote>
          </div>
        </div>
      </div>
    </Section>
  );
};
