const PROCESO = [
{
  id: "01",
  title: "Relevamiento técnico",
  desc: "Visita a sitio, análisis de requerimientos, identificación de riesgos y dimensionamiento preliminar.",
  icon:
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="7" /><path d="M21 21l-4.35-4.35" />
      </svg>,

  entregable: "Informe técnico + dimensionamiento"
},
{
  id: "02",
  title: "Ingeniería y diseño",
  desc: "Desarrollo de ingeniería conceptual, básica y de detalle. Documentación técnica y planos de construcción.",
  icon:
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3h18v18H3z" /><path d="M3 9h18M9 3v18" />
      </svg>,

  entregable: "Planos de detalle + memoria de cálculo"
},
{
  id: "03",
  title: "Ejecución y montaje",
  desc: "Procura, fabricación, montaje en obra y control de calidad con equipos certificados.",
  icon:
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 18h18M5 18V9l7-5 7 5v9" /><path d="M9 18v-5h6v5" />
      </svg>,

  entregable: "Acta de obra + reporte fotográfico"
},
{
  id: "04",
  title: "Puesta en marcha",
  desc: "Pruebas funcionales, commissioning, capacitación operativa y entrega documentada del sistema.",
  icon:
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3v9l5 3" /><circle cx="12" cy="12" r="9" />
      </svg>,

  entregable: "Protocolo de pruebas + manual operativo"
},
{
  id: "05",
  title: "Mantenimiento",
  desc: "Soporte técnico continuo, mantenimiento preventivo, correctivo y mejora continua a largo plazo.",
  icon:
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94L6.91 21.1a2.12 2.12 0 01-3-3l8.59-8.57a6 6 0 017.94-7.94l-3.76 3.76z" />
      </svg>,

  entregable: "Reporte mensual + plan preventivo"
}];


const Proceso = ({ theme = "light" }) => {
  const isDark = theme === "dark";
  const bg = isDark ? "#0f0f0f" : "#F5F5F2";
  const fg = isDark ? "#fff" : "#0A0A0A";
  const muted = isDark ? "#9a9a9a" : "#555";
  const border = isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)";
  const [active, setActive] = React.useState(0);

  return (
    <section id="proceso" className="py-28 lg:py-40" style={{ backgroundColor: bg }}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 mb-20 items-end">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-10" style={{ backgroundColor: "#00B127" }} />
              <span className="text-[11px] font-semibold tracking-[0.25em] uppercase" style={{ color: "#00B127" }}>
                05 — Metodología
              </span>
            </div>
            <h2 className="text-5xl lg:text-7xl font-black leading-[0.95] tracking-[-0.02em]" style={{ color: fg }}>Como trabajamos

            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <p className="text-base lg:text-lg" style={{ color: muted }}>
              Un proceso claro y trazable, de extremo a extremo. Cada etapa documentada, con responsables y plazos definidos.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6 relative">
          {/* Timeline line */}
          <div
            className="hidden lg:block absolute left-[10%] right-[10%] top-8 h-px"
            style={{ backgroundColor: border }} />
          
          <div
            className="hidden lg:block absolute left-[10%] top-8 h-px transition-all duration-700"
            style={{ backgroundColor: "#00B127", width: `calc(${(active + 1) / PROCESO.length * 80}%)` }} />
          

          {PROCESO.map((p, i) =>
          <div
            key={p.id}
            className="group cursor-pointer relative text-center flex flex-col items-center"
            onMouseEnter={() => setActive(i)}>
            
              {/* Dot */}
              <div className="relative mb-6 hidden lg:flex items-center justify-center h-16 -mt-8">
                <div
                className="w-4 h-4 rounded-full relative z-10 transition-all duration-300"
                style={{
                  backgroundColor: i <= active ? "#00B127" : isDark ? "#333" : "#ddd",
                  boxShadow: i === active ? "0 0 0 6px rgba(0,177,39,0.18)" : "none"
                }} />
              
              </div>

              <div className="text-6xl lg:text-7xl font-black tracking-tight mb-3 transition-colors" style={{ color: i === active ? "#00B127" : isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)" }}>
                {p.id}
              </div>

              <h3 className="text-lg font-bold mb-3 tracking-tight" style={{ color: fg }}>
                {p.title}
              </h3>
              <p className="text-sm leading-relaxed mb-4" style={{ color: muted }}>
                {p.desc}
              </p>

              {/* Entregable tag */}
              <div
              className="mt-auto inline-flex items-start gap-2 px-3 py-2 text-[10px] font-semibold tracking-[0.05em] uppercase text-left"
              style={{
                borderTop: `1px solid ${i === active ? "#00B127" : border}`,
                color: i === active ? "#00B127" : muted,
                transition: "all 0.3s"
              }}>
              
                <span style={{ color: i === active ? "#00B127" : "#FFBA03" }}>✓</span>
                <span>{p.entregable}</span>
              </div>
            </div>
          )}
        </div>

        {/* CTA inferior */}
        <div className="mt-20 flex flex-col items-center gap-6 text-center">
          <div className="h-px w-16" style={{ backgroundColor: border }} />
          <p className="text-lg lg:text-xl font-medium" style={{ color: fg }}>
            ¿Tenés un proyecto en mente? <span style={{ color: muted }}>El relevamiento técnico es sin cargo.</span>
          </p>
          <a
            href="#contacto"
            className="group inline-flex items-center gap-3 px-6 py-3 text-[12px] font-semibold tracking-[0.15em] uppercase transition-all"
            style={{
              backgroundColor: "#0A0A0A",
              color: "#fff"
            }}>
            
            <span>Solicitar relevamiento</span>
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </section>);

};

