import React from 'react';
import styled from 'styled-components';
import { GithubContext } from '../context/context';
import { ExampleChart, Pie3D, Column3D, Bar3D, Doughnut2D } from './Charts';
const Repos = () => {
  const repoData = React.useContext(GithubContext);
  const {repos,githubUser,followers} = repoData;
  // const {languages} = repos;
  const languages = repos.reduce((total,item) => {
    console.log(item.language);
    return total;
  });
  console.log(languages);
  const chart = [
    {
      label: "CSS",
      value: "60"
    },
    {
      label: "JavaScript",
      value: "260"
    },
    {
      label: "HTML",
      value: "180"
    },
    {
      label: "React.js",
      value: "150"
    }
    
  ];
  console.log(repoData);
  return (
    <section className="secction">
      <Wrapper className="section-center">
      <ExampleChart data={chart} className="example-chart"/>
      </Wrapper>
      </section>
        
    
  )
};

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 2rem;

  .example-chart {
    margin-left:8em;
    color:red;
    background:blue;
  }
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 2fr 3fr;
  }

  div {
    width: 100% !important;
  }
  .fusioncharts-container {
    width: 100% !important;
  }
  svg {
    width: 100% !important;
    border-radius: var(--radius) !important;
  }
`;

export default Repos;
