exports.optimization_publicaciones = [
  {
    titulo: "A unified splitting algorithm for composite monotone inclusions." ,
    autores: "E. Oré, P. Mahey and E. Ocaña.",
    revista: "Journal of Convex Analysis",
    volume: "27",
    issue: "3",
    pag: "893-922",
    anio: 2020,
    abstract: "Operator splitting methods have been recently concerned with inclusions problems based on composite operators made of the sum of two monotone operators, one of them associated with a linear transformation. We analyze here a general and new splitting method which indeed splits both operator proximal steps, and avoiding costly numerical algebra on the linear operator. The family of algorithms induced by our generalized setting includes known methods like Chambolle-Pock primal-dual algorithm and Shefi-Teboulle Proximal Alternate Direction Method of Multipliers. The study of the ergodic and non ergodic convergence rates show similar rates with the classical Douglas-Rachford splitting scheme. We end with an application to a multi-block convex optimization model which leads to a generalized Separable Augmented Lagrangian Algorithm.",
    src: "https://www.heldermann.de/JCA/JCA27/JCA273/jca27045.htm",
    imagen: "./LineasInvestigacion/images/Optimizacion/journal_of_convex_analysis.jpeg",
  },
  {
    titulo: "The relationship between two representations of linear subspaces.",
    autores: "Ocaña and L. Flores.",
    revista: "Optimization",
    volume: "69",
    issue: "11",
    pag: "2421-2430",
    anio: 2020,
    abstract: "This work gives complete expressions of inertia of matrices involved in a linear subspace of ℝn×ℝn when they are presented in two different ways, specifically, as image and as well as kernel of linear maps.",
    src: "https://www.tandfonline.com/doi/abs/10.1080/02331934.2019.1598405?journalCode=gopt20",
    imagen: "./LineasInvestigacion/images/Optimizacion/optimization.jpeg",
  },
  {
    titulo: "Mixed integer formulations for a routing problem with information collection in wireless networks.",
    autores: "L. Flores, A. Agra, R. Figueiredo and E. Ocaña.",
    revista: "European Journal of Operational Research",
    volume: "280",
    issue: "2",
    pag: "621-638",
    anio: 2020,
    abstract: "We study a routing-collecting problem where a system of stations is considered. A vehicle is responsible for collecting information generated continuously in the stations and to deliver it to a base station. The objective is to determine the vehicle route and the collection operations, both physical and wireless, in order to maximize the amount of information collected during a time horizon. Three mixed integer programming models are introduced and a computational study is reported to compare the performance of a solver based on each one of the models.",
    src: "https://www.sciencedirect.com/science/article/abs/pii/S0377221719305636",
    imagen: "./LineasInvestigacion/images/Optimizacion/european_journal_of_operational_research.jpeg",
  },
  {
    titulo: "Heuristics for a vehicle routing problem with information collection in wireless networks.",
    autores: "L. Flores, A. Agra, R. Figueiredo and E. Ocaña.",
    revista: "Journal of Heuristics",
    volume: "26",
    issue: "2",
    pag: "187–217",
    anio: 2020,
    abstract: "We consider a wireless network where a given set of stations is continuously generating information. A single vehicle, located at a base station, is available to collect the information via wireless transfer. The wireless transfer vehicle routing problem (WTVRP) is to decide which stations should be visited in the vehicle route, how long shall the vehicle stay in each station, and how much information shall be transferred from the nearby stations to the vehicle during each stay. The goal is to collect the maximum amount of information during a time period after which the vehicle returns to the base station. The WTVRP is NP-hard. Although it can be solved to optimality for small size instances, one needs to rely on good heuristic schemes to obtain good solutions for large size instances. In this work, we consider a mathematical formulation based on the vehicle visits. Several heuristics strategies are proposed, most of them based on the mathematical model. These strategies include constructive and improvement heuristics. Computational experiments show that a strategy that combines a combinatorial greedy heuristic to design a initial vehicle route, improved by a fix-and-optimize heuristic to provide a local optimum, followed by an exchange heuristic, affords good solutions within reasonable amount of running time.",
    src: "https://link.springer.com/article/10.1007/s10732-019-09429-6",
    imagen: "./LineasInvestigacion/images/Optimizacion/journal_of_heuritics.jpeg",
  }
]


