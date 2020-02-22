/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import styled, { keyframes } from 'styled-components';
import { Link } from 'gatsby'

const pulse = keyframes`
  0%{
    transform: scale(0.5);
    opacity: 0;
  }
  25%, 50%{
    opacity: 1;
  }
  100%{
    opacity: 0;
    transform: scale(1.3);
  }
`

export const PulseLink = styled(Link)`
  position: relative;
  &::before, &::after{
    content: '';
    position: absolute;
    top: 10%;
    left: 50%;
    width: 30px;
    height: 30px;
    border: 2px solid rgba(0,0,0,.5);
    border-radius: 50%;
    opacity: 0;
    pointer-events: none;
  }
  &::before{
    width: 20px;
    height: 20px;
    top: 25%;
    left: 63%;
  }
  &:focus::after, &:focus::before{
    animation: ${pulse} .3s ease-out;
  }
`

const Navigation = ({ ...props }) => (
  <Box sx={{ padding: '40px 0', display: 'flex', justifyContent: 'space-between' }}>
    <PulseLink to="/">
      <img src="/logo.png" alt="Logo" sx={{ height: '24px', width: 'auto' }} />
    </PulseLink>
    <svg viewBox="0 0 14 20" fill="#000" width="24" height="30" xmlns="http://www.w3.org/2000/svg"><path d="m9.5 9h-5a4.5 4.5 0 0 0 -4.5 4.5v2.5h14v-2.5a4.5 4.5 0 0 0 -4.5-4.5zm3.5 6h-12v-1.5a3.5 3.5 0 0 1 3.5-3.5h5a3.5 3.5 0 0 1 3.5 3.5z"/><path d="m7 8a4 4 0 1 0 -4-4 4 4 0 0 0 4 4zm0-7a3 3 0 1 1 -3 3 3 3 0 0 1 3-3z"/></svg>
  </Box>
)

export default Navigation
