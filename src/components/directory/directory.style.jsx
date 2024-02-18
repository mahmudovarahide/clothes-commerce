import styled from "styled-components";
import { Swiper } from "swiper/react";

export const DirectoryContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const CustomSwiper = styled(Swiper)`
  margin-bottom: 20px;
  .swiper-button-next,
  .swiper-button-prev {
    display: none !important;
  }
`;
