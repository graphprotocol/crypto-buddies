/** @jsx jsx */
import * as React from "react";

import { jsx, Box } from "theme-ui";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import Navigation from "../../components/Navigation";
import { Button } from "theme-ui";
import { Link } from "gatsby";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeProvider } from "theme-ui";
import theme from "../../gatsby-plugin-theme-ui/index";
import Footer from "../../components/Footer";

const INDIVIDUAL_BUDDY = gql`
  query IndividualBuddyQuery($id: ID!) {
    buddy(where: { id: $id }) {
      id
      name
      image
    }
  }
`;

export default function Details(props) {
  const { id } = props;
  const { data } = useQuery(INDIVIDUAL_BUDDY, { variables: { id } });
  const buddy = data && data.buddy;
  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ ease: "easeOut", duration: 2 }}
        >
          <Box sx={{ fontFamily: "heading" }}>
            <Navigation />
            <ThemeProvider theme={theme}>
              <main sx={{ margin: "7rem 0" }}>
                <Link sx={{ textDecoration: "none" }} to="/">
                  <div sx={{ display: "flex", alignItems: "center" }}>
                    {buddy && (
                      <div
                        sx={{
                          display: "flex",
                          alignItems: "flex-start",
                          paddingLeft: "3rem",
                          color: "black",
                        }}
                      >
                        <img
                          sx={{ width: "180px", borderRadius: "50%" }}
                          alt={buddy.name}
                          src={buddy.image}
                        />
                        <div
                          sx={{
                            paddingLeft: "5rem",
                            maxWidth: "30rem",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-start",
                            alignItems: "flex-start",
                          }}
                        >
                          <h1
                            sx={{
                              fontSize: "100px",
                              margin: "0%",
                              paddingBottom: "4rem",
                            }}
                          >
                            {buddy.name}
                          </h1>
                          <Button
                            variant="primary"
                            sx={{
                              width: "280px",
                              height: "72px",
                              fontSize: "1.25rem",
                              boxShadow:
                                "0 4px 64px 0 rgba(188,64,199,0.32), 0 8px 32px 0 rgba(10,9,18,0.16)",
                              cursor: "pointer",
                            }}
                          >
                            Add Buddy
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>
                </Link>
              </main>
            </ThemeProvider>
            <Footer />
          </Box>
        </motion.div>
      </AnimatePresence>
    </>
  );
}
