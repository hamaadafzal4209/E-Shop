import { City, Country } from "country-state-city";

function ShippingInfo() {
  return (
    <div className="md:mb-16 mt-4 w-full rounded-md bg-white p-6 shadow-sm md:w-3/5">
      <h5 className="pb-2 font-Poppins font-semibold">Shipping Address</h5>
      <form>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-4">
          <div>
            <label
              htmlFor="name"
              className="mb-1 block text-sm font-medium text-gray-900 dark:text-white"
            >
              Full Name
            </label>
            <input
              type="text"
              name="name"
              className="block w-full rounded-md border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="mb-1 block text-sm font-medium text-gray-900 dark:text-white"
            >
              Email Address
            </label>
            <input
              type="email"
              name="email"
              className="block w-full rounded-md border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
        </div>
        <div className="mt-2 grid grid-cols-1 gap-2 sm:mt-4 sm:grid-cols-2 sm:gap-4">
          <div>
            <label
              htmlFor="phoneNumber"
              className="mb-1 block text-sm font-medium text-gray-900 dark:text-white"
            >
              Phone Number
            </label>
            <input
              type="number"
              name="phoneNumber"
              className="block w-full rounded-md border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="zipcode"
              className="mb-1 block text-sm font-medium text-gray-900 dark:text-white"
            >
              Zip Code
            </label>
            <input
              type="number"
              name="zipCode"
              className="block w-full rounded-md border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
        </div>
        <div className="mt-2 grid grid-cols-1 gap-2 sm:mt-4 sm:grid-cols-2 sm:gap-4">
          <div>
            <label
              htmlFor="selectedCountry"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              Country
            </label>
            <select
              id="selectedCountry"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="">Select your country</option>
              {Country &&
                Country.getAllCountries().map((item) => (
                  <option key={item.isoCode} value={item.isoCode}>
                    {item.name}
                  </option>
                ))}
            </select>
          </div>
          <div>
            <label
              htmlFor="selectedCity"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              City
            </label>
            <select
              id="selectedCity"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="">Select your city</option>
              {City &&
                City.getCitiesOfCountry().map((item) => (
                  <option key={item.name} value={item.name}>
                    {item.name}
                  </option>
                ))}
            </select>
          </div>
        </div>
        <div className="mt-2 grid grid-cols-1 gap-2 sm:mt-4 sm:grid-cols-2 sm:gap-4">
          <div>
            <label
              htmlFor="address1"
              className="mb-1 block text-sm font-medium text-gray-900 dark:text-white"
            >
              Address 1
            </label>
            <input
              type="text"
              name="address1"
              className="block w-full rounded-md border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="address2"
              className="mb-1 block text-sm font-medium text-gray-900 dark:text-white"
            >
              Address 2
            </label>
            <input
              type="text"
              name="address2"
              className="block w-full rounded-md border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default ShippingInfo;
