import * as React from "react";
import Box from "@mui/material/Box";
import { TextField, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function AddSubCategory() {
  const { catId } = useParams();

  const [state, setState] = useState({
    name: "",
    categoryId : catId
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
    const subCat = {
      name: state.name,
      categoryId:state.categoryId,
    };

    axios
      .post("http://65.0.185.12:3000/productSubCategory/create", subCat)
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
                <TextField
                  name="name"
                  label="Sub Category Name"
                  value={state.name}
                  onChange={handleChange}
                />
                <Button
                  variant="contained"
                  className="buttonCss"
                  startIcon={<AddIcon />}
                  type="submit"
                  style={{ marginTop: "15px", marginLeft: "100px" }}
                >
                  Add
                </Button>
            </Box>
      </React.Fragment>
      </form>
    </>
  );
}
