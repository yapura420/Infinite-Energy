const SERVICES = [
  { id: "01", title: "Energía Solar", desc: "Proyectos solares a gran escala para empresas e industrias, y también de baja escala para instalaciones residenciales.", img: "assets/servicios/01-energia-solar.jpeg" },
  { id: "02", title: "Instalaciones Eléctricas Industriales", desc: "Diseño, montaje y puesta en marcha de instalaciones de baja, media y alta tensión para plantas industriales.", img: "assets/servicios/02-instalaciones-electricas.jpeg" },
  { id: "03", title: "Ingeniería y Automatización", desc: "Sistemas de control, PLC, SCADA y automatización de procesos industriales con ingeniería propia.", img: "assets/servicios/03-automatizacion.jpeg" },
  { id: "04", title: "Piping para Oil & Gas", desc: "Montaje, soldadura certificada y mantenimiento de líneas de proceso en yacimientos y refinerías.", img: "assets/servicios/04-piping-oil-gas.jpeg?v=2" },
  { id: "05", title: "Mantenimiento Eléctrico", desc: "Servicios preventivos y correctivos para garantizar continuidad operativa en plantas críticas.", img: "assets/servicios/05-mantenimiento.jpeg" },
  { id: "06", title: "Inspección con Drones", desc: "Relevamiento aéreo con cámara termográfica para detectar fallas, puntos calientes y necesidades de mantenimiento en instalaciones y plantas.", img: "assets/servicios/06-drones.jpeg" },
];

const Servicios = ({ theme = "light", cardStyle = "imagen" }) => {
  const isDark = theme === "dark";
  const [hovered, setHovered] = React.useState(null);
  const bg = isDark ? "#0f0f0f" : "#F5F5F2";
  const fg = isDark ? "#fff" : "#0A0A0A";
  const muted = isDark ? "#9a9a9a" : "#555";
  const cardBg = isDark ? "#161616" : "#FFFFFF";
  const borderColor = isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)";

  return (
    <section id="servicios" className="pt-16 pb-28 lg:pt-20 lg:pb-40" style={{ backgroundColor: bg, color: fg, scrollMarginTop: 76 }}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 mb-16 items-end">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-10" style={{ backgroundColor: "#00B127" }} />
              <span className="text-[11px] font-semibold tracking-[0.25em] uppercase" style={{ color: "#00B127" }}>
                02 — Capacidades
              </span>
            </div>
            <h2 className="text-5xl lg:text-7xl font-black leading-[0.95] tracking-[-0.02em]">
              Soluciones técnicas<br />
              de principio a fin
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <p className="text-base lg:text-lg" style={{ color: muted }}>
              Ingeniería, ejecución y mantenimiento bajo un mismo equipo. Tomamos tu proyecto desde el primer relevamiento hasta la puesta en marcha.
            </p>
          </div>
        </div>

        {cardStyle === "minimal" && (
          <div className="border-t border-l" style={{ borderColor }}>
            {SERVICES.map((s, i) => (
              <a
                key={s.id}
                href="#contacto"
                className="group grid lg:grid-cols-12 gap-6 p-8 lg:p-10 border-r border-b transition-all relative overflow-hidden"
                style={{ borderColor, backgroundColor: hovered === i ? (isDark ? "#141414" : "#FAFAF7") : "transparent" }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                <div
                  className="absolute left-0 top-0 bottom-0 w-0 transition-all duration-500 group-hover:w-1"
                  style={{ backgroundColor: "#00B127" }}
                />
                <div className="lg:col-span-1 text-[11px] font-mono font-semibold tracking-[0.2em]" style={{ color: "#00B127" }}>
                  /{s.id}
                </div>
                <div className="lg:col-span-5">
                  <h3 className="text-2xl lg:text-3xl font-bold tracking-tight" style={{ color: fg }}>{s.title}</h3>
                </div>
                <div className="lg:col-span-5">
                  <p className="text-base leading-relaxed" style={{ color: muted }}>{s.desc}</p>
                </div>
                <div className="lg:col-span-1 flex items-start lg:justify-end">
                  <span
                    className="inline-flex w-10 h-10 items-center justify-center border transition-all group-hover:border-current"
                    style={{
                      borderColor: isDark ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.15)",
                      color: hovered === i ? "#00B127" : (isDark ? "#fff" : "#0A0A0A"),
                    }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" d="M5 12h14M13 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </a>
            ))}
          </div>
        )}

        {cardStyle === "bordered" && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ backgroundColor: borderColor }}>
            {SERVICES.map((s) => (
              <div key={s.id} className="p-8 lg:p-10 group transition-all relative" style={{ backgroundColor: cardBg }}>
                <div className="text-[11px] font-mono font-semibold tracking-[0.2em] mb-4" style={{ color: "#00B127" }}>/{s.id}</div>
                <h3 className="text-xl lg:text-2xl font-bold tracking-tight mb-3" style={{ color: fg }}>{s.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: muted }}>{s.desc}</p>
                <div
                  className="absolute bottom-0 left-0 h-0.5 w-0 transition-all duration-500 group-hover:w-full"
                  style={{ backgroundColor: "#00B127" }}
                />
              </div>
            ))}
          </div>
        )}

        {cardStyle === "imagen" && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s) => (
              <a key={s.id} href="#contacto" className="group cursor-pointer block">
                <div
                  className="aspect-[4/3] relative overflow-hidden mb-5"
                  style={{ backgroundColor: isDark ? "#141414" : "#EEE" }}
                >
                  <img
                    src={s.img}
                    alt={s.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Overlay sutil */}
                  <div
                    className="absolute inset-0 transition-opacity duration-500"
                    style={{
                      background: "linear-gradient(180deg, rgba(0,0,0,0) 50%, rgba(0,0,0,0.55) 100%)",
                    }}
                  />
                  {/* Acento verde lateral en hover */}
                  <div
                    className="absolute left-0 top-0 bottom-0 w-0 transition-all duration-500 group-hover:w-1"
                    style={{ backgroundColor: "#00B127" }}
                  />
                  {/* Flecha hover abajo-derecha */}
                  <div
                    className="absolute bottom-4 right-4 w-10 h-10 flex items-center justify-center transition-all duration-500 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0"
                    style={{ backgroundColor: "#00B127", color: "#fff" }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" d="M5 12h14M13 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl lg:text-2xl font-bold tracking-tight mb-2 transition-colors group-hover:text-[#00B127]" style={{ color: fg }}>
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: muted }}>{s.desc}</p>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

window.Servicios = Servicios;
