export function Navbar() {
  const links = [
    { label: "作品", href: "#works" },
    { label: "关于我", href: "#about" },
    { label: "联系我", href: "#contact" }
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 shadow-sm backdrop-blur-xl">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <a href="#top" className="font-[var(--font-heading)] text-sm uppercase tracking-[0.3em] text-electric sm:text-base">
          LIN YUHAN
        </a>

        <ul className="flex items-center gap-2 sm:gap-4">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-full border border-transparent px-3 py-1 text-xs text-slate-700 transition hover:border-electric/40 hover:bg-electric/10 hover:text-electric sm:text-sm"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
