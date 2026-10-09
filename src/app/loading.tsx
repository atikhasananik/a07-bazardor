function Loading() {
  return (
    <div className="w-full min-h-screen bg-[#f3f6f3] p-6 md:p-12 font-sans animate-pulse">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Banner Skeleton */}
        <div className="bg-white/60 border border-[#e2e8e2] rounded-3xl p-8 h-36 w-full" />

        {/* Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="bg-white/60 border border-[#e2e8e2] rounded-2xl p-5 h-40 w-full space-y-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gray-200/80 rounded-xl" />
                <div className="space-y-2 flex-1">
                  <div className="h-4 bg-gray-200/80 rounded-md w-3/4" />
                  <div className="h-3 bg-gray-200/60 rounded-md w-1/2" />
                </div>
              </div>
              <div className="h-4 bg-gray-200/60 rounded-md w-1/3 pt-4" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Loading;