const PROYECTOS = [
{
  id: "PRY-001",
  title: "Parque solar General Motors",
  cliente: "",
  categoria: "Energía Solar",
  stat: "300 kW",
  statLabel: "Potencia instalada",
  ubicacion: "Rosario, Santa Fe",
  desc: "Parque solar para la planta de General Motors en Rosario. Sistema de generación fotovoltaica, montaje de estructura, tableros y puesta en marcha.",
  fotos: [
    "assets/proyectos/general-motors/03.jpg",
    "assets/proyectos/general-motors/01.jpg",
    "assets/proyectos/general-motors/02.jpg"
  ]
},
{
  id: "PRY-002",
  title: "Proyecto Duplicar: Módulo I",
  cliente: "OPS · Oilfield Production Services",
  categoria: "Energía Solar",
  stat: "8 casetas",
  ubicacion: "Buenos Aires · La Pampa · Río Negro",
  desc: "",
  fotos: [
    "assets/proyectos/duplicar-modulo-1/01.jpg",
    "assets/proyectos/duplicar-modulo-1/02.jpg",
    "assets/proyectos/duplicar-modulo-1/03.jpg"
  ]
},
{
  id: "PRY-003",
  title: "Proyecto Duplicar: Módulo II",
  cliente: "UT Techint · Sacde",
  categoria: "Energía Solar",
  stat: "10 casetas",
  ubicacion: "Buenos Aires · La Pampa · Río Negro",
  desc: "",
  fotos: [
    "assets/proyectos/duplicar-modulo-2/01.jpg",
    "assets/proyectos/duplicar-modulo-2/02.jpg",
    "assets/proyectos/duplicar-modulo-2/03.jpg"
  ]
},
{
  id: "PRY-004",
  title: "Caseta Solar",
  cliente: "Victor Contreras",
  categoria: "Energía Solar",
  stat: "5 casetas",
  ubicacion: "Añelo, Neuquén",
  desc: "",
  fotos: [
    "assets/proyectos/victor-contreras/01.jpg",
    "assets/proyectos/victor-contreras/03.jpg",
    "assets/proyectos/victor-contreras/04.jpg"
  ]
},
{
  id: "PRY-005",
  title: "Caseta Solar",
  cliente: "YPF",
  categoria: "Energía Solar",
  stat: "1 caseta",
  ubicacion: "General Belgrano, Buenos Aires",
  desc: "",
  fotos: [
    "assets/proyectos/ypf-belgrano/01.jpg",
    "assets/proyectos/ypf-belgrano/02.jpg"
  ]
},
{
  id: "PRY-006",
  title: "Parque solar Gear S.A.",
  cliente: "Gear S.A.",
  categoria: "Energía Solar",
  stat: "",
  ubicacion: "Rojas, Buenos Aires",
  desc: "",
  fotos: [
    "assets/proyectos/gear-sa/04.jpg",
    "assets/proyectos/gear-sa/02.jpg",
    "assets/proyectos/gear-sa/03.jpg",
    "assets/proyectos/gear-sa/01.jpg"
  ]
},
{
  id: "PRY-007",
  title: "AySA Dock Sud",
  cliente: "Trend",
  categoria: "Ingeniería y Automatización",
  stat: "",
  ubicacion: "Dock Sud, Buenos Aires",
  desc: "",
  fotos: [
    "assets/proyectos/aysa-dock-sud/02.jpg",
    "assets/proyectos/aysa-dock-sud/01.jpg"
  ]
},
{
  id: "PRY-008",
  title: "Automatización OPS",
  cliente: "OPS · Oilfield Production Services",
  categoria: "Ingeniería y Automatización",
  stat: "",
  ubicacion: "Río Negro · Neuquén",
  desc: "",
  fotos: [
    "assets/proyectos/ops-automatizacion/01.jpg",
    "assets/proyectos/ops-automatizacion/02.jpg",
    "assets/proyectos/ops-automatizacion/03.jpg"
  ]
},
{
  id: "PRY-009",
  title: "Instalación eléctrica Ecosan",
  cliente: "Ecosan",
  categoria: "Instalaciones Eléctricas",
  stat: "",
  ubicacion: "Belén de Escobar, Buenos Aires",
  desc: "",
  fotos: [
    "assets/proyectos/ecosan/01.jpg",
    "assets/proyectos/ecosan/02.jpg",
    "assets/proyectos/ecosan/03.jpg",
    "assets/proyectos/ecosan/04.jpg"
  ]
},
{
  id: "PRY-010",
  title: "Montaje de piping de proceso",
  cliente: "Contreras S.A.",
  categoria: "Piping Oil & Gas",
  stat: "",
  ubicacion: "Añelo, Neuquén",
  desc: "",
  fotos: [
    "assets/proyectos/piping-obra/01.jpg",
    "assets/proyectos/piping-obra/02.jpg",
    "assets/proyectos/piping-obra/03.jpg",
    "assets/proyectos/piping-obra/04.jpg",
    "assets/proyectos/piping-obra/05.jpg",
    "assets/proyectos/piping-obra/06.jpg"
  ]
}];


