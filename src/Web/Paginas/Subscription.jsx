import React from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';
import { signOut } from 'firebase/auth';

const Subscription = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/signin');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Subscription Page</h2>
      <p>Welcome to the subscription page!</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Subscription;