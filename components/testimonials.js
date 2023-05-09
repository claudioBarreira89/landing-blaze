import Image from "next/image";
import React from "react";
import Container from "./container";

import userOneImg from "../public/img/user1.jpg";
import userTwoImg from "../public/img/user2.jpg";
import userThreeImg from "../public/img/user3.jpg";

const Testimonials = () => {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-2">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <span className="text-4xl text-center pb-4 font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-orange-300">
              1. STARTUP
            </span>
            <p className="text-2xl leading-normal text-center">
              Launch $BLAZE 1,000+ Holders <br />
              CoinGecko + Coin Marketcap Listings
              <br />
              Partnerships
              <br />
              Ship BLAZE V1
            </p>
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <span className="text-4xl text-center pb-8 font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-orange-700">
              2. SCALE UP
            </span>
            <p className="text-2xl leading-normal text-center">
              Launch BLAZE AI
              <br />
              Integrate fiat on-ramps
              <br />
              5,000+ Holders
              <br />
              CEX Listing
              <br />
              L2 Partnerships
            </p>
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <span className="text-4xl text-center pb-8 font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-700 to-red-400">
              3. SCALE UP MORE
            </span>
            <p className="text-2xl leading-normal text-center">
              Launch BLAZE STORE
              <br />
              Integrate bridges
              <br />
              50,000+ Holders
              <br />
              Partnerships
            </p>
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <span className="text-4xl text-center pb-8 font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-800">
              4. CONQUER THE WORLD
            </span>
            <p className="text-2xl leading-normal text-center">
              Launch BLAZE OS
              <br />
              1m+ Holders
              <br />
              Blaze party with every mfer <br />
              that believed in us
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

function Avatar(props) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
        <Image
          src={props.image}
          width="40"
          height="40"
          alt="Avatar"
          placeholder="blur"
        />
      </div>
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  );
}

function Mark(props) {
  return (
    <>
      {" "}
      <mark className="text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">
        {props.children}
      </mark>{" "}
    </>
  );
}

export default Testimonials;
