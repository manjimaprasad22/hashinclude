import React, { useState, CSSProperties } from 'react';
import Backdrop from "@mui/material/Backdrop";
import { HashLoader } from 'react-spinners';



const Loader = ({loading}) => {
  
  const [color, setColor] = useState("#754739");

  return (
    <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >

<HashLoader color="#007AFF" />
      </Backdrop>
  );
}

export default Loader;