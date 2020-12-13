import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  background-color: whitesmoke;
  padding: 0.7em 0;
  position: sticky;
  top: 0;
  min-height: 20px;
  z-index: 100;
  text-align: center;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16);
`;

export const HeaderLogo = styled.img`
  width: 7.5%;
  @media (max-width: 768px) {
    width: 20%;
  }
`;
