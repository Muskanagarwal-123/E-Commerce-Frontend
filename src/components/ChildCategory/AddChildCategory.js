import * as React from "react";
import Box from "@mui/material/Box";
import { TextField, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function AddChildCategory() {
  const { subCatId } = useParams();

  const [state, setState] = useState({
    name: "",
    subCategoryId : subCatId
  });
  const handleChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  };
  const handleSubmit = (e) => {
    alert("added");
    e.preventDefault();
    const childCat = {
      name: state.name,
      subCategoryId:state.subCategoryId,
    };

    axios
      .post("http://65.0.185.12:3000/productChildCategory/create", childCat)
      .then((response) => {
        console.log(response.data);
      });
      window.location.reload(); 
  };

  return (
    <>
    <form onSubmit={handleSubmit}>
   <React.Fragment>
  
    <Box
              sx={{
                marginTop: "40px",
                marginLeft:"300px",
                "& .MuiTextField-root": { m: 1, width: "65ch" },
              }}
            >
              <div>
                <TextField
                  name="name"
                  label="Child Category Name"
                  value={state.name}
                  onChange={handleChange}
                />
                <Button
                  variant="contained"
                  color="success"
                  startIcon={<AddIcon />}
                  type="submit"
                  className="buttonCss"
                  style={{ marginTop: "15px", marginLeft: "100px" }}
                >
                  Add
                </Button>
              </div>
            </Box>
      </React.Fragment>
      </form>
    </>
  );
}
