import { useSelector } from "react-redux";
import nftImage from "../images/OIP.jfif";
import mapgoogle from "../images/map.png";
import PreviousEventHistory from "./PreviousEventHistory";

interface EventArchiveState {
  events: {
    id: number;
    title: string;
  }[];
  setSelected: any;
}

const ArchiveEventItem = () => {
  const { setSelected } = useSelector((state: EventArchiveState) => state);
  return (
    <div className="  mt-10 ">
      {/* Information about the event */}
      <h1 className="text-2xl p-4 pt-8 font-semibold">
        Information about the event
        <hr className="my-8" />
      </h1>

      {/* some selected  */}
      {setSelected ? (
        <div className=" flex flex-col">
          <div className="flex flex-col md:flex-row justify-between gap-2">
            {/* img  */}
            <div className="flex  md:w-1/2 flex-1 hover:shadow-lg  relative    flex-row md:flex-col items-start  gap-3 p-2 pb-3 bg-gray-50 ">
              <div className="max-w-[200px] md:max-w-full min-w-[200px]">
                <img className=" " src={nftImage} alt="nft-img" />
                <div className="flex flex-col mt-2 gap-y-2 text-xs">
                  <span>Number of threaded tickets *155</span>
                  <span>Remaining tickets *4</span>
                </div>
              </div>
              {/* details :  */}
              <div className="flex flex-col md:gap-2   min-w-[130px]">
                <h1 className=" text-2xl  font-semibold">
                  {setSelected.title}
                </h1>
                <p className="text-[#D1410C] font-semibold  text-sm">
                  Week,month day, Time:00:00 AM
                </p>
                <div
                  className="text-xl flex justify-between w-full whitespace-nowrap overflow-hidden overflow-ellipsis"
                  style={{ maxWidth: "100%" }}
                >
                  {" "}
                  <p> Venue..Venue.VenueVenueVenue</p>
                  <span className=" text-[#D1410C]  absolute bottom-0 right-0 p-2">
                    {" "}
                    save / share
                  </span>
                </div>
              </div>
            </div>{" "}
            {/* location  */}
            <div className="flex w-1/2 mt-2 flex-col">
              <div className="flex  flex-col gap-4 gap-y-8">
                <p className="border-b pb-1">number : 100000000</p>
                <p className="border-b pb-1">postzip : 100000000</p>

                <p className="border-b pb-1">address: 100000000</p>

                <p className="border-b pb-1">telephone: 100000000</p>
              </div>{" "}
              <div className=" flex flex-col mt-2  ">
                <h1 className="underline p-2">Location in</h1>
                <img
                  className="h-24 w-72 sm:h-auto"
                  src={mapgoogle}
                  alt="google"
                />
              </div>
            </div>
          </div>
          {/* before  EventHistory */}
          <PreviousEventHistory />
        </div>
      ) : (
        <h2 className="text-2xl text-center">some select event</h2>
      )}
    </div>
  );
};

export default ArchiveEventItem;
