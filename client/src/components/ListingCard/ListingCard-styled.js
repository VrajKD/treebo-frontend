import styled from "styled-components";

export const CardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  min-height: 170px;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
  padding: 1em;
  background-color: white;
  margin: 1.25em 0;
  @media (max-width: 768px) {
    flex-direction: column;
    width: auto;
    margin: 0;
    box-shadow: none;
    border-bottom: 0.8px #f7f7f7 solid;
  }
`;

export const CardImageContainer = styled.div`
  width: 25%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const CardImage = styled.img`
  height: 100%;
  width: 100%;
`;

export const CardDetailSection = styled.div`
  padding-left: 2em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 75%;
  @media (max-width: 768px) {
    width: 100%;
    padding: 0;
  }
`;
export const CardTextSection = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    margin-top: ${(props) => (props.price ? "1.25em" : "0.5em")};
  }
`;

export const CardBoldText = styled.span`
  font-weight: 700;
  color: #4a4a4a;
  font-size: 1.25em;
`;

export const CardAddress = styled.span`
  font-weight: 400;
  font-size: 1em;
  color: slategrey;
  margin-top: 0.5em;
`;

export const CardPriceSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CardPriceSubtitle = styled.span`
  font-weight: 200;
  font-size: 0.75em;
  margin-top: 0.5em;
`;

export const CardBookButton = styled.button`
  background-color: ${(props) => (props.price === 0 ? "#e40000" : "#0eb550")};
  padding: 1em;
  color: white;
  font-weight: 600;
  letter-spacing: 0.05em;
  border: none;
  cursor: pointer;
  margin-top: 0.75em;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 3px 10px 0 rgba(0, 0, 0, 0.1);
`;
