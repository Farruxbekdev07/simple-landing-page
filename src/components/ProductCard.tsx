import {
  Card,
  Button,
  CardMedia,
  Typography,
  CardContent,
  CardActionArea,
} from "@mui/material";

import { colors } from "../constants/colors";
import type { Product } from "../types/product";
import { StyledCard } from "../styles/StyledCard";

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({
  product: { id, title, category, price, oldPrice, image, rating },
}: Props) => (
  <StyledCard>
    <Card className="card" key={id}>
      <CardActionArea className="card-action-area">
        <Button variant="contained" sx={{ background: colors.darkBlue }}>
          {category}
        </Button>
        <CardMedia image={image} component="img" alt="green iguana" />
        <CardContent>
          <Typography className="card-title">{title}</Typography>
          <hr />
          <div className="card-footer">
            <div className="price-container">
              <Typography className="price">$ {price} USD</Typography>
              <Typography className="old-price">$ {oldPrice} USD</Typography>
            </div>
            <Typography sx={{ color: "orange" }}>
              {"★".repeat(rating) + "☆".repeat(5 - rating)}
            </Typography>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  </StyledCard>
);

export default ProductCard;
