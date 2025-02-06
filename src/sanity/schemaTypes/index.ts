import { type SchemaTypeDefinition } from "sanity";

import shopexOffer from "./shopexOffer";
import DiscountOffer from "./discountOffer";

import herosec from "./herosection";
import blogs from "./blogs";

import recentblogs from "./recentPost";
import saleProduct from "./saleProduct";

import clientSayes from "./clientSayes";

import product from "./product";
import customer from "./customer";
// import order from "./orders";
import customerOrder from "./customersOrder";


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    
    customerOrder,
    customer,
    shopexOffer,
    DiscountOffer,
    herosec,
  
    blogs,
    recentblogs,
    saleProduct,
    product,
    clientSayes,
    // order
    
  ],
};


