import Image from "next/image";
import Hero from "../components/formSubmission/Hero"
import WhatWeDo from "../components/formSubmission/Do";
import Services from "../components/formSubmission/Service"
import Tool from "../components/formSubmission/Tools"
import IndustriesWeServe from "../components/formSubmission/Industries";
import ITSupport from "../components/formSubmission/ItSupport"
import WhyChooseUs from "../components/formSubmission/WhyChooseUs";
import DisclaimerBanner from "../components/formSubmission/DisclaimerBanner";
import Navbar from "../components/formSubmission/Navbar";
export default function Home() {
  return (
    <>
      <DisclaimerBanner />
      <Navbar />
      <Hero />
      <WhatWeDo />
      <Services />
      <Tool />
      <IndustriesWeServe />
      <ITSupport />
      <WhyChooseUs />
    </>
  );
}
