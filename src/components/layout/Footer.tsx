import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import Logo from "@/components/common/Logo";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

const navigation = [
  ["Home", "/"],
  ["Services", "/services"],
  ["Portfolio", "/portfolio"],
  ["Pricing", "/pricing"],
] as const;
const capabilities = [
  "Web experiences",
  "AI systems",
  "CRM & automation",
  "SEO & AEO",
];

function Footer() {
  return (
    <footer
      id="strategy-call"
      className="relative overflow-hidden border-t border-white/[.08] bg-[#010204] py-12 sm:py-16"
    >
      <div className="absolute -bottom-40 right-[8%] h-72 w-72 rounded-full bg-blue-500/[.06] blur-[110px]" />
      <Container>
        <div className="relative rounded-2xl border border-white/[.08] bg-white/[.018] p-7 sm:p-10">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_.55fr_.7fr_1fr]">
            <div>
              <Logo showTagline />
              <p className="mt-5 max-w-xs text-xs leading-6 text-slate-400">
                Premium websites and intelligent systems built to help
                businesses attract, convert, automate, and grow.
              </p>
            </div>
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[.18em] text-white">
                Navigate
              </h2>
              <ul className="mt-5 space-y-3">
                {navigation.map(([label, to]) => (
                  <li key={label}>
                    <Link
                      to={to}
                      className="text-xs text-slate-500 transition hover:text-cyan-200"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[.18em] text-white">
                Systems
              </h2>
              <ul className="mt-5 space-y-3">
                {capabilities.map((item) => (
                  <li key={item}>
                    <Link
                      to="/services"
                      className="text-xs text-slate-500 transition hover:text-cyan-200"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-display text-xl font-semibold text-white">
                Let&apos;s build something intelligent.
              </h2>
              <p className="mt-3 text-xs leading-6 text-slate-400">
                Start with a strategy call and define the right system for your
                business.
              </p>
              <Button href="mailto:hello@viankax.com" className="mt-5">
                Book a Strategy Call <ArrowRight size={14} />
              </Button>
            </div>
          </div>
          <div className="mt-10 flex flex-col gap-2 border-t border-white/[.07] pt-6 text-[.62rem] text-slate-600 sm:flex-row sm:justify-between">
            <p>
              © {new Date().getFullYear()} ViankaX Technologies. All rights
              reserved.
            </p>
            <p>Design · Engineering · AI · Automation</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
export default Footer;
