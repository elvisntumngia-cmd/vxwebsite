import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

const faqs = [
  [
    "How long does a project take?",
    "Timing depends on scope and system complexity. A focused launch can move quickly, while connected CRM, AI, and automation work is planned in phases.",
  ],
  [
    "Do you provide hosting and domains?",
    "We can guide infrastructure decisions and configure the right hosting and domain setup for the platform.",
  ],
  [
    "Can you redesign an existing website?",
    "Yes. We can retain what works, improve the customer journey, and rebuild the experience or underlying system where needed.",
  ],
  [
    "Will my website be mobile-friendly?",
    "Yes. Responsive behavior is designed and tested as part of the experience, not treated as an afterthought.",
  ],
  [
    "Do you offer ongoing support?",
    "Ongoing optimization and systems support can be included based on the engagement.",
  ],
] as const;

function Faq() {
  return (
    <Section className="lower-depth py-10 sm:py-14">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[.45fr_.55fr]">
          <div>
            <p className="text-[.62rem] font-semibold uppercase tracking-[.24em] text-blue-400">
              FAQ
            </p>
            <h2 className="font-display mt-3 text-3xl font-semibold text-white">
              Questions, answered clearly.
            </h2>
          </div>
          <div className="divide-y divide-white/[.08] border-y border-white/[.08]">
            {faqs.map(([question, answer]) => (
              <details key={question} className="group px-1 py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-sm font-medium text-slate-200 transition group-hover:text-cyan-200">
                  {question}
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/10 text-slate-500 transition group-open:rotate-45 group-open:border-cyan-300/25 group-open:text-cyan-300">
                    +
                  </span>
                </summary>
                <p className="max-w-xl pb-1 pt-3 text-xs leading-6 text-slate-500">
                  {answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
export default Faq;
