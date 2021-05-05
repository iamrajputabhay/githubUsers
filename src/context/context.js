import React, { useState, useEffect } from 'react';
import mockUser from './mockData.js/mockUser';
import mockRepos from './mockData.js/mockRepos';
import mockFollowers from './mockData.js/mockFollowers';
import axios from 'axios';
import Info from '../components/Info'
import { Navbar } from '../components';

const rootUrl = 'https://api.github.com';
 const GithubContext = React.createContext();
 const MyContext = React.createContext();

const GithubProvider = ({children}) => {
    const [githubUser, setGithubUser] = useState(mockUser);
    const [repos, setRepos] = useState(mockRepos);
    const [followers, setGsetFollowers] = useState(mockFollowers);
    //console.log(githubUser,repos,followers);
return (
    <GithubContext.Provider value={{githubUser, repos,followers}}>
      {/* <Info/>
      <Navbar/> */}
      {children}
   
  </GithubContext.Provider>
 )
 
}

export { GithubProvider, GithubContext };