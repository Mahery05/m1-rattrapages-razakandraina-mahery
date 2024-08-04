import React from 'react';
import Header from './components/Header';
import Count from './components/Count';
import List from './components/List';
import Form from './components/Form';
import Calendar from 'react-calendar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const conges = [
    { date: '04/08/2024', status: 'Approuvé' },
    { date: '12/08/2024', status: 'Approuvé' },
    { date: '05/05/2025', status: 'En attente' },
  ];

  const handleCongesSubmit = () => {
    toast.success('Demande de congé soumise avec succès!');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="container mx-auto p-4">
        <Count />
        <List />
        <Form onSubmit={handleCongesSubmit} />
        <Calendar conges={conges} />
      </div>
    </div>
  );
};

export default App;