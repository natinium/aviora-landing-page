import { Section } from '@/components/shared/section';

const content = {
  title: 'How Aviora Works',
  description: 'Get started with Aviora and take control of your finances in four simple steps:',
  steps: [
    {
      number: '01',
      title: 'Sign Up for Free',
      description: 'Create your Aviora account in just a few minutes. No credit card required.',
    },
    {
      number: '02',
      title: 'Connect Your Accounts',
      description:
        'Securely link your bank accounts, credit cards, and investments to get a complete financial overview.',
    },
    {
      number: '03',
      title: 'Analyze and Manage',
      description:
        "Utilize Aviora's powerful tools for financial analytics, debit management, and tracking.",
    },
    {
      number: '04',
      title: 'Achieve Financial Goals',
      description:
        'Make informed decisions, pay down debt, and work towards your financial aspirations with Aviora.',
    },
  ],
};

export const HowItWorks = () => {
  return (
    <Section id="how-it-works">
      <div className="flex flex-col items-center text-center">
        <h2 className="text-3xl font-bold md:text-4xl">{content.title}</h2>
        <p className="mt-4 text-lg text-muted-foreground">{content.description}</p>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {content.steps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center rounded-lg bg-card p-6">
              <span className="text-3xl font-bold text-primary">{step.number}</span>
              <h3 className="mt-4 text-xl font-semibold">{step.title}</h3>
              <p className="mt-2 text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
