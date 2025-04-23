import { Section } from '@/components/shared/section';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

const content = {
  title: 'Get in Touch',
  description:
    "Have questions about Aviora? We're here to help you unlock financial clarity and control. Reach out to us!",
  nameLabel: 'Name',
  emailLabel: 'Email',
  messageLabel: 'Message',
  sendMessageLabel: 'Send Message',
};

export const Contact = () => {
  return (
    <Section id="contact" className="bg-[var(--background)] py-16 md:py-32">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <h2 className="text-3xl font-bold md:text-4xl text-[var(--foreground)]">{content.title}</h2>
        <p className="mt-4 text-lg text-[var(--muted-foreground)] leading-relaxed">
          {content.description}
        </p>
        <form className="mt-12 space-y-6">
          <div className="space-y-2">
            <Label
              htmlFor="name"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[var(--foreground)]"
            >
              {content.nameLabel}
            </Label>
            <Input
              type="text"
              id="name"
              placeholder="Your name"
              className="w-full rounded-md border border-[var(--border)] bg-[var(--input)] text-[var(--input-foreground)] focus-visible:ring-1 focus-visible:ring-[var(--ring)] peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            />
          </div>
          <div className="space-y-2">
            <Label
              htmlFor="email"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[var(--foreground)]"
            >
              {content.emailLabel}
            </Label>
            <Input
              type="email"
              id="email"
              placeholder="your@email.com"
              className="w-full rounded-md border border-[var(--border)] bg-[var(--input)] text-[var(--input-foreground)] focus-visible:ring-1 focus-visible:ring-[var(--ring)] peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            />
          </div>
          <div className="space-y-2">
            <Label
              htmlFor="message"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[var(--foreground)]"
            >
              {content.messageLabel}
            </Label>
            <Textarea
              id="message"
              rows={4}
              placeholder="Your message"
              className="w-full rounded-md border border-[var(--border)] bg-[var(--input)] text-[var(--input-foreground)] focus-visible:ring-1 focus-visible:ring-[var(--ring)] peer-disabled:cursor-not-allowed peer-disabled:opacity-70 resize-none"
            />
          </div>
          <Button
            type="submit"
            className="w-full rounded-md bg-[var(--primary)] px-8 py-3 font-medium text-[var(--primary-foreground)] hover:bg-[var(--primary)]/90"
          >
            {content.sendMessageLabel}
          </Button>
        </form>
      </div>
    </Section>
  );
};
