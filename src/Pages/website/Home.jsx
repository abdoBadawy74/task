import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';

export default function Home() {
    const navigate = useNavigate();
  const cookies = new Cookies();
  useEffect(() => {
    const token = cookies.get('token');
    if (!token) {
      // Redirect to login if no token is found
      navigate('/login');
    }
  }, [navigate]);
  return (
    <div className='home'>
        <h1>welcome to dashboard</h1>
    </div>
  )
}
