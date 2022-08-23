import React from "react";
import { Button } from "@mui/material";
import { useState } from "react";

const UploadOne=props=> {
    const [img, setImg] = useState({ preview: "", raw: "" });

  const onImageChange = (e) => {
    if (e.target.files.length) {
      setImg({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0],
      });
    }
  };
  return (
    <div className="CSimage">
            <div style={{ marginLeft: "300px" }}>
              <input type="file" onChange={onImageChange} />
              <Button
                variant="contained"
                color="primary"
                onClick={props.handleUpload}
              >
                Upload
              </Button>
            </div>
            <img
              style={{ width: "150px", marginLeft: "30px" }}
              src={img.preview}
              alt="..."
              className="Pimage"
            />
          </div>
  )
}
export default UploadOne;
