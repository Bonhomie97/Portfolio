const projects = [
  { number: "01", title: "LÚMINA", type: "Identidad visual", year: "2025", className: "lumina", mark: "LÚ\nMINA" },
  { number: "02", title: "SOBREMESA", type: "Dirección de arte", year: "2025", className: "sobremesa", mark: "S\nM" },
  { number: "03", title: "PULSO", type: "Editorial", year: "2024", className: "pulso", mark: "PULSO" },
  { number: "04", title: "NÓMADA", type: "Campaña digital", year: "2024", className: "nomada", mark: "N/M" },
];

export default function Home() {
  return (
    <main>
      <header className="nav shell">
        <a className="logo" href="#inicio" aria-label="Inicio">A<span>—</span>R</a>
        <nav aria-label="Navegación principal">
          <a href="#trabajos">Proyectos</a>
          <a href="#perfil">Perfil</a>
          <a className="nav-contact" href="mailto:hola@ar-estudio.com">Hablemos ↗</a>
        </nav>
      </header>

      <section className="hero shell" id="inicio">
        <div className="hero-meta"><span>Diseñador gráfico independiente</span><span>Buenos Aires · AR</span></div>
        <h1>Ideas que<br/><em>toman forma.</em></h1>
        <div className="hero-bottom">
          <p>Creo identidades, experiencias y piezas visuales con intención, claridad y un toque inesperado.</p>
          <a href="#trabajos" className="circle-link" aria-label="Ver proyectos"><span>↓</span></a>
        </div>
        <div className="shape shape-one" aria-hidden="true"></div>
        <div className="shape shape-two" aria-hidden="true"></div>
      </section>

      <section className="work shell" id="trabajos">
        <div className="section-head"><p>Selección de trabajos</p><span>( 2024—2025 )</span></div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project" key={project.title}>
              <div className={`project-art ${project.className}`}>
                <span className="project-number">{project.number}</span>
                <span className="project-mark">{project.mark}</span>
                <span className="project-arrow">↗</span>
              </div>
              <div className="project-info"><h2>{project.title}</h2><p>{project.type}</p><span>{project.year}</span></div>
            </article>
          ))}
        </div>
      </section>

      <section className="about shell" id="perfil">
        <div className="about-kicker">( Sobre mí )</div>
        <div className="about-copy">
          <p>Trabajo entre la <em>estrategia</em> y la <em>intuición</em> para construir universos visuales memorables.</p>
          <div className="services"><span>Identidad de marca</span><span>Dirección de arte</span><span>Diseño editorial</span><span>Experiencias digitales</span></div>
        </div>
      </section>

      <footer className="footer shell" id="contacto">
        <p>¿Tenés un proyecto en mente?</p>
        <a href="mailto:hola@ar-estudio.com">Hagamos algo<br/><em>increíble.</em> ↗</a>
        <div className="footer-bottom"><span>© 2025 A—R Studio</span><div><a href="#">Instagram</a><a href="#">Behance</a><a href="#">LinkedIn</a></div><a href="#inicio">Volver arriba ↑</a></div>
      </footer>
    </main>
  );
}
