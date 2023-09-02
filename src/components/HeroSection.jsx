import { useMediaQuery } from "@uidotdev/usehooks";
import HeroImageDesktop from "@assets/Hero-Image-Desktop.png";
import HeroImageTablet from "@assets/Hero-Image-Tablet.png";
import TwitterIcon from "@assets/Twitter.svg";
import { getAvatar } from "./Avatar";

const HeroSection = () => {
  // const isSmallDevice = useMediaQuery("only screen and (max-width : 639px)");

  const isMediumDevice = useMediaQuery(
    "only screen and (min-width : 640px) and (max-width : 1023px)"
  );
  const isLargeDevice = useMediaQuery("only screen and (min-width : 1024px)");

  return (
    <section className="bg-amber-50 p-4 sm:px-8 lg:px-24 lg:w-full lg:flex lg:flex-row-reverse lg:justify-between ">
      <img
        className={isLargeDevice ? " max-w-[30rem]" : ""}
        src={isMediumDevice ? HeroImageTablet : HeroImageDesktop}
        alt="Hero image"
      />
      <div className="pr-4">
        <h1 className=" text-4xl font-bold  mt-6 md:text-6xl md:leading-tight lg:max-w-[16ch] ">
          Twitter analytics taken to a whole new level.
        </h1>
        <p className=" text-gray-400 my-4 tracking-wide whitespace-normal max-w-xl leading-relaxed">
          Chirp is a suite of Twitter analytics that will help you better
          understand your audience, which tweets they like, and most importantly
          , when they are the most active on Twitter.
        </p>
        <div className="md:flex md:mb-8">
          <button className="max-sm:w-full bg-sky-400 text-white px-6 py-2 rounded-md font-semibold">
            <img
              className=" inline-block mr-3 aspect-square w-7"
              src={TwitterIcon}
              alt="Twitter icon"
            />
            Sign in with Twitter
          </button>
          <button className="max-sm:w-full text-sky-500 px-6 py-4 md: rounded-md font-semibold">
            Learn more
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className=" inline-block ml-1 aspect-square w-7 h-7 fill-sky-600"
            >
              <path
                fill="currentColor"
                d="m14 18l-1.4-1.45L16.15 13H4v-2h12.15L12.6 7.45L14 6l6 6l-6 6Z"
              ></path>
            </svg>
          </button>
        </div>
        <div className="my-4">
          {[8, 7, 6, 5, 4, 3, 2, 1, 0].map((index) => (
            <img
              key={index}
              src={getAvatar(index)}
              className="inline-block -mr-5"
              alt={`Avatar n${index}`}
            />
          ))}
        </div>
        <p className=" text-gray-400 max-w-[45ch]">
          Join <span className=" font-semibold text-sky-500">195</span> others
          who have analyzed their followers and scheduled{" "}
          <span className=" font-semibold text-sky-500">1342</span> tweets!
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
