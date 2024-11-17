
export function GymNew({onCreate}) {

  const handleSubmit = (event) => {
         event.preventDefault();
         const params = new FormData(event.target);
         onCreate(params, () => event.target.reset());
       };

       return (
        <div className="bg-gray-100 min-h-screen py-8 flex flex-col items-center justify-center">
          {/* Title */}
          <h1 className="text-2xl font-bold mb-6 text-gray-800">
            New Exercise
          </h1>
      
          {/* Form */}
          <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-lg">
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-1">
                  Name:
                </label>
                <input
                  name="name"
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
                />
              </div>
              {/* Description Input */}
              <div>
                <label htmlFor="description" className="block text-gray-700 font-medium mb-1">
                  Description:
                </label>
                <input
                  name="description"
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
                />
              </div>
              {/* Image Input */}
              <div>
                <label htmlFor="image" className="block text-gray-700 font-medium mb-1">
                  Image:
                </label>
                <input
                  name="image"
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
                />
              </div>
              {/* Video Input */}
              <div>
                <label htmlFor="video" className="block text-gray-700 font-medium mb-1">
                  Video:
                </label>
                <input
                  name="video"
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
                />
              </div>
              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 font-semibold"
              >
                Create
              </button>
            </form>
          </div>
        </div>
      );
}