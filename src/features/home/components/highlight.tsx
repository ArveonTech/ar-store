import accescories from "../assets/accescories.jpg";
import fashion from "../assets/fashion-detail.jpg";
import gadgetStart from "../assets/gadget-start.avif";
import gadgetEnd from "../assets/gadget-end.avif";
import humanGadget from "../assets/human-gadget.jpg";
import lifestyle from "../assets/lifestyle.jpg";
import modelWoman from "../assets/model-woman.avif";
import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const images = [
  {
    src: gadgetStart,
    alt: "gadget-start",
    classname: "top-[32%] left-[2%] rotate-15",
  },
  {
    src: fashion,
    alt: "fashion",
    classname: "top-[60%] left-[20%] -rotate-13",
  },
  {
    src: accescories,
    alt: "accescories",
    classname: "top-[33%] left-[35%] -rotate-20",
  },
  {
    src: humanGadget,
    alt: "human-gadget",
    classname: "top-[60%] left-[50%] rotate-20",
  },
  {
    src: lifestyle,
    alt: "lifestyle",
    classname: "top-[30%] left-[62%] -rotate-10",
  },
  {
    src: modelWoman,
    alt: "model-woman",
    classname: "top-[60%] left-[84%] rotate-10",
  },
  {
    src: gadgetEnd,
    alt: "gadget-end",
    classname: "top-[25%] left-[95%] -rotate-25",
  },
];

const HighlightComponent = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current || !contentRef.current) return;

    const ctx = gsap.context(() => {
      const getDistance = () =>
        contentRef.current!.scrollWidth - window.innerWidth;

      gsap.to(contentRef.current, {
        x: () => -getDistance(),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${getDistance()}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="highlight">
      <div className="h-screen overflow-hidden">
        <div
          ref={contentRef}
          className="relative flex items-center w-fit h-full "
        >
          <h1 className="text-9xl font-medium whitespace-nowrap px-40">
            From the screen you work on, to the style you live in — everything
            you need, in one place.
          </h1>

          {images.map((img, index) => (
            <div
              key={index}
              className={cn("absolute w-32 h-32", img.classname)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover rounded"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightComponent;
