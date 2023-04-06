
import nftImage from "../images/OIP.jfif";
import mapgoogle from "../images/map.png";

import { useDispatch, useSelector } from "react-redux";
import { getData } from "@/state/feature/mySlice";

interface EventArchiveState {
  events: {
    id: number;
    title: string;
  }[];
  setSelected:  any;
}

const EventArchive = (): JSX.Element => {
  const { events, setSelected } = useSelector((state: EventArchiveState) => state);
  const dispatch = useDispatch();
  return (
    <div className="w-[97%] mx-auto">

      {/* events archives List */}
      <div className="w-full mt-12 mx-auto flex shadow-md   overflow-x-auto gap-x-2">
        {events.map(( eve ) => (
          <div
            onClick={() => dispatch(getData(eve))}
            key={eve.id}
            className="flex -ml-2 cursor-pointer"
          >
            <div className="flex hover:shadow-lg    flex-row items-center  gap-3 p-2 pb-3 bg-gray-50 ">
              <div className="max-w-xs min-w-[200px]">
                <img className=" " src={nftImage} alt="nft-img" />
              </div>

              <div className="flex flex-col  justify-around h-full  min-w-[130px]">
                <h1 className=" text-2xl  font-semibold">{eve.title}</h1>
                <p className="text-[#D1410C] font-semibold  text-sm">
                  Week,month day, Time:00:00 AM
                </p>
                <p
                  className="text-xl whitespace-nowrap overflow-hidden overflow-ellipsis"
                  style={{ maxWidth: "100%" }}
                >
                  {" "}
                  Venue..Venue.VenueVenueVenue
                </p>
              </div>
            </div>{" "}
            <div className="flex justify-center transform rotate-90 items-center">
              <div className="h-px bg-gray-300 w-36 -mx-16"></div>
            </div>
          </div>
        ))}
      </div>


      <div className="  mt-10 ">
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

            {/* before  */}
            <div>
              <h1 className="text-2xl p-4 pt-8 font-semibold">
                Events it's had before
              </h1>

              <div className="w-full  mx-auto flex shadow-md   overflow-x-auto gap-x-2">
                <div
                  onClick={() => dispatch(getData(setSelected))}
                  className="flex -ml-2 cursor-pointer"
                >
                  <div className="flex hover:shadow-lg    flex-row items-center  gap-3 p-2 pb-3 bg-gray-50 ">
                    <div className="max-w-xs min-w-[200px]">
                      <img className=" " src={nftImage} alt="nft-img" />
                    </div>

                    <div className="flex flex-col  justify-around h-full  min-w-[130px]">
                      <h1 className=" text-2xl  font-semibold">
                        {" "}
                        {setSelected.title}
                      </h1>
                      <p className="text-[#D1410C] font-semibold  text-sm">
                        Week,month day, Time:00:00 AM
                      </p>
                      <p
                        className="text-xl whitespace-nowrap overflow-hidden overflow-ellipsis"
                        style={{ maxWidth: "100%" }}
                      >
                        {" "}
                        Venue..Venue.VenueVenueVenue
                      </p>
                    </div>
                  </div>{" "}
                  <div className="flex justify-center transform rotate-90 items-center">
                    <div className="h-px bg-gray-300 w-36 -mx-16"></div>
                  </div>
                </div>

                <div
                  onClick={() => dispatch(getData(setSelected))}
                  className="flex -ml-2 cursor-pointer"
                >
                  <div className="flex hover:shadow-lg    flex-row items-center  gap-3 p-2 pb-3 bg-gray-50 ">
                    <div className="max-w-xs min-w-[200px]">
                      <img className=" " src={nftImage} alt="nft-img" />
                    </div>

                    <div className="flex flex-col  justify-around h-full  min-w-[130px]">
                      <h1 className=" text-2xl  font-semibold">
                        {" "}
                        {setSelected.title}
                      </h1>
                      <p className="text-[#D1410C] font-semibold  text-sm">
                        Week,month day, Time:00:00 AM
                      </p>
                      <p
                        className="text-xl whitespace-nowrap overflow-hidden overflow-ellipsis"
                        style={{ maxWidth: "100%" }}
                      >
                        {" "}
                        Venue..Venue.VenueVenueVenue
                      </p>
                    </div>
                  </div>{" "}
                  <div className="flex justify-center transform rotate-90 items-center">
                    <div className="h-px bg-gray-300 w-36 -mx-16"></div>
                  </div>
                </div>

                <div
                  onClick={() => dispatch(getData(setSelected))}
                  className="flex -ml-2 cursor-pointer"
                >
                  <div className="flex hover:shadow-lg    flex-row items-center  gap-3 p-2 pb-3 bg-gray-50 ">
                    <div className="max-w-xs min-w-[200px]">
                      <img className=" " src={nftImage} alt="nft-img" />
                    </div>

                    <div className="flex flex-col  justify-around h-full  min-w-[130px]">
                      <h1 className=" text-2xl  font-semibold">
                        {" "}
                        {setSelected.title}
                      </h1>
                      <p className="text-[#D1410C] font-semibold  text-sm">
                        Week,month day, Time:00:00 AM
                      </p>
                      <p
                        className="text-xl whitespace-nowrap overflow-hidden overflow-ellipsis"
                        style={{ maxWidth: "100%" }}
                      >
                        {" "}
                        Venue..Venue.VenueVenueVenue
                      </p>
                    </div>
                  </div>{" "}
                  <div className="flex justify-center transform rotate-90 items-center">
                    <div className="h-px bg-gray-300 w-36 -mx-16"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <h2 className="text-2xl text-center">some select event</h2>
        )}
      </div>
    </div>
  );
};

export default EventArchive;
