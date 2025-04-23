import { Section } from '@/components/shared/section';

const content = {
  title: 'Frequently Asked Questions',
  description:
    'Find answers to common questions about Aviora, your financial analytics, debit management, and tracking platform.',
  faqs: [
    {
      question: 'What is Aviora?',
      answer:
        'Aviora is a comprehensive financial platform offering tools for analytics, debit management, and tracking to help you gain control of your finances.',
    },
    {
      question: 'How can Aviora help me manage my debts?',
      answer:
        'Aviora provides tools to track your debts, set payment reminders, and visualize your progress towards becoming debt-free.',
    },
    {
      question: 'What kind of financial analytics does Aviora offer?',
      answer:
        'Aviora offers real-time analytics, customizable reports, and visualizations to help you understand your income, expenses, and investments.',
    },
    {
      question: 'Is my financial data secure with Aviora?',
      answer:
        'Yes, data security is a top priority. Aviora uses enterprise-grade encryption and follows industry best practices to protect your information.',
    },
    {
      question: 'Can I track my spending habits with Aviora?',
      answer:
        'Absolutely! Aviora allows you to monitor transactions, set budgets, and analyze your spending habits to make informed financial decisions.',
    },
    {
      question: 'How do I get started with Aviora?',
      answer:
        'Getting started is easy! Sign up for an account, and our platform will guide you through the initial setup.',
    },
  ],
};

export const FAQ = () => {
  return (
    <Section id="faq">
      <div className="flex flex-col items-center text-center">
        <h2 className="text-3xl font-bold md:text-4xl">{content.title}</h2>
        <p className="mt-4 text-lg text-muted-foreground">{content.description}</p>
        <div className="mt-12 grid w-full gap-4 text-left md:grid-cols-2">
          {content.faqs.map((faq, index) => (
            <div key={index} className="rounded-lg border border-border bg-card p-6">
              <h3 className="text-lg font-semibold">{faq.question}</h3>
              <p className="mt-2 text-muted-foreground">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
