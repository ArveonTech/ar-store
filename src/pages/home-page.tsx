import NavigationComponent from "@/features/home/components/navbar";
import HeroComponent from "@/features/home/components/hero";
import HighlightComponent from "@/features/home/components/highlight";
import AboutComponent from "@/features/home/components/about";
import FooterComponent from "@/features/home/components/contact";

const HomePage = () => {
  return (
    <>
      <header>
        <NavigationComponent />
      </header>
      <main>
        <HeroComponent />
        <HighlightComponent />
        <AboutComponent />
      </main>
      <footer>
        <FooterComponent />
      </footer>
    </>
  );
};

export default HomePage;
