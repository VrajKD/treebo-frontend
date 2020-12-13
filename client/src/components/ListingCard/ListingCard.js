import React from "react";
import {
  CardAddress,
  CardContainer,
  CardDetailSection,
  CardImage,
  CardImageContainer,
  CardBoldText,
  CardTextSection,
  CardPriceSection,
  CardPriceSubtitle,
  CardBookButton,
} from "./ListingCard-styled";

import { Link } from "react-router-dom";

export default function ListingCard({
  hotel: { id, name, locality, city, minPrice },
}) {
  return (
    <CardContainer>
      <CardImageContainer>
        <CardImage src="https://images.trvl-media.com/hotels/45000000/44110000/44102800/44102733/8ae24bc1_z.jpg" />
      </CardImageContainer>
      <CardDetailSection>
        <CardTextSection>
          <CardBoldText>{name}</CardBoldText>
          <CardAddress>
            {locality ? locality + "," : ""} {city}
          </CardAddress>
        </CardTextSection>
        <CardPriceSection style={{ textAlign: "right" }}>
          {minPrice !== 0 && (
            <>
              <CardTextSection>
                <CardBoldText>₹ {minPrice}</CardBoldText>
                <CardPriceSubtitle>
                  Tax incl. price for 1 night
                </CardPriceSubtitle>
              </CardTextSection>
            </>
          )}
          <Link to={`/hotel/${id}`}>
            <CardBookButton price={minPrice}>
              {minPrice === 0 ? "SOLD OUT" : "BOOK ROOM"}
            </CardBookButton>
          </Link>
        </CardPriceSection>
      </CardDetailSection>
    </CardContainer>
  );
}