exports.analisisNumerico_publicaciones = [
  
  {
    titulo: "A hybrid high-order formulation for a Neumann problem on polytopal meshes." ,
    autores: "R. Bustinza and J. Munguia-La-Cotera.",
    revista: "Numerical Methods for Partial Differential Equations",
    volume: "36",
    issue: "3",
    pag: "524–551",
    anio: 2020,
    abstract: "In this work, we study a hybrid high-order (HHO) method for an elliptic diffusion problem with Neumann boundary condition. The proposed method has several features, such as: (a) the support of arbitrary approximation order polynomial at mesh elements and faces on polytopal meshes, (b) the design of a local (element-wise) potential reconstruction operator and a local stabilization term, that weakly enforces the matching between local element- and face-based on degrees of freedom, and (c) cheap computational cost, thanks to static condensation and compact stencil. We prove the well-posedness of our HHO formulation, and obtain the optimal error estimates, according to previous study. Implementation aspects are thoroughly discussed. Finally, some numerical examples are provided, which are in agreement with our theoretical results.",
    src: "https://onlinelibrary.wiley.com/doi/abs/10.1002/num.22439",
    imagen: "./LineasInvestigacion/images/AnalisisNumerico/numerical_methods_partial.jpeg",
  },
  {
    titulo: "Revisión del método Híbrido de Alto Orden para un problema de difusión variable.",
    autores: "R. Bustinza and J. Munguia.",
    revista: "REVCIUNI",
    volume: "21",
    issue: "1",
    pag: "6-14",
    anio: 2018,
    abstract: "In this work, we approximate the solution of an elliptic diffusion problem with Neumann boundary condition through a novel numerical technique known as Hybrid High-Oder (HHO) method, which has the following characteristics: i) the support of arbitrary approximation order polynomial at mesh elements and faces (or edges) on general polyhedral meshes, ii) the design of a local (element-wise) discrete gradient reconstruction operator and a local stabilization term, which weakly enforces the matching between the polynomial based on the element and its respective faces, iii) cheap computational cost thanks to static condensation, which allows us to solve only on the skeleton of the mesh. We prove the well-posedness of the numerical scheme as well as its convergence, obtaining the error estimates of potential and flux variables. Finally, some numerical examples are provided, which are in agreement with our theoretical results.",
    src: "https://www.latindex.org/latindex/ficha?folio=13519",
    imagen: "./LineasInvestigacion/images/AnalisisNumerico/revciuni.jpeg",
  },
  {
    titulo: "Construcción de mapas de ruido con elementos finitos y Newmark.",
    autores: "I. Mantilla and J. Munguia.",
    revista: "TECNIA",
    volume: "22",
    issue: "2",
    pag: "25-44",
    anio: 2012,
    abstract: "This article uses the weak formulation of the problems Partial Hyperbolic type (VPE) for construction noise maps with finite element and Newmark in two-dimensional space. To ensure the numerical simulation of the problem of propagation of the noise source, so that proves the existence and uniqueness of the variational problem in Sobolev spaces evolutionary and applied the finite element method and method Galerkin for spatial discretization and Newmark method for the time discretization. In this work, the innovative technique of preparation of the data base and computational experimentation with Matlab, finally obtaining effectively the  solution  as shown in the convergence of the numerical scheme.",
    src: "http://www.revistas.uni.edu.pe/index.php/tecnia/article/view/80",
    imagen: "./LineasInvestigacion/images/AnalisisNumerico/tecnia.jpeg",
  }
]

