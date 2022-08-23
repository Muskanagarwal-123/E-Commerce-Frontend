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
import AddChildCategory from "./AddChildCategory";

export default function ChildCategoryList() {
  const [category, setCategory] = useState([]);
  const { subCatId } = useParams();
  const fetchChildCategories = () => {
    fetch(`http://65.0.185.12:3000/productChildCategory/getChildCategoriesBySubCategory/${subCatId}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCategory(data);
      });
  };
  useEffect(() => {
    fetchChildCategories();
  }, []);

  return (
    <>
          <AddChildCategory/>
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
                  <TableCell style={{fontWeight:"bold"}}>Child Category Name</TableCell>
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
