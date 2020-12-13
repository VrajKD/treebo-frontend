const axios = require("axios");

const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
  GraphQLSchema,
} = require("graphql");

const PriceType = new GraphQLObjectType({
  name: "Price",
  fields: () => ({
    name: { type: GraphQLString },
    cost: { type: GraphQLInt },
  }),
});

// Hotel Type
const HotelType = new GraphQLObjectType({
  name: "Hotel",
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    locality: { type: GraphQLString },
    city: { type: GraphQLString },
    minPrice: { type: GraphQLInt },
    prices: { type: new GraphQLList(PriceType) },
    hotelProperties: {
      type: HotelPropertiesType,
      resolve(parent, args) {
        return axios
          .get(`http://www.mocky.io/v2/5a7f265b2e00005d00b56877`)
          .then((res) => res.data.data);
      },
    },
  }),
});

const HotelPropertiesType = new GraphQLObjectType({
  name: "HotelProperties",
  fields: () => ({
    policies: { type: new GraphQLList(GraphQLString) },
    essentials: { type: new GraphQLList(GraphQLString) },
  }),
});

// Root Query
const RootQuery = new GraphQLObjectType({
  name: "Treebo",
  fields: {
    allHotels: {
      type: new GraphQLList(HotelType),
      resolve(parent, args) {
        var data = [];
        return axios
          .get("http://www.mocky.io/v2/5a7f23442e00005000b56873")
          .then((res) => {
            data = res.data.data;
            return axios.get("http://www.mocky.io/v2/5a7f24f02e00005200b56875");
          })
          .then((res) => {
            const finalData = data.map((hotel, ind) => {
              const prices = Object.values(res.data.data[ind].price).filter(
                (price) => price !== null
              );
              console.log("Prices :", prices);
              if (prices.length === 0) {
                prices.push(0);
              }
              return {
                ...hotel,
                minPrice: Math.min(...prices),
              };
            });
            return finalData;
          });
      },
    },
    hotel: {
      type: HotelType,
      args: {
        id: { type: GraphQLInt },
      },
      resolve(parent, args) {
        var data = {};
        return axios
          .get("http://www.mocky.io/v2/5a7f23442e00005000b56873")
          .then((res) => {
            data = res.data.data.filter((hotel) => hotel.id === args.id);
            data = data[0];
            return axios.get("http://www.mocky.io/v2/5a7f24f02e00005200b56875");
          })
          .then((res) => {
            // console.log("HI", res.data.data[0]);
            const priceObj = res.data.data.filter(
              (hotel) => hotel.id === args.id
            );
            const prices = [];
            const validPrices = Object.values(priceObj[0].price).filter(
              (price) => price !== null
            );
            if (validPrices.length === 0) {
              validPrices.push(0);
            }
            let minPrice = Math.min(...validPrices);
            Object.entries(priceObj[0].price).forEach((price) => {
              prices.push({ name: price[0], cost: price[1] });
            });
            return {
              ...data,
              prices: [...prices],
              minPrice,
            };
          });
      },
    },
    // hotelData: {
    //   type: HotelDataType,
    //   resolve(parent, args) {
    //     return axios
    //       .get(`http://www.mocky.io/v2/5a7f265b2e00005d00b56877`)
    //       .then((res) => res.data.data);
    //   },
    // },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
