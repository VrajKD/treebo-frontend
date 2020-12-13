import React from "react";
import {
  HotelEssentialsSectionContainer,
  SectionTitle,
} from "../HotelEssentialsSection/HotelEssentialsSection-styled";
import {
  RoomBookButton,
  RoomTypeContainer,
  RoomTypeName,
  RoomButtonContainer,
} from "./RoomTypes-styled";

export default function RoomTypes({ rooms }) {
  return (
    <HotelEssentialsSectionContainer>
      <SectionTitle>Room Types : </SectionTitle>
      {rooms.map((room, ind) => (
        <RoomTypeContainer key={ind}>
          <RoomTypeName>{room.name}</RoomTypeName>
          <RoomTypeName price={room.cost === null}>
            {room.cost === null ? "Price Unavailable" : `₹ ${room.cost}`}
          </RoomTypeName>

          <RoomButtonContainer>
            <RoomBookButton price={room.cost === null}>
              {room.cost === null ? "SOLD OUT" : "BOOK ROOM"}
            </RoomBookButton>
          </RoomButtonContainer>
        </RoomTypeContainer>
      ))}
    </HotelEssentialsSectionContainer>
  );
}
