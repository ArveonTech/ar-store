import { ShoppingCart } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router-dom";
import { type PropsNavigationComponent } from "@/types/types";

const NavigationComponent = ({ dataUser }: PropsNavigationComponent) => {
  const profileUser = dataUser ? dataUser : null;

  return (
    <>
      <nav className="bg-sidebar h-16 px-10 flex justify-between items-center sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <img src="./logo/logo.png" className="w-8" />
          <h1 className="font-JetBrains text-xl hidden sm:block">
            <a href="/app">ArStore</a>
          </h1>
        </div>

        <div className="flex items-center gap-7">
          <Link to={`/cart`}>
            <ShoppingCart className="cursor-pointer" />
          </Link>
          <Link to={`/profile`}>
            <Avatar>
              <AvatarImage src={profileUser?.image} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default NavigationComponent;
