import { LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

const FooterComponent = () => {
  const navigate = useNavigate();
  const accessToken = localStorage.getItem("access-token");

  const handleLogout = () => {
    if (!accessToken) {
      navigate("/");
    } else {
      localStorage.removeItem("access-token");
      navigate("/login");
    }
  };

  return (
    <footer className="fixed bottom-10 right-0 mx-15 mt-10 text-secondary-foreground ">
      <div
        className="bg-accent p-2 rounded-full cursor-pointer"
        onClick={() => handleLogout()}
      >
        <LogOut />
      </div>
    </footer>
  );
};

export default FooterComponent;
