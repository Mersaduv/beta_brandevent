import UpComingEventsList from "@/components/UpComingEventsList";

const UpcomingEvents = () => {
  return (
    <div className="w-[90%] mt-12 mx-auto flex md:flex-nowrap flex-wrap justify-between gap-x-2">
      <UpComingEventsList />
      <UpComingEventsList />
      <UpComingEventsList />
    </div>
  );
};

export default UpcomingEvents;
