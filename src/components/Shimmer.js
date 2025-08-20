const Shimmer = () => {
  return (
    <div className="grid gap-6 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {Array(10)
        .fill("")
        .map((_, index) => (
          <div
            key={index}
            className="p-4 w-64 h-[380px] rounded-lg bg-gray-100 animate-pulse flex flex-col"
          >
            {/* Image Placeholder */}
            <div className="w-full h-40 bg-gray-300 rounded-xl"></div>

            {/* Text Placeholders */}
            <div className="mt-4 h-5 w-3/4 bg-gray-300 rounded"></div>
            <div className="mt-2 h-4 w-1/2 bg-gray-300 rounded"></div>
            <div className="mt-2 h-4 w-1/3 bg-gray-300 rounded"></div>
            <div className="mt-2 h-4 w-1/4 bg-gray-300 rounded"></div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
