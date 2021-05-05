import React from 'react';
import { Info, Repos, User, Search, Navbar } from '../components/index';
import loadingImage from '../images/preloader.gif';
import { GithubContext } from '../context/context';
import { FaBeer,FaAdn,FaChrome } from 'react-icons/fa';
const Dashboard = () => {
  return (
    <main>
      <Navbar/>
      <Search/>
      {/* background: linear-gradient(90deg,#2cc7c0,#59d99d); */}
      <Info/>
      <User/>
      <Repos/>
      
    </main>
  );
};

export default Dashboard;
