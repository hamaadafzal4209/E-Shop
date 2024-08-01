function CheckOutSteps({ active }) {
  return (
    <div>
      <div className="flex w-full justify-center p-4 sm:p-6">
        <div className="flex w-full items-center justify-center">
          <div className="flex items-center">
            <div className="flex h-[38px] cursor-pointer items-center justify-center rounded-[20px] bg-[#f63b60] px-4 sm:px-[20px]">
              <span className="text-[16px] font-[600] text-[#fff] text-sm sm:text-base">
                1.Shipping
              </span>
            </div>
            <div
              className={`${
                active > 1
                  ? "md:w-[70px] h-[4px] w-[20px] !bg-[#f63b60]"
                  : "h-[4px] w-[20px] !bg-[#FDE1E6] md:w-[70px]"
              }`}
            />
          </div>

          <div className="flex items-center">
            <div
              className={`${active > 1 ? `flex h-[38px] cursor-pointer items-center justify-center rounded-[20px] bg-[#f63b60] px-4 sm:px-[20px]` : `flex h-[38px] cursor-pointer items-center justify-center rounded-[20px] !bg-[#FDE1E6] px-4 sm:px-[20px]`}`}
            >
              <span
                className={`${active > 1 ? `text-[16px] font-[600] text-[#fff] text-sm sm:text-base` : `text-[16px] font-[600] !text-[#f63b60] text-sm sm:text-base`}`}
              >
                2.Payment
              </span>
            </div>
          </div>

          <div className="flex items-center">
            <div
              className={`${
                active > 3
                  ? "md:w-[70px] h-[4px] w-[20px] !bg-[#f63b60]"
                  : "md:w-[70px] h-[4px] w-[20px] !bg-[#FDE1E6]"
              }`}
            />
            <div
              className={`${active > 2 ? `flex h-[38px] cursor-pointer items-center justify-center rounded-[20px] bg-[#f63b60] px-4 sm:px-[20px]` : `flex h-[38px] cursor-pointer items-center justify-center rounded-[20px] !bg-[#FDE1E6] px-4 sm:px-[20px]`}`}
            >
              <span
                className={`${active > 2 ? `text-[16px] font-[600] text-[#fff] text-sm sm:text-base` : `text-[16px] font-[600] !text-[#f63b60] text-sm sm:text-base`}`}
              >
                3.Success
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckOutSteps;
