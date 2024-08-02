/* eslint-disable no-unused-vars */
import { useState } from "react";

function PaymentInfo({
  user,
  open,
  setOpen,
  onApprove,
  createOrder,
  paymentHandler,
  cashOnDeliveryHandler,
}) {
  const [select, setSelect] = useState(1);
  
  return (
    <div className="mt-4 w-full rounded-md bg-white p-6 shadow-sm md:w-3/5">
      {/* select buttons */}
      <div>
        <div className="mb-2 flex w-full border-b pb-5">
          <div
            className="relative flex h-[25px] w-[25px] items-center justify-center rounded-full border-[3px] border-[#1d1a1ab4] bg-transparent"
            onClick={() => setSelect(1)}
          >
            {select === 1 ? (
              <div className="h-[13px] w-[13px] rounded-full bg-[#1d1a1acb]" />
            ) : null}
          </div>
          <h4 className="pl-2 text-[18px] font-[600] text-[#000000b1]">
            Pay with Debit/credit card
          </h4>
        </div>

        {/* pay with card */}

        {select === 1 && (
          <div className="flex w-full border-b">
            <form className="w-full">
              <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Card Number
                  </label>
                  <input
                    type="number"
                    className="block w-full rounded-md border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Exp Date
                  </label>
                  <input
                    type="date"
                    className="block w-full rounded-md border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Name on card
                  </label>
                  <input
                    type="text"
                    className="block w-full rounded-md border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Billing Address
                  </label>
                  <input
                    type="text"
                    className="block w-full rounded-md border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </div>
              <button
                type="submit"
                className={`my-3 flex w-[150px] cursor-pointer items-center justify-center rounded-lg !bg-[#f63b60] py-2.5 text-[18px] font-[600] text-[#fff]`}
              >
                Submit
              </button>
            </form>
          </div>
        )}

        <br />

        <div>
          <div className="mb-2 flex w-full border-b pb-5">
            <div
              className="relative flex h-[25px] w-[25px] items-center justify-center rounded-full border-[3px] border-[#1d1a1ab4] bg-transparent"
              onClick={() => setSelect(2)}
            >
              {select === 2 ? (
                <div className="h-[13px] w-[13px] rounded-full bg-[#1d1a1acb]" />
              ) : null}
            </div>
            <h4 className="pl-2 text-[18px] font-[600] text-[#000000b1]">
              Pay with Paypal
            </h4>
          </div>

          {/* pay with payement */}
          {select === 2 && (
            <div>
              <form>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1 mt-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Paypal Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="block w-full rounded-md border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <button
                  value="Pay Now"
                  className={`my-3 flex w-[150px] cursor-pointer items-center justify-center rounded-lg !bg-[#f63b60] py-2.5 text-[18px] font-[600] text-[#fff]`}
                >
                  Pay Now
                </button>
              </form>
            </div>
          )}
        </div>

        <br />

        {/* cash on delivery */}
        <div>
          <div className="mb-2 flex w-full border-b pb-5">
            <div
              className="relative flex h-[25px] w-[25px] items-center justify-center rounded-full border-[3px] border-[#1d1a1ab4] bg-transparent"
              onClick={() => setSelect(3)}
            >
              {select === 3 ? (
                <div className="h-[13px] w-[13px] rounded-full bg-[#1d1a1acb]" />
              ) : null}
            </div>
            <h4 className="pl-2 text-[18px] font-[600] text-[#000000b1]">
              Cash on Delivery
            </h4>
          </div>
          {select === 3 && (
            <div>
              <form>
                <button
                  type="submit"
                  className={`my-3 flex w-[150px] cursor-pointer items-center justify-center rounded-lg !bg-[#f63b60] py-2.5 text-[18px] font-[600] text-[#fff]`}
                >
                  Submit
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default PaymentInfo;
