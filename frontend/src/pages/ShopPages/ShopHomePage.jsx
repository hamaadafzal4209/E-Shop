import ShopInfo from "../../components/SellerComponent/ShopInfo";
import ShopProfileData from "../../components/SellerComponent/ShopProfileData";

function ShopHomePage() {
  return (
    <div className="section bg-gray-100 min-h-screen py-10">
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="custom-scrollbar sticky top-4 z-10 w-full lg:w-80 overflow-y-auto bg-white shadow-lg rounded-lg p-6">
          <ShopInfo isOwner={true} />
        </div>
        <div className="flex-1 bg-white shadow-lg rounded-lg p-6">
          <ShopProfileData isOwner={true} />
        </div>
      </div>
    </div>
  );
}

export default ShopHomePage;