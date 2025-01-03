import { type SchemaTypeDefinition } from "sanity";
import featureProducts from "./FeaturedProducts";
import latestProducts from "./latestProducts";
import topCategary from "./topCategory";
import Products from "./products";
import trendingProduct from "./trending";
import shopexOffer from "./shopexOffer";
import DiscountOffer from "./discountOffer";
import disCountProduct from "./discountProduct";
import herosec from "./herosection";
import subscrib from "./subscribLatestUpdate";
import blogs from "./blogs";
import offerProduct from "./offerProduct";
import recentblogs from "./recentPost";
import saleProduct from "./saleProduct";
import about from "./about";
import shop from "./shop";
import contact from "./contact";
import clientSayes from "./clientSayes";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    featureProducts,
    latestProducts,
    topCategary,
    Products,
    trendingProduct,
    shopexOffer,
    DiscountOffer,
    disCountProduct,
    herosec,
    subscrib,
    blogs,
    offerProduct,
    recentblogs,
    saleProduct,
    about,
    shop,
    contact,
    clientSayes
  ],
};
