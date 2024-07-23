import AllOrders from "./AllOrders";
import AllRefundOrders from "./AllRefundOrders";
import Profile from "./Profile";

function ProfileContent({ active }) {
  return (
    <div className="w-full">
      {/* profile page */}
      {active === 1 && <Profile />}
      {/* ordres page */}
      {active === 2 && <AllOrders />}
      {/* refund ordres page */}
      {active === 3 && <AllRefundOrders />}
    </div>
  );
}

export default ProfileContent;
