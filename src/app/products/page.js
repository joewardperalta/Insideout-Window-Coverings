"use client";

import { useState } from "react";
import Product from "@/components/Product";
import Link from "next/link";

export default function Products() {
  const blinds = {
    title: "Blinds",
    description:
      "Window blinds offer a combination of practical benefits, aesthetic appeal, and functional versatility, making them a popular choice for enhancing privacy, controlling light, and improving energy efficiency in residential and commercial spaces.",
    backgroundImage: "bg-window-blinds",
    products: [
      {
        id: 1,
        name: "Silhouette",
        description:
          "Silhouette window blind feature soft adjustable S-shaped fabric vanes that appear to be floating between two sheer fabric panels that make this blind very elegant. The sheer fabric panels beautifully diffuse harsh sunlight. Fabric are available in light filtering or room darkening.",
        imgUrl: "/products/1000000026.jpg",
      },
      {
        id: 2,
        name: "Zebra",
        description:
          "Zebra blinds, are a modern roller blind alternative to horizontal blinds. Consisting of alternating horizontal opaque and sheer fabric stripes, these blinds transition from day to night easily, by moving up and down , you’re in control of how much light and privacy your room receives. Fabric are available in light filtering or room darkening.",
        imgUrl: "/products/1000000030.png",
      },
    ],
  };

  const shades = {
    title: "Shades",
    description:
      "Window shades offer a blend of functionality, style, and energy efficiency, making them a practical and attractive choice for enhancing the comfort and ambiance of any space.",
    backgroundImage: "bg-window-shades",
    products: [
      {
        id: 1,
        name: "Roller",
        description:
          "A Roller shades is a single piece of fabric which wraps around a casing and fits into the top of your window frame, either within or outside of your window recess. Fabric varies from 1% , 3% , 5% , 10% , Blackout or Complete privacy.",
        imgUrl: "/products/1000000031.jpg",
      },
      {
        id: 2,
        name: "Cellular",
        description:
          'Cellular shades are a popular window treatment made of "honeycomb" cells. They are known for their sleek style, light control and insulating properties. Cellular shades are made of a soft fabric. Double or triple cellular shades increase the amount of fabric and insulation. Fabric are available in light filtering and room blackout.',
        imgUrl: "/products/1000000027.jpg",
      },
    ],
  };

  const awning = {
    title: "Awning",
    description:
      "Awnings offer a blend of practical benefits, aesthetic enhancement, and energy efficiency, making them a valuable addition to residential and commercial buildings alike.",
    backgroundImage: "bg-window-awning",
    products: [
      {
        id: 1,
        name: "Awning",
        description:
          "An awning or overhang is a secondary covering attached to the exterior wall of a building. It is typically composed of canvas woven of acrylic, cotton or polyester yarn, or vinyl laminated to polyester fabric that is stretched tightly over a light structure of aluminium, iron or steel.",
        imgUrl: "/products/1000000032.jpg",
      },
    ],
  };

  const drapery = {
    title: "Drapery",
    description:
      "Drapery provides a blend of style, functionality, and practical benefits, making them a popular choice for enhancing the comfort and aesthetics of any living or working space.",
    backgroundImage: "bg-window-drapery",
    products: [],
  };

  const skylight = {
    title: "Skylight",
    description:
      "Skylights offer a combination of practical benefits, aesthetic enhancement, and health advantages, making them a valuable addition to residential and commercial buildings seeking to maximize natural light and indoor comfort.",
    backgroundImage: "bg-window-skylight",
    products: [],
  };

  const motorization = {
    title: "Motorization",
    description:
      "Motorization offers convenience, energy efficiency, enhanced safety, and improved comfort, making it a valuable investment for modern homes and offices looking to integrate smart technologies into their window treatments.",
    backgroundImage: "bg-window-motorization",
    products: [],
  };

  // state for the current category
  const [category, setCategory] = useState(blinds);

  // handles the category navigation click
  function handleCategoryClick(e) {
    const categories = e.parentElement.parentElement.childNodes;
    const currentActiveCategory = e.parentElement;

    // remove active class from the list
    categories.forEach((e) => e.classList.remove("active"));

    // add active class to the current category
    currentActiveCategory.classList.add("active");

    console.log(currentActiveCategory.id);

    switch (currentActiveCategory.id) {
      case "blinds":
        setCategory(blinds);
        break;
      case "shades":
        setCategory(shades);
        break;
      case "awning":
        setCategory(awning);
        break;
      case "drapery":
        setCategory(drapery);
        break;
      case "skylight":
        setCategory(skylight);
        break;
      case "motorization":
        setCategory(motorization);
        break;
      default:
        setCategory(blinds);
    }
  }

  return (
    <div className="">
      {/* Product Categories */}
      <div className="bg-gray-100 font-medium">
        <ul className="container mx-auto flex" id="categories">
          <li className="active" id="blinds">
            <button onClick={(e) => handleCategoryClick(e.target)}>
              Blinds
            </button>
          </li>
          <li id="shades">
            <button onClick={(e) => handleCategoryClick(e.target)}>
              Shades
            </button>
          </li>
          <li id="awning">
            <button onClick={(e) => handleCategoryClick(e.target)}>
              Awning
            </button>
          </li>
          <li id="drapery">
            <button onClick={(e) => handleCategoryClick(e.target)}>
              Drapery
            </button>
          </li>
          <li id="skylight">
            <button onClick={(e) => handleCategoryClick(e.target)}>
              Skylight
            </button>
          </li>
          <li id="motorization">
            <button onClick={(e) => handleCategoryClick(e.target)}>
              Motorization
            </button>
          </li>
        </ul>
      </div>

      <div
        className={
          category.backgroundImage + " bg-cover bg-center bg-no-repeat mb-14"
        }
      >
        <div className="container mx-auto pt-72 pb-24 text-white">
          <div className="w-1/2">
            <h2 className="text-6xl font-semibold uppercase mb-7">
              {category.title}
            </h2>
            <p className="text-xl">{category.description}</p>
          </div>
        </div>
      </div>

      {/* List of products */}
      <div className="container mx-auto py-14 flex justify-center gap-16">
        {category.products.map((product) => (
          <Product
            key={product.id}
            imgUrl={product.imgUrl}
            title={product.name}
            desc={product.description}
          />
        ))}

        <h5>
          {category.products.length <= 0 ? (
            <div>
              <h5 className="text-2xl font-medium mb-10">Dear Customers,</h5>
              <p className="mb-2">
                I am pleased to inform you that {category.title} is available
                for purchase.
              </p>
              <p className="mb-10">
                For more information please contact us at:{" "}
                <Link className="text-blue-700" href="/contact">
                  contact us
                </Link>
              </p>
              <p>Best regards,</p>
              <p>Rommel</p>
            </div>
          ) : (
            ""
          )}
        </h5>
      </div>
    </div>
  );
}
