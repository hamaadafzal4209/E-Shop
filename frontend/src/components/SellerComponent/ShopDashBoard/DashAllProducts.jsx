import DashBoardHeader from "./DashBoardHeader";
import DashSidebar from "./DashSidebar";
import ShopAllProducts from "./ShopAllProducts";

function DashAllProducts() {
  return (
    <div>
      <DashBoardHeader />
      <div className="flex">
        {/* sidebar */}
        <div>
          <DashSidebar active={3} />
        </div>
        {/* create product */}
        <div className="w-full max-w-[950px] flex-1">
          <ShopAllProducts />
        </div>
      </div>
    </div>
  );
}

export default DashAllProducts;
