import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Highlight", href: "#highlight" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const socialMedia = [
  { label: "Instagram", href: "https://www.instagram.com/4hdarizq1/" },
  { label: "Linkedin", href: "https://www.linkedin.com/in/ahdarizqi/" },
  { label: "Github", href: "https://github.com/ArveonTech" },
];

const FooterComponent = () => {
  return (
    <section className="py-20 px-6 text-foreground" id="contact">
      <div className="mx-auto max-w-6xl rounded-3xl bg-card p-12  shadow-xl">
        {/* Top */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Left */}
          <div className="space-y-6">
            <span className="text-xs tracking-widest">CONTACT</span>
            <h2 className="text-2xl font-semibold leading-tight md:text-3xl">
              Let’s Discuss
            </h2>

            <div className="space-y-2 pt-4">
              <p className="text-xs ">OR Username US AT</p>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm">
                <Mail size={14} />
                <p>ahdarizqi3@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Middle */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-gray-300">QUICK LINKS</h3>
            <ul className="space-y-2 text-sm ">
              {navLinks.map((nav, i) => (
                <li key={i}>
                  <Button variant={"link"}>
                    <a href={nav.href}>{nav.label}</a>
                  </Button>
                </li>
              ))}
            </ul>
          </div>

          {/* Right */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-gray-300">Social Media</h3>
            <ul className="space-y-2 text-sm ">
              {socialMedia.map((s, i) => (
                <li key={i}>
                  <Button variant={"link"}>
                    <a href={s.href}>{s.label}</a>
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px w-full bg-white/10" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-6 text-xs  md:flex-row">
          <p>© ArqiStore. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </section>
  );
};

export default FooterComponent;
