import styled from "styled-components";

import Farm from "../assets/nature.png";
import { colors } from "../constants/colors";

export const StyledFarmSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  padding: 80px 100px 80px 0;
  background: url(${Farm}) left center / 50% 100% no-repeat;

  img {
    display: none;
  }

  .paper-wrap {
    width: 50%;
    padding: 50px 0;
  }
  .paper {
    height: fit-content;
    border-radius: 30px;
    width: calc(50% + 50px);
    padding: 50px 0 50px 80px;
  }
  .status {
    font-size: 36px;
    color: ${colors.aqua};
    font-family: "Yellowtail", cursive;
  }
  .title {
    font-size: 44px;
    font-weight: 700;
    margin-bottom: 30px;
    color: ${colors.darkBlue};
    font-family: "Roboto", sans-serif;
  }
  .subtitle {
    font-size: 23px;
    font-weight: 700;
    line-height: 35px;
    color: ${colors.darkBlue};
    font-family: "Roboto", sans-serif;
  }
  .subtitle-info {
    font-size: 18px;
    line-height: 35px;
    color: ${colors.black};
    font-family: "Open Sans", sans-serif;
  }
  @media screen and (max-width: 970px) {
    padding: 0;
    background: white;
    flex-direction: column;

    img {
      width: 100%;
      display: block;
    }

    .paper {
      width: 100%;
      padding: 50px 80px;
    }
  }
`;
