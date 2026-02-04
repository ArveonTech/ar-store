import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const HeaderComponent = () => {
  return (
    <header className="mt-10 px-15">
      <Link to={`/app`}>
        <div className="bg-accent w-fit rounded-full p-2 animate-bounce">
          <ArrowLeft />
        </div>
      </Link>
    </header>
  );
};

export default HeaderComponent;
