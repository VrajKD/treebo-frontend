import styled from "styled-components";

export const RoomTypeContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 1.75em 1.5em;
  align-items: center;
  text-align: center;
  border-bottom: 0.5px solid #f5f5f5;
`;

export const RoomTypeName = styled.div`
  font-weight: ${(props) => (props.price ? "300" : "600")};
  color: ${(props) => (props.price ? "slategrey" : "black")};
  letter-spaxing: 0.1em;
  text-transform: uppercase;

  width: 33%;
`;

export const RoomBookButton = styled.button`
  background-color: ${(props) => (props.price ? "#e40000" : "#0eb550")};
  padding: 1em;
  font-size: 0.75em;
  color: white;
  font-weight: 400;
  border-radius: 10px;
  letter-spacing: 0.05em;
  border: none;
  cursor: pointer;
`;

export const RoomButtonContainer = styled.div`
  width: 33%;
`;
