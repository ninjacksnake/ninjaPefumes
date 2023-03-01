import React from 'react'
import styled from 'styled-components'

const profile = () => {
  return (
    <ProfileContainer>
        <h1>Profile</h1>
    </ProfileContainer>
  )
}
const ProfileContainer = styled.div`
background-color: #186868;
  display: flex;
  margin: 0;
  align-items: center;
  justify-content: center;
  height: 100vmin;
  /* border-radius: 10px; */
  text-align: center;

  h1 {
    color: white;
    /* font-weight: normal; */
    margin-left: 18%;
    letter-spacing: 1.5rem;
    text-shadow: 1px 2px black;
  }
`;
export default profile