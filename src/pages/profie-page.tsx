import ErrorComponent from "@/features/others/error";
import LoadingComponent from "@/features/others/loading";
import useGetUser from "@/features/profile/api/use-get-user";
import FilterComponent from "@/features/profile/components/filter";
import FooterComponent from "@/features/profile/components/footer";
import HeaderComponent from "@/features/profile/components/header";
import MainComponent from "@/features/profile/components/main";
import { useState } from "react";

const ProfilePage = () => {
  const accessToken = localStorage.getItem("access-token");
  const [sectionActive, setSectionActive] = useState<string>("overview");

  const {
    data: dataGetUser,
    isLoading: loadingGetUser,
    isError: isErrorGetUser,
  } = useGetUser({
    accessToken,
  });

  const handleChangeSectionActive = ({ section }: { section: string }) => {
    setSectionActive(section);
  };

  return (
    <>
      <HeaderComponent />
      {loadingGetUser ? (
        <LoadingComponent classname="mt-50" />
      ) : (
        <>
          {isErrorGetUser ? (
            <ErrorComponent classname="mt-50" />
          ) : (
            <>
              {dataGetUser && (
                <>
                  <FilterComponent
                    sectionActive={sectionActive}
                    handleChangeSectionActive={handleChangeSectionActive}
                  />
                  <div className="px-15">
                    <MainComponent
                      sectionActive={sectionActive}
                      dataGetUser={dataGetUser}
                    />
                  </div>
                  <FooterComponent />
                </>
              )}
            </>
          )}
        </>
      )}
    </>
  );
};

export default ProfilePage;
