import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import AddSubCategory from "./AddSubCategory";

export default function SubCategoryList() {
  const [category, setCategory] = useState([]);
  const { catId } = useParams();
  const fetchSubCategories = () => {
    fetch(
      `http://65.0.185.12:3000/productSubCategory/getSubCategoriesByProductCategory/${catId}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCategory(data);
      });
  };
  useEffect(() => {
    fetchSubCategories();
  }, []);

  return (
    <>
      <AddSubCategory />
      {category.length > 0 && (
        <Box
          sx={{
            marginLeft:"300px",
            marginRight:"300px",
            marginTop:"50px",
            "& .MuiTableCell-root": { width: "1ch" },
          }}
        >
          <TableContainer component={Paper}>
            <Table size="large">
              <TableHead>
                <TableRow>
                  <TableCell style={{ fontWeight: "bold" }}>
                    Sub Category Name
                  </TableCell>
                  <TableCell style={{ fontWeight: "bold" }} align="right">
                    See All Child Categories
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {category.map((cat) => (
                  <TableRow
                    key={cat.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {cat.name}
                    </TableCell>
                    <TableCell align="right">
                      <NavLink to={cat._id}>Click Here</NavLink>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      )}
    </>
  );
}
