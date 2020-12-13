import styled from "styled-components";

export const HotelEssentialsSectionContainer = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 1em;
  background-color: white;
  padding: 1.7em;
  flex-direction: column;
  margin-bottom: 1.5em;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
`;
export const SectionTitle = styled.div`
  // width: 100%;
  letter-spacing: 0.1em;
  font-weight: 300;
  border-bottom: 0.5px solid slategrey;
  padding: 0.75em 0;

  font-size: 1.15em;
`;

export const EssentialsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const PropertyText = styled.div`
  padding: 0.55em 0;
  text-transform: uppercase;
  font-size: 0.8em;
  margin: 1.25em 4.5em 1.25em 0;
  // border-bottom: 0.1px solid lightblue;
  color: darkslateblue;
`;

export const PropertyIcon = styled.span`
  padding-right: 1em;
  font-size: 0.9em;
`;
