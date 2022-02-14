import styled from 'styled-components';

export const EgresadosPage = styled.div`
  border:2px solid #1d3557;
  inline-size: 90%;
  margin-inline: auto;
  margin-top:14px;
  margin-bottom: 14px;;
  /* max-inline-size: 60em; */
  max-inline-size: 67em;
  /* text-align: center; */
  padding: 0px 15px;

`

export const TabContent = styled.div`
  margin: 50px 0px;
  `
export const TestimoniosTab = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`

export const TCard = styled.div`
  margin: 0px 10px;
  width: 27rem;
  .header {
    margin: 0px 0px 10px 0px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .card-testimony-header {
    display: flex;
    align-items: center;
    img {
      margin-right: 30px;
    }
  }
  .card-testimony {
    background: #102e2e;
    border-radius: 5px;
  }
  .card-title {
    color: white;
  }
  .card-text {
    color: white;
  }
  p {
    font-size: 16px;
  }
  .ver-mas{
    color: black;
  }
`

export const TCard2 = styled.div`
  .header {
    margin: 0px 0px 10px 0px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .card-testimony-header {
    display: flex;
    align-items: center;
    img {
      margin-right: 30px;
    }
  }
  .card-testimony {
  }
  .card-title {
    color: black;
  }
  .card-text {
    color: black;
  }
  p {
    font-size: 16px;
  }
  .ver-mas{
    color: black;
  }
`

export const BlockQuote = styled.div`

.navbar-nav {
    width: 100%
}

@media(min-width:568px) {
    .end {
        margin-left: auto
    }
}

@media(max-width:768px) {
    #post {
        width: 100%
    }
}

#clicked {
    padding-top: 1px;
    padding-bottom: 1px;
    text-align: center;
    width: 100%;
    background-color: #ecb21f;
    border-color: #a88734 #9c7e31 #846a29;
    color: black;
    border-width: 1px;
    border-style: solid;
    border-radius: 13px
}

#profile {
    background-color: unset
}

#post {
    margin: 10px;
    padding: 6px;
    padding-top: 2px;
    padding-bottom: 2px;
    text-align: center;
    background-color: #ecb21f;
    border-color: #a88734 #9c7e31 #846a29;
    color: black;
    border-width: 1px;
    border-style: solid;
    border-radius: 13px;
    width: 50%
}

body {
    background-color: black
}

#nav-items li a,
#profile {
    text-decoration: none;
    color: rgb(224, 219, 219);
    background-color: black
}

.comments {
    margin-top: 5%;
    margin-left: 20px
}

.darker {
    border: 1px solid #ecb21f;
    background-color: black;
    float: right;
    border-radius: 5px;
    padding-left: 40px;
    padding-right: 30px;
    padding-top: 10px
}

.comment {
    border: 1px solid rgba(16, 46, 46, 1);
    background-color: white;
    float: left;
    border-radius: 5px;
    padding-left: 40px;
    padding-right: 30px;
    padding-top: 10px
}

.comment h4,
.comment span,
.darker h4,
.darker span {
    display: inline
}

.comment p,
.comment span,
.darker p,
.darker span {
    color: rgb(184, 183, 183)
}

h1,
h4 {
    color: white;
    font-weight: bold
}

label {
    color: rgb(212, 208, 208)
}

#align-form {
    margin-top: 20px
}

.form-group p a {
    color: white
}

#checkbx {
    background-color: black
}

#darker img {
    margin-right: 15px;
    position: static
}

.form-group input,
.form-group textarea {
    background-color: black;
    border: 1px solid rgba(16, 46, 46, 1);
    border-radius: 12px
}

form {
    border: 1px solid rgba(16, 46, 46, 1);
    background-color: rgba(16, 46, 46, 0.973);
    border-radius: 5px;
    padding: 20px
}
`


export const ModalContainer = styled.div`
  .modal-tag-titulo {
    font-weight: bold;
    display: block;
  }
  .modal-subtitle {
    display: block;
  }
  .modal-titulo {
    
  }
  .img-right {
    display: flex;
  }
`
