import { useEffect, useState } from "react";
import Header from "../components/Header";
import ProfileContent from "../components/ProfilePageComponents/ProfileContent";
import ProfileSidebar from "../components/ProfilePageComponents/ProfileSidebar";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function ProfilePage() {
  const [active, setActive] = useState(1);
  const { isAuthenticated } = useSelector((state) => state.user);

  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [navigate, isAuthenticated]);

  return (
    <div>
      <Header />
      <div className="section flex bg-[#f5f5f5] py-8">
        <div className="w-full max-w-[270px]">
          <ProfileSidebar active={active} setActive={setActive} />
        </div>
        <ProfileContent active={active} />
      </div>
    </div>
  );
}

export default ProfilePage;
