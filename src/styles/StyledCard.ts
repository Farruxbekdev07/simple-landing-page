import styled from "styled-components";

import { colors } from "../constants/colors";

export const StyledCard = styled.div`
  .card {
    max-width: 350px;
    border-radius: 30px;
  }
  .card-action-area {
    padding: 20px;
  }
  .card-title {
    font-size: 21px;
    color: ${colors.darkBlue};
    font-family: "Roboto", sans-serif;
  }
  .card-footer {
    width: 100%;
    display: flex;
    align-items: top;
    justify-content: space-between;
    font-family: "Open Sans", sans-serif;
  }
  .old-price {
    font-size: 17px;
    color: ${colors.gray};
    text-decoration: line-through;
  }
  .price {
    font-size: 18px;
    font-weight: 700;
    color: ${colors.darkBlue};
  }
`;
