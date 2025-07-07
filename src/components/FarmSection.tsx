import { Paper, Typography } from "@mui/material";

import Farm from "../assets/nature.png";
import { StyledFarmSection } from "../styles/StyledFarmSection";

const FarmSection = () => (
  <StyledFarmSection>
    <img src={Farm} alt="Farm" />
    <Paper elevation={1} className="paper">
      <Typography className="status">Eco Friendly</Typography>
      <Typography className="title">
        From Our Farm <br /> To Your Home.
      </Typography>
      <div className="subtitle-wrap">
        <Typography className="subtitle">Choose Your Products</Typography>
        <Typography className="subtitle-info">
          In our listing, we have several collections of organic products. This
          is the place where you need to choose the product you want.
        </Typography>
      </div>
      <div className="subtitle-wrap">
        <Typography className="subtitle">Farmers Will Produce It</Typography>
        <Typography className="subtitle-info">
          The Product that you ordered will be verified that we have or not if
          have we will start to move on with the next step.
        </Typography>
      </div>
      <div className="subtitle-wrap">
        <Typography className="subtitle">We Can Delivery Too</Typography>
        <Typography className="subtitle-info">
          If you are not comfortable going to the nearby market place we also
          will deliver your product to your doorstep.
        </Typography>
      </div>
    </Paper>
  </StyledFarmSection>
);

export default FarmSection;
