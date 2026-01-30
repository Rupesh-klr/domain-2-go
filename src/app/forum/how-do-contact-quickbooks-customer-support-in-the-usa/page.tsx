import Image from "next/image";
import Script from "next/script";
import Hero from "../../components/formSubmission/Hero";
import {
  dangerouslySetInnerHTMLForPageFormSum,
  dangerouslySetOuterInHeadlazyHTMLForPageFormSum,
  formSumPageMetadata,
} from "../../../lib/structuredData";

export const metadata = formSumPageMetadata;
import WhatWeDo from "../../components/formSubmission/Do";
import Services from "../../components/formSubmission/Service"
import Tool from "../../components/formSubmission/Tools"
import IndustriesWeServe from "../../components/formSubmission/Industries";
import ITSupport from "../../components/formSubmission/ItSupport"
import WhyChooseUs from "../../components/formSubmission/WhyChooseUs";
import DisclaimerBanner from "../../components/formSubmission/DisclaimerBanner";
import Navbar from "../../components/formSubmission/FormNavbar";
export default function Home() {
  return (
    <>
      {/* Render any head-associated lazy JSON-LD objects (centralized list) */}
      {dangerouslySetOuterInHeadlazyHTMLForPageFormSum.map((obj, i) => (
        <Script
          key={`ld-head-${i}`}
          id={`ld-head-${i}`}
          type="application/ld+json"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(obj) }}
        />
      ))}

      {/* Render other JSON-LD objects (body-level) */}
      {dangerouslySetInnerHTMLForPageFormSum.map((obj, i) => (
        <Script
          key={`ld-body-${i}`}
          id={`ld-body-${i}`}
          type="application/ld+json"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(obj) }}
        />
      ))}
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
