import React from "react";
import {
  Banner,
  FeaturedProducts,
  Footer,
  Hero,
  Navbar,
  NewArrivals,
  ProductCategories,
  ProductListing,
  SpecialOffers,
} from "./components";

const Home = () => {
  return (
    <main className="pt-[10rem]">
      <Navbar />
      <Hero />
      <Banner />
      <NewArrivals />
      <FeaturedProducts />
      <ProductCategories />
      <ProductListing />
      <SpecialOffers />
      <Footer />
    </main>
  );
};

export default Home;
