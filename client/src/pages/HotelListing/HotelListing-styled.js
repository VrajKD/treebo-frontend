import styled from "styled-components";

export const ListingContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: 88vh;
`;
export const ListContainer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  min-height: 100px;
  margin: 1.25em auto;
  @media (max-width: 768px) {
    width: 100%;
    margin: 0.5em auto;
  }
`;

export const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 375px;
  color: #f5f5f5;
  background-image: url("https://images.unsplash.com/photo-1460355976672-71c3f0a4bdac");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  letter-spacing: 0.1em;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin-bottom: 1em;
  @media (max-width: 768px) {
    margin-bottom: 0px;
  }
`;

export const HotelListingPageTitle = styled.div`
  font-family: "Averta-Bold";
  font-weight: 200;
`;

export const HotelListingPageSubTitle = styled.div`
  padding-top: 1.75em;
  font-weight: 200;
  font-size: 1.05em;
`;
