const Pagination = () => {
  return (
    <div className="flex items-center justify-between p-4">
      <button
        disabled
        className="py-2 px-4 bg-slate-200 rounded-md disabled:cursor-not-allowed disabled:opacity-50 text-xs font-semibold"
      >
        Prev
      </button>
      <div className="flex gap-2 text-sm items-center">
        <button className="bg-newGenerationSky rounded-md px-2">1</button>
        <button className="rounded-md px-2">2</button>
        <button className="rounded-md px-2">3</button>
              <button className="rounded-md px-2">4</button>
              ...
        <button className="rounded-md px-2">10</button>
      </div>
      <button className="py-2 px-4 bg-slate-200 rounded-md disabled:cursor-not-allowed disabled:opacity-50 text-xs font-semibold">
        Next
      </button>
    </div>
  );
};

export default Pagination;
