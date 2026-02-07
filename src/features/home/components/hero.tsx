import heroImage from "../assets/hero.jpg";

const HeroComponent = () => {
  return (
    <section id="home">
      <div className="relative h-96 w-full">
        <img
          src={heroImage}
          alt="hero-image"
          className="h-full w-full object-cover object-top"
        />
        <div className="absolute z-10 top-0 h-full w-full bg-linear-to-r from-background via-background via-30% to-transparent ">
          <div className="flex justify-center flex-col h-full mx-10 space-y-2">
            <h1 className="text-2xl font-semibold font-merriweather">
              Discover Everyday Essentials
            </h1>
            <div className="italic">
              <p>
                Curated products with the best quality and prices — made for
                your daily needs.
              </p>
              <p>Shop smarter with products trusted by thousands.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroComponent;
