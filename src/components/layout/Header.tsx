import { Menu, X } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router";

import Logo from "@/components/common/Logo";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { cn } from "@/utils/cn";

const navigationItems = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Pricing", to: "/pricing" },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-[#020305]/70 py-3 backdrop-blur-xl">
      <Container>
        <div className="flex min-h-12 items-center justify-between">
          <Logo onClick={closeMenu} showTagline />

          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-1 md:flex"
          >
            {navigationItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  cn(
                    "rounded-full px-4 py-2 text-sm font-medium text-slate-400 transition duration-300 hover:bg-white/5 hover:text-white",
                    isActive &&
                      "bg-white/[0.08] text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)]",
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button href="#strategy-call" size="md">
              Book a Strategy Call
            </Button>
          </div>

          <button
            type="button"
            aria-label={
              isMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((current) => !current)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition duration-300 hover:border-white/20 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300/70 md:hidden"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {isMenuOpen && (
          <div
            id="mobile-navigation"
            className="mt-3 overflow-hidden rounded-2xl border border-white/10 bg-black/85 p-3 shadow-[0_20px_70px_rgba(0,0,0,0.6)] backdrop-blur-2xl md:hidden"
          >
            <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
              {navigationItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    cn(
                      "rounded-xl px-4 py-3 text-sm font-medium text-slate-300 transition duration-300 hover:bg-white/5 hover:text-white",
                      isActive && "bg-white/[0.08] text-white",
                    )
                  }
                >
                  {item.label}
                </NavLink>
              ))}

              <Button
                href="#strategy-call"
                onClick={closeMenu}
                className="mt-2 w-full rounded-xl"
                size="lg"
              >
                Book a Strategy Call
              </Button>
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
}

export default Header;
