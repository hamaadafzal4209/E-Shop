import AllOrders from "./AllOrders";
import AllRefundOrders from "./AllRefundOrders";
import Profile from "./Profile";
import TrackOrders from "./TrackOrders";

function ProfileContent({ active }) {
  return (
    <div className="w-full">
      {/* profile page */}
      {active === 1 && <Profile />}

      {/* ordres page */}
      {active === 2 && <AllOrders />}

      {/* refund ordres page */}
      {active === 3 && <AllRefundOrders />}

      {/* track ordres page */}
      {active === 5 && <TrackOrders />}
    </div>
  );
}

export default ProfileContent;
