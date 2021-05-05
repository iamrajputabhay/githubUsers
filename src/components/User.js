import React, {useContext} from 'react';
import styled from 'styled-components';
import {GithubContext} from '../context/context';
import Card from './Card';
import Followers from './Followers';

const User = () => {
  const data = useContext(GithubContext);
  const {githubUser} = data;
  console.log(data);
  console.log("for fuck's sake")
  return (<div>
    <Card/>
    <Followers/>
  </div>
  
    )
  ;
};

const Wrapper = styled.div`
  padding-top: 2rem;
  display: grid;
  gap: 3rem 2rem;
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
  /* align-items: start; */
`;

export default User;
