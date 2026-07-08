const CTAFinal = ({ theme = "light" }) => {
  const isDark = theme === "dark";
  return (
    <section id="contacto" className="relative overflow-hidden" style={{ backgroundColor: "#0A0A0A" }}>
      {/* Grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 80%)"
        }} />
      
      {/* Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 50% 100%, rgba(0,177,39,0.25) 0%, transparent 55%)`
        }} />
      

      {/* Big watermark simbolo */}
      <div
        className="absolute -right-20 -bottom-40 pointer-events-none opacity-[0.06]">
        
        <LogoSimbolo size={800} invertido />
      </div>

      <div className="relative max-w-[1440px] mx-auto px-6 lg:px-10 py-28 lg:py-40">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-10" style={{ backgroundColor: "#00B127" }} />
              <span className="text-[11px] font-semibold tracking-[0.25em] uppercase" style={{ color: "#00B127" }}>
                07 — Contacto
              </span>
            </div>
            <h2 className="text-5xl lg:text-8xl font-black leading-[0.9] tracking-[-0.02em] text-white mb-6">Empezá tu próximo proyecto con nosotros

            </h2>
            <p className="text-lg lg:text-xl max-w-xl" style={{ color: "rgba(255,255,255,0.7)" }}>
              Contanos qué necesitás. Te contactamos para una reunión técnica y una cotización sin compromiso.
            </p>
          </div>

          <div className="lg:col-span-5">
            <ContactoForm />
          </div>
        </div>

        {/* Contact info bar */}
        <div className="mt-20 pt-10 border-t grid md:grid-cols-4 gap-8" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
          {[
          ["Email", "proyectos@infinite-energy.com.ar", "mailto:proyectos@infinite-energy.com.ar"],
          ["Teléfono", "+54 9 11 6740-3700", "tel:+5491167403700"],
          ["WhatsApp", "+54 9 11 6963-2803", "https://wa.me/5491169632803"],
          ["Ubicación", "Belén de Escobar · Buenos Aires", "#"]].
          map(([label, value, href]) =>
          <a key={label} href={href} className="group">
              <div className="text-[10px] font-semibold tracking-[0.25em] uppercase mb-2" style={{ color: "#00B127" }}>
                {label}
              </div>
              <div className="text-base font-medium text-white group-hover:text-[#00B127] transition-colors">
                {value}
              </div>
            </a>
          )}
        </div>
      </div>
    </section>);

};

const ContactoForm = () => {
  const [form, setForm] = React.useState({ nombre: "", empresa: "", telefono: "", mensaje: "", sector: "" });
  const [state, setState] = React.useState("idle"); // idle | sending | sent
  const [errors, setErrors] = React.useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: undefined });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!form.nombre.trim()) newErrors.nombre = true;
    if (!form.telefono.trim()) newErrors.telefono = true;
    if (!form.mensaje.trim()) newErrors.mensaje = true;
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setState("sending");

    // Arma el correo con los datos del formulario y abre el cliente de mail
    const destinatario = "proyectos@infinite-energy.com.ar";
    const asunto = `Consulta web — ${form.nombre}${form.empresa ? " (" + form.empresa + ")" : ""}`;
    const cuerpo =
      `Nombre: ${form.nombre}\n` +
      `Empresa: ${form.empresa || "-"}\n` +
      `Teléfono: ${form.telefono}\n` +
      `Sector de interés: ${form.sector || "-"}\n\n` +
      `Mensaje:\n${form.mensaje}`;
    const mailto = `mailto:${destinatario}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`;

    window.location.href = mailto;
    setTimeout(() => setState("sent"), 800);
  };

  const inputClass = "w-full bg-transparent border-0 border-b text-white placeholder-white/40 px-0 py-4 text-base focus:outline-none transition-colors";

  if (state === "sent") {
    return (
      <div className="p-10 border text-center" style={{ borderColor: "rgba(0,177,39,0.4)", backgroundColor: "rgba(0,177,39,0.08)" }}>
        <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ backgroundColor: "#00B127" }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div className="text-2xl font-bold text-white mb-2">Mensaje recibido</div>
        <div className="text-sm text-white/70">Te contactamos en menos de 24 hs hábiles.</div>
      </div>);

  }

  return (
    <form onSubmit={handleSubmit} className="p-8 border" style={{ borderColor: "rgba(255,255,255,0.1)", backgroundColor: "rgba(255,255,255,0.02)" }}>
      <div className="text-[10px] font-semibold tracking-[0.25em] uppercase mb-6" style={{ color: "#00B127" }}>
        / Formulario de contacto
      </div>

      <div className="space-y-1">
        <input
          name="nombre"
          placeholder="Nombre completo *"
          value={form.nombre}
          onChange={handleChange}
          className={inputClass}
          style={{ borderColor: errors.nombre ? "#FFBA03" : "rgba(255,255,255,0.2)" }}
          onFocus={(e) => e.target.style.borderColor = "#00B127"}
          onBlur={(e) => e.target.style.borderColor = errors.nombre ? "#FFBA03" : "rgba(255,255,255,0.2)"} />
        
        <input
          name="empresa"
          placeholder="Empresa"
          value={form.empresa}
          onChange={handleChange}
          className={inputClass}
          style={{ borderColor: "rgba(255,255,255,0.2)" }}
          onFocus={(e) => e.target.style.borderColor = "#00B127"}
          onBlur={(e) => e.target.style.borderColor = "rgba(255,255,255,0.2)"} />
        
        <input
          name="telefono"
          placeholder="Teléfono *"
          value={form.telefono}
          onChange={handleChange}
          className={inputClass}
          style={{ borderColor: errors.telefono ? "#FFBA03" : "rgba(255,255,255,0.2)" }}
          onFocus={(e) => e.target.style.borderColor = "#00B127"}
          onBlur={(e) => e.target.style.borderColor = errors.telefono ? "#FFBA03" : "rgba(255,255,255,0.2)"} />
        
        <select
          name="sector"
          value={form.sector}
          onChange={handleChange}
          className={inputClass}
          style={{ borderColor: "rgba(255,255,255,0.2)" }}>
          
          <option value="" style={{ color: "#0A0A0A" }}>Sector de interés</option>
          <option value="oil-gas" style={{ color: "#0A0A0A" }}>Oil & Gas</option>
          <option value="mineria" style={{ color: "#0A0A0A" }}>Minería</option>
          <option value="industria" style={{ color: "#0A0A0A" }}>Industria & Manufactura</option>
          <option value="energia" style={{ color: "#0A0A0A" }}>Energía & Renovables</option>
          <option value="otro" style={{ color: "#0A0A0A" }}>Otro</option>
        </select>
        <textarea
          name="mensaje"
          placeholder="Contanos sobre tu proyecto *"
          rows={3}
          value={form.mensaje}
          onChange={handleChange}
          className={inputClass + " resize-none"}
          style={{ borderColor: errors.mensaje ? "#FFBA03" : "rgba(255,255,255,0.2)" }}
          onFocus={(e) => e.target.style.borderColor = "#00B127"}
          onBlur={(e) => e.target.style.borderColor = errors.mensaje ? "#FFBA03" : "rgba(255,255,255,0.2)"} />
        
      </div>

      <button
        type="submit"
        disabled={state === "sending"}
        className="mt-8 w-full px-6 py-4 font-semibold text-sm tracking-wide uppercase transition-all disabled:opacity-60 flex items-center justify-center gap-2"
        style={{ backgroundColor: "#00B127", color: "#fff" }}>
        
        {state === "sending" ?
        <>
            <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="#fff" strokeWidth="3" opacity="0.3" />
              <path d="M12 2a10 10 0 0 1 10 10" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
            </svg>
            Enviando...
          </> :

        <>Enviar mensaje →</>
        }
      </button>
    </form>);

};

