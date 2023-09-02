import { useMediaQuery } from "@uidotdev/usehooks";
import HamburguerMenu from "@assets/HamburgerMenu.svg";
import TwitterIcon from "@assets/Twitter.svg";

const Nav = () => {
  const isSmallDevice = useMediaQuery("only screen and (max-width : 639px)");
  const isMediumDevice = useMediaQuery("only screen and (min-width : 640px)");
  return (
    <header className="p-4 sm:p-8 bg-amber-50 lg:px-24">
      <nav className="pb-6 pt-2 flex justify-between items-center ">
        <span className="block font-bold text-xl italic text-blue-500 lg:text-2xl ">
          Chirp.
        </span>
        {isSmallDevice && (
          <img src={HamburguerMenu} alt="Hamburguer Menu icon" />
        )}
        {isMediumDevice && (
          <>
            <ul className="flex gap-6 items-center text-lg text-gray-600">
              <li>Home</li>
              <li>Pricing</li>
              <li>FAQ</li>
              <li>
                <button className="bg-sky-500 text-white px-6 py-4 rounded-md font-semibold">
                  <img
                    className=" inline-block mr-3 aspect-square w-7"
                    src={TwitterIcon}
                    alt="Twitter icon"
                  />
                  Sign in with Twitter
                </button>
              </li>
            </ul>
          </>
        )}
      </nav>
    </header>
  );
};

export default Nav;
