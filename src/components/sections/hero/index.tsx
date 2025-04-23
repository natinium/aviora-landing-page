import React from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { TextEffect } from '@/components/ui/text-effect';
import { AnimatedGroup } from '@/components/ui/animated-group';
import { Header } from '@/components/sections/header';
import { BorderBeam } from '@/components/magicui/border-beam';

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: 'blur(12px)',
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
      transition: {
        type: 'spring',
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
};

export const Hero = () => {
  return (
    <>
      <Header />
      <main className="overflow-hidden bg-[var(--background)] text-[var(--foreground)]">
        <div
          aria-hidden
          className="absolute inset-0 isolate hidden opacity-65 contain-strict lg:block"
        >
          <div className="w-[140rem] h-[320rem] -translate-y-[87.5rem] absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
          <div className="h-[320rem] absolute left-0 top-0 w-[60rem] -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
          <div className="h-[320rem] -translate-y-[87.5rem] absolute left-0 top-0 w-[60rem] -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
        </div>
        <section>
          <div className="relative pt-16 md:pt-24 lg:pt-36">
            <div className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]"></div>
            <div className="mx-auto max-w-7xl px-6">
              <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                <AnimatedGroup variants={transitionVariants}>
                  <Link
                    href="#link"
                    className="
                      group mx-auto flex w-fit items-center gap-4 rounded-full border
                      border-[var(--muted)] bg-[var(--muted)] p-1 pl-4 shadow-md
                      shadow-zinc-950/5 transition-colors duration-300
                      hover:bg-[var(--background)]
                      dark:border-t-[var(--border)] dark:shadow-zinc-950
                      dark:hover:border-t-[var(--border)]
                    "
                  >
                    <span className="text-sm text-[var(--foreground)]">
                      Introducing Aviora: Your Financial Command Center
                    </span>
                    <span className="block h-4 w-0.5 border-l border-[var(--border)] bg-white dark:bg-zinc-700"></span>
                    <div
                      className="
                      group-hover:bg-[var(--muted)] size-6 overflow-hidden rounded-full
                      bg-[var(--background)] duration-500
                    "
                    >
                      <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                        <span className="flex size-6">
                          <ArrowRight className="m-auto size-3 text-[var(--foreground)]" />
                        </span>
                        <span className="flex size-6">
                          <ArrowRight className="m-auto size-3 text-[var(--foreground)]" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </AnimatedGroup>
                <TextEffect
                  preset="fade-in-blur"
                  speedSegment={0.3}
                  as="h1"
                  className="mt-8 text-balance text-4xl sm:text-5xl md:text-6xl lg:mt-16 xl:text-[5.25rem] font-semibold text-[var(--foreground)]"
                >
                  Unlock Financial Clarity and Control
                </TextEffect>
                <TextEffect
                  per="line"
                  preset="fade-in-blur"
                  speedSegment={0.3}
                  delay={0.5}
                  as="p"
                  className="mx-auto mt-6 max-w-2xl text-balance text-lg text-[var(--muted-foreground)]"
                >
                  Aviora provides powerful financial analytics, debit management, and tracking tools
                  to help you make informed decisions and achieve your financial goals.
                </TextEffect>

                <AnimatedGroup
                  variants={{
                    container: {
                      visible: {
                        transition: {
                          staggerChildren: 0.05,
                          delayChildren: 0.75,
                        },
                      },
                    },
                    ...transitionVariants,
                  }}
                  className="mt-8 flex flex-col items-center justify-center gap-2 sm:flex-row sm:mt-12"
                >
                  <div
                    key={1}
                    className="rounded-[calc(var(--radius-xl)+0.125rem)] border border-[var(--foreground)/10] p-0.5"
                  >
                    <Button asChild size="lg" className="rounded-xl px-5 text-base">
                      <Link href="#link">
                        <span className="text-nowrap">Get Started with Aviora</span>
                      </Link>
                    </Button>
                  </div>
                  <Button
                    key={2}
                    asChild
                    size="lg"
                    variant="ghost"
                    className="h-10.5 rounded-xl px-5 text-base text-[var(--foreground)]"
                  >
                    <Link href="#link">
                      <span className="text-nowrap">Request a Demo</span>
                    </Link>
                  </Button>
                </AnimatedGroup>
              </div>
            </div>

            <AnimatedGroup
              variants={{
                container: {
                  visible: {
                    transition: {
                      staggerChildren: 0.05,
                      delayChildren: 0.75,
                    },
                  },
                },
                ...transitionVariants,
              }}
            >
              <div className="relative -mr-16 mt-8 overflow-hidden px-2 sm:mr-0 sm:mt-12 md:mt-20">
                <div
                  aria-hidden
                  className="bg-linear-to-b to-[var(--background)] absolute inset-0 z-10 from-transparent from-35%"
                />

                <div className="inset-shadow-2xs ring-[var(--background)] dark:inset-shadow-white/20 bg-[var(--background)] relative mx-auto max-w-6xl overflow-hidden rounded-2xl border border-[var(--border)] p-4 shadow-lg shadow-zinc-950/15 ring-1">
                  <Image
                    className="bg-[var(--background)] aspect-15/8 relative hidden rounded-2xl dark:block"
                    src="/assets/images/dashboard.webp"
                    alt="Aviora Dashboard"
                    width={2700}
                    height={1440}
                  />
                  <Image
                    className="z-2 border-[var(--border)]/25 aspect-15/8 relative rounded-2xl border dark:hidden"
                    src="/assets/images/dashboard.webp"
                    alt="Aviora Dashboard"
                    width={2700}
                    height={1440}
                  />

                  <BorderBeam
                    duration={6}
                    size={400}
                    className="from-transparent via-red-500 to-transparent"
                  />
                  <BorderBeam
                    duration={6}
                    delay={3}
                    size={400}
                    className="from-transparent via-blue-500 to-transparent"
                  />
                </div>
              </div>
            </AnimatedGroup>
          </div>
        </section>
        <section className="bg-background py-16 md:py-32">
          <div className="group relative m-auto max-w-5xl px-6">
            <div className="absolute inset-0 z-10 flex scale-95 items-center justify-center opacity-0 duration-500 group-hover:scale-100 group-hover:opacity-100">
              <Link
                href="/"
                className="block text-sm duration-150 hover:opacity-75 text-[var(--foreground)]"
              >
                <span> See How Aviora Helps Businesses</span>
                <ChevronRight className="ml-1 inline-block size-3" />
              </Link>
            </div>
            <div className=" group-hover:blur-xs mx-auto mt-12 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-8 transition-all duration-500 group-hover:opacity-50 sm:grid-cols-4 sm:gap-x-16 sm:gap-y-14">
              <div className="flex">
                <img
                  className="mx-auto h-5 w-fit dark:invert"
                  src="https://html.tailus.io/blocks/customers/nvidia.svg"
                  alt="Nvidia Logo"
                  height="20"
                  width="auto"
                />
              </div>

              <div className="flex">
                <img
                  className="mx-auto h-4 w-fit dark:invert"
                  src="https://html.tailus.io/blocks/customers/column.svg"
                  alt="Column Logo"
                  height="16"
                  width="auto"
                />
              </div>
              <div className="flex">
                <img
                  className="mx-auto h-4 w-fit dark:invert"
                  src="https://html.tailus.io/blocks/customers/github.svg"
                  alt="GitHub Logo"
                  height="16"
                  width="auto"
                />
              </div>
              <div className="flex">
                <img
                  className="mx-auto h-5 w-fit dark:invert"
                  src="https://html.tailus.io/blocks/customers/nike.svg"
                  alt="Nike Logo"
                  height="20"
                  width="auto"
                />
              </div>
              <div className="flex">
                <img
                  className="mx-auto h-5 w-fit dark:invert"
                  src="https://html.tailus.io/blocks/customers/lemonsqueezy.svg"
                  alt="Lemon Squeezy Logo"
                  height="20"
                  width="auto"
                />
              </div>
              <div className="flex">
                <img
                  className="mx-auto h-4 w-fit dark:invert"
                  src="https://html.tailus.io/blocks/customers/laravel.svg"
                  alt="Laravel Logo"
                  height="16"
                  width="auto"
                />
              </div>
              <div className="flex">
                <img
                  className="mx-auto h-7 w-fit dark:invert"
                  src="https://html.tailus.io/blocks/customers/lilly.svg"
                  alt="Lilly Logo"
                  height="28"
                  width="auto"
                />
              </div>

              <div className="flex">
                <img
                  className="mx-auto h-6 w-fit dark:invert"
                  src="https://html.tailus.io/blocks/customers/openai.svg"
                  alt="OpenAI Logo"
                  height="24"
                  width="auto"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Hero;
