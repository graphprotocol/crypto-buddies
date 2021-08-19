/** @jsx jsx */
import { jsx, Box } from "theme-ui";
import { navigate } from "../../.cache/gatsby-browser-entry";

const Navigation = ({ ...props }) => (
  <Box
    sx={{
      padding: "40px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      cursor: "pointer",
    }}
    onClick={() => navigate("/")}
  >
    <img src="/logo.png" alt="Logo" sx={{ height: "24px", width: "auto" }} />
    <img src="/avatar.png" alt="Logo" sx={{ height: "24px", width: "auto" }} />
  </Box>
);

export default Navigation;
