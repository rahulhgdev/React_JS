import React, { useState } from 'react'
import FadeLoader from "react-spinners/FadeLoader";

const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };
const Spinner = () => {
    let [loading, setLoading] = useState(true);
  return (
    <FadeLoader
        color="#dddddd"
        loading={loading}
        cssOverride={override}
        size={60}
        aria-label="Loading Spinner"
        data-testid="loader"
    />
  )
}

export default Spinner