import AllOrders from "./AllOrders";
import Profile from "./Profile";

function ProfileContent({ active }) {

  return (
    <div className="w-full">
      {/* profile page */}
      {active === 1 && (
        <Profile/>
      )}
      {active === 2 && (
        <AllOrders/>
      )}
    </div>
  );
}

export default ProfileContent;
