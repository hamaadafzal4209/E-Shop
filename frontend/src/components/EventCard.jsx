import EventCountDown from "./EventCountDown";

function EventCard() {
  return (
    <div className="px-6 md:px-12 bg-white rounded-lg lg:flex p-4 shadow-sm">
      <div className="w-full lg:w-2/5 flex items-center justify-center">
        <img
          className="max-w-[450px] w-full object-contain"
          src="https://m.media-amazon.com/images/I/31Vle5fVdaL.jpg"
          alt=""
        />
      </div>
      <div className="w-full lg:w-3/5 flex flex-col justify-center">
        <h2 className="text-[25px] font-[600] text-[#333]">
          MacBook pro M2 chipset 256gb ssd 8gb ram space gray color{" "}
        </h2>
        <p className="">
          Product details are a crucial part of any eCommerce website or online
          marketplace. These details help the potential customers to make an
          informed decision about the product they are interested in buying. A
          well-written product description can also be a powerful marketing tool
          that can help to increase sales.Product details typically include
          information about the product features, specifications, dimensions,
          weight, materials, and other relevant information that can help
          customers to understand the product better. The product details
          section should also include high-quality images and videos of the
          product, as well as customer reviews and ratings.
        </p>
        <div className="flex py-2 justify-between">
          <div className="flex items-center">
            <h5 className="font-medium text-lg text-[#d55b45] pr-3 line-through">
              1099$
            </h5>
            <h5 className="font-bold text-[20px] text-[#333] pr-3">999$</h5>
          </div>
          <div className="pr-3 font-normal text-[17px] text-[#44a55e]">
            120 sold
          </div>
        </div>
        <EventCountDown />
        <div className="mb-4"></div>
      </div>
    </div>
  );
}

export default EventCard;
