import React from 'react';

function RevistaCiencias() {
  return (
    <div>
      <p className="mt-3 fs-4 fw-bold">
        1.{' '}
        <a className="a-link-title" href="https://zbmath.org/">
          zbMATH Open
        </a>
      </p>
      <p className="ms-3">
        zbMATH, anteriormente Zentralblatt MATH, es un importante servicio de
        revisión que proporciona revisiones y resúmenes de artículos en
        matemáticas puras y aplicadas, producido por la oficina de Berlín de FIZ
        Karlsruhe {'-'} Leibniz Institute for Information Infrastructure GmbH.
      </p>
      <a className="ms-3" href="https://zbmath.org/">
        <img
          style={{ height: '65px' }}
          alt="Pour la science"
          src="./enlaces/zbMATH.gif"
        />
      </a>

      <br />

      <p className="mt-3 fs-4 fw-bold">
        2.{' '}
        <a className="a-link-title" href="https://images.math.cnrs.fr/?lang=es">
          Paisajes matemáticos
        </a>
      </p>
      <p className="ms-3">La investigación matemática en relatos e imágenes.</p>
      <a className="ms-3" href="https://images.math.cnrs.fr/?lang=es">
        <img
          style={{ height: '90px' }}
          alt="Paisajes matemáticos"
          src="./enlaces/logo-idm-es.png"
        />
      </a>

      <p className="fs-4 fw-bold">
        3.{' '}
        <a className="a-link-title" href="https://www.larecherche.fr/">
          La Recherche
        </a>
      </p>
      <p className="ms-3">
        La Recherche es una revista mensual de divulgación científica en francés
        cubriendo noticias científicas recientes. Es publicado por la Société
        d'éditions scientifiques, filial de Financière Tallandier. Tallandier es
        propiedad de Artémis, una sociedad de inversión de François-Henri
        Pinault. La sede se encuentra en París.
      </p>
      <a className="ms-3" href="https://www.larecherche.fr/">
        <img
          style={{
            backgroundColor: '#126f91',
            height: '70px',
            padding: '0 10px',
          }}
          alt="La Recherche"
          src="./enlaces/logo_lr.png"
        />
      </a>

      <br />

      <p className="mt-3 fs-4 fw-bold">
        4.{' '}
        <a className="a-link-title" href="https://www.sciencesetavenir.fr/">
          Sciences et avenir
        </a>
      </p>
      <p className="ms-3">
        Sciences et Avenir es una revista mensual francesa de divulgación
        científica, propiedad de Claude Perdriel. Su distribución en 2019 fue de
        231.000 ejemplares. El equipo editorial también publica alrededor de 15
        artículos por día en su sitio web.
      </p>
      <a className="ms-3" href="https://www.sciencesetavenir.fr/">
        <img
          style={{ height: '70px' }}
          alt="Sciences et avenir"
          src="./enlaces/logo_sa.svg"
        />
      </a>

      <br />

      <p className="mt-3 fs-4 fw-bold">
        5.{' '}
        <a className="a-link-title" href="https://www.pourlascience.fr/">
          Pour la science
        </a>
      </p>
      <p className="ms-3">
        Pour la Science es la revista de referencia para las noticias
        científicas, con artículos en profundidad de los mejores investigadores
        en todos los campos.
      </p>
      <a className="ms-3" href="https://www.pourlascience.fr/">
        <img
          style={{ height: '70px' }}
          alt="Pour la science"
          src="./enlaces/logo_pls.png"
        />
      </a>

      <br />

      <p className="mt-3 fs-4 fw-bold">
        6.{' '}
        <a className="a-link-title" href="https://images.math.cnrs.fr/">
          Images des Mathématiques
        </a>
      </p>
      <p className="ms-3">
        Images des mathématiques es un sitio web francés publicado por el CNRS y
        dedicado a la popularización de las matemáticas. Su objetivo es mostrar
        la diversidad de las matemáticas de una manera atractiva. Está
        subtitulada la búsqueda matemática en palabras e imágenes.
      </p>
      <a className="ms-3" href="https://images.math.cnrs.fr/">
        <img
          style={{ height: '80px' }}
          alt="Images des Mathématiques"
          src="./enlaces/logo-idm-fr.png"
        />
      </a>
    </div>
  );
}
export default RevistaCiencias;
