/** @jsx jsx */
import { jsx, Box } from 'theme-ui'

const Navigation = ({ ...props }) => (
  <Box sx={{ padding: '40px' }}>
    <img src="/logo.png" alt="Logo" sx={{ height: '24px', width: 'auto' }} />
  </Box>
)

export default Navigation
