import React, { FC, Fragment } from "react";
/*import table from "../table.png";*/
import "../../../styles/gInvestigacion.css";
import pub1 from "../images/Optimizacion/cover_bjps.gif";
import pub2 from "../images/Optimizacion/journal_jdg.gif";
import pub3 from "../images/Optimizacion/pub3.gif";
import pub4 from "../images/Optimizacion/pub4.jpeg";
import pub5 from "../images/Optimizacion/pub5.jpg";
import pubb from "../images/Optimizacion/pubb.gif";
import jo_convex_analisis from "../images/Optimizacion/journal_of_convex_analysis.jpeg";
import optimization from "../images/Optimizacion/optimization.jpeg";
import ej_operational_research from "../images/Optimizacion/european_journal_of_operational_research.jpeg";
import jo_heuritics from "../images/Optimizacion/journal_of_heuritics.jpeg";
import { optimization_publicaciones } from "../../../data/publicaciones.js";

let publicaciones = [
  {
    titulo: "A unified splitting algorithm for composite monotone inclusions" ,
    autores: "E. Oré, P. Mahey and E. Ocaña",
    revista: "Journal of Convex Analysis 27, No. 3, 2020.",
    anio: 2020,
    abstract: "Operator splitting methods have been recently concerned with inclusions problems based on composite operators made of the sum of two monotone operators, one of them associated with a linear transformation. We analyze here a general and new splitting method which indeed splits both operator proximal steps, and avoiding costly numerical algebra on the linear operator. The family of algorithms induced by our generalized setting includes known methods like Chambolle-Pock primal-dual algorithm and Shefi-Teboulle Proximal Alternate Direction Method of Multipliers. The study of the ergodic and non ergodic convergence rates show similar rates with the classical Douglas-Rachford splitting scheme. We end with an application to a multi-block convex optimization model which leads to a generalized Separable Augmented Lagrangian Algorithm.",
    src: "https://www.heldermann.de/JCA/JCA27/JCA273/jca27045.htm",
    imagen: jo_convex_analisis,
  },
  {
    titulo: "The relationship between two representations of linear subspaces",
    autores: "Ocaña and L. Flores",
    revista: "Optimization 69 (11), pp. 2421-2430, 2020.",
    anio: 2020,
    abstract: "This work gives complete expressions of inertia of matrices involved in a linear subspace of ℝn×ℝn when they are presented in two different ways, specifically, as image and as well as kernel of linear maps.",
    src: "https://www.tandfonline.com/doi/abs/10.1080/02331934.2019.1598405?journalCode=gopt20",
    imagen: optimization,
  },
  {
    titulo: "Mixed integer formulations for a routing problem with information collection in wireless networks",
    autores: "L. Flores, A. Agra, R. Figueiredo and E. Ocaña",
    revista: "European Journal of Operational Research, Volume 280, Issue 2, pp. 621-638, 2020.",
    anio: 2020,
    abstract: "We study a routing-collecting problem where a system of stations is considered. A vehicle is responsible for collecting information generated continuously in the stations and to deliver it to a base station. The objective is to determine the vehicle route and the collection operations, both physical and wireless, in order to maximize the amount of information collected during a time horizon. Three mixed integer programming models are introduced and a computational study is reported to compare the performance of a solver based on each one of the models.",
    src: "https://www.sciencedirect.com/science/article/abs/pii/S0377221719305636",
    imagen: ej_operational_research,
  },
  {
    titulo: "Heuristics for a vehicle routing problem with information collection in wireless networks",
    autores: "L. Flores, Agostinho Agra, R. Figueiredo and E. Ocaña",
    revista: "Journal of Heuristics, Volume 26, Issue 2, pp 187–217, 2020.",
    anio: 2020,
    abstract: "We consider a wireless network where a given set of stations is continuously generating information. A single vehicle, located at a base station, is available to collect the information via wireless transfer. The wireless transfer vehicle routing problem (WTVRP) is to decide which stations should be visited in the vehicle route, how long shall the vehicle stay in each station, and how much information shall be transferred from the nearby stations to the vehicle during each stay. The goal is to collect the maximum amount of information during a time period after which the vehicle returns to the base station. The WTVRP is NP-hard. Although it can be solved to optimality for small size instances, one needs to rely on good heuristic schemes to obtain good solutions for large size instances. In this work, we consider a mathematical formulation based on the vehicle visits. Several heuristics strategies are proposed, most of them based on the mathematical model. These strategies include constructive and improvement heuristics. Computational experiments show that a strategy that combines a combinatorial greedy heuristic to design a initial vehicle route, improved by a fix-and-optimize heuristic to provide a local optimum, followed by an exchange heuristic, affords good solutions within reasonable amount of running time.",
    src: "https://link.springer.com/article/10.1007/s10732-019-09429-6",
    imagen: jo_heuritics,
  }
]

const Publicacion = (props: any) => {

  return (
      <>
      <h4 className="tit">&quot;{ props.pub.titulo }&quot; <i>({ props.pub.autores }). { props.pub.revista }</i></h4>
      <div className="container">
        <div className="itemLeft2">
          { props.pub.abstract }
          </div>
        <div className="itemRight2">
          <a href = { props.pub.src }>
            <img src= { props.pub.imagen } className="foto-publicaciones"></img>
          </a>
        </div>
      </div>
      <br/>
      <hr className="dotted"></hr>
      </>
  )
}

