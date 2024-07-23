import Profile from "./Profile";

function ProfileContent({ active }) {

  return (
    <div className="w-full">
      {/* profile page */}
      {active === 1 && (
        <Profile/>
      )}
    </div>
  );
}

export default ProfileContent;
