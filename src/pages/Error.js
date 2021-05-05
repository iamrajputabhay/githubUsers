import React from 'react';
import styled  , {css} from 'styled-components';
import { Link } from 'react-router-dom';
import { BiErrorCircle} from "react-icons/bi";
const Error = () => {
  return (
   <Wrapper>
     <div>
       <h1><BiErrorCircle/> </h1>
       <h2>Sorry, but you fucked up</h2>
      <h3>I would suggest you to hit the button and go back home</h3>
      <Button primary >
      <Link className="btn-home" to="/">Let's Go</Link>
      </Button>
      </div>
   </Wrapper>
  )

};
const Button = styled.button `
 
  background:#2AAEBA;
  color:white;
  border:1px solid #2AAEBA;
  padding:.5em 1.2em;
  font-size:1.2rem;
  border-radius:10px;

  .btn-home {
    color:white;
  }

${props => props.primary && css`
  
  color: white;
`}
`;
const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  background: var(--clr-primary-10);
  text-align: center;
  h1 {
    font-size: 10rem;
  }
  
  h3 {
    color: var(--clr-grey-3);
    margin-bottom: 1.5rem;
  }
`;
export default Error;
