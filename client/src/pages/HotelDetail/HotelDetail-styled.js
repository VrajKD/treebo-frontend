import styled from "styled-components";

export const HotelPageContainer = styled.div`
  min-height: 88vh;
`;

export const ErrorContainer = styled.div`
  width: 70%;
  margin: 1.5em auto;
  padding: 2em 0;
  background-color: #ffe0e0;
  border: 1px solid red;
  color: red;
  border-radius: 10px;
  letter-spacing: 0.1em;
  text-align: center;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const FullWidthContainer = styled.div`
  width: 100%;
  background-color: white;
  box-shadow: 0px 15px 10px -20px #111;
`;

export const HotelDataContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 70%;
  margin: 0 auto;
  padding: 3em 1.5em;

  margin-bottom: 1.5em;
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const HotelPropertiesContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;

  margin: 0 auto;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

//HOTEL TEXT

export const HotelTextContainer = styled.div`
  width: 100%;
  padding: 0 1.5em 1.5em 1.5em;
  display: flex;
  flex-direction: column;
  flex-basis: 60%;
  justify-content: space-between;
  @media (max-width: 768px) {
    padding: 1.5em;
    padding-left: 0;
    text-align: center;
  }
`;

export const HotelBoldText = styled.div`
  text-transform: uppercase;
  color: #2a2a2a;
  margin-bottom: 0.1em;
  font-weight: 700;
  letter-spacing: 0.05em;
  font-size: 1.5em;
  font-family: "Averta-Bold";
`;

export const HotelLocationText = styled.div`
  font-weight: 400;
  font-size: 1em;
  color: slategrey;
  padding-bottom: ${(props) => (props.price ? "1em" : "0")};
`;

export const HorizontalLine = styled.hr`
  width: 50%;
  margin: 0;
  margin-bottom: 1em;
  border: 0;
  height: 0;

  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  @media (max-width: 768px) {
    margin: 0 auto 1em;
  }
`;

export const HotelAddressContainer = styled.div`
  @media (max-width: 768px) {
    margin-bottom: 2em;
  }
`;

export const HotelPriceContainer = styled.div``;
