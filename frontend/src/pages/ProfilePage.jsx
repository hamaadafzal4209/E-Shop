import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import ProfileContent from "../components/ProfilePageComponents/ProfileContent";
import ProfileSidebar from "../components/ProfilePageComponents/ProfileSidebar";

function ProfilePage() {
  const [active, setActive] = useState(1);
  const navigate = useNavigate();
  const { isAuthenticated, loading } = useSelector((state) => state.user);

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, loading, navigate]);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <Header />
      <div className="section flex bg-[#f5f5f5] py-8">
        <div className="sticky top-40 md:max-w-[270px] lg:w-full">
          <ProfileSidebar active={active} setActive={setActive} />
        </div>
        <ProfileContent active={active} />
      </div>
    </div>
  );
}

export default ProfilePage;
