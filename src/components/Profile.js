/** @jsx jsx */
import { jsx } from "theme-ui";
import { navigate } from "../../.cache/gatsby-browser-entry";

export default function Profile({ id, image, name, index }) {
  return (
    <div
      role="button"
      id={index}
      onClick={() => navigate(`/details/${id}`)}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "1rem",
        "&:hover": {
          opacity: 0.9,
          transform: "scale(1.1)",
        },
      }}
    >
      <img
        sx={{ width: "150px", borderRadius: "50%" }}
        alt={name}
        src={image}
      />
      <div sx={{ color: "rgba(10,9,18,0.64) ", paddingTop: ".3rem" }}>
        {name}
      </div>
    </div>
  );
}
