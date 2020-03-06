import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import UserPostCard from './UserPostCard';

const UserPage = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
    .get('https://usemytechstuff-bw.herokuapp.com/api/gadgets')
    .then(response => {
      console.log(response.data);
        setData(response.data);
    })
  },[]);

  const Picture = styled.div`
    width: 100%;
  `
  const Section = styled.section`
    background: #292C2D;
    color: white;
    text-align: center;
    padding: 1% 0% 10% 0%;
  `;

  return (
    <Section>
      <header>
        <h1>Welcome to Use My Tech site! </h1>
        <Picture>
          <img
            className="main-img"
            src="https://article.images.consumerreports.org/w_767,c_lfill,ar_32:11,f_auto/prod/content/dam/cro/news_articles/Electronics/CR-Electronics-Hero-Travel-Cameras-06-16"
            alt="cameras"
          />
        </Picture>
      </header>

      {data.map(item => (
        <UserPostCard
          key={item.id} 
          name={item.name}
          price={item.price}
          location={item.location}
          owner_id={item.owner_id}
        />
      ))}
     
    </Section>
  );
};

export default UserPage;
