import ShopInfo from "../../components/SellerComponent/ShopInfo";

function ShopHomePage() {
  return (
    <div className="section bg-[#f5f5f5]">
      <div className="flex w-full justify-between py-10">
        <div className="sticky top-2 z-10 h-screen w-1/4 overflow-y-auto rounded-md bg-white shadow-sm">
          <ShopInfo/>
        </div>
      </div>
    </div>
  );
}

export default ShopHomePage;
