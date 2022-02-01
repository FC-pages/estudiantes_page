import React, { FC, Fragment } from "react";
/*import table from "../table.png";*/
import "../../../styles/gInvestigacion.css";
import pub1 from "../../../images/cover_bjps.gif";
import pub2 from "../../../images/journal_jdg.gif";
import pub3 from "../../../images/pub3.gif";
import pub4 from "../../../images/pub4.jpeg";
import pub5 from "../../../images/pub5.jpg";
import pubb from "../../../images/pubb.gif";

const TabFour: FC<{}> = () => {
  return (
    <Fragment>
      <div>
        <h3 className="t-stroke-shadow">Linea de Análisis Numérico</h3>
      </div>
      <hr></hr>
      <h4 className="tit">Simulación numérica de flujos multifase</h4>
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
      <h4 className="tit">Aplicación del método HHO en las ecuaciones de Maxwell en tiempo armónico.</h4>
      <div className="container">
        <div className="itemLeft2">
        Since many authors have emphasized the need of asymmetric link functions to fit binary regression models, we propose in this work two new skew-probit link functions for the binary response variables. These link functions will be named power probit and reciprocal power probit due to the relation between them including the probit link as a special case. Also, the probit regressions are special cases of the models considered in this work. A Bayesian inference approach using MCMC is developed for real data suggesting that the link functions proposed here are more appropriate than other link functions used in the literature. In addition, simulation study show that the use of probit model will lead to biased estimate of the regression coefficient.</div>
        <div className="itemRight2">
        <img src={pub4} className="foto-publicaciones"></img>
        </div>
      </div>
      <br/>
      <hr className="dotted"></hr>
      
      <h4 className="tit">A New Robust Regression Model for Proportions</h4>
      <div className="container">
        <div className="itemLeft2">
        A new regression model for proportions is presented by considering the Beta rectangular distribution proposed by Hahn (2008). This new model includes the Beta regression model introduced by Ferrari and Cribari-Neto (2004) and the variable dispersion Beta regression model introduced by Smithson and Verkuilen (2006) as particular cases. Like Branscum, Johnson, and Thurmond (2007), a Bayesian inference approach is adopted using Markov Chain Monte Carlo (MCMC) algorithms. Simulation studies on the influence of outliers by considering contaminated data under four perturbation patterns to generate outliers were carried out and confirm that the Beta rectangular regression model seems to be a new robust alternative for modeling proportion data and that the Beta regression model shows sensitivity to the estimation of regression coefficients, </div>
        <div className="itemRight2">
        <img src={pub3} className="foto-publicaciones"></img>
        </div>
      </div>
      <br/>
      <hr className="dotted"></hr>
      <h4 className="tit">Male circumcision and risk of HIV acquisition among MSM.</h4>
      <div className="container">
        <div className="itemLeft2">
        OBJECTIVES: To assess the association between male circumcision, insertive anal sex practices, and HIV acquisition in a cohort of MSM. METHODS: Data were from 1824 HSV-2-seropositive, HIV-seronegative MSM, 1362 (75%) from Peru and 462 (25%) from the US, who participated in a randomized placebo-controlled trial of HSV-2 suppression for HIV prevention (HPTN 039). Circumcision status was determined by examination at enrollment. HIV testing was done every 3 months for up to 18 months. Partner-specific sexual behavior for up to the last three partners during the previous 3 months was analyzed. RESULTS: There was no significant association between male circumcision and HIV acquisition in univariate analysis [relative risk (RR) = 0.84, 95% confidence interval (CI) 0.50-1.42]. In a prespecified multivariate analysis that assumed a linear relationship between the proportion of insertive acts and effect of circumcision on HIV acquisition, the interaction between circumcision and proportion of insertive acts was not significant (P = 0.11). </div>
        <div className="itemRight2">
        <img src={pub4} className="foto-publicaciones"></img>
        </div>
      </div>
      <br/>
      <hr className="dotted"></hr>
      <h4 className="tit">Factores asociados con rendimiento académico</h4>
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

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis
        sint illum iusto nostrum cumque qui voluptas tenetur inventore ut quis?
      </p>
    </Fragment>
  );
};
export default TabFour;


//<img src={table}  ></img>