import styled from "styled-components";

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  margin-bottom: 80px;
`;

export const Title = styled.div`
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0.6px;
`;
export const Description = styled.div`
  font-size: 15px;
  color: #6f6f6f;
  margin-bottom: 10px;
  letter-spacing: 0.6px;
  font-weight:400;
`;