const TabFour: FC<{}> = () => {
  return (
    <Fragment>
      <div>
        <h3 className="t-stroke-shadow">Línea de Optimización</h3>
      </div>
      {/* <h3>Publicaciones</h3>2 */}
      <hr></hr>
      {/*
      <h4 className="tit">The relationship of inertias between two representations of linear subspaces. 2020</h4>
      <div className="container">
        <div className="itemLeft2">
        We introduce new applications of the skew-probit IRT model by considering a flexible skew-normal distribution for the latent variables and by extending this model to include an additional random effect for modeling dependence between items within the same testlet. A Bayesian hierarchical structure is presented using a double data augmentation approach. This can be easily implemented in WinBUGS or SAS by considering MCMC algorithms. Several Bayesian model selection criteria, such as DIC, EAIC and EBIC, have been considered; in addition, we use posterior sum of squares of the latent residuals as a global discrepancy measure to model comparison. Two applications illustrate the methodology.
        </div>
        <div className="itemRight2">
        <img src={pub1} className="foto-publicaciones"></img>
        </div>
      </div>
      <br/>
      <hr className="dotted"></hr>
      <h4 className="tit">Mixed integer formulations for a routing problem with information collection in wireless networks. 2020</h4>
      <div className="container">
        <div className="itemLeft2">
        Since many authors have emphasized the need of asymmetric link functions to fit binary regression models, we propose in this work two new skew-probit link functions for the binary response variables. These link functions will be named power probit and reciprocal power probit due to the relation between them including the probit link as a special case. Also, the probit regressions are special cases of the models considered in this work. A Bayesian inference approach using MCMC is developed for real data suggesting that the link functions proposed here are more appropriate than other link functions used in the literature. In addition, simulation study show that the use of probit model will lead to biased estimate of the regression coefficient.</div>
        <div className="itemRight2">
        <img src={pub3} className="foto-publicaciones"></img>
        </div>
      </div>
      <br/>
      <hr className="dotted"></hr>
      
      <h4 className="tit">A unified splitting algorithm for composite monotone inclusions. 2020</h4>
      <div className="container">
        <div className="itemLeft2">
        A new regression model for proportions is presented by considering the Beta rectangular distribution proposed by Hahn (2008). This new model includes the Beta regression model introduced by Ferrari and Cribari-Neto (2004) and the variable dispersion Beta regression model introduced by Smithson and Verkuilen (2006) as particular cases. Like Branscum, Johnson, and Thurmond (2007), a Bayesian inference approach is adopted using Markov Chain Monte Carlo (MCMC) algorithms. Simulation studies on the influence of outliers by considering contaminated data under four perturbation patterns to generate outliers were carried out and confirm that the Beta rectangular regression model seems to be a new robust alternative for modeling proportion data and that the Beta regression model shows sensitivity to the estimation of regression coefficients, </div>
        <div className="itemRight2">
        <img src={pubb} className="foto-publicaciones"></img>
        </div>
      </div>
      <br/>
      <hr className="dotted"></hr>
      <h4 className="tit">Heuristics for a vehicle routing problem with information collection in wireless networks”. 2019.</h4>
      <div className="container">
        <div className="itemLeft2">
        OBJECTIVES: To assess the association between male circumcision, insertive anal sex practices, and HIV acquisition in a cohort of MSM. METHODS: Data were from 1824 HSV-2-seropositive, HIV-seronegative MSM, 1362 (75%) from Peru and 462 (25%) from the US, who participated in a randomized placebo-controlled trial of HSV-2 suppression for HIV prevention (HPTN 039). Circumcision status was determined by examination at enrollment. HIV testing was done every 3 months for up to 18 months. Partner-specific sexual behavior for up to the last three partners during the previous 3 months was analyzed. RESULTS: There was no significant association between male circumcision and HIV acquisition in univariate analysis [relative risk (RR) = 0.84, 95% confidence interval (CI) 0.50-1.42]. In a prespecified multivariate analysis that assumed a linear relationship between the proportion of insertive acts and effect of circumcision on HIV acquisition, the interaction between circumcision and proportion of insertive acts was not significant (P = 0.11). </div>
        <div className="itemRight2">
        <img src={pub4} className="foto-publicaciones"></img>
        </div>
      </div>
      <br/>
      <hr className="dotted"></hr>
      <h4 className="tit">Vehicle routing problem for information collection in wireless networks. 2019</h4>
      <div className="container">
        <div className="itemLeft2">
        We introduce new applications of the skew-probit IRT model by considering a flexible skew-normal distribution for the latent variables and by extending this model to include an additional random effect for modeling dependence between items within the same testlet. A Bayesian hierarchical structure is presented using a double data augmentation approach. This can be easily implemented in WinBUGS or SAS by considering MCMC algorithms. Several Bayesian model selection criteria, such as DIC, EAIC and EBIC, have been considered; in addition, we use posterior sum of squares of the latent residuals as a global discrepancy measure to model comparison. Two applications illustrate the methodology, one data set related to a mathematical test and another related to reading comprehension, both applied to Peruvian students. Results indicate better performance of the more flexible models proposed in this paper.
        </div>
        <div className="itemRight2">
        <img src={pub5} className="foto-publicaciones"></img>
        </div>
      </div>
      <br/>
      <hr className="dotted"></hr>
      */}
      {
        optimization_publicaciones.map((publicacion) => {
          return <Publicacion
            pub = {publicacion}
            />
        })
      }

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis
        sint illum iusto nostrum cumque qui voluptas tenetur inventore ut quis?
      </p>
    </Fragment>
  );
};
export default TabFour;


//<img src={table}  ></img>
