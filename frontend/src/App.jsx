
import './App.css'
import VolverArriba from "./VolverArriba";

function App() {
  return (
    <>
{/* ENCABEZADO */}   
      <header className="encabezado">
        <div className="encabezado-contenido">
          <img
            className="logo-institucional"
            src="/images/escudo.jpg"
            alt="Escudo de la escuela"
          />

          <div className="identidad">
            <p className="identidad-etiqueta">
              EDUCACIÓN · DISCIPLINA · SUPERACIÓN
            </p>

            <h1>Escuela Secundaria Técnica No. 83</h1>

            <p className="nombre-institucion">
              “Ignacio Zaragoza Seguín”
            </p>
          </div>

          <img
            className="mascota-institucional"
            src="/images/mascota.jpg"
            alt="Mascota de la escuela"
          />
        </div>
      </header>
{/* MENU */}
      <nav className="menu-principal" aria-label="Menú principal">
        <a href="#inicio">Inicio</a>
        <a href="#nosotros">Sobre Nosotros</a>
        <a href="#mision-vision">Misión y Visión</a>
        <a href="#servicios">Servicios Administrativos</a>
        <a href="#galeria">Galería</a>
        <a href="#casos-exito">Casos de Éxito</a>
        <a href="#contacto">Contacto</a>
      </nav>
      <main>
{/* INICIO */}
        <section id="inicio" className="inicio">
          <div className="inicio-contenido">
            <p className="inicio-etiqueta">
              BIENVENIDOS A NUESTRA COMUNIDAD EDUCATIVA
            </p>

            <h2>¡Bienvenidos!</h2>

            <p className="inicio-descripcion">
              Educación, conocimientos y valores para construir
              un mejor futuro.
            </p>
          </div>
        </section>
{/* SOBRE NOSOTROS */}
        <section id="nosotros" className="seccion">
          <h2>Sobre Nosotros</h2>

  <div className="subseccion-nosotros">
    <h3>Ubicación</h3>

  <p>
    La Escuela Secundaria Técnica No. 83
    “Ignacio Zaragoza Seguín” se encuentra en la Ciudad de México.
    Consulta el mapa para conocer su ubicación.
  </p>

  <div className="contenedor-mapa">
    <iframe
      src="https://www.google.com/maps?q=19.4009958,-99.0594506&z=17&output=embed"
      title="Ubicación de la Escuela Secundaria Técnica No. 83 en Google Maps"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      allowFullScreen
    ></iframe>
  </div>
 
  </div>

  <div className="subseccion-nosotros">
    <h3>Historia y Concepto de las Escuelas Técnicas</h3>

    <p>
      En esta sección se describirán los antecedentes de la
      educación secundaria técnica y las características de esta
      modalidad educativa, así como su importancia en la formación
      académica y tecnológica de los estudiantes.
    </p>
  </div>

  <div className="subseccion-nosotros">
    <h3>Organigrama</h3>

    <img
      className="imagen-organigrama"
      src="/images/organigrama.jpg"
      alt="Organigrama de la Escuela Secundaria Técnica No. 83"
      loading="lazy"
    />
  </div>

  <div className="subseccion-nosotros">
    <h3>Himno a las Escuelas Secundarias Técnicas</h3>

    <div className="contenedor-video">
    <iframe
      src="https://www.youtube.com/embed/WhVdVIza5D8?si=YO_zHNiF7rKrgZls"
      title="Himno a las Escuelas Secundarias Técnicas"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  </div>
  
  </div>
  <VolverArriba />
        </section>
{/* MISION Y VISION */}
        <section id="mision-vision" className="seccion seccion-alterna">
          <h2>Misión y Visión</h2>

  <div className="bloques-mision-vision">
    <article className="bloque-mv">
      <h3>Misión</h3>
      <p>
        Garantizar una educación integral y de excelencia para los
        adolescentes, fortaleciendo sus capacidades humanísticas,
        científicas y tecnológicas. Asimismo, acercar a los estudiantes
        al mundo laboral mediante el desarrollo de conocimientos y
        habilidades técnicas, fomentando el pensamiento crítico,
        los valores y una conciencia social activa.
      </p>
    </article>

    <article className="bloque-mv">
      <h3>Visión</h3>
      <p>
        Ser una modalidad educativa de nivel secundaria líder y
        referente, capaz de formar una comunidad de agentes de cambio
        que apliquen sus competencias académicas y tecnológicas al
        desarrollo del país, dentro de un entorno de inclusión,
        respeto y mejora continua.
      </p>
    </article>
  </div>

  <VolverArriba />
        </section>
{/* SERVICIOS ADMINISTRATIVOS */}
        <section id="servicios" className="seccion">
          <h2>Servicios Administrativos</h2>

    <div className="contenido-servicios">

    <div className="subseccion-servicios">
      <h3>Servicios disponibles</h3>

      <div className="tabla-responsive">
        <table className="tabla-servicios">
          <thead>
            <tr>
              <th>Servicio</th>
              <th>Descripción</th>
              <th>Precio / Costo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Credencial</td>
              <td>Reposición por robo o extravío</td>
              <td>$10.00</td>
            </tr>
            <tr>
              <td>Examen</td>
              <td>Examen extraordinario</td>
              <td>$30.00</td>
            </tr>
            <tr>
              <td>Constancia</td>
              <td>Constancia de estudios para trámites</td>
              <td>$25.00</td>
            </tr>
            <tr>
              <td>Historial académico</td>
              <td>Consulta de calificaciones del alumno</td>
              <td>Sin costo</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div className="subseccion-servicios">
      <h3>Horarios de atención</h3>
      <p>La atención administrativa se propone en los siguientes horarios:</p>
      <ul>
        <li>Lunes a viernes: 8:00 a 14:00 horas.</li>
        <li>Atención a padres de familia: 9:00 a 13:00 horas.</li>
        <li>Trámites escolares: de acuerdo con la disponibilidad del área administrativa.</li>
      </ul>
    </div>

    <div className="subseccion-servicios">
      <h3>Requisitos</h3>
      <ul>
        <li>Presentar nombre completo del alumno.</li>
        <li>Proporcionar número de matrícula o CURP.</li>
        <li>Presentar identificación del padre, madre o tutor, cuando corresponda.</li>
        <li>Indicar el trámite que se desea realizar.</li>
        <li>Entregar la documentación adicional solicitada por el área administrativa.</li>
      </ul>
    </div>

    <div className="subseccion-servicios">
      <h3>Procedimientos</h3>
      <ol>
        <li>Acudir al área de Servicios Administrativos.</li>
        <li>Solicitar información sobre el trámite requerido.</li>
        <li>Entregar la documentación correspondiente.</li>
        <li>Realizar el pago, cuando aplique.</li>
        <li>Esperar la confirmación y entrega del documento o servicio solicitado.</li>
      </ol>
    </div>

  </div>

  <VolverArriba />
        </section>

{/* GALERÍA */}

<section id="galeria" className="seccion seccion-alterna">
  <h2>Galería</h2>

  <div className="contenido-galeria">

    <div className="rejilla-galeria">

      {/* Agosto 2025 */}
      <div className="elemento-galeria">
        <img
          src="/images/15septiembre1.jpg"
          alt="Ceremonia Cívica"
        />
        <p>Agosto 2025 Ceremonia Cívica</p>
      </div>

      {/* Septiembre 2025 */}
      <div className="elemento-galeria">
        <img
          src="/images/15septiembre2.jpg"
          alt="Feria Mexicana"
        />
        <p>Septiembre 2025 Feria Mexicana</p>
      </div>

      {/* Noviembre 2025 */}
      <div className="elemento-galeria">
        <img
          src="/images/muertos1.jpg"
          alt="Día de Muertos"
        />
        <p>Noviembre 2025 Día de Muertos</p>
      </div>

      {/* Diciembre 2025 */}
      <div className="elemento-galeria">
        <img
          src="/images/navidad1.jpg"
          alt="Festival Navideño"
        />
        <p>Diciembre 2025 Festival Navideño</p>
      </div>

      {/* Mayo 2026 */}
      <div className="elemento-galeria">
        <video controls>
          <source src="/videos/madres.mp4" type="video/mp4" />
          Tu navegador no puede reproducir este video.
        </video>
        <p>Mayo 2026 Día de las madres</p>
      </div>

    </div>
  </div>

  <VolverArriba />
</section>



        
{/* SECCIÓN: CASOS DE ÉXITO */}
<section id="casos-exito" className="seccion">

  <h2>Casos de Éxito</h2>

  <div className="contenido-casos">

    {/* Aventura Científica y Tecnológica */}
    <article className="elemento-caso">
      <img
        src="/images/aventura.jpg"
        alt="Aventura Científica y Tecnológica"
      />
      <h3>Aventura Científica y Tecnológica</h3>
      <p>
        Participación de los estudiantes en actividades
        científicas y tecnológicas que impulsan la creatividad,
        el aprendizaje y la innovación.
      </p>
    </article>

    {/* Torneo de Tochito Bandera */}
    <article className="elemento-caso">
      <img
        src="/images/tochito.jpg"
        alt="Torneo de Tochito Bandera"
      />
      <h3>Torneo de Tochito Bandera</h3>
      <p>
        Participación de los alumnos en la etapa estatal
        del torneo, promoviendo el trabajo en equipo,
        la disciplina y el espíritu deportivo.
      </p>
    </article>

    {/* Centenario de la Educación Secundaria */}
    <article className="elemento-caso">
      <img
        src="/images/cientifica.jpg"
        alt="Feria Científica"
      />
      <h3>Centenario de la Educación Secundaria</h3>
      <p>
        Participación en la Feria Científica mediante
        proyectos escolares que fomentan el conocimiento,
        la investigación y la creatividad.
      </p>
    </article>

    {/* Feria Tecnológica */}
    <article className="elemento-caso">
      <img
        src="/images/tecnologica.jpg"
        alt="Feria Tecnológica"
      />
      <h3>Feria Tecnológica</h3>
      <p>
        Presentación de proyectos tecnológicos que
        permiten demostrar las habilidades y conocimientos
        adquiridos por los estudiantes.
      </p>
    </article>

  </div>

  <VolverArriba />

</section>


        

{/* SECCIÓN: CONTACTO */}
<section id="contacto" className="seccion seccion-alterna">

  <h2>Contacto</h2>

  <div className="contenedor-contacto">

    <h3>Formulario de Contacto</h3>

    <form
      action="https://api.web3forms.com/submit"
      method="POST"
    >

      <input
        type="hidden"
        name="access_key"
        value="2e341df5-6b1b-417b-9476-f4f60cea4fb1"
      />

      <input
        type="hidden"
        name="subject"
        value="Nuevo mensaje - Escuela Secundaria Técnica No. 83"
      />

      <input
        type="checkbox"
        name="botcheck"
        style={{ display: "none" }}
      />

      <div className="campo-contacto">
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          placeholder="Tu nombre"
          maxLength="100"
          required
        />
      </div>

      <div className="campo-contacto">
        <label htmlFor="correo">Correo:</label>
        <input
          type="email"
          id="correo"
          name="email"
          placeholder="Tu correo electrónico"
          maxLength="150"
          required
        />
      </div>

      <div className="campo-contacto">
        <label htmlFor="telefono">Teléfono:</label>
        <input
          type="tel"
          id="telefono"
          name="telefono"
          placeholder="Tu número de teléfono"
          maxLength="20"
          required
        />
      </div>

      <div className="campo-contacto">
        <label htmlFor="asunto">Asunto:</label>
        <input
          type="text"
          id="asunto"
          name="asunto"
          placeholder="Asunto del mensaje"
          maxLength="150"
          required
        />
      </div>

      <div className="campo-contacto">
        <label htmlFor="mensaje">Mensaje:</label>
        <textarea
          id="mensaje"
          name="mensaje"
          placeholder="Escribe tu mensaje"
          rows="5"
          maxLength="3000"
          required
        ></textarea>
      </div>

      <button type="submit" className="boton-enviar">
        Enviar
      </button>

    </form>

  </div>

  <VolverArriba />

</section>


      </main>

      
{/* PIE DE PÁGINA */}
<footer className="pie-pagina">

  <p>
    © E. S. T. No. 83 | Derechos a quien corresponda
  </p>

  <nav className="enlaces-pie">
    <a
      href="https://www.gob.mx/aviso_de_privacidad"
      target="_blank"
      rel="noopener noreferrer"
    >
      Aviso de Privacidad
    </a>

    <span>|</span>

    <a
      href="https://www.facebook.com/Tecnica83sustentabilidad/?locale=es_LA"
      target="_blank"
      rel="noopener noreferrer"
    >
      Facebook
    </a>

    <span>|</span>

    <a
      href="https://est83sec.blogspot.com/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Blogspot
    </a>
  </nav>

</footer>

    </>
  )
}

export default App
