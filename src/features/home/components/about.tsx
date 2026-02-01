import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useEffect, useRef } from "react";
gsap.registerPlugin(SplitText);

const AboutComponent = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const animateRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current || !animateRef.current) return;
    const ctx = gsap.context(() => {
      gsap.set(sectionRef.current!, { opacity: 1 });

      const split = new SplitText(animateRef.current!, {
        type: "words",
        aria: "hidden",
      });

      gsap.from(split.words, {
        y: 50,
        opacity: 0,
        stagger: 0.1,
        ease: "back.out(1.7)",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="mx-10 space-y-4 md:mx-30" id="about">
      <h1 className="text-2xl font-medium">🗒️ About</h1>
      <p
        ref={animateRef}
        aria-hidden="true"
        className="text-[18px] text-justify"
      >
        A place where everything you need comes together in one easy experience.
        Discover products that fit your lifestyle, from everyday essentials to
        special finds. Browse freely with a layout that keeps things simple and
        comfortable. Find what you’re looking for without distractions or
        unnecessary steps. Shopping here is designed to feel smooth, natural,
        and stress-free.
      </p>
    </section>
  );
};

export default AboutComponent;
