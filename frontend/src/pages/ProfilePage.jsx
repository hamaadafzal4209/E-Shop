import { useState } from "react";
import Header from "../components/Header";
import ProfileContent from "../components/ProfilePageComponents/ProfileContent";
import ProfileSidebar from "../components/ProfilePageComponents/ProfileSidebar";

function ProfilePage() {
  const [active, setActive] = useState(1);
  return (
    <div>
      <Header />
      <div className="section bg-[#f5f5f5] py-8 flex">
        <div className="max-w-[270px] w-full">
          <ProfileSidebar active={active} setActive={setActive} />
        </div>
        <ProfileContent active={active} />
      </div>
    </div>
  );
}

export default ProfilePage;
