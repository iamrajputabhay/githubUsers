import React, {useContext} from 'react';
import { GithubContext} from '../context/context';
import styled from 'styled-components';
import { GoRepo, GoGist } from 'react-icons/go';
import { FiUsers, FiUserPlus } from 'react-icons/fi';



const UserInfo = () => {
  const data = useContext(GithubContext);
  console.log(data);
  const {githubUser,repos} = data;
  console.log(githubUser);
  const {followers, public_repos,public_gists,following,bio} = githubUser;
  //console.log(followers, following,public_gists,public_repos,bio);
  const items = [

    {
      id:1,
      label:'Repos',
      icon:<GoRepo />,
      value:public_repos
    },
    {
      id:2,
      label:'Followers',
      icon:<FiUserPlus />,
      value:followers
    },
    {
      id:3,
      label:'Following',
      icon:<FiUsers />,
      value:following
    },
    {
      id:4,
      label:'Gists',
      icon:<GoGist />,
      value:public_gists
    }
  ]
  return (
    <div className="section">
      <Wrapper className="section-centre">
        {items.map(item => {
          return <Items {...item} key={item.id}/>
        })}
      {/* {Items.map((item) => {
        const {value, id, icon, label} = item;
        return (
          <section className="item" key={id}>
            <h3 className="span">{icon}</h3>
            <div className="item-2">
            <h3>{value}</h3>
            <h4>{label}</h4>
            </div>
            
             </section>
        )
      })} */}
</Wrapper>

    </div>
              
   
  );
};

const Items = ({id, icon, value, label}) => {
 
  return (
    
        <section className="item" key={id}>
          <h3 className="span">{icon}</h3>
          <div className="item-2">
          <h3>{value}</h3>
          <h4>{label}</h4>
          </div>
          
           </section>
      )
  }



const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem 2rem;
 
  margin-left:3rem;
  margin:1em 8em;
  @media (min-width: 640px) {
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  }
  
  
  .item {
    border-radius: var(--radius);
    padding: 1rem 1.5rem;
    background: var(--clr-white);
    display: grid;
    justify-items:centre;
    grid-template-columns: 1fr 1fr;
  }
  
  .item-2 {
   
  }
    .span {
      background: #e6e6ff;
      width: 3rem;
      height: 3rem;
      display: grid;
      place-items: center;
      border-radius: 50%;
    }
    .icon {
      font-size: 1.5rem;
    }
    h3 {
      margin-bottom: 0;
      letter-spacing: 0;
    }
    p {
      margin-bottom: 0;
      text-transform: capitalize;
    }
    .pink {
      background: #ffe0f0;
      color: #da4a91;
    }
    .green {
      background: var(--clr-primary-10);
      color: var(--clr-primary-5);
    }
    .purple {
      background: #e6e6ff;
      color: #5d55fa;
    }
    .yellow {
      background: #fffbea;
      color: #f0b429;
    }
  }
`;

export default UserInfo;
