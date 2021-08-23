/** @jsx jsx */
import { jsx, Box } from "theme-ui";
import { ThemeProvider } from "theme-ui";
import theme from "../gatsby-plugin-theme-ui/index";
import Navigation from "../components/Navigation";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import { useState } from "react";
import Profile from "../components/Profile";
import Search from "../components/Search";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "../components/Footer";

const CRYPTO_BUDDIES = gql`
  query CryptoBuddiesQuery($name: String!) {
    buddies(where: { name_contains: $name }) {
      id
      name
      image
    }
  }
`;

export default function Index() {
  const [name, setName] = useState("");
  const { data } = useQuery(CRYPTO_BUDDIES, { variables: { name } });
  // check if data exists
  const cryptoBuddies = data ? data.buddies : [];
  // too many buddies only want 10
  const tenCryptoBuddies = cryptoBuddies.slice(0, 10);
  return (
    <AnimatePresence exitBeforeEnter>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            fontFamily: "heading",
            minHeight: "100vh",
            height: "100%",
            width: "100%",
          }}
        >
          <Navigation />
          <Search onChange={(e) => setName(e.target.value)} />
          <div
            sx={{
              maxWidth: "1000px",
              margin: "0 10rem",
              minHeight: "20rem",
              height: "100%",
              width: "100%",
              justifyContent: "flex-start",
              marginBottom: "5rem",
            }}
          >
            <div
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, 200px )",
                justifyContent: "flex-start",
                "&:hover div": {
                  opacity: 0.5,
                  transition: "opacity 0.5s ease-in-out",
                },
              }}
            >
              {name.length > 0
                ? tenCryptoBuddies?.map((buddy, i) => (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ ease: "easeOut", duration: 2 }}
                    >
                      <Profile key={i} {...buddy} index={i} />
                    </motion.div>
                  ))
                : null}
            </div>
          </div>
          <section sx={{ marginBottom: "7rem" }}>
            <h1
              sx={{
                paddingLeft: "13rem",
                fontSize: "3rem",
                fontFamily: "body",
                fontWeight: "bold",
              }}
            >
              Fresh Cryptobuddies
            </h1>

            <div
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                width: "100%",
                paddingLeft: "13rem",
                flexWrap: "wrap",
                width: "100%",
                height: "100%",
                "&:hover ": {
                  opacity: 0.8,
                  transition: "opacity 0.5s ease-in-out",
                },
              }}
            >
              <div
                sx={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, 200px )",
                  maxWidth: "1064px",
                }}
              >
                {tenCryptoBuddies?.map((buddy, index) => (
                  <Profile key={index} {...buddy} index={index} />
                ))}
              </div>
            </div>
          </section>
          <Footer />
        </Box>
      </ThemeProvider>
    </AnimatePresence>
  );
}
