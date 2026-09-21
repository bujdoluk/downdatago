import RevealOnScroll from "@/components/landing-page/RevealOnScroll";

const faqs = [
  {
    question: "How does downDATA check my services?",
    answer: "We poll each tracked service's public status page as often as every 30 seconds and update your dashboard the moment anything changes.",
  },
  {
    question: "What happens after my 14-day trial ends?",
    answer: "You get full access for 14 days with no card required. When the trial ends, pick the plan that fits. Nothing is charged automatically.",
  },
  {
    question: "Can I change or cancel my plan anytime?",
    answer: "Yes. Upgrade, downgrade, or cancel whenever you like. There's no lock-in or long-term contract.",
  },
  {
    question: "Will my team get notified when something breaks?",
    answer:
      "Connect Slack in a few clicks and incidents post straight to your channel. Every plan includes admin users, so the people who need to see it are already in the loop.",
  },
  {
    question: 'What counts as one "monitor"?',
    answer: "Each service you track (GitHub, Supabase, Cloudflare, or anything else on Atlassian Statuspage) counts as one monitor against your plan's limit.",
  },
  {
    question: "Can I get notified by email or SMS too, not just Slack?",
    answer:
      "Yes, connect one or more email addresses or phone numbers alongside Slack. SMS lets you pick which severities are worth a text, from critical-only up to everything.",
  },
  {
    question: "Can I organize monitors for different teams?",
    answer: "Yes, group your tracked services into boards, so each team only sees the services that matter to them.",
  },
  {
    question: "Does downDATA monitor my own servers, or just public status pages?",
    answer:
      "Just public status pages. downDATA tracks services built on Atlassian Statuspage, like GitHub, Supabase, and Cloudflare. It's not a tool for pinging or monitoring your own infrastructure.",
  },
];

export default function FaqSection() {
  return (
    <section id="faq" className="border-base-300 bg-base-200/40 border-t py-24">
      <div className="mx-auto max-w-6xl px-8">
        <div className="mx-auto mb-14 flex max-w-xl flex-col items-center gap-3 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">Frequently asked questions</h2>
          <p className="text-base-content/70">Everything you need to know before you start your trial.</p>
        </div>

        <div className="mx-auto flex max-w-3xl flex-col gap-3">
          {faqs.map((faq, i) => (
            <RevealOnScroll key={faq.question} delayMs={Math.min(i, 4) * 60}>
              <div className="border-base-300 bg-base-200 hover:border-base-content/20 flex flex-col gap-2 border p-5 transition-colors">
                <h3 className="font-semibold">{faq.question}</h3>
                <p className="text-base-content/70 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
