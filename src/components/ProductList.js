import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Box, Button} from "@mui/material";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const { shopId } = useParams();
  const fetchProducts = () => {
    fetch(`http://65.0.185.12:3000/Product/GetAllProductsByShopId/${shopId}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProducts(data);
      });
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      {products.length > 0 && (
        <Box
          sx={{
            margin: "50px",
            "& .MuiTableCell-root": { width: "1ch" },
          }}
        >
          <TableContainer component={Paper}>
            <Table size="large">
              <TableHead>
                <TableRow>
                  <TableCell style={{fontWeight:"bold"}}>Product Name</TableCell>
                  <TableCell style={{fontWeight:"bold"}}  align="right">Description</TableCell>
                  <TableCell style={{fontWeight:"bold"}} align="right">Price</TableCell>
                  <TableCell style={{fontWeight:"bold"}} align="right">View Details</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {products.map((product) => (
                  <TableRow
                    key={product.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {product.name}
                    </TableCell>
                    <TableCell align="right">{product.desc}</TableCell>
                    <TableCell align="right">{product.price}</TableCell>
                    <TableCell align="right">
                    <Button as={NavLink} to={product._id} className="buttonCss" style={{color:"white", textDecoration:"none"}}>Click Here</Button> 
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
