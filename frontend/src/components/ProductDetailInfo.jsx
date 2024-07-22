import { useState } from "react";
import { Link } from "react-router-dom";

function ProductDetailInfo({ data }) {
  const [active, setActive] = useState(1);

  return (
    <div className="pb-12">
      <div className="bg-[#f5f6fb] px-4 md:px-10 py-2 pb-6 rounded-md">
        <div className="w-full flex items-center justify-between gap-4 border-b pt-10 pb-2">
          <div className="relative">
            <h5
              className={`text-[#000] text-base sm:text-lg md:text-[20px] cursor-pointer font-semibold px-1 ${
                active === 1 ? "text-crimson" : ""
              }`}
              onClick={() => setActive(1)}
            >
              Product Details
            </h5>
            {active === 1 && (
              <div className="absolute bottom-[-27%] left-0 h-[3px] w-full bg-[crimson]"></div>
            )}
          </div>
          <div className="relative">
            <h5
              className={`text-[#000] text-base sm:text-lg md:text-[20px] cursor-pointer font-semibold px-1 ${
                active === 2 ? "text-crimson" : ""
              }`}
              onClick={() => setActive(2)}
            >
              Product Reviews
            </h5>
            {active === 2 && (
              <div className="absolute bottom-[-27%] left-0 h-[3px] w-full bg-[crimson]"></div>
            )}
          </div>
          <div className="relative">
            <h5
              className={`text-[#000] text-base sm:text-lg md:text-[20px] cursor-pointer font-semibold px-1 ${
                active === 3 ? "text-crimson" : ""
              }`}
              onClick={() => setActive(3)}
            >
              Seller Information
            </h5>
            {active === 3 && (
              <div className="absolute bottom-[-27%] left-0 h-[3px] w-full bg-[crimson]"></div>
            )}
          </div>
        </div>

        <div className="pt-4">
          {active === 1 && (
            <div>
              <p className="font-medium font-Poppins text-balance text-lg py-2 whitespace-pre-line">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                error inventore veritatis, qui aliquam iure, laboriosam facilis
                reprehenderit ipsa rem minima minus alias quibusdam sit ratione
                temporibus nostrum repellat. Quisquam rerum facilis, sunt iusto
                assumenda, rem adipisci id consequatur vel laboriosam,
                voluptatem omnis ratione modi quo. Sint quas beatae numquam
                distinctio debitis aut, quis eveniet sequi. Assumenda sit rem ad
                voluptatibus officiis nam aliquid, tempora quibusdam itaque,
                veniam perspiciatis explicabo accusantium at porro quaerat!
                Molestias excepturi officiis natus modi ea, aut dignissimos
                necessitatibus beatae rem cupiditate atque culpa facere quasi
                corporis amet autem eveniet fugit esse tenetur minima nisi nemo.
              </p>
              <p className="font-medium font-Poppins text-balance text-lg py-2 whitespace-pre-line">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                error inventore veritatis, qui aliquam iure, laboriosam facilis
                reprehenderit ipsa rem minima minus alias quibusdam sit ratione
                temporibus nostrum repellat. Quisquam rerum facilis, sunt iusto
                assumenda, rem adipisci id consequatur vel laboriosam,
                voluptatem omnis ratione modi quo. Sint quas beatae numquam
                distinctio debitis aut, quis eveniet sequi. Assumenda sit rem ad
                voluptatibus officiis nam aliquid, tempora quibusdam itaque,
                veniam perspiciatis explicabo accusantium at porro quaerat!
                Molestias excepturi officiis natus modi ea, aut dignissimos
                necessitatibus beatae rem cupiditate atque culpa facere quasi
                corporis amet autem eveniet fugit esse tenetur minima nisi nemo.
              </p>
              <p className="font-medium font-Poppins text-balance text-lg py-2 whitespace-pre-line">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                error inventore veritatis, qui aliquam iure, laboriosam facilis
                reprehenderit ipsa rem minima minus alias quibusdam sit ratione
                temporibus nostrum repellat. Quisquam rerum facilis, sunt iusto
                assumenda, rem adipisci id consequatur vel laboriosam,
                voluptatem omnis ratione modi quo. Sint quas beatae numquam
                distinctio debitis aut, quis eveniet sequi. Assumenda sit rem ad
                voluptatibus officiis nam aliquid, tempora quibusdam itaque,
                veniam perspiciatis explicabo accusantium at porro quaerat!
                Molestias excepturi officiis natus modi ea, aut dignissimos
                necessitatibus beatae rem cupiditate atque culpa facere quasi
                corporis amet autem eveniet fugit esse tenetur minima nisi nemo.
              </p>
            </div>
          )}
          {active === 2 && (
            <div className="min-h-[40vh] w-full flex items-center justify-center">
              <h3>No Reviews Yet?</h3>
            </div>
          )}
          {active === 3 && (
            <div className="w-full block md:flex p-4">
                {/* left */}
              <div className="w-full md:w-1/2">
                  <div className="flex items-center gap-2">
                    <div>
                      <img
                        src={data.shop.shop_avatar.url}
                        className="w-12 h-12 rounded-full"
                        alt={data.shop.name}
                      />
                    </div>
                    <div>
                      <h3 className="text-[15px] text-blue-400">
                        {data.shop.name}
                      </h3>
                      <h5 className="text-[15px]">
                        {data.shop.ratings} ratings
                      </h5>
                    </div>
                  </div>
                  <p className="pt-6">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae, iure voluptatem. Asperiores, aut quibusdam. Officiis, incidunt repellendus! Odio delectus similique, quaerat a quam obcaecati, praesentium ratione quasi nisi saepe illum.</p>
              </div>
              {/* right */}
              <div className="w-full md:w-1/2 mt-5 md:mt-0 md:flex flex-col items-end">
                <div className="text-left space-y-2">
                    <h5 className="font-semibold">
                        Joined on <span className="font-medium">22 July, 2024</span>
                    </h5>
                    <h5 className="font-semibold">
                        Total Products <span className="font-medium">1,221</span>
                    </h5>
                    <h5 className="font-semibold">
                        Total Reviews <span className="font-medium">131</span>
                    </h5>
                    <button className="bg-black text-white px-10 py-2 cursor-pointer">
                        <Link to="/">Visit Shop</Link>
                    </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductDetailInfo;
