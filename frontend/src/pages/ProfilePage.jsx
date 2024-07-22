import { useState } from "react";
import Header from "../components/Header";
import ProfileContent from "../components/ProfilePageComponents/ProfileContent";
import ProfileSidebar from "../components/ProfilePageComponents/ProfileSidebar";

function ProfilePage() {
  const [active, setActive] = useState(1);
  return (
    <div>
      <Header />
      <div className="section bg-[#f5f5f5] py-4 flex">
        <div className="w-[270px]">
          <ProfileSidebar active={active} setActive={setActive} />
        </div>
        <ProfileContent />
      </div>
    </div>
  );
}

export default ProfilePage;
