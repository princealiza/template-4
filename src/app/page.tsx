import React from "react";
import Hero from "./Hero/page";
import FeaturedProducts from "./featuredProduct/page";
import TrendingProducts from "./trendingProduct/page";
import Discount from "./Discount/page";
import TopCategories from "./TopCategories/page";
import Shoppex from "./Shoppex/page";
import LeatestBlog from "./LeatestBlog/page";


export default function Home() {
  return (
    <div> 
      <Hero/>
      <FeaturedProducts/>
      <TrendingProducts/>
      <Discount/>
      <TopCategories/>
      <Shoppex/>
      <LeatestBlog/>
    
    </div>
  );
}
