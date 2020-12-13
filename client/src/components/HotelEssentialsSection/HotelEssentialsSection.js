import React from "react";
import {
  EssentialsContainer,
  HotelEssentialsSectionContainer,
  PropertyText,
  SectionTitle,
  PropertyIcon,
} from "./HotelEssentialsSection-styled";
import { FaTv } from "react-icons/fa";
import { RiWindyLine } from "react-icons/ri";
import { BsWifi } from "react-icons/bs";
import { MdFreeBreakfast } from "react-icons/md";
import { GiSoap } from "react-icons/gi";

const iconObj = {
  "AC Room": <RiWindyLine />,
  WiFi: <BsWifi />,
  Breakfast: <MdFreeBreakfast />,
  Toiletries: <GiSoap />,
  TV: <FaTv />,
};

export default function HotelEssentialsSection({ essentials }) {
  return (
    <HotelEssentialsSectionContainer>
      <SectionTitle>Essentials : </SectionTitle>
      <EssentialsContainer>
        {essentials.map((essential, ind) => (
          <PropertyText key={ind}>
            <PropertyIcon>{iconObj[essential]}</PropertyIcon>
            {essential}
          </PropertyText>
        ))}
      </EssentialsContainer>
    </HotelEssentialsSectionContainer>
  );
}
