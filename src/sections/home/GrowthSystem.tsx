import {
  Activity,
  CalendarCheck,
  ChartNoAxesCombined,
  MessageSquare,
  Users,
  Workflow,
} from "lucide-react";
import { motion } from "motion/react";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

const stats = [
  ["AI Conversations", MessageSquare, "Active"],
  ["Leads Captured", Users, "Connected"],
  ["Appointments", CalendarCheck, "Synced"],
  ["Automations", Workflow, "Running"],
  ["Conversion Journey", Activity, "Tracked"],
  ["Revenue Pipeline", ChartNoAxesCombined, "Visible"],
] as const;
function GrowthSystem() {
  return (
    <Section>
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.15fr_.85fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-xl border border-white/10 bg-[#050914]/90 shadow-[0_30px_100px_rgba(0,0,0,.55)]"
          >
            <div className="grid min-h-[25rem] grid-cols-[7rem_1fr] sm:grid-cols-[9rem_1fr]">
              <aside className="border-r border-white/[.07] p-3">
                <p className="mb-6 flex items-center gap-2 text-[.6rem] font-semibold text-white">
                  <span className="flex h-5 w-5 items-center justify-center rounded bg-blue-500/20 text-blue-300">
                    VX
                  </span>
                  ViankaX OS
                </p>
                {[
                  "Overview",
                  "Conversations",
                  "Leads",
                  "Appointments",
                  "Automations",
                  "Analytics",
                  "Settings",
                ].map((item, index) => (
                  <div
                    key={item}
                    className={`mb-1 rounded-md px-2 py-2 text-[.55rem] sm:text-[.65rem] ${index === 0 ? "bg-white/[.06] text-white" : "text-slate-500"}`}
                  >
                    {item}
                  </div>
                ))}
              </aside>
              <div className="p-4 sm:p-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-sm font-semibold text-white sm:text-base">
                    Your Growth at a Glance
                  </h3>
                  <span className="rounded border border-white/10 px-2 py-1 text-[.5rem] text-slate-500">
                    Live system
                  </span>
                </div>
                <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-3">
                  {stats.map(([label, Icon, status], index) => (
                    <div
                      key={label}
                      className="rounded-lg border border-white/[.07] bg-black/25 p-3"
                    >
                      <div className="flex items-start justify-between">
                        <p className="text-[.5rem] text-slate-500 sm:text-[.58rem]">
                          {label}
                        </p>
                        <Icon
                          size={14}
                          className={
                            index % 2 ? "text-purple-400" : "text-cyan-300"
                          }
                        />
                      </div>
                      <p className="mt-3 text-xs font-semibold text-white sm:text-sm">
                        {status}
                      </p>
                      <p className="mt-1 text-[.48rem] text-emerald-300">
                        ● System online
                      </p>
                    </div>
                  ))}
                </div>
                <div className="mt-3 rounded-lg border border-white/[.07] bg-black/25 p-4">
                  <p className="text-[.52rem] text-slate-500">
                    Performance overview
                  </p>
                  <svg
                    className="mt-3 h-20 w-full"
                    viewBox="0 0 500 100"
                    preserveAspectRatio="none"
                  >
                    <defs>
                      <linearGradient
                        id="chartFill"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop stopColor="#2563eb" stopOpacity=".35" />
                        <stop offset="1" stopColor="#2563eb" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M0 78 C55 75 55 40 105 53 S170 83 210 42 S270 26 310 55 S375 68 410 35 S455 58 500 10 V100 H0Z"
                      fill="url(#chartFill)"
                    />
                    <motion.path
                      d="M0 78 C55 75 55 40 105 53 S170 83 210 42 S270 26 310 55 S375 68 410 35 S455 58 500 10"
                      fill="none"
                      stroke="url(#line)"
                      strokeWidth="2"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      transition={{ duration: 1.6 }}
                    />
                    <defs>
                      <linearGradient id="line">
                        <stop stopColor="#9333ea" />
                        <stop offset="1" stopColor="#38bdf8" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>
          <div>
            <span className="rounded-full border border-purple-400/20 bg-purple-400/[.06] px-3 py-1 text-[.58rem] font-semibold uppercase tracking-[.18em] text-purple-300">
              Built for results
            </span>
            <h2 className="font-display mt-5 text-balance text-[clamp(2rem,4.2vw,4rem)] font-semibold leading-[.98] tracking-[-.055em] text-white">
              More Than Just
              <br />a Website.
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                A Complete
                <br />
                Growth System.
              </span>
            </h2>
            <p className="mt-5 max-w-lg text-sm leading-7 text-slate-400">
              We combine premium design with automation, AI, and practical
              growth systems that attract, engage, convert, and retain
              customers.
            </p>
            <ul className="mt-5 space-y-2">
              {[
                "AI-powered chatbots and automation",
                "Lead generation and CRM integration",
                "Appointment booking and workflows",
                "Real-time analytics and reporting",
                "Conversion-focused web design",
                "SEO and AEO visibility",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-xs text-slate-300"
                >
                  <span className="flex h-4 w-4 items-center justify-center rounded-full border border-purple-400/50 text-[.45rem] text-purple-300">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
}
export default GrowthSystem;
