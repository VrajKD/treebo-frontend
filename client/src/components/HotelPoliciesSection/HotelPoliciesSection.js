import React from "react";
import {
  HotelEssentialsSectionContainer,
  SectionTitle,
} from "../HotelEssentialsSection/HotelEssentialsSection-styled";
import { PoliciesContainer, PropertyText } from "./HotelPoliciesSection-styled";

export default function HotelPoliciesSection({ policies }) {
  return (
    <HotelEssentialsSectionContainer>
      <SectionTitle>Policies : </SectionTitle>
      <PoliciesContainer>
        {policies.map((policy, ind) => (
          <PropertyText key={ind}>{policy}</PropertyText>
        ))}
      </PoliciesContainer>
    </HotelEssentialsSectionContainer>
  );
}
