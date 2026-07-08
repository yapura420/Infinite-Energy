const Navbar = ({ theme = "light" }) => {
  const [scrolled, setScrolled] = React.useState(false);
  const [overHero, setOverHero] = React.useState(true);

  React.useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      // Estamos "sobre el hero" si el scroll es menor al alto del hero (100vh aprox)
      setOverHero(window.scrollY < window.innerHeight - 100);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isDark = theme === "dark";
  const items = [
    { name: "Nosotros", link: "#nosotros" },
    { name: "Servicios", link: "#servicios" },
    { name: "Sectores", link: "#sectores" },
    { name: "Proyectos", link: "#proyectos" },
  ];

  // Cuando estamos sobre el hero: letras blancas, logo invertido, sin fondo
  // Al scrollear: letras en color del tema, fondo glass
  const onHero = overHero && !scrolled;
  const fgColor = onHero ? "#fff" : (isDark ? "#fff" : "#0A0A0A");
  const navBg = scrolled
    ? (isDark ? "rgba(10,10,10,0.82)" : "rgba(255,255,255,0.85)")
    : "transparent";
  const borderColor = isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)";

  return (
    <>
      {/* Visera oscura sutil en la parte superior, sólo cuando estamos sobre el hero */}
      <div
        className="fixed top-0 left-0 right-0 z-40 pointer-events-none transition-opacity duration-500"
        style={{
          height: 140,
          opacity: onHero ? 1 : 0,
          background: "linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.25) 60%, rgba(0,0,0,0) 100%)",
        }}
      />

      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: navBg,
          backdropFilter: scrolled ? "blur(14px) saturate(180%)" : "none",
          borderBottom: scrolled ? `1px solid ${borderColor}` : "1px solid transparent",
        }}
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10 h-[76px] flex items-center justify-between">
          <a href="#inicio" className="flex items-center">
            <LogoCompleto size={68} invertido={onHero || isDark} />
          </a>

          <div className="hidden md:flex items-center gap-1">
            {items.map((it) => (
              <a
                key={it.name}
                href={it.link}
                className="group relative px-3 lg:px-4 py-2 text-[13px] font-medium transition-colors duration-300"
                style={{ color: fgColor }}
              >
                <span className="relative">
                  {it.name}
                  <span
                    className="absolute -bottom-1 left-0 h-[1px] w-0 transition-all duration-300 group-hover:w-full"
                    style={{ backgroundColor: "#00B127" }}
                  />
                </span>
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#contacto"
              className="group relative inline-flex items-center gap-2 px-4 md:px-5 py-2.5 text-[12px] md:text-[13px] font-semibold transition-all whitespace-nowrap"
              style={{
                color: onHero ? "#0A0A0A" : (isDark ? "#0A0A0A" : "#FFFFFF"),
                backgroundColor: onHero ? "#FFBA03" : (isDark ? "#FFBA03" : "#0A0A0A"),
                borderRadius: 0,
              }}
            >
              <span className="hidden sm:inline">Solicitar presupuesto</span>
              <span className="sm:hidden">Contacto</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

window.Navbar = Navbar;
