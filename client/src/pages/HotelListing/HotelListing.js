import React from "react";
import ListingCard from "../../components/ListingCard/ListingCard";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import { useQuery, gql } from "@apollo/client";
import {
  ListingContainer,
  TitleContainer,
  ListContainer,
  HotelListingPageSubTitle,
} from "./HotelListing-styled";
import { ErrorContainer } from "../HotelDetail/HotelDetail-styled";
import { BiMessageSquareError } from "react-icons/bi";

const HOTEL_LISTING = gql`
  query Treebo {
    allHotels {
      id
      name
      locality
      city
      minPrice
    }
  }
`;

export default function HotelListing() {
  const { loading, error, data } = useQuery(HOTEL_LISTING);
  console.log(data);
  return (
    <ListingContainer>
      <TitleContainer>
        <h1>Hotels in Bangalore</h1>
        <HotelListingPageSubTitle>
          List of Treebo-certified Hotels in Bangalore.
        </HotelListingPageSubTitle>
      </TitleContainer>
      <ListContainer>
        {loading ? (
          <LoadingSpinner />
        ) : error ? (
          <ErrorContainer>
            <BiMessageSquareError /> Error loading data. Please try again later.
          </ErrorContainer>
        ) : (
          data.allHotels.map((hotel) => (
            <ListingCard key={hotel.id} hotel={hotel} />
          ))
        )}
      </ListContainer>
    </ListingContainer>
  );
}
