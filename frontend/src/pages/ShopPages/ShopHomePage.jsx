import ShopInfo from "../../components/SellerComponent/ShopInfo";
import ShopProfileData from "../../components/SellerComponent/ShopProfileData";

function ShopHomePage() {
  return (
    <div className="section bg-[#f5f5f5]">
      <div className="flex w-full justify-between py-10">
        <div className="custom-scrollbar sticky top-4 z-10 h-[90vh] w-72 overflow-y-auto rounded-md bg-white shadow-sm">
          <ShopInfo isOwner={true} />
        </div>
        <div className="flex-1 rounded-md">
          <ShopProfileData isOwner={true} />
        </div>
      </div>
    </div>
  );
}

export default ShopHomePage;
