/** @jsx jsx */
import { jsx, Box, Text } from 'theme-ui'
import styled, { keyframes } from 'styled-components';
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import Navigation from '../components/Navigation'
import { Container } from './index'

const BUDDY = gql`
  query getBuddy($id: ID!){
    buddy(where: {id: $id}) {
      id
      name
      image
    }
  }
`

const slideIn = keyframes`
  0%{
    transform: translateX(-10%) scale(.8);
    opacity: 0;
  }
  85%{
    transform: translateX(0);
  }
`;

const BuddyProfile = styled.div`
  display: grid;
  margin: 200px 0;
  padding: 20px 0;
  gap: 10px;
  img{
    width: 200px;
    height: 200px;
    border-radius: 50%;
    object-fit: cover;
  }
  img,h1{
    transform-origin: bottom left;
    will-change: transform;
    animation: ${slideIn} .5s cubic-bezier(.5,0,.5,1) forwards;
  }
  h1{
    animation-duration: .4s;
  }
  h1{
    margin-bottom: 20px;
    font-size: 50px;
    line-height: 1.2;
  }
  button{
    padding: 20px 70px;
    border: 0;
    background: #bc3fc7;
    color: #fff;
    font: inherit;
    cursor: pointer;
    box-shadow: 2px 6px 10px rgba(188,63,199,.7), 1px 3px 6px rgba(0,0,0,.3);
    outline: none;
    transition: transform .5s cubic-bezier(.5,0,.5,1);
    &:hover{
      transform: scale(1.05);
      background: #a02cab;
    }
  }
  @media(min-width: 720px) {
    grid-template-columns: 200px 1fr;
    gap: 30px;
    h1{
      font-size: 80px;
    }
  }
  @media(min-width: 1020px) {
    h1{
      font-size: 120px;
    }
  }
`

const Details = () => {
  const { error, data: { buddy = {} } = {} } = useQuery(BUDDY, { variables: { id: 'ck6rftxfxksyl09604y9vz65u' } })

  if(error) return <p>Failed to communicate with server. {error}</p>

  return (
    <Box sx={{ fontFamily: 'heading' }}>
      <Container>
        <Navigation />
        {
          (
            <BuddyProfile>
              <img src={buddy.image} alt={buddy.name}/>
              <div>
                <Text as="h1">{buddy.name}</Text>
                <button>Add Buddy</button>
              </div>
            </BuddyProfile>
          )
        }
      </Container>
    </Box>
  )
}

export default Details