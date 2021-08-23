/** @jsx jsx */
import { jsx } from "theme-ui";

const Search = ({ ...onChange }) => (
  <div
    sx={{
      paddingLeft: "40px",
      // width: "45%",
      marginTop: "9rem",
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "flex-start",
      color: "black",
      "&:hover": { color: "black" },
    }}
  >
    <img
      src="/search.png"
      alt="Logo"
      width={50}
      height={50}
      sx={{
        cursor: "pointer",
        position: "relative",
        top: "3.5rem",
      }}
    />
    <textarea
      {...onChange}
      placeholder={"Crypto buddies"}
      type="text"
      sx={{
        fontSize: "100px",
        width: "45%",
        resize: "none",
        border: "0",
        fontWeight: "bold",
        fontSize: "128px",
        color: "black",
        paddingLeft: "5rem",
        outline: "none",
        "::-webkit-input-placeholder": {
          /* Chrome/Opera/Safari */ color: "black",
        },
        // inlineSize: '100%',
      }}
    />
  </div>
);

export default Search;
