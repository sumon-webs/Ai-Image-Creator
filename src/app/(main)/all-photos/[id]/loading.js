import React from "react";

const HomeLoading = () => {
    return (
        <div className="w-full container mx-auto px-4 py-6 animate-pulse">

            {/* Single card skeleton (for details page) */}
            <div className=" w-full mx-auto rounded-xl overflow-hidden shadow bg-white">

                {/* Image */}
                <div className="h-64 md:h-96 w-full bg-gray-300"></div>

                {/* Content */}
                <div className="p-5 space-y-4">

                    <div className="h-5 w-3/4 bg-gray-300 rounded"></div>

                    <div className="h-4 w-full bg-gray-200 rounded"></div>

                    <div className="h-4 w-2/3 bg-gray-200 rounded"></div>

                    <div className="flex justify-between pt-2">
                        <div className="h-4 w-10 bg-gray-300 rounded"></div>
                        <div className="h-4 w-10 bg-gray-300 rounded"></div>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default HomeLoading;