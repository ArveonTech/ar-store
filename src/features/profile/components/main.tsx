import type { User } from "@/types/types";
import type { JSX } from "react/jsx-runtime";
import ProfileOverview from "./profile-overview";
import ProfilePersonal from "./profile-personal";
import ProfileWorkEducation from "./profile-work-education";
import ProfileAddress from "./profile-address";

interface PropsMainComponent {
  sectionActive: string;
  dataGetUser: User;
}

const MainComponent = ({ sectionActive, dataGetUser }: PropsMainComponent) => {
  const sections: Record<string, JSX.Element> = {
    overview: (
      <div>
        <ProfileOverview user={dataGetUser} />
      </div>
    ),
    personal: (
      <div>
        <ProfilePersonal user={dataGetUser} />
      </div>
    ),
    "work&education": (
      <div>
        <ProfileWorkEducation user={dataGetUser} />
      </div>
    ),
    address: (
      <div>
        <ProfileAddress user={dataGetUser} />
      </div>
    ),
  };

  return <>{sections[sectionActive] ?? null}</>;
};

export default MainComponent;
