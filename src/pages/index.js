/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import Navigation from '../components/Navigation'

const Index = ({ ...props }) => {
  return (
    <Box sx={{ fontFamily: 'heading' }}>
      <Navigation />
      <h1 sx={{ padding: '64px' }}>Crypto Buddies</h1>
    </Box>
  )
}

export default Index
