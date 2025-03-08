const Announcements = () => {
  return (
    <div className="bg-white p-4 rounded-md">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Announcements</h1>
        <span className="text-gray-400 text-sm">View all</span>
      </div>

      <div className="flex flex-col gap-4 mt-4">
        <div className="bg-newGenerationSkyLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h1 className="font-medium">Easter Holiday Camp</h1>
            <span className="text-gray-400 text-xs bg-white rounded-md px-1 py-1">
              18th March 2025
            </span>
          </div>
          <p className="mt-2 text-gray-400 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In ullam
            dolorem veritatis inventore.
          </p>
        </div>
        <div className="bg-newGenerationPurpleLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h1 className="font-medium">Holiday Lesson</h1>
            <span className="text-gray-400 text-xs bg-white rounded-md px-1 py-1">
              11th July 2025
            </span>
          </div>
          <p className="mt-2 text-gray-400 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In ullam
            dolorem veritatis inventore.
          </p>
        </div>
        <div className="bg-newGenerationYellowLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h1 className="font-medium">Resumption Date</h1>
            <span className="text-gray-400 text-xs bg-white rounded-md px-1 py-1">
              16th September 2025
            </span>
          </div>
          <p className="mt-2 text-gray-400 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In ullam
            dolorem veritatis inventore.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Announcements;
