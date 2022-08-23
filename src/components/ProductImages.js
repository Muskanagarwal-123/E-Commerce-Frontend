import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductImages() {
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch(`http://65.0.185.12:3000/Product/GetProduct/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProduct(data);
      });
  };

  return (
    <>
      {product && (
        <ul>
          {product?.imageURLs?.map((image) => (
              <img
                className="ProductImage"
                src={`http://65.0.185.12:3000/images/${image}`}
                alt="FooterImage"
              />
          ))}
        </ul>
      )}
    </>
  );
}
