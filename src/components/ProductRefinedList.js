import React, { useEffect, useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import AddProduct from "./AddProduct";

export default function ProductRefinedList() {
  const [product, setProduct] = useState([]);
  const { childCatId} = useParams();
  const fetchProducts = () => {
    fetch(`http://65.0.185.12:3000/product/getProductsByChildCategory/${childCatId}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProduct(data);
      });
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      {product.length > 0 && (
        <ul>
          {product.map((products) => (
            <List sx={{ width: "100%" }} className="reqList">
              <ListItem alignItems="flex-start">
                <ListItemText
                  primary={<NavLink to={products._id}>{products.name}</NavLink>}
                  secondary={products.desc}
                />
              </ListItem>
              <Divider variant="inset" component="li" />
            </List>
          ))}
        </ul>
      )}
      <AddProduct/>
    </>
  );
}
