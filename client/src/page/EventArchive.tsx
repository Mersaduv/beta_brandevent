import ArchiveEventList from "@/components/ArchiveEventList";
import ArchiveEventItem from "@/components/ArchiveEventItem";

const EventArchive = (): JSX.Element => {
  return (
    <div className="w-[97%] mx-auto">
      {/* events archives List */}
      <ArchiveEventList />

      {/* Information about the event */}
      <ArchiveEventItem />
    </div>
  );
};

export default EventArchive;
