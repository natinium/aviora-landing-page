import { Section } from '@/components/shared/section';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ShineBorder } from '@/components/magicui/shine-border';

const content = {
  title: 'Ready to Take Control of Your Finances?',
  description:
    'Join thousands of satisfied users who are achieving financial clarity and control with Aviora. Get started today and transform your financial future.',
  getStartedLabel: 'Get Started with Aviora',
  contactSalesLabel: 'Request a Demo',
};

export const CTA = () => {
  return (
    <Section id="cta">
      <div className="relative mx-auto max-w-5xl rounded-3xl border border-border px-12 py-12 md:py-20 lg:py-32">
        <ShineBorder shineColor={['#A07CFE', '#FE8FB5', '#FFBE7B']} />
        <div className="text-center">
          <h2 className="text-balance text-4xl font-semibold lg:text-5xl">{content.title}</h2>
          <p className="mt-4">{content.description}</p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/">
                <span>{content.getStartedLabel}</span>
              </Link>
            </Button>

            <Button asChild size="lg" variant="outline">
              <Link href="/">
                <span>Book Demo</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
};
