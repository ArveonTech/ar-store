interface PropsFilter {
  sectionActive: string;
  handleChangeSectionActive: ({ section }: { section: string }) => void;
}

const FilterComponent = ({
  sectionActive,
  handleChangeSectionActive,
}: PropsFilter) => {
  const styleSection = ({ section }: { section: string }) => {
    return `
      relative inline-block cursor-pointer pb-2
      text-foreground underline-offset-4
      after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0
      after:h-0.5 after:bg-foreground after:transition-all after:duration-300
      ${sectionActive === section ? "after:w-full" : "after:w-0 hover:after:w-[70%]"}
    `;
  };

  return (
    <div
      className="
        mt-20 px-15
        flex gap-5
        scroll-x-hide
        whitespace-nowrap
      "
    >
      <span
        className={styleSection({ section: "overview" })}
        onClick={() => handleChangeSectionActive({ section: "overview" })}
      >
        Overview
      </span>

      <span
        className={styleSection({ section: "personal" })}
        onClick={() => handleChangeSectionActive({ section: "personal" })}
      >
        Personal
      </span>

      <span
        className={styleSection({ section: "work&education" })}
        onClick={() => handleChangeSectionActive({ section: "work&education" })}
      >
        Work & Education
      </span>

      <span
        className={styleSection({ section: "address" })}
        onClick={() => handleChangeSectionActive({ section: "address" })}
      >
        Address
      </span>
    </div>
  );
};

export default FilterComponent;