const Footer = () => {
  return (
    <footer className="relative" style={{ backgroundColor: "#050505", color: "#fff" }}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 py-16">
        <div className="grid md:grid-cols-3 gap-12 md:gap-10 mb-16 items-start">
          {/* Logo */}
          <div className="flex flex-col">
            <LogoCompleto size={64} invertido />
          </div>

          {/* Servicios */}
          <div className="md:justify-self-center">
            <div className="text-[10px] font-bold tracking-[0.25em] uppercase mb-4" style={{ color: "#00B127" }}>Servicios</div>
            <ul className="space-y-2.5 text-sm">
              {["Eléctricas", "Ingeniería", "Piping O&G", "Solar", "Automatización", "Mantenimiento"].map((s) =>
              <li key={s}><a href="#servicios" className="hover:text-[#00B127] transition-colors" style={{ color: "rgba(255,255,255,0.7)" }}>{s}</a></li>
              )}
            </ul>
          </div>

          {/* Contacto */}
          <div className="md:justify-self-end">
            <div className="text-[10px] font-bold tracking-[0.25em] uppercase mb-4" style={{ color: "#00B127" }}>Contacto</div>
            <ul className="space-y-2.5 text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>
              <li><a href="mailto:proyectos@infinite-energy.com.ar" className="hover:text-[#00B127] transition-colors">proyectos@infinite-energy.com.ar</a></li>
              <li><a href="https://wa.me/5491167403700" target="_blank" rel="noreferrer" className="hover:text-[#00B127] transition-colors">+54 9 11 6740-3700</a></li>
              <li>Belén de Escobar, Bs As</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t flex flex-wrap items-center justify-between gap-4" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
          <div className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
            © 2026 G&M Infinite Energy S.A. · Todos los derechos reservados
          </div>
          <div className="text-xs font-mono tracking-wider" style={{ color: "rgba(255,255,255,0.3)" }}>
            Buenos Aires · Argentina
          </div>
        </div>
      </div>
    </footer>);

};

const WhatsAppButton = () =>
<a
  href="https://wa.me/5491167403700"
  target="_blank"
  rel="noreferrer"
  className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
  style={{ backgroundColor: "#25D366" }}
  aria-label="WhatsApp">
  
    <svg width="26" height="26" viewBox="0 0 24 24" fill="#fff">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  </a>;


window.CTAFinal = CTAFinal;
window.Footer = Footer;
window.WhatsAppButton = WhatsAppButton;