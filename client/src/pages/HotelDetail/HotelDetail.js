import React, { Fragment } from "react";
import HotelEssentialsSection from "../../components/HotelEssentialsSection/HotelEssentialsSection";
import HotelPoliciesSection from "../../components/HotelPoliciesSection/HotelPoliciesSection";
import ImageGallery from "../../components/HotelGallery/HotelGallery";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import {
  HotelDataContainer,
  HotelLocationText,
  HotelPropertiesContainer,
  HotelTextContainer,
  HotelBoldText,
  HotelAddressContainer,
  HotelPriceContainer,
  HorizontalLine,
  FullWidthContainer,
  HotelPageContainer,
  ErrorContainer,
} from "./HotelDetail-styled";
import { CardBookButton } from "../../components/ListingCard/ListingCard-styled";
import RoomTypes from "../../components/RoomTypesSection/RoomTypes";

import { BiMessageSquareError } from "react-icons/bi";

import { useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";

export default function HotelDetail() {
  let { hotelId } = useParams();
  const HOTEL_DETAIL = gql`
    query Treebo {
      hotel(id:${hotelId}) {
        id
        name
        locality
        city
        minPrice
        prices {
          name
          cost
        }
        hotelProperties {
          policies
          essentials
        }
      }
    }
  `;
  let { loading, error, data } = useQuery(HOTEL_DETAIL);
  if (data) {
    data = data.hotel;
  }
  return (
    <HotelPageContainer>
      {loading ? (
        <LoadingSpinner />
      ) : error ? (
        <ErrorContainer>
          <BiMessageSquareError /> Error loading data. Please try again later.
        </ErrorContainer>
      ) : (
        <Fragment>
          <FullWidthContainer>
            <HotelDataContainer>
              <ImageGallery />
              <HotelTextContainer>
                <HotelAddressContainer>
                  <HotelBoldText>{data.name}</HotelBoldText>
                  <HotelLocationText>
                    {data.locality ? data.locality + "," : ""} {data.city}
                  </HotelLocationText>
                </HotelAddressContainer>
                <HotelPriceContainer>
                  {data.minPrice !== 0 && (
                    <Fragment>
                      <HotelBoldText>₹ {data.minPrice}</HotelBoldText>
                      <HotelLocationText price>
                        Tax incl. price for 1 night
                      </HotelLocationText>
                      <HorizontalLine />
                    </Fragment>
                  )}
                  <CardBookButton price={data.minPrice}>
                    {data.minPrice === 0 ? "SOLD OUT" : "BOOK ROOM"}
                  </CardBookButton>
                </HotelPriceContainer>
              </HotelTextContainer>
            </HotelDataContainer>
          </FullWidthContainer>
          <HotelPropertiesContainer>
            <HotelEssentialsSection
              essentials={data.hotelProperties.essentials}
            />
            <HotelPoliciesSection policies={data.hotelProperties.policies} />
            <RoomTypes rooms={data.prices} />
          </HotelPropertiesContainer>
        </Fragment>
      )}
    </HotelPageContainer>
  );
}
