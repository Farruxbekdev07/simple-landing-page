import styled from "styled-components";

import { colors } from "../constants/colors";

export const StyledProductList = styled.div`
  width: 100%;
  padding: 100px 30px;
  background-color: ${colors.darkBlue};

  .title-container {
    height: 170px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .title {
    font-size: 36px;
    font-weight: 400;
    font-style: normal;
    color: ${colors.aqua};
    font-family: "Yellowtail", cursive;
  }
  .subtitle {
    color: white;
    font-size: 45px;
    font-weight: 700;
    font-family: "Roboto", sans-serif;
  }
  .button {
    gap: 16px;
    width: 270px;
    height: 80px;
    display: flex;
    font-size: 20px;
    border-radius: 16px;
    color: ${colors.darkBlue};
    text-transform: capitalize;
    font-family: "Roboto", sans-serif;
    background-color: ${colors.orange};
  }
  .icon-button {
    width: 40px;
    height: 32px;
    color: white;
    display: flex;
    border-radius: 50%;
    text-align: center;
    align-items: center;
    justify-content: center;
    background-color: ${colors.darkBlue};
  }
  .grid {
    margin-top: 50px;
    justify-content: center;
  }
  @media screen and (max-width: 900px) {
    .title-container {
      gap: 30px;
      height: fit-content;
      flex-direction: column;
    }
  }
`;
