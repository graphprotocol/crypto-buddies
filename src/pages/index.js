/** @jsx jsx */
import { useRef } from 'react'
import { jsx, Box, Text } from 'theme-ui'
import styled, { keyframes } from 'styled-components'
import { useQuery, useLazyQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import Navigation, { PulseLink } from '../components/Navigation'

const BUDDIES = gql`
  query {
    buddies {
      id
      name
      image
    }
  }
`

const SEARCH = gql`
  query getBuddies($searchphrase: String!) {
    buddies(where: {
      name_contains: $searchphrase
    }) {
      id
      name
      image
    }
  }
`

const staggerIn = keyframes`
  0%{
    opacity: 0;
    transform: translateY(50px);
  }
`;

export const Container = styled.div`
  --site-width: 1400px;
  max-width: var(--site-width);
  width: 90%;
  margin: auto;
`

const Footer = styled.footer`
  margin-top: 300px;
  padding: 100px;
  text-align: center;
  font-style: italic;
  color: #555;
`

const ContentSection = styled.section`
  width: 85%;
  margin: auto;
`

/* eslint-disable no-use-before-define */
const Grid = styled.div`
  display: grid;
  justify-content: center;
  gap: 30px;
  text-align: center;
  &:hover ${Avatar}::before{
    opacity: 1;
  }
  a{
    text-decoration: none;
    color: inherit;
  }
  @media(min-width: 520px) {
    grid-template-columns: 1fr 1fr;
  }
  @media(min-width: 760px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media(min-width: 1020px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media(min-width: 1300px) {
    grid-template-columns: repeat(5, 1fr);
  }
  h4{
    color: #667;
    transition: color .2s ease-in-out;
  }
  > a{
    animation: ${staggerIn} .3s cubic-bezier(.5, 0, .5, 1);
  }
`
/* eslint-enable no-use-before-define */

const Avatar = styled.div`
  --primary-delay: .4s;
  --secondary-delay: .6s;
  position: relative;
  width: 200px;
  height: 200px;
  margin: 10px auto;
  border-radius: 50%;
  transition: transform var(--primary-delay) cubic-bezier(0.645, 0.045, 0.355, 1);
  img{
    border-radius: 50%;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &::before, &::after{
    content: '';
    position: absolute;
    border-radius: 50%;
    transition: opacity var(--secondary-delay) cubic-bezier(.5, 0, .5, 1);
  }
  &::before{
    left: 0;
    right: 0;
    height: 100%;
    background: rgba(255, 255, 255, .5);
    opacity: 0;
  }
  &::after{
    top: -5%;
    left: -5%;
    z-index: -1;
    width: 110%;
    height: 110%;
    background: rgba(0,0,0,.2);
    filter: blur(8px);
    opacity: 0;
  }
  &:hover{
    transform: scale(1.05);
    &::before{
      opacity: 0;
    }
    &::after{
      opacity: 1;
    }
    + h4{
      color: #000;
    }
  }
`
const Form = styled.form`
  position: relative;
  margin: 300px 0 100px;
  input{
    -webkit-appearance: none;
    display: block;
    width: 100%;
    height: 100px;
    padding: 0 0 20px;
    outline: none;
    font: inherit;
    font-size: 80px;
    font-weight: bold;
    overflow: visible;
    border: 0;
  }
  label{
    position: absolute;
    top: -7px;
    left: 2px;
    right: 0;
    font-weight: bold;
    font-size: 80px;
    line-height: 1.2;
    cursor: text;
    transition: opacity .3s ease;
  }
  &:hover label{
    opacity: .2;
  }
  input:focus + label{
    opacity: 0;
  }
  ${({ searchVal }) => searchVal && `
    label, &:hover label{
      opacity: 0;
    } 
  `}
  svg{
    --size: 30px;
    position: absolute;
    top: 20%;
    left: -35px;
    width: var(--size);
    height: var(--size);
    stroke: #aaa;
    stroke-width: 2;
    @media(min-width: 800px) {
      --size: 50px;
      left: -70px;
    }
  }
`

const SearchResult = styled.div`
  min-height: 250px;
  margin-bottom: 200px;
`

const Index = () => {
  const { error, data: { buddies = [] } = {} } = useQuery(BUDDIES)
  const [getSearchResult, search] = useLazyQuery(SEARCH)
  const inputRef = useRef(null);

  if(error) return <p>Failed to communicate with server.</p>

  const processSearch = () => {
    let { value } = inputRef.current
    if(!value){
      value = null
    }
    getSearchResult({ variables: { searchphrase: value } })
  };

  return (
    <Box sx={{ fontFamily: 'heading' }}>
      <Container>
        <Navigation />
        <ContentSection>
          <Form role="search" searchVal={inputRef.current && inputRef.current.value}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeLinecap="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            <input type="text" placeholder="" id="search-input" aria-controls="results" ref={inputRef} onChange={processSearch}/>
            <label htmlFor="search-input">Crypto<br/>buddies</label>
          </Form>
          <SearchResult aria-live="polite" role="region" id="results">
            <Grid>
              {
                search.data && search.data.buddies.map(buddy => (
                  <Box as={PulseLink} to="/details" key={buddy.id}>
                    <Avatar>
                      <img src={buddy.image} alt={buddy.name}/>
                    </Avatar>
                    <Text as="h4">{buddy.name}</Text>
                  </Box>
                ))
              }
            </Grid>
          </SearchResult>
          <h1 sx={{ fontSize: '40px' }}>Fresh Cryptobuddies</h1>
          <Grid>
          {
            buddies.map(buddy => (
              <Box key={buddy.id}>
                <Avatar>
                  <img src={buddy.image} alt={buddy.name}/>
                </Avatar>
                <Text as="h4">{buddy.name}</Text>
              </Box>
            ))
          }
          </Grid>
        </ContentSection>
        <Footer>Made with &hearts;</Footer>
      </Container>
    </Box>
  )
}

export default Index
