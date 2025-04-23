import { Section } from '@/components/shared/section';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const content = {
  title: 'What Our Users Say About Aviora',
  description:
    'Hear from individuals and businesses who have transformed their financial management with Aviora.',
  testimonials: [
    {
      logo: 'https://html.tailus.io/blocks/customers/nike.svg',
      quote:
        'Aviora has been a game-changer for my personal finances. The analytics are incredibly insightful, and the debit management tools have helped me stay on track with my payments.',
      author: 'Sarah Johnson',
      role: 'Individual User',
      image: 'https://tailus.io/images/reviews/shekinah.webp', // Placeholder image
    },
    {
      quote:
        'Managing our business finances is so much easier with Aviora. The tracking features provide a clear overview of our cash flow.',
      author: 'Michael Chen',
      role: 'Small Business Owner',
      image: 'https://tailus.io/images/reviews/jonathan.webp', // Placeholder image
    },
    {
      quote:
        'The customizable reports in Aviora allow me to get exactly the financial insights I need to make strategic decisions for my clients.',
      author: 'Emily Davis',
      role: 'Financial Consultant',
      image: 'https://tailus.io/images/reviews/yucel.webp', // Placeholder image
    },
    {
      quote:
        "Aviora's secure platform and intuitive interface make it the perfect tool for managing both personal and business finances.",
      author: 'David Rodriguez',
      role: 'Entrepreneur',
      image: 'https://tailus.io/images/reviews/rodrigo.webp', // Placeholder image
    },
  ],
};

export const Testimonial = () => {
  return (
    <Section id="testimonial" className="py-16 md:py-32">
      <div className="mx-auto max-w-6xl space-y-8 px-6 md:space-y-16">
        <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12">
          <h2 className="text-4xl font-medium lg:text-5xl">{content.title}</h2>
          <p>{content.description}</p>
        </div>

        <div className="grid gap-4 [--color-card:var(--color-muted)] *:border-none *:shadow-none sm:grid-cols-2 md:grid-cols-4 lg:grid-rows-2 dark:[--color-muted:var(--color-zinc-900)]">
          {content.testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className={`grid grid-rows-[auto_1fr] gap-8 ${
                index === 0 ? 'sm:col-span-2 sm:p-6 lg:row-span-2' : ''
              } ${index === 1 ? 'md:col-span-2' : ''}`}
            >
              {index === 0 && (
                <CardHeader>
                  <img
                    className="h-6 w-fit dark:invert"
                    src={testimonial.logo}
                    alt="Nike Logo"
                    height="24"
                    width="auto"
                  />
                </CardHeader>
              )}
              <CardContent>
                <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                  <p className="text-xl font-medium">{testimonial.quote}</p>

                  <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                    <Avatar className="size-12">
                      <AvatarImage
                        src={testimonial.image}
                        alt={testimonial.author}
                        height="400"
                        width="400"
                        loading="lazy"
                      />
                      <AvatarFallback>
                        {testimonial.author
                          .split(' ')
                          .map((n) => n[0])
                          .join('')}
                      </AvatarFallback>
                    </Avatar>

                    <div>
                      <cite className="text-sm font-medium">{testimonial.author}</cite>
                      <span className="text-muted-foreground block text-sm">
                        {testimonial.role}
                      </span>
                    </div>
                  </div>
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
};
