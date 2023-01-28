import React, { useEffect } from 'react';
import '../../App.css';
import CarouselReact from './CarouselReact';
import useAuth from '../../auth/useAuth';
import axios from 'axios';

function Home() {
  const { login } = useAuth();
  // Error en el servidor
  useEffect(() => {
    axios
      .post(process.env.REACT_APP_API_URL + 'api/v1/auth/login', {
        username: process.env.REACT_APP_USERNAME,
        password: process.env.REACT_APP_PASSWORD,
      })
      .then((res: { data: any }) => {
        login(res.data);
      })
      .catch((err: any) => console.error(err));
  }, [login]);

  return <CarouselReact />;
}

export default Home;
