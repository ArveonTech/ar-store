import type { Product } from "@/types/types";
import { useState } from "react";

interface PropsProductComponent {
  product?: Product;
}

interface PropsStyle {
  section: string;
}

const MainComponent = ({ product }: PropsProductComponent) => {
  const [activeSection, setActiveSection] = useState<string>("detail");

  const styleSection = ({ section }: PropsStyle) => {
    return `text-foreground underline-offset-4 pb-2 hover:underline
  relative no-underline! cursor-pointer
  after:content-[''] after:absolute  after:bottom-0
  after:h-0.5 after:bg-foreground after:transition-all after:duration-300 after:left-1/2 after:-translate-x-1/2
  ${activeSection === section ? "after:w-full " : "after:w-[0%] hover:after:w-[70%] "}
  `;
  };

  return (
    <main className="mt-10 px-15 md:pl-0 md:pr-10">
      <title>{product?.title}</title>
      <header className="space-y-4">
        <h1 className="text-2xl md:text-3xl">{product?.title}</h1>
        <p className="text-3xl font-JetBrains">${product?.price}</p>
      </header>
      <div className="mt-10 space-y-10">
        <div className="space-x-5">
          <span
            className={styleSection({ section: "detail" })}
            onClick={() => setActiveSection("detail")}
          >
            Detail Product
          </span>
          <span
            className={styleSection({ section: "others" })}
            onClick={() => setActiveSection("others")}
          >
            Others
          </span>
        </div>
        {activeSection === "detail" ? (
          <>
            <ul>
              <li>
                <span className="text-muted-foreground">Brand: </span>
                <span>{product?.brand}</span>
              </li>
              <li>
                <span className="text-muted-foreground">Category: </span>
                <span>{product?.category}</span>
              </li>
              <li>
                <span className="text-muted-foreground">Rating: </span>
                <span>{product?.rating}</span>
              </li>
              <li>
                <span className="text-muted-foreground">Stock: </span>
                <span>{product?.stock}</span>
              </li>
            </ul>
            <p className="text-justify">{product?.description}</p>
          </>
        ) : (
          <>
            <ul>
              <li>
                <span className="text-muted-foreground">Dimensions: </span>
                <span>
                  {product?.dimensions.width} x {product?.dimensions.height} x{" "}
                  {product?.dimensions.depth}
                </span>
              </li>
              <li>
                <span className="text-muted-foreground">Weight: </span>
                <span>{product?.weight}</span>
              </li>
              <li>
                <span className="text-muted-foreground">SKU: </span>
                <span>{product?.sku}</span>
              </li>
              <li>
                <span className="text-muted-foreground">
                  Shipping Information:{" "}
                </span>
                <span>{product?.shippingInformation}</span>
              </li>
              <li>
                <span className="text-muted-foreground">Return Policy: </span>
                <span>{product?.returnPolicy}</span>
              </li>
              <li>
                <span className="text-muted-foreground">
                  Warranty Information:{" "}
                </span>
                <span>{product?.warrantyInformation}</span>
              </li>
            </ul>
          </>
        )}
      </div>
    </main>
  );
};

export default MainComponent;
