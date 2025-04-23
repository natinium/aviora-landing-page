import { Section } from '@/components/shared/section';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';

const content = {
  title: 'Pricing that Scales with Your Financial Journey',
  description:
    'Choose the Aviora plan that best fits your needs and start taking control of your financial future today.',
  plans: [
    {
      name: 'Basic',
      price: '$0 / mo',
      description: 'For individuals starting their financial journey.',
      features: [
        'Basic Financial Analytics',
        'Debit Tracking (up to 5 accounts)',
        'Transaction Monitoring',
        'Basic Budgeting Tools',
        'Email Support',
      ],
    },
    {
      name: 'Pro',
      price: '$19 / mo',
      description: 'For individuals seeking advanced financial control.',
      features: [
        'Everything in Basic Plan',
        'Advanced Financial Analytics',
        'Unlimited Debit Tracking',
        'Detailed Spending Habit Analysis',
        'Customizable Reports',
        'Priority Email and Chat Support',
        'Access to Community Forum',
      ],
      popular: true,
    },
    {
      name: 'Premium',
      price: '$49 / mo',
      description: 'For comprehensive financial management and insights.',
      features: [
        'Everything in Pro Plan',
        'Investment Performance Analysis',
        'Financial Goal Setting and Tracking',
        'AI-Powered Financial Insights',
        'Dedicated Account Manager',
        'Architectural Review',
        '24/7 Phone Support',
      ],
    },
  ],
  getStartedLabel: 'Choose Plan',
};

export const Pricing = () => {
  return (
    <Section id="pricing">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl space-y-6 text-center">
          <h1 className="text-center text-4xl font-semibold lg:text-5xl">{content.title}</h1>
          <p>{content.description}</p>
        </div>

        <div className="mt-8 grid gap-6 md:mt-20 md:grid-cols-3">
          {content.plans.map((plan, index) => (
            <Card key={index} className={`${plan.popular ? 'relative' : ''} border-border `}>
              {plan.popular && (
                <span className="bg-linear-to-br/increasing absolute inset-x-0 -top-3 mx-auto flex h-6 w-fit items-center rounded-full from-purple-400 to-amber-300 px-3 py-1 text-xs font-medium text-amber-950 ring-1 ring-inset ring-white/20 ring-offset-1 ring-offset-gray-950/5">
                  Popular
                </span>
              )}

              <CardHeader>
                <CardTitle className="font-medium">{plan.name}</CardTitle>

                <span className="my-3 block text-2xl font-semibold">{plan.price}</span>

                <CardDescription className="text-sm">{plan.description}</CardDescription>
                <Button asChild variant="outline" className="mt-4 w-full">
                  <Link href="">{content.getStartedLabel}</Link>
                </Button>
              </CardHeader>

              <CardContent className="space-y-4">
                <hr className="border-dashed" />

                <ul className="list-outside space-y-3 text-sm">
                  {plan.features.map((item, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <Check className="size-3" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
};
