import { Link } from "react-router-dom";
import nftImage from "../images/OIP.jfif";

const UpcomingEvents = () => {
  return (
    <div className="w-[90%] mt-12 mx-auto flex md:flex-nowrap flex-wrap justify-between gap-x-2">
      <div className="flex hover:shadow-lg  w-80 flex-col  gap-3 p-2 pb-3 bg-gray-50">
        <Link to={`/upcoming-events/event-page/...`}>
          <div className="max-w-xs w-full">
            <img className=" " src={nftImage} alt="nft-img" />
          </div>
          <h1 className="text-2xl mt-3 font-semibold">Title 1</h1>
        </Link>

        <p className="text-[#D1410C] font-semibold ">
          Week,month day, Time:00:00 AM
        </p>
        <p className="text-xl"> Venue...,...,</p>
        <button
          type="button"
          className="text-gray-900 mt-2 bg-gradient-to-r mx-2 from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 rounded-lg text-base font-semibold px-5 py-2.5 text-center mr-2 mb-2"
        >
          Buy
        </button>
      </div>

      <div className="flex hover:shadow-lg  w-80 flex-col  gap-3 p-2 pb-4 bg-gray-50">
        <Link to={`/upcoming-events/event-page/...`}>
          <div className="max-w-xs w-full">
            <img className=" " src={nftImage} alt="nft-img" />
          </div>
          <h1 className="text-2xl mt-3 font-semibold">Title 2</h1>
        </Link>

        <p className="text-[#D1410C] font-semibold ">
          Week,month day, Time:00:00 AM
        </p>
        <p className="text-xl"> Venue...,...,</p>
        <button
          type="button"
          className="text-gray-900 mt-2 bg-gradient-to-r mx-2 from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 rounded-lg text-base font-semibold px-5 py-2.5 text-center mr-2 mb-2"
        >
          Buy
        </button>
      </div>
      <div className="flex hover:shadow-lg  w-80 flex-col  gap-3 p-2 pb-4 bg-gray-50">
        <Link to={`/upcoming-events/event-page/...`}>
          <div className="max-w-xs w-full">
            <img className=" " src={nftImage} alt="nft-img" />
          </div>
          <h1 className="text-2xl mt-3 font-semibold">Title 3</h1>
        </Link>

        <p className="text-[#D1410C] font-semibold ">
          Week,month day, Time:00:00 AM
        </p>
        <p className="text-xl"> Venue...,...,</p>
        <button
          type="button"
          className="text-gray-900 mt-2  bg-gradient-to-r mx-2 from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 rounded-lg text-base font-semibold px-5 py-2.5 text-center mr-2 mb-2"
        >
          Buy
        </button>
      </div>
    </div>
  );
};

export default UpcomingEvents;
