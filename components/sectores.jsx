const SECTORES = [
{
  id: "01",
  title: "Oil & Gas",
  tagline: "Energía que mueve al país",
  desc: "Montaje de líneas, piping certificado, instalaciones eléctricas clasificadas y mantenimiento integral para yacimientos, refinerías y plantas de proceso.",
  capabilities: ["Piping ASME B31.3", "Soldadura certificada", "Áreas clasificadas", "Instrumentación"],
  accent: "#00B127",
  img: "assets/sectores/01-oil-gas.jpeg"
},
{
  id: "02",
  title: "Industria & Manufactura",
  tagline: "Plantas listas para producir",
  desc: "Obras eléctricas llave en mano, automatización de líneas productivas, tableros, distribución y gestión energética para plantas industriales.",
  capabilities: ["Tableros eléctricos", "Automatización", "Distribución", "Eficiencia energética"],
  accent: "#FFBA03",
  img: "assets/sectores/02-industria-manufactura.jpg"
},
{
  id: "03",
  title: "Energía & Renovables",
  tagline: "Transición energética real",
  desc: "Proyectos solares industriales, sistemas de generación distribuida, monitoreo energético y soluciones para reducir huella de carbono.",
  capabilities: ["Solar industrial", "Generación distribuida", "Monitoreo", "Consultoría"],
  accent: "#00B127",
  img: "assets/sectores/03-energia-renovables.jpeg"
}];


const Sectores = ({ theme = "light" }) => {
  const isDark = theme === "dark";
  const bg = isDark ? "#0A0A0A" : "#FFFFFF";
  const fg = isDark ? "#fff" : "#0A0A0A";
  const muted = isDark ? "#9a9a9a" : "#555";

  return (
    <section id="sectores" className="pt-16 pb-28 lg:pt-20 lg:pb-40" style={{ backgroundColor: bg, scrollMarginTop: 76 }}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 mb-16">
        <div className="grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-10" style={{ backgroundColor: "#00B127" }} />
              <span className="text-[11px] font-semibold tracking-[0.25em] uppercase" style={{ color: "#00B127" }}>
                03 — Industrias
              </span>
            </div>
            <h2 className="text-5xl lg:text-7xl font-black leading-[0.95] tracking-[-0.02em]" style={{ color: fg }}>Donde operamos

            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <p className="text-base lg:text-lg" style={{ color: muted }}>
              Proveemos soluciones especializadas para sectores con alta exigencia técnica, de seguridad y continuidad operativa.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 space-y-6">
        {SECTORES.map((s, i) => {
          const reverse = i % 2 === 1;
          const accent = s.accent;
          return (
            <div
              key={s.id}
              className={`grid lg:grid-cols-2 gap-0 overflow-hidden group`}
              style={{ backgroundColor: isDark ? "#141414" : "#0A0A0A" }}>
              
              {/* Foto real */}
              <div
                className={`relative aspect-[4/3] lg:aspect-auto overflow-hidden ${reverse ? "lg:order-2" : ""}`}
                style={{ backgroundColor: "#1a1a1a" }}>
                <img
                  src={s.img}
                  alt={s.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className="absolute top-0 left-0 h-1 w-full transition-all duration-700 origin-left scale-x-0 group-hover:scale-x-100"
                  style={{ backgroundColor: accent }} />
              </div>

              {/* Content */}
              <div
                className={`p-8 lg:p-14 flex flex-col justify-center relative ${reverse ? "lg:order-1" : ""}`}
                style={{ backgroundColor: accent === "#00B127" ? "#00B127" : "#FFBA03" }}>
                
                <div className="absolute top-8 right-8 font-mono text-[11px] font-bold tracking-[0.2em]" style={{ color: accent === "#FFBA03" ? "#0A0A0A" : "rgba(255,255,255,0.5)" }}>
                  /{s.id}
                </div>

                <h3 className="text-4xl lg:text-6xl font-black tracking-[-0.02em] leading-none mb-5" style={{ color: accent === "#FFBA03" ? "#0A0A0A" : "#fff" }}>
                  {s.title}
                </h3>

                <p className="text-base lg:text-lg leading-relaxed mb-8 max-w-lg" style={{ color: accent === "#FFBA03" ? "rgba(10,10,10,0.85)" : "rgba(255,255,255,0.9)" }}>
                  {s.desc}
                </p>

                <div className="grid grid-cols-2 gap-x-6 gap-y-2 mb-8 max-w-md">
                  {s.capabilities.map((c) =>
                  <div key={c} className="flex items-center gap-2">
                      <span className="inline-block w-1 h-1 rounded-full" style={{ backgroundColor: accent === "#FFBA03" ? "#0A0A0A" : "#fff" }} />
                      <span className="text-sm font-medium" style={{ color: accent === "#FFBA03" ? "#0A0A0A" : "#fff" }}>{c}</span>
                    </div>
                  )}
                </div>

                <a
                  href="#contacto"
                  className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-sm w-fit transition-all hover:gap-4"
                  style={{
                    backgroundColor: accent === "#FFBA03" ? "#0A0A0A" : "#fff",
                    color: accent === "#FFBA03" ? "#fff" : "#0A0A0A"
                  }}>
                  
                  Consultar proyecto
                  <span>→</span>
                </a>
              </div>
            </div>);

        })}
      </div>
    </section>);

};

window.Sectores = Sectores;