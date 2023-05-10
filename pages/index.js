import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import Container from "../components/container";
import Framer from "../components/Framer";
import devsImage from "../public/img/devs.png";
import Image from "next/image";
import ParallaxText from "../components/ParallaxText";

const Home = () => {
  const wordsBg = [
    "from-orange-500 to-red-600",
    "from-red-500 to-pink-600",
    "from-purple-500 to-blue-600",
    "from-red-500 to-blue-600",
    "from-orange-500 to-pink-600",
    "from-orange-600 to-blue-500",
    "from-blue-400 to-purple-600",
  ];

  return (
    <>
      <Head>
        <title>Blaze</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hero />
      <div className="bg-gray-950">
        <Container className="flex items-center w-full text-center lg:w-1/2 py-32">
          <h3 className="text-5xl tracking-tight text-gray-800 lg:leading-tight lg:text-5xl dark:text-white">
            Blaze{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-400">
              removes the friction
            </span>{" "}
            of degening so you can focus on shitposting
          </h3>
        </Container>
      </div>
      <SectionTitle>
        <div className="text-3xl py-16">
          <span className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-yellow-400">
            SUPERAPP
          </span>
          <br />
          <br />
          4337 + Analytics + AI. <br />
          The only DApp you'll ever need.
        </div>
      </SectionTitle>
      <div className="relative">
        <Framer color="radial-gradient(50% 50% at 50% 50%, rgba(250, 117, 248, 0.28) 0%, rgba(250, 117, 248, 0) 100%)" />
        <Benefits data={benefitOne} />
        <Benefits imgPos="right" data={benefitTwo} />
        <Framer top={700} left={-1000} />
      </div>

      <ParallaxText baseVelocity={-1}>
        <div className="flex">
          {[
            "Recruiting",
            "Security",
            "Strategy",
            "Product",
            "People",
            "Design",
            "Sales",
            "Finance",
            "Customer Support",
          ].map((w) => (
            <div
              className={`bg-gradient-to-r p-4 mx-1 mb-2 rounded-lg ${
                wordsBg[Math.floor(Math.random() * wordsBg.length)]
              }`}
            >
              {w}
            </div>
          ))}
        </div>
      </ParallaxText>
      <ParallaxText baseVelocity={1}>
        <div className="flex">
          {[
            "Business Development",
            "Analytics",
            "Engineering",
            "Operations",
            "Marketing",
            "Leadership",
            "Events",
          ].map((w) => (
            <div
              className={`bg-gradient-to-r p-4 mx-1 rounded-lg ${
                wordsBg[Math.floor(Math.random() * wordsBg.length)]
              }`}
            >
              {w}
            </div>
          ))}
        </div>
      </ParallaxText>

      <div className="mt-32 relative">
        <Framer
          color="radial-gradient(50% 50% at 50% 50%, rgba(250, 117, 248, 0.28) 0%, rgba(250, 117, 248, 0) 100%)"
          left={600}
        />
        <Benefits
          data={{
            ...benefitOne,
            title: (
              <>
                Tokenomics
                <br />
              </>
            ),
            desc: (
              <div className="text-3xl lg:text-4xl">
                <p className="mb-8">
                  Use{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-red-600">
                    $SWIFT
                  </span>{" "}
                  to unlock pro features.
                </p>
                <p className="mb-8">
                  1% burn + sell tax that goes{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-pink-600">
                    straight to development.
                  </span>
                </p>
                <p className="mb-8">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-300">
                    100,000,000,000,000
                  </span>{" "}
                  SUPPLY
                </p>
              </div>
            ),
          }}
        />
      </div>
      <SectionTitle>
        <div className="text-3xl pt-16">
          <span className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-400">
            4 point plan
          </span>
        </div>
      </SectionTitle>
      <Testimonials />
      <SectionTitle>
        <div className="text-3xl pt-16">
          <span className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-400">
            The Devs
          </span>
        </div>
      </SectionTitle>
      <div
        className={`flex items-center justify-center w-full lg:w-1/2 m-auto`}
      >
        <div>
          <Image
            src={devsImage}
            width="600"
            height="auto"
            className={"object-cover"}
            placeholder="blur"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
