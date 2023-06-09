import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOne = {
  title: (
    <>
      Get the{" "}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-400">
        fastest trades
      </span>{" "}
      at the{" "}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-600">
        best prices
      </span>
    </>
  ),
  image: benefitOneImg,
  bullets: [],
};

const benefitTwo = {
  title: (
    <>
      Access{" "}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-400">
        split second data
      </span>{" "}
      to make faster{" "}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-600">
        trading decisions
      </span>
    </>
  ),
  desc: "",
  image: benefitTwoImg,
  bullets: [
    // {
    //   title: "Mobile Responsive Template",
    //   desc: "Nextly is designed as a mobile first responsive template.",
    //   icon: <DevicePhoneMobileIcon />,
    // },
    // {
    //   title: "Powered by Next.js & TailwindCSS",
    //   desc: "This template is powered by latest technologies and tools.",
    //   icon: <AdjustmentsHorizontalIcon />,
    // },
    // {
    //   title: "Dark & Light Mode",
    //   desc: "Nextly comes with a zero-config light & dark mode. ",
    //   icon: <SunIcon />,
    // },
  ],
};

const benefitThree = {
  title: (
    <>
      Use{" "}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-400">
        AI
      </span>{" "}
      to discover the blockchain like{" "}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-600">
        never before
      </span>
    </>
  ),
  // desc: "Access split second data as it enters the blockchain to make data driven trading decisions",
  image: benefitOneImg,
  bullets: [
    // {
    //   title: "Understand your customers",
    //   desc: "Then explain the first point breifly in one or two lines.",
    //   icon: <FaceSmileIcon />,
    // },
    // {
    //   title: "Improve acquisition",
    //   desc: "Here you can add the next benefit point.",
    //   icon: <ChartBarSquareIcon />,
    // },
    // {
    //   title: "Drive customer retention",
    //   desc: "This will be your last bullet point in this section.",
    //   icon: <CursorArrowRaysIcon />,
    // },
  ],
};

export { benefitOne, benefitTwo, benefitThree };
