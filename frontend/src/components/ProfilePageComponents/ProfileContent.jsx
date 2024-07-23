import AllOrders from "./AllOrders";
import AllRefundOrders from "./AllRefundOrders";
import PaymentMethod from "./PaymentMethod";
import Profile from "./Profile";
import TrackOrders from "./TrackOrders";
import UserAddress from "./UserAddress";

function ProfileContent({ active }) {
  return (
    <div className="w-full">
      {/* profile */}
      {active === 1 && <Profile />}

      {/* ordres */}
      {active === 2 && <AllOrders />}

      {/* refund ordres */}
      {active === 3 && <AllRefundOrders />}

      {/* track ordres */}
      {active === 5 && <TrackOrders />}

      {/* payment methods */}
      {active === 6 && <PaymentMethod />}

      {/* user address */}
      {active === 7 && <UserAddress />}
    </div>
  );
}

export default ProfileContent;
