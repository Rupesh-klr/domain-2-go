import React from "react";
import Script from "next/script";
import Navbar from "./components/common/Navbar";
import Hero from "./components/common/Hero";
import Services from "./components/common/Service";
import Industry from "./components/common/Industry";
import StaticTable from "./components/common/StaticTable";
import WhyChoose from "./components/common/WhyChoose";
import CaseStudies from "./components/common/CaseStudies";
import Testimonial from "./components/common/Testimonials";
import {
  dangerouslySetInnerHTMLForPageIndex,
  dangerouslySetOuterInHeadlazyHTMLForPageIndex,
  indexPageMetadata,
} from "../lib/structuredData";

export const metadata = indexPageMetadata;
interface Tool {
  id: number;
  name: string;
}

export default function Home() {
  const tools: Tool[] = [
    { id: 1, name: "HTML5 & CSS3" },
    { id: 2, name: "JavaScript/React" },
    { id: 3, name: "Node.js" },
    { id: 4, name: "PHP/Laravel" },
    { id: 5, name: "Python/Django" },
    { id: 6, name: "MySQL/PostgreSQL" },
    { id: 7, name: "MongoDB" },
    { id: 8, name: "AWS/Azure" },
    { id: 9, name: "Salesforce" },
    { id: 10, name: "HubSpot" },
    { id: 11, name: "Google Forms API" },
    { id: 12, name: "Zapier" },
    { id: 13, name: "Webhook Integration" },
    { id: 14, name: "REST APIs" },
  ];

  return (
    <>
    {/* Render any head-associated lazy JSON-LD objects (centralized list) */}
      {dangerouslySetOuterInHeadlazyHTMLForPageIndex.map((obj, i) => (
        <Script
          key={`ld-head-${i}`}
          id={`ld-head-${i}`}
          type="application/ld+json"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(obj) }}
        />
      ))}

      {/* Render other JSON-LD objects (body-level) */}
      {dangerouslySetInnerHTMLForPageIndex.map((obj, i) => (
        <Script
          key={`ld-body-${i}`}
          id={`ld-body-${i}`}
          type="application/ld+json"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(obj) }}
        />
      ))}
      <main className="min-h-screen bg-blue-950">
        <Navbar />
        <Hero />

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
                What We Do: Our Role in Form Submission
              </h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            </div>

            <div className="max-w-5xl mx-auto text-center">
              <p className="text-lg text-gray-700 leading-relaxed">
                <span className="font-bold text-gray-900">Role:</span> We serve as
                your dedicated form processing partner, managing the entire
                lifecycle of data submission from capture to storage.{" "}
                <span className="font-bold text-gray-900">Responsibility:</span>{" "}
                Ensuring accurate data entry, validation, security compliance, and
                seamless integration with your existing systems.{" "}
                <span className="font-bold text-gray-900">Skills:</span> Advanced
                data validation, API integration, database management, automated
                workflow design, security compliance, and quality assurance
                testing.
              </p>
            </div>
          </div>
        </section>
        <Services />
        <section id="tools" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
                Tools &amp; Technologies We Master
              </h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {tools.map((tool) => (
                <div
                  key={tool.id}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold text-sm md:text-base hover:from-blue-700 hover:to-purple-700 transition duration-300 transform hover:scale-105 shadow-lg"
                >
                  {tool.name}
                </div>
              ))}
            </div>
          </div>
        </section>
        <Industry />
        <StaticTable />
        <WhyChoose />
        <CaseStudies />
        <Testimonial />
      </main>
    </>
  );
}

// import Image from "next/image";
// import Hero from "./components/Hero"
// import WhatWeDo from "./components/Do";
// import Services from "./components/Service"
// import Tool from "./components/Tools"
// import IndustriesWeServe from "./components/Industries";
// import ITSupport from "./components/ItSupport"
// import WhyChooseUs from "./components/WhyChooseUs";
// import DisclaimerBanner from "./components/DisclaimerBanner";
// import Navbar from "./components/Navbar";

// export default function Home() {
//   return (
//        <>
//        <DisclaimerBanner />
//        <Navbar />
//       <Hero />
//       <WhatWeDo />
//       <Services />
//       <Tool />
//       <IndustriesWeServe />
//       <ITSupport />
//       <WhyChooseUs />

//        </>
//   );
// }
