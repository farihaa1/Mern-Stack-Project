import React from "react";
import Banner from "./Banner";
import QualitySection from "./QualitySection";
import DeliverLocations from "./DeliverLocations";

const Home = () => {
  return (
    <div className="mt-10">
      <div className="py-12 mx-auto">
        <Banner></Banner>
      </div>
      <div className="py-12 mx-auto">
        <QualitySection></QualitySection>
      </div>
      <div className="py-12 mx-auto">
        <DeliverLocations></DeliverLocations>
      </div>
    </div>
  );
};

export default Home;
