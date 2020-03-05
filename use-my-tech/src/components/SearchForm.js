import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';


const SearchForm = () => {

  const [data, setData] = useState([]);

  const [query, setQuery] = useState("");

  useEffect(() => {
    axios
    .get('https://usemytechstuff-bw.herokuapp.com/api/gadgets')
    .then(response => {
      console.log(response.data);
      const items = response.data.filter(item =>
        item.name.toLowerCase().includes(query.toLowerCase()));
        setData(items);
    })
  },[query]);

  const handleInputChange = event => {
    setQuery(event.target.value);
  };

  const Frame = styled.div`
    margin: 2% 45%;
  `

  const Section = styled.section`
    background: #292C2D;
    padding: 3% 0% 10% 0%;
    color: white;
  `
  
  return (
    <Section>
      <div className="search-form">
        <Frame>
          <h4>Search Item</h4>
          <form className="search">
            <input
            type="text"
            onChange={handleInputChange}
            value={query}
            name="name"
            tabIndex="0"
            className="prompt search-name"
            placeholder="search by name"
            autoComplete="off"
            />
          </form>
        </Frame>
        <div className="info-display">
          {data.map((item =>{
            const Card = styled.div`
            display: flex;
            flex-direction: row;
            justify-content: center;
            margin: 5%;
            border: 2px solid #9C9E9E;
            background: #550C18;
            `
            const Info = styled.div`
            margin: 5%;
            `

            return(
              <Card>
                <Info>
                  <h2>Name: {item.name}</h2><br/>
                  <h3>Price: {item.price}</h3><br/>
                  <h3>Location: {item.location}</h3><br/>
                  <h3>Owner: {item.owner_id}</h3>
                </Info>
              </Card>
            )
          }))}
        </div>
      </div>
    </Section>
  );
};

export default SearchForm;
