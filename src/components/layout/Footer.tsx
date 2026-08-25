import { ArrowRight } from "lucide-react";
import Logo from "@/components/common/Logo";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
const faqs = [
  "How long does a project take?",
  "Do you provide hosting and domains?",
  "Can you redesign an existing website?",
  "Will my website be mobile-friendly?",
  "Do you offer ongoing support?",
];
function Footer() {
  return (
    <footer
      id="strategy-call"
      className="relative border-t border-white/[.08] bg-black/35 py-10 backdrop-blur-xl"
    >
      <Container>
        <div className="grid gap-8 lg:grid-cols-[.7fr_1.1fr_.7fr]">
          <div>
            <Logo showTagline />
            <p className="mt-5 text-[.62rem] text-slate-500">
              © {new Date().getFullYear()} ViankaX Technologies.
              <br />
              All rights reserved.
            </p>
          </div>
          <div>
            <h2 className="text-sm font-semibold text-white">FAQ</h2>
            <div className="mt-3 divide-y divide-white/[.08] border-y border-white/[.08]">
              {faqs.map((item) => (
                <details key={item} className="group py-2">
                  <summary className="flex cursor-pointer list-none items-center justify-between text-xs text-slate-300">
                    {item}
                    <span className="text-base text-slate-500 transition group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="pt-2 text-[.65rem] leading-5 text-slate-500">
                    We define the right answer during discovery based on your
                    scope, platform, and support needs.
                  </p>
                </details>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-sm font-semibold text-white">
              Let&apos;s Build Something Great
            </h2>
            <p className="mt-3 text-xs leading-5 text-slate-400">
              Book a free strategy call and let&apos;s discuss how we can help
              you grow.
            </p>
            <Button href="mailto:hello@viankax.com" className="mt-5">
              Book Your Free Call <ArrowRight size={14} />
            </Button>
          </div>
        </div>
      </Container>
    </footer>
  );
}
export default Footer;