{/*
import journal_of_convex_analysis from '../pages/LineasInvestigacion/images/Optimizacion/journal_of_convex_analysis.jpeg';
import optimization from '../pages/LineasInvestigacion/images/Optimizacion/optimization.jpeg';
import european_journal_of_operational_research from '../pages/LineasInvestigacion/images/Optimizacion/european_journal_of_operational_research.jpeg';
import journal_of_heuritics from '../pages/LineasInvestigacion/images/Optimizacion/journal_of_heuritics.jpeg';
import numerical_methods_partial from '../pages/LineasInvestigacion/images/AnalisisNumerico/numerical_methods_partial.jpeg';
import revciuni from '../pages/LineasInvestigacion/images/AnalisisNumerico/revciuni.jpeg';
import tecnia from '../pages/LineasInvestigacion/images/AnalisisNumerico/tecnia.jpeg';

exports.optimization_publicaciones = [
  {
    titulo: "A unified splitting algorithm for composite monotone inclusions." ,
    autores: "E. Oré, P. Mahey and E. Ocaña.",
    revista: "Journal of Convex Analysis",
    volume: "27",
    issue: "3",
    pag: "893-922",
    anio: 2020,
    abstract: "Operator splitting methods have been recently concerned with inclusions problems based on composite operators made of the sum of two monotone operators, one of them associated with a linear transformation. We analyze here a general and new splitting method which indeed splits both operator proximal steps, and avoiding costly numerical algebra on the linear operator. The family of algorithms induced by our generalized setting includes known methods like Chambolle-Pock primal-dual algorithm and Shefi-Teboulle Proximal Alternate Direction Method of Multipliers. The study of the ergodic and non ergodic convergence rates show similar rates with the classical Douglas-Rachford splitting scheme. We end with an application to a multi-block convex optimization model which leads to a generalized Separable Augmented Lagrangian Algorithm.",
    src: "https://www.heldermann.de/JCA/JCA27/JCA273/jca27045.htm",
    imagen: journal_of_convex_analysis,
  },
  {
    titulo: "The relationship between two representations of linear subspaces.",
    autores: "Ocaña and L. Flores.",
    revista: "Optimization",
    volume: "69",
    issue: "11",
    pag: "2421-2430",
    anio: 2020,
    abstract: "This work gives complete expressions of inertia of matrices involved in a linear subspace of ℝn×ℝn when they are presented in two different ways, specifically, as image and as well as kernel of linear maps.",
    src: "https://www.tandfonline.com/doi/abs/10.1080/02331934.2019.1598405?journalCode=gopt20",
    imagen: optimization,
  },
  {
    titulo: "Mixed integer formulations for a routing problem with information collection in wireless networks.",
    autores: "L. Flores, A. Agra, R. Figueiredo and E. Ocaña.",
    revista: "European Journal of Operational Research",
    volume: "280",
    issue: "2",
    pag: "621-638",
    anio: 2020,
    abstract: "We study a routing-collecting problem where a system of stations is considered. A vehicle is responsible for collecting information generated continuously in the stations and to deliver it to a base station. The objective is to determine the vehicle route and the collection operations, both physical and wireless, in order to maximize the amount of information collected during a time horizon. Three mixed integer programming models are introduced and a computational study is reported to compare the performance of a solver based on each one of the models.",
    src: "https://www.sciencedirect.com/science/article/abs/pii/S0377221719305636",
    imagen: european_journal_of_operational_research,
  },
  {
    titulo: "Heuristics for a vehicle routing problem with information collection in wireless networks.",
    autores: "L. Flores, A. Agra, R. Figueiredo and E. Ocaña.",
    revista: "Journal of Heuristics",
    volume: "26",
    issue: "2",
    pag: "187–217",
    anio: 2020,
    abstract: "We consider a wireless network where a given set of stations is continuously generating information. A single vehicle, located at a base station, is available to collect the information via wireless transfer. The wireless transfer vehicle routing problem (WTVRP) is to decide which stations should be visited in the vehicle route, how long shall the vehicle stay in each station, and how much information shall be transferred from the nearby stations to the vehicle during each stay. The goal is to collect the maximum amount of information during a time period after which the vehicle returns to the base station. The WTVRP is NP-hard. Although it can be solved to optimality for small size instances, one needs to rely on good heuristic schemes to obtain good solutions for large size instances. In this work, we consider a mathematical formulation based on the vehicle visits. Several heuristics strategies are proposed, most of them based on the mathematical model. These strategies include constructive and improvement heuristics. Computational experiments show that a strategy that combines a combinatorial greedy heuristic to design a initial vehicle route, improved by a fix-and-optimize heuristic to provide a local optimum, followed by an exchange heuristic, affords good solutions within reasonable amount of running time.",
    src: "https://link.springer.com/article/10.1007/s10732-019-09429-6",
    imagen: journal_of_heuritics,
  }
]


exports.analisisNumerico_publicaciones = [
  
  {
    titulo: "A hybrid high-order formulation for a Neumann problem on polytopal meshes." ,
    autores: "R. Bustinza and J. Munguia-La-Cotera.",
    revista: "Numerical Methods for Partial Differential Equations",
    volume: "36",
    issue: "3",
    pag: "524–551",
    anio: 2020,
    abstract: "In this work, we study a hybrid high-order (HHO) method for an elliptic diffusion problem with Neumann boundary condition. The proposed method has several features, such as: (a) the support of arbitrary approximation order polynomial at mesh elements and faces on polytopal meshes, (b) the design of a local (element-wise) potential reconstruction operator and a local stabilization term, that weakly enforces the matching between local element- and face-based on degrees of freedom, and (c) cheap computational cost, thanks to static condensation and compact stencil. We prove the well-posedness of our HHO formulation, and obtain the optimal error estimates, according to previous study. Implementation aspects are thoroughly discussed. Finally, some numerical examples are provided, which are in agreement with our theoretical results.",
    src: "https://onlinelibrary.wiley.com/doi/abs/10.1002/num.22439",
    imagen: numerical_methods_partial,
  },
  {
    titulo: "Revisión del método Híbrido de Alto Orden para un problema de difusión variable.",
    autores: "R. Bustinza and J. Munguia.",
    revista: "REVCIUNI",
    volume: "21",
    issue: "1",
    pag: "6-14",
    anio: 2018,
    abstract: "In this work, we approximate the solution of an elliptic diffusion problem with Neumann boundary condition through a novel numerical technique known as Hybrid High-Oder (HHO) method, which has the following characteristics: i) the support of arbitrary approximation order polynomial at mesh elements and faces (or edges) on general polyhedral meshes, ii) the design of a local (element-wise) discrete gradient reconstruction operator and a local stabilization term, which weakly enforces the matching between the polynomial based on the element and its respective faces, iii) cheap computational cost thanks to static condensation, which allows us to solve only on the skeleton of the mesh. We prove the well-posedness of the numerical scheme as well as its convergence, obtaining the error estimates of potential and flux variables. Finally, some numerical examples are provided, which are in agreement with our theoretical results.",
    src: "https://www.latindex.org/latindex/ficha?folio=13519",
    imagen: revciuni,
  },
  {
    titulo: "Construcción de mapas de ruido con elementos finitos y Newmark.",
    autores: "I. Mantilla and J. Munguia.",
    revista: "TECNIA",
    volume: "22",
    issue: "2",
    pag: "25-44",
    anio: 2012,
    abstract: "This article uses the weak formulation of the problems Partial Hyperbolic type (VPE) for construction noise maps with finite element and Newmark in two-dimensional space. To ensure the numerical simulation of the problem of propagation of the noise source, so that proves the existence and uniqueness of the variational problem in Sobolev spaces evolutionary and applied the finite element method and method Galerkin for spatial discretization and Newmark method for the time discretization. In this work, the innovative technique of preparation of the data base and computational experimentation with Matlab, finally obtaining effectively the  solution  as shown in the convergence of the numerical scheme.",
    src: "http://www.revistas.uni.edu.pe/index.php/tecnia/article/view/80",
    imagen: tecnia,
  }
]*/}
