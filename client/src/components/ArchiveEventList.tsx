import { getData } from "@/state/feature/mySlice";
import nftImage from "../images/OIP.jfif";
import { useDispatch, useSelector } from "react-redux";
interface EventArchiveState {
  events: {
    id: number;
    title: string;
  }[];
  setSelected: any;
}

const ArchiveEventList = (): JSX.Element => {
  const { events } = useSelector((state: EventArchiveState) => state);
  const dispatch = useDispatch();
  return (
    <div className="w-full mt-12 mx-auto flex shadow-md   overflow-x-auto gap-x-2">
      {/* events archives List */}
      {events.map((eve) => (
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
          {/* hr border custom */}
          <div className="flex justify-center transform rotate-90 items-center">
            <div className="h-px bg-gray-300 w-36 -mx-16"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ArchiveEventList;
