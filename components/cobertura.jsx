// Mapa real de Argentina con todas las provincias
// Datos cargados desde components/argentina-paths.js (window.PROVINCES)

const Cobertura = ({ theme = "light" }) => {
  const isDark = theme === "dark";
  const bg = isDark ? "#0f0f0f" : "#F5F5F2";
  const fg = isDark ? "#fff" : "#0A0A0A";
  const muted = isDark ? "#9a9a9a" : "#555";
  const mapFill = isDark ? "#1a1a1a" : "#E8E8E3";
  const mapStroke = isDark ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.18)";
  const mapHover = "#00B127";

  const [hoveredProv, setHoveredProv] = React.useState(null);
  const [provTip, setProvTip] = React.useState(null); // { name, x, y } en coords SVG
  const svgRef = React.useRef(null);

  const svgPoint = (e) => {
    const svg = svgRef.current;
    if (!svg) return { x: 0, y: 0 };
    const pt = svg.createSVGPoint();
    pt.x = e.clientX;
    pt.y = e.clientY;
    const ctm = svg.getScreenCTM();
    if (!ctm) return { x: 0, y: 0 };
    const p = pt.matrixTransform(ctm.inverse());
    return { x: p.x, y: p.y };
  };
  const provinces = window.PROVINCES || [];

  // Provincias donde tenemos presencia activa (highlight)
  const ACTIVE_PROVINCES = new Set([
  "AR-B", // Buenos Aires
  "AR-C", // CABA
  "AR-Q", // Neuquén
  "AR-S", // Santa Fe
  "AR-X", // Córdoba
  "AR-M", // Mendoza
  "AR-A", // Salta
  "AR-U", // Chubut
  "AR-Z", // Santa Cruz
  "AR-T", // Tucumán
  "AR-N" // Misiones
  ]);

  // Marcadores sobre el viewBox real del SVG (361.5 x 792.6)
  // Coordenadas centroide aproximadas de cada provincia destacada
  const points = [
  // Oficina central
  { id: "ESC", name: "Belén de Escobar", x: 268, y: 261, main: true, note: "Oficina central" },
  // Buenos Aires province
  { id: "DS", name: "Dock Sud", x: 274, y: 268, note: "Buenos Aires" },
  { id: "RJ", name: "Rojas", x: 240, y: 260, note: "Buenos Aires" },
  { id: "BB", name: "Bahía Blanca", x: 220, y: 348, note: "Buenos Aires" },
  { id: "BAR", name: "Baradero", x: 258, y: 250, note: "Buenos Aires" },
  { id: "ROS", name: "Rosario", x: 235, y: 232, note: "Santa Fe · Centro" },
  { id: "ROSGM", name: "Rosario · General Motors", x: 232, y: 226, note: "Planta GM Alvear" },
  { id: "SN", name: "San Nicolás", x: 248, y: 242, note: "Buenos Aires" },
  // Río Negro
  { id: "RC", name: "Río Colorado", x: 178, y: 350, note: "Río Negro" },
  { id: "PM", name: "Pichi Mahuida", x: 172, y: 355, note: "Río Negro" },
  { id: "CCH", name: "Choele Choel", x: 150, y: 372, note: "Río Negro" },
  { id: "CHI", name: "Chichinales", x: 122, y: 378, note: "Río Negro" },
  { id: "GR", name: "General Roca", x: 110, y: 380, note: "Río Negro" }];


  return (
    <section id="cobertura" className="py-28 lg:py-40 overflow-hidden" style={{ backgroundColor: bg }}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left text */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-10" style={{ backgroundColor: "#00B127" }} />
              <span className="text-[11px] font-semibold tracking-[0.25em] uppercase" style={{ color: "#00B127" }}>
                06 — Cobertura
              </span>
            </div>
            <h2 className="text-5xl lg:text-7xl font-black leading-[0.95] tracking-[-0.02em] mb-6" style={{ color: fg }}>
              Presencia<br />
              en toda<br />
              <span style={{ color: "#00B127" }}>Argentina</span>
            </h2>
            <p className="text-base lg:text-lg mb-10" style={{ color: muted }}>
              Desde nuestra base en Belén de Escobar (Buenos Aires), ejecutamos proyectos en todo el territorio nacional. Equipos propios, logística coordinada y soporte continuo.
            </p>

            <div className="mt-10 pt-8 border-t" style={{ borderColor: isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)" }}>
              <div className="text-[11px] font-semibold tracking-[0.2em] uppercase mb-2" style={{ color: "#00B127" }}>
                Oficina central
              </div>
              <div className="text-xl font-bold mb-1" style={{ color: fg }}>Belén de Escobar</div>
              <div className="text-sm" style={{ color: muted }}>Buenos Aires, Argentina</div>
            </div>
          </div>

          {/* Map */}
          <div className="lg:col-span-7 relative">
            <div
              className="relative mx-auto"
              style={{
                maxWidth: "520px",
                backgroundImage: `linear-gradient(${isDark ? "rgba(255,255,255,0.025)" : "rgba(0,0,0,0.025)"} 1px, transparent 1px), linear-gradient(90deg, ${isDark ? "rgba(255,255,255,0.025)" : "rgba(0,0,0,0.025)"} 1px, transparent 1px)`,
                backgroundSize: "40px 40px"
              }}>
              
              <svg
                ref={svgRef}
                viewBox="0 0 361.55 792.58"
                className="w-full h-auto"
                style={{ display: "block" }}>
                
                {/* Provincias */}
                {provinces.map((p) => {
                  const isActive = ACTIVE_PROVINCES.has(p.id);
                  const isHover = hoveredProv === p.id;
                  return (
                    <path
                      key={p.id}
                      d={p.d}
                      fill={isHover ? mapHover : isActive ? isDark ? "#222" : "#DCDCD5" : mapFill}
                      stroke={isHover ? "#00B127" : mapStroke}
                      strokeWidth={isHover ? 1.2 : 0.6}
                      style={{ transition: "fill 0.2s, stroke 0.2s", cursor: "pointer" }}
                      onMouseEnter={(e) => { setHoveredProv(p.id); setProvTip({ name: p.name, ...svgPoint(e) }); }}
                      onMouseMove={(e) => setProvTip({ name: p.name, ...svgPoint(e) })}
                      onMouseLeave={() => { setHoveredProv(null); setProvTip(null); }}>
                      
                    </path>);

                })}

                {/* Puntos (primero todos los círculos) */}
                {points.map((p) =>
                <g
                  key={p.id}
                  style={{ cursor: "pointer" }}
                  onMouseEnter={() => setHoveredProv("pt-" + p.id)}
                  onMouseLeave={() => setHoveredProv(null)}>
                  
                    {p.main &&
                  <circle cx={p.x} cy={p.y} r="6" fill="none" stroke="#00B127" strokeWidth="1.2" opacity="0.5">
                        <animate attributeName="r" from="4" to="16" dur="2s" repeatCount="indefinite" />
                        <animate attributeName="opacity" from="0.7" to="0" dur="2s" repeatCount="indefinite" />
                      </circle>
                  }
                    <circle
                    cx={p.x}
                    cy={p.y}
                    r={p.main ? 5 : 3.5}
                    fill={p.main ? "#FFBA03" : "#00B127"}
                    stroke={isDark ? "#0f0f0f" : "#F5F5F2"}
                    strokeWidth="1.2" />
                  
                  </g>
                )}

                {/* Tooltips (al final, para que queden por delante de todos los puntos) */}
                {points.map((p) => {
                  const isHovered = hoveredProv === "pt-" + p.id;
                  if (!isHovered) return null;
                  return (
                    <g key={"tt-" + p.id} style={{ pointerEvents: "none" }}>
                      <rect
                        x={p.x + 8}
                        y={p.y - 22}
                        width="155"
                        height="42"
                        fill={isDark ? "#1a1a1a" : "#0A0A0A"}
                        stroke="#00B127"
                        strokeWidth="0.8" />
                      
                      <text x={p.x + 16} y={p.y - 7} fontSize="9" fontWeight="700" fill="#fff">
                        {p.name}
                      </text>
                      <text x={p.x + 16} y={p.y + 8} fontSize="7.5" fill="rgba(255,255,255,0.7)">
                        {p.note}
                      </text>
                    </g>);

                })}

                {/* Tooltip de provincia (sigue el mouse) */}
                {provTip && (
                  <g style={{ pointerEvents: "none" }}>
                    <rect
                      x={provTip.x + 6}
                      y={provTip.y - 16}
                      width={provTip.name.length * 5.4 + 16}
                      height="22"
                      fill={isDark ? "#1a1a1a" : "#0A0A0A"}
                      stroke="#00B127"
                      strokeWidth="0.8" />
                    <text x={provTip.x + 14} y={provTip.y - 1} fontSize="9" fontWeight="700" fill="#fff">
                      {provTip.name}
                    </text>
                  </g>
                )}
              </svg>
            </div>

            {/* Legend */}
            <div className="mt-6 flex flex-wrap gap-4 justify-center">
              <div className="flex items-center gap-2 text-xs" style={{ color: muted }}>
                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "#FFBA03" }} />
                Oficina central
              </div>
              <div className="flex items-center gap-2 text-xs" style={{ color: muted }}>
                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "#00B127" }} />
                Proyecto activo
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

window.Cobertura = Cobertura;