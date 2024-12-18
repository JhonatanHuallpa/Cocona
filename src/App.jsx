import React from "react";
import "./App.css"; 
import "@fortawesome/fontawesome-free/css/all.min.css";
import Navigation from './components/navegation';
import FormComponent from './components/form';
import Login from './view/login';
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';





function App() {
  return (

   
    <>
    <Router>
    <div id="principal">
      <div className="contenedor">
        <header>
          <div className="contenido">
            <a href="#">
              <img src="icon/icon1-removebg-preview.png" alt="Logo" />
            </a>
              <nav id="nav">
                <ul id="links">
                  <li><a href="#cuerpo" >Inicio</a></li>
                  <li><a href="#history">Historia</a></li>
                  <li><a href="#title">Carta</a></li>
                  <li><a href="#promociones">Promociones</a></li>
                  <li href="/"><Link to="/">¡Pedir aquí!</Link></li>
                  
                </ul>
              </nav>
              <div className="registros">

              <Link to="/login"> <i className="fa-solid fa-user"></i></Link>
              </div>
        
          </div>
        </header>
        <Routes>
            <Route path="/" element={<FormComponent />} />
            <Route path="/login" element={<Login />} />  
          </Routes>
       

       {/*ESTE ES LA PAGINA DE INICIO*/}
        <div id="cuerpo" className="cuerpo">
          <h1>
            Bienvenidos a Restaurante, <span>La Cocona</span>
          </h1>
          <p>
            En el corazón de la selva amazónica, te ofrecemos una experiencia
            culinaria única, donde los sabores de la naturaleza se mezclan con
            la tradición ancestral.
          </p>
          <p>
            Descubre nuestra carta llena de platos exóticos, como el pescado
            envuelto en hojas de bijao, el ají de cocona, y nuestra selección de
            bebidas refrescantes hechas con frutas tropicales.
          </p>
          <p>
            Vive una experiencia auténtica en medio de la selva, rodeado de la
            exuberante naturaleza, con un ambiente acogedor que te hará sentir
            en plena conexión con la tierra.
          </p>
          <a href="/carta.html">Ir a la Carta</a>
        </div>
      </div>
    </div>
    </Router>


      {/*ESTE ES LA PAGINA DE HISTORIA*/}
    <section id="history" className="history">
        <div className="content">
         
          <div className="text">
            <p>
              Fundado en 2023, nuestro restaurante ha sido el lugar de encuentro
              para familias y amigos que buscan disfrutar de una experiencia
              gastronómica única. Comenzamos como un pequeño negocio familiar y,
              con el tiempo, hemos crecido gracias a nuestra dedicación a la
              cocina tradicional y el servicio excepcional. Nuestra misión es
              ofrecer platos deliciosos, preparados con ingredientes frescos y
              locales, en un ambiente acogedor.
            </p>
            <p>
              A lo largo de los años, hemos evolucionado, pero nuestros valores
              siguen siendo los mismos: calidad, sabor, y satisfacción. Gracias al
              apoyo de nuestros clientes leales, seguimos siendo un pilar de la
              comunidad.
            </p>
          </div>

          
          <div className="image">
            <img src="img/Designer.jpeg" alt="Foto del restaurante" />
          </div>
        </div>
      </section>
      

      {/*ESTE ES LA PAGINA DE LA CARTA*/}
      <div id="title" className="title">
        <section className="titulo">
          <h3>Platos típicos</h3>
        </section>
      </div>

     
      <section className="menu">
        <article className="dish">
          <img src="/img/sudado-servido (1).jpg" alt="Plato 1" />
          <h2>Sudado de pescado</h2>
          <p>
            Es un guiso típico preparado con pescado fresco, cocido en su jugo
            con hierbas, especias y vegetales, ofreciendo un sabor suave y
            aromático.
          </p>
          <span className="price">s/ 25</span>
        </article>

        <article className="dish">
          <img src="/img/inchicapi.png" alt="Plato 2" />
          <h2>Inchicapi</h2>
          <p>
            Sopa espesa de gallina, con maní, maíz y yuca, perfumada con hojas
            de sacha culantro.
          </p>
          <span className="price">s/ 10</span>
        </article>

        <article className="dish">
          <img src="/img/sopa-carachama.png" alt="Plato 3" />
          <h2>Sopa de Carachama</h2>
          <p>
            Es un plato típico de la selva peruana, preparado con carachama, un
            pez de río con caparazón duro. Se cocina en un caldo con yuca,
            plátano verde y especias locales, resultando en una sopa nutritiva,
            de sabor suave y muy apreciada por sus propiedades revitalizantes.
          </p>
          <span className="price">s/ 20</span>
        </article>

        <article className="dish">
          <img src="/img/juane.png" alt="Plato 4" />
          <h2>Juane Amazónico</h2>
          <p>
            Un tradicional juane hecho con arroz, especias y pollo envuelto en
            hojas de bijao.
          </p>
          <span className="price">s/ 20</span>
        </article>

        <article className="dish">
          <img src="/img/patarashca.png" alt="Plato 5" />
          <h2>Patarashca</h2>
          <p>
            Es un pescado amazónico envuelto en hojas de bijao y asado, con
            sabores frescos y naturales de la selva.
          </p>
          <span className="price">s/ 30</span>
        </article>

        <article className="dish">
          <img src="/img/tacacho con cecina.png" alt="Plato 6" />
          <h2>Tacacho con cecina</h2>
          <p>
            Plato típico de la selva peruana que combina plátano verde asado y
            triturado con manteca (tacacho), acompañado de carne de cerdo
            ahumada (cecina).
          </p>
          <span className="price">s/ 20</span>
        </article>
      </section>

      
      <div className="title">
        <section className="titulo">
          <h3>Bebidas</h3>
        </section>
      </div>

      
      <section className="menu">
        <article className="dish">
          <img src="/img/masato.png" alt="Masato" />
          <h2>Masato</h2>
          <p>
            El masato es una bebida fermentada de yuca o arroz, dulce y
            refrescante, tradicional de la Amazonía.
          </p>
          <span className="price">s/ 20</span>
        </article>
      </section>

      
      <div id="whatsapp">
        <a className="clit" href="https://wa.link/jxwasb" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-whatsapp"></i>
        </a>
      </div>   

        {/*ESTE ES LA PAGINA DE LA PROMOCIONES*/}
       <div id="promociones"className="title">
        <section className="titulo">
          <h3>Platos típicos</h3>
        </section>
      </div>

     
      <section className="menu">
        <article className="dish">
          <img src="/promos/promo1.jpeg" alt="Plato 1" />
          <h2>2 Juane amazónico</h2>
          <p>
            Es un guiso típico preparado con pescado fresco, cocido en su jugo
            con hierbas, especias y vegetales, ofreciendo un sabor suave y
            aromático.
          </p>
          <span className="price">s/ 36</span>
        </article>

        <article className="dish">
          <img src="/promos/promo2.jpeg" alt="Plato 2" />
          <h2>3 Sudado de pescado</h2>
          <p>
            Es un guiso típico preparado con pescado fresco, cocido en su jugo
            con hierbas, especias y vegetales, ofreciendo un sabor suave y
            aromático.
          </p>
          <span className="price">s/ 52.50</span>
        </article>

        <article className="dish">
          <img src="/promos/promo3.jpeg" alt="Plato 3" />
          <h2>4 Tacacho con cecina</h2>
          <p>
            Plato típico de la selva peruana que combina plátano verde asado y
            triturado con manteca (tacacho), acompañado de carne de cerdo
            ahumada (cecina).
          </p>
          <span className="price">s/ 64</span>
        </article>
      </section>

      
      <div className="title">
        <section className="titulo">
          <h3>Bebidas</h3>
        </section>
      </div>

      
      <section className="menu">
        <article className="dish">
          <img src="/promos/bebida1.jpeg" alt="Bebida 1" />
          <h2>5 Masato</h2>
          <p>
            El masato es una bebida fermentada de yuca o arroz, dulce y
            refrescante, tradicional de la Amazonía.
          </p>
          <span className="price">s/ 85</span>
        </article>
      </section>

      
      <div id="whatsapp">
        <a className="clit" href="https://wa.link/m8bnfg">
          <i className="fa-brands fa-whatsapp"></i>
        </a>
      </div>

    
      </> 
  );
}

export default App;