const Proyectos = ({ theme = "light" }) => {
  const isDark = theme === "dark";
  const bg = isDark ? "#0A0A0A" : "#FFFFFF";
  const fg = isDark ? "#fff" : "#0A0A0A";
  const muted = isDark ? "#9a9a9a" : "#555";
  const border = isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)";

  const [openIdx, setOpenIdx] = React.useState(null); // índice de proyecto abierto en modal
  const [slide, setSlide] = React.useState(0);
  const [showAll, setShowAll] = React.useState(false);

  // Obras destacadas en la home (orden fijo). El resto aparece al apretar "Ver más".
  const DESTACADAS = ["PRY-002", "PRY-003", "PRY-010", "PRY-008", "PRY-004", "PRY-005"];
  const destacadas = DESTACADAS.map((id) => PROYECTOS.find((p) => p.id === id)).filter(Boolean);
  const resto = PROYECTOS.filter((p) => !DESTACADAS.includes(p.id));
  const ordenadas = [...destacadas, ...resto];
  const visible = showAll ? ordenadas : destacadas;
  const hayMas = resto.length > 0;

  const openProject = (p) => {
    setOpenIdx(PROYECTOS.indexOf(p));
    setSlide(0);
  };
  const close = () => setOpenIdx(null);
  const proj = openIdx != null ? PROYECTOS[openIdx] : null;

  const nextSlide = () => proj && setSlide((s) => (s + 1) % proj.fotos.length);
  const prevSlide = () => proj && setSlide((s) => (s - 1 + proj.fotos.length) % proj.fotos.length);

  // Bloquear scroll del body cuando el modal está abierto
  React.useEffect(() => {
    document.body.style.overflow = openIdx != null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [openIdx]);

  // Asegurar que siempre abra en la primera foto
  React.useEffect(() => {
    if (openIdx != null) setSlide(0);
  }, [openIdx]);

  React.useEffect(() => {
    const onKey = (e) => {
      if (openIdx == null) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openIdx, proj]);

  return (
    <section id="proyectos" className="pt-16 pb-28 lg:pt-20 lg:pb-40" style={{ backgroundColor: bg, scrollMarginTop: 76 }}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 mb-16 items-end">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-10" style={{ backgroundColor: "#00B127" }} />
              <span className="text-[11px] font-semibold tracking-[0.25em] uppercase" style={{ color: "#00B127" }}>
                04 — Proyectos
              </span>
            </div>
            <h2 className="text-5xl lg:text-7xl font-black leading-[0.95] tracking-[-0.02em]" style={{ color: fg }}>Casos destacados</h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <p className="text-base lg:text-lg" style={{ color: muted }}>
              Selección de proyectos ejecutados con distintos clientes y sectores.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((p) =>
          <div key={p.id} className="group cursor-pointer" onClick={() => openProject(p)}>
              <div className="aspect-[4/3] relative overflow-hidden mb-4" style={{ backgroundColor: isDark ? "#141414" : "#EEE" }}>
                <img
                  src={p.fotos[0]}
                  alt={p.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(0,0,0,0) 55%, rgba(0,0,0,0.55) 100%)" }} />
                <div className="absolute top-4 left-4 px-2 py-1 text-[10px] font-bold tracking-[0.15em] uppercase" style={{ backgroundColor: "#00B127", color: "#fff" }}>
                  {p.categoria}
                </div>
                {p.stat && <div className="absolute bottom-4 right-4 text-2xl font-black text-white">{p.stat}</div>}
                {p.fotos.length > 1 && (
                  <div className="absolute bottom-4 left-4 flex items-center gap-1.5 px-2 py-1 text-[10px] font-semibold text-white" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 15l5-5 4 4 3-3 6 6" />
                    </svg>
                    {p.fotos.length}
                  </div>
                )}
              </div>
              <div className="flex justify-between gap-3">
                <div>
                  <div className="text-[10px] font-mono tracking-wider uppercase mb-1" style={{ color: muted }}>
                    {p.ubicacion}
                  </div>
                  <h3 className="text-lg font-bold tracking-tight transition-colors group-hover:text-[#00B127]" style={{ color: fg }}>{p.title}</h3>
                  {p.cliente && <p className="text-xs mt-0.5" style={{ color: muted }}>{p.cliente}</p>}
                </div>
                <span className="shrink-0 w-8 h-8 flex items-center justify-center border transition-all group-hover:translate-x-1" style={{ borderColor: border, color: fg }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </div>
          )}
        </div>

        {hayMas && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="group flex flex-col items-center gap-2"
              style={{ color: fg }}>
              <span className="text-xs font-semibold tracking-[0.2em] uppercase">
                {showAll ? "Ver menos" : "Ver más"}
              </span>
              <span
                className="w-10 h-10 flex items-center justify-center border transition-all group-hover:bg-[#00B127] group-hover:border-[#00B127] group-hover:text-white"
                style={{ borderColor: border }}>
                <svg
                  width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                  style={{ transform: showAll ? "rotate(180deg)" : "none", transition: "transform 0.3s" }}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
                </svg>
              </span>
            </button>
          </div>
        )}
      </div>

      {/* Modal carrusel — portal al body para escapar del transform del scroll-reveal */}
      {proj && ReactDOM.createPortal(
        <div
          className="fixed inset-0 z-[90] flex items-center justify-center p-4 lg:p-10"
          style={{ backgroundColor: "rgba(0,0,0,0.92)" }}
          onClick={close}>
          <div
            className="relative w-full max-w-5xl flex flex-col"
            style={{ maxHeight: "92vh" }}
            onClick={(e) => e.stopPropagation()}>
            {/* Close */}
            <button
              onClick={close}
              className="absolute -top-10 right-0 lg:top-0 lg:-right-12 w-10 h-10 flex items-center justify-center text-white/70 hover:text-white transition-colors z-10"
              aria-label="Cerrar">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            {/* Imagen */}
            <div className="relative bg-black overflow-hidden shrink-0" style={{ height: "62vh" }}>
              {/\.(mp4|webm|mov)$/i.test(proj.fotos[slide]) ? (
                <video
                  key={proj.fotos[slide]}
                  src={proj.fotos[slide]}
                  className="absolute inset-0 w-full h-full object-contain bg-black"
                  controls
                  autoPlay
                  playsInline />
              ) : (
                <img
                  src={proj.fotos[slide]}
                  alt={`${proj.title} ${slide + 1}`}
                  className="absolute inset-0 w-full h-full object-contain bg-black" />
              )}
              {proj.fotos.length > 1 && (
                <>
                  <button
                    onClick={prevSlide}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center text-white transition-all hover:bg-white/10"
                    style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
                    aria-label="Anterior">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" d="M15 18l-6-6 6-6" />
                    </svg>
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center text-white transition-all hover:bg-white/10"
                    style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
                    aria-label="Siguiente">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" d="M9 18l6-6-6-6" />
                    </svg>
                  </button>
                  {/* Dots */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {proj.fotos.map((_, i) =>
                    <button
                      key={i}
                      onClick={() => setSlide(i)}
                      className="h-1.5 rounded-full transition-all"
                      style={{ width: i === slide ? 24 : 8, backgroundColor: i === slide ? "#00B127" : "rgba(255,255,255,0.4)" }}
                      aria-label={`Foto ${i + 1}`} />
                    )}
                  </div>
                </>
              )}
            </div>

            {/* Info */}
            <div className="p-6 lg:p-8" style={{ backgroundColor: isDark ? "#141414" : "#fff" }}>
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex-1 min-w-[240px]">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-2 py-1 text-[10px] font-bold tracking-[0.15em] uppercase" style={{ backgroundColor: "#00B127", color: "#fff" }}>
                      {proj.categoria}
                    </span>
                    <span className="text-[11px] font-mono tracking-wider uppercase" style={{ color: muted }}>
                      {proj.ubicacion}
                    </span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-black tracking-tight mb-1" style={{ color: isDark ? "#fff" : "#0A0A0A" }}>{proj.title}</h3>
                  {proj.cliente && <p className="text-sm font-semibold" style={{ color: "#00B127" }}>{proj.cliente}</p>}
                </div>
                {proj.stat && (
                  <div className="text-right">
                    <div className="text-4xl lg:text-5xl font-black tracking-tight" style={{ color: isDark ? "#fff" : "#0A0A0A" }}>{proj.stat}</div>
                    {proj.statLabel && <div className="text-[10px] font-semibold tracking-[0.2em] uppercase mt-1" style={{ color: muted }}>{proj.statLabel}</div>}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>);

};

window.Proceso = Proceso;
window.Proyectos = Proyectos;