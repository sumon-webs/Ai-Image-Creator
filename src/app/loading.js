import React from "react";

const HomeLoading = () => {
    return (
        <div className="container mx-auto px-4 py-6 space-y-6 animate-pulse">

            {/* Header skeleton */}
            <div className="space-y-2 text-center">
                <div className="h-6 w-40 bg-gray-300 mx-auto rounded"></div>
                <div className="h-4 w-64 bg-gray-200 mx-auto rounded"></div>
            </div>

            {/* Grid skeleton */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                {Array.from({ length: 8 }).map((_, i) => (
                    <div key={i} className="rounded-xl overflow-hidden shadow bg-white">

                        {/* Image skeleton */}
                        <div className="h-52 md:h-64 bg-gray-300"></div>

                        {/* Content skeleton */}
                        <div className="p-4 space-y-3">

                            <div className="h-4 w-3/4 bg-gray-300 rounded"></div>

                            <div className="h-3 w-1/2 bg-gray-200 rounded"></div>

                            <div className="flex justify-between pt-2">
                                <div className="h-4 w-10 bg-gray-300 rounded"></div>
                                <div className="h-4 w-10 bg-gray-300 rounded"></div>
                            </div>

                        </div>

                    </div>
                ))}

            </div>

        </div>
    );
};

export default HomeLoading;