import { AiOutlineDelete } from "react-icons/ai";

function PaymentMethod() {
  return (
    <div className="w-full px-5">
      <div className="flex w-full items-center justify-between pb-2">
        <h1 className="text-xl font-semibold">Payment Methods</h1>
        <button className="inline-block rounded-md bg-black px-8 py-2.5 text-white">
          Add New
        </button>
      </div>
      <br />
      <div className="flex h-[70px] w-full items-center justify-between rounded-md bg-white px-3 pr-10">
        <div className="flex items-center">
          <img
            src="https://bonik-react.vercel.app/assets/images/payment-methods/Visa.svg"
            alt=""
          />
          <h5 className="pl-5 font-semibold">Hamaad Afzal</h5>
        </div>
        <div className="flex items-center pl-8">
          <h5 className="">1234 **** **** ****</h5>
          <h5 className="pl-6">12/2025 </h5>
        </div>
        <div className="flex min-w-[10%] items-center justify-center pl-8">
          <AiOutlineDelete size={25} className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export default PaymentMethod;
