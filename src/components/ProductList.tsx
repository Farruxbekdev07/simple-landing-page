import { Typography, Button, Grid } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

import ProductCard from "./ProductCard";
import { products } from "../constants/data";
import { StyledProductList } from "../styles/StyledProductList";

const ProductList = () => (
  <StyledProductList>
    <div className="title-container">
      <div>
        <Typography variant="subtitle1" className="title">
          Offer Products
        </Typography>
        <Typography variant="h4" className="subtitle">
          We Offer Organic For You
        </Typography>
      </div>
      <Button variant="contained" className="button">
        View All Products{" "}
        <Button className="icon-button">
          <ArrowRightAltIcon />
        </Button>
      </Button>
    </div>

    <Grid container spacing={4} className="grid">
      {products.map((p) => (
        <ProductCard product={p} />
      ))}
    </Grid>
  </StyledProductList>
);

export default ProductList;
