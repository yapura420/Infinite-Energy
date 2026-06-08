const Hero = ({ variant = "imagen", theme = "light" }) => {
  const isDark = theme === "dark";
  const [mouseX, setMouseX] = React.useState(50);
  const [mouseY, setMouseY] = React.useState(50);
  const [scrollY, setScrollY] = React.useState(0);

  React.useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    setMouseX((e.clientX - r.left) / r.width * 100);
    setMouseY((e.clientY - r.top) / r.height * 100);
  };

  if (variant === "tipografia") {
    return (
      <section
        id="inicio"
        className="relative overflow-hidden"
        style={{
          backgroundColor: isDark ? "#0A0A0A" : "#F5F5F2",
          minHeight: "100vh",
          paddingTop: 120
        }}
        onMouseMove={onMove}>
        
        {/* Simbolo watermark */}
        <div
          className="absolute pointer-events-none"
          style={{
            right: "-8%",
            top: "10%",
            opacity: isDark ? 0.07 : 0.06,
            transform: `translate(${(mouseX - 50) * 0.2}px, ${(mouseY - 50) * 0.2}px)`,
            transition: "transform 0.6s cubic-bezier(0.2,0.8,0.2,1)"
          }}>
          
          <LogoSimbolo size={900} invertido={isDark} />
        </div>

        {/* Grid lines */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(${isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.04)"} 1px, transparent 1px), linear-gradient(90deg, ${isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.04)"} 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
            maskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)"
          }} />
        

        <div className="relative max-w-[1440px] mx-auto px-6 lg:px-10 pt-16 pb-32">
          <h1
            className="font-black leading-[0.88] tracking-[-0.03em] mb-10"
            style={{
              fontSize: "clamp(56px, 10vw, 176px)",
              color: isDark ? "#fff" : "#0A0A0A"
            }}>
            
            Donde la<br />
            producción<br />
            <span style={{ color: "#00B127" }}>no se detiene.</span>
          </h1>

          <div className="max-w-3xl">
            <p className="text-lg lg:text-2xl leading-relaxed font-medium" style={{ color: isDark ? "#b5b5b5" : "#333" }}>
              Ingeniería, instalaciones eléctricas industriales y energía solar.
            </p>
            <p className="text-lg lg:text-2xl leading-relaxed font-bold mt-2" style={{ color: isDark ? "#fff" : "#0A0A0A" }}>
              Para la industria argentina.
            </p>
          </div>
        </div>
      </section>);

  }

  // variant: imagen (default)
  return (
    <section id="inicio" className="relative overflow-hidden" style={{ minHeight: "100vh", backgroundColor: "#0A0A0A" }}>
      {/* Foto real — cubre toda la pantalla */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('assets/obras/hero-main.jpg?v=4')`,
          backgroundColor: "#0A0A0A"
        }} />
      

      {/* Animated grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 80%)",
          mixBlendMode: "overlay"
        }} />
      

      {/* Gradient overlay muy suave — protagonismo a la foto, sólo legibilidad mínima del texto abajo */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            linear-gradient(180deg, rgba(10,10,10,0.1) 0%, rgba(10,10,10,0) 25%, rgba(10,10,10,0) 60%, rgba(10,10,10,0.55) 100%),
            linear-gradient(90deg, rgba(10,10,10,0.35) 0%, rgba(10,10,10,0.05) 45%, rgba(10,10,10,0) 100%)
          `
        }} />
      

      <div className="relative max-w-[1440px] mx-auto px-6 lg:px-10 pt-36 pb-24 min-h-screen flex flex-col justify-between">
        <div>

          <h1
            className="font-black leading-[0.9] tracking-[-0.02em] text-white mb-8"
            style={{ fontSize: "clamp(34px, 4.6vw, 72px)", textAlign: "justify", textTransform: "uppercase" }}>
            
            Donde la<br />
            producción<br />
            <span className="text-white">no se detiene</span>
          </h1>

          <div className="max-w-3xl">
            <p className="font-medium" style={{ color: "rgba(255,255,255,0.75)", fontSize: "clamp(13px, 1.4vw, 21px)", textAlign: "justify", lineHeight: "1.1" }}>
              Ingeniería, instalaciones eléctricas industriales y energía solar.
            </p>
            <p className="font-bold mt-2 text-white" style={{ fontSize: "clamp(13px, 1.4vw, 21px)", textAlign: "justify", lineHeight: "1.1" }}>Para la industria argentina</p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60">
        <span className="text-[10px] font-semibold tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-px h-10 relative overflow-hidden">
          <div className="absolute inset-0 bg-white/20" />
          <div
            className="absolute top-0 left-0 w-full h-4 bg-white"
            style={{ animation: "scrollDot 2s ease-in-out infinite" }} />
          
        </div>
      </div>
      <style>{`@keyframes scrollDot { 0% { top: -16px } 100% { top: 100% } }`}</style>
    </section>);

};

window.Hero = Hero;