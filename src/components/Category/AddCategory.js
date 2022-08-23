import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { TextField, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import axios from "axios";

export default function AddCategory() {
  const [state, setState] = useState({
    name: "",
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
    const cat = {
      name: state.name,
    };

    axios
      .post("http://65.0.185.12:3000/productCategory/create", cat)
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
                  label="Category Name"
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
