import React from 'react';
import styled from 'styled-components';

const UserPostCard = (props) => {

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

  return (
    <Card>
      <Info>
        <h2>Name: {props.name}</h2><br/>
        <h3>Price: {props.price}</h3><br/>
        <h3>Location: {props.location}</h3><br/>
        <h3>Owner: {props.owner_id}</h3>
      </Info>
    </Card>
  )
}

export default UserPostCard;