const ClientsMarquee = ({ theme = "light" }) => {
  const isDark = theme === "dark";
  const clients = [
  { name: "Techint", src: "assets/clientes/techint.png", scale: 1.4 },
  { name: "YPF", src: "assets/clientes/ypf.png" },
  { name: "General Motors", src: "assets/clientes/general-motors.png" },
  { name: "Toyota", src: "assets/clientes/toyota.png" },
  { name: "Tecpetrol", src: "assets/clientes/tecpetrol.png" },
  { name: "Trafigura", src: "assets/clientes/trafigura.png" },
  { name: "Oldelval", src: "assets/clientes/oldelval.png" },
  { name: "Puma Energy", src: "assets/clientes/puma-energy.png" },
  { name: "SACDE", src: "assets/clientes/sacde.png" },
  { name: "Milicic", src: "assets/clientes/milicic.png", scale: 1.4 },
  { name: "OPS", src: "assets/clientes/ops.png" }];

  const row =
  <div className="flex shrink-0 items-center gap-16 pr-16">
      {clients.map((c, i) =>
    <div key={`${c.name}-${i}`} className="flex items-center shrink-0" style={{ height: 56 }}>
          <img
        src={c.src}
        alt={c.name}
        className="client-logo"
        style={{
          maxHeight: 48 * (c.scale || 1),
          maxWidth: 160 * (c.scale || 1),
          width: "auto",
          objectFit: "contain",
          filter: isDark ? "grayscale(100%) brightness(2) contrast(0.7)" : "grayscale(100%)",
          opacity: isDark ? 0.7 : 0.6,
          transition: "filter 0.3s ease, opacity 0.3s ease"
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.filter = "none";
          e.currentTarget.style.opacity = "1";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.filter = isDark ? "grayscale(100%) brightness(2) contrast(0.7)" : "grayscale(100%)";
          e.currentTarget.style.opacity = isDark ? "0.7" : "0.6";
        }} />
      
        </div>
    )}
    </div>;

  return (
    <section
      className="relative py-12 border-y overflow-hidden"
      style={{
        backgroundColor: isDark ? "#0f0f0f" : "#FAFAF7",
        borderColor: isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)"
      }}>
      
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 mb-8 flex items-center gap-6">
        <div className="h-px flex-1" style={{ backgroundColor: isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)" }} />
        <p className="text-[11px] font-semibold tracking-[0.25em] uppercase" style={{ color: isDark ? "#888" : "#555" }}>
          Empresas que confían en nosotros
        </p>
        <div className="h-px flex-1" style={{ backgroundColor: isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)" }} />
      </div>
      <div className="group overflow-hidden">
        <div className="flex w-max" style={{ animation: "clientsMarquee 32s linear infinite" }}>
          {row}{row}{row}
        </div>
      </div>
      <style>{`@keyframes clientsMarquee { from { transform: translateX(0) } to { transform: translateX(-33.3333%) } }`}</style>
    </section>);

};

const Nosotros = ({ theme = "light" }) => {
  const isDark = theme === "dark";
  const bg = isDark ? "#0A0A0A" : "#FFFFFF";
  const fg = isDark ? "#fff" : "#0A0A0A";
  const muted = isDark ? "#9a9a9a" : "#555";

  return (
    <section id="nosotros" className="pt-16 pb-28 lg:pt-20 lg:pb-40" style={{ backgroundColor: bg, color: fg, scrollMarginTop: 76 }}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-10" style={{ backgroundColor: "#00B127" }} />
              <span className="text-[11px] font-semibold tracking-[0.25em] uppercase" style={{ color: "#00B127" }}>
                01 — Trayectoria
              </span>
            </div>
            <h2 className="text-5xl lg:text-7xl font-black leading-[0.95] tracking-[-0.02em] mb-6">Energizando la industria argentina

            </h2>
          </div>

          <div className="lg:col-span-6 lg:col-start-7 space-y-6">
            <p className="text-base lg:text-lg leading-relaxed" style={{ color: muted }}>
              Somos una empresa argentina especializada en <strong style={{ color: fg }}>soluciones integrales de energía e ingeniería industrial</strong>. Acompañamos a PyMEs y grandes operadores en proyectos de alta complejidad técnica.
            </p>
            <p className="text-base lg:text-lg leading-relaxed" style={{ color: muted }}>
              Combinamos experiencia de campo con ingeniería de primer nivel para entregar instalaciones seguras, eficientes y escalables — desde piping en yacimientos de Oil & Gas hasta sistemas solares industriales y automatizaciones.
            </p>
            <div className="grid grid-cols-3 gap-6 pt-4">
              {[
              ["Ingeniería propia", "Diseño técnico interno"],
              ["Cobertura nacional", "23 provincias"],
              ["Obra llave en mano", "De diseño a puesta en marcha"]].
              map(([t, s]) =>
              <div key={t} className="flex gap-3 items-start">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: "#FFBA03" }} />
                  <div>
                    <div className="font-bold text-sm">{t}</div>
                    <div className="text-xs" style={{ color: muted }}>{s}</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Metricas */}
        <div className="grid grid-cols-3 gap-px mt-24 border-t border-l"
        style={{ borderColor: isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)" }}>
          
          {[
          ["+10", "AÑOS DE EXPERIENCIA"],
          ["+200", "PROYECTOS REALIZADOS"],
          ["+10 MW", "EN ENERGÍA SOLAR"]].
          map(([v, l], i) =>
          <div
            key={l}
            className="p-8 lg:p-10 border-r border-b group relative overflow-hidden cursor-default text-center flex flex-col items-center"
            style={{ borderColor: isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)" }}>
            
              <div
              className="absolute top-0 left-0 h-0.5 w-0 transition-all duration-500 group-hover:w-full"
              style={{ backgroundColor: "#00B127" }} />
            
              <div className="text-6xl lg:text-7xl font-black tracking-tight" style={{ color: fg }}>
                {v}
              </div>
              <div className="text-[11px] font-semibold tracking-[0.2em] uppercase mt-3" style={{ color: muted }}>
                {l}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

};

window.ClientsMarquee = ClientsMarquee;
window.Nosotros = Nosotros;