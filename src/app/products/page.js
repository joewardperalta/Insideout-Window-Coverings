"use client";

import { useState } from "react";
import WindowCoverings from "@/components/WindowCoverings";
import Blinds from "@/components/Blinds";
import Shutters from "@/components/Shutters";
import Drapery from "@/components/Drapery";
import Shades from "@/components/Shades";

export default function Products() {
  const [currentCategory, setCurrentCategory] = useState(WindowCoverings);

  function handleCategoryClick(e, categoryComponent) {
    const categories = e.parentElement.parentElement.childNodes;
    const currentCategory = e.parentElement;

    // remove active class from the list
    categories.forEach((e) => e.classList.remove("active"));

    // add active class to the current category
    currentCategory.classList.add("active");

    // set the current category
    setCurrentCategory(categoryComponent);
  }

  return (
    <div className="">
      {/* Product Categories */}
      <div className="bg-gray-100 font-medium">
        <ul className="container mx-auto flex" id="categories">
          <li className="active">
            <button
              onClick={(e) => handleCategoryClick(e.target, WindowCoverings)}
            >
              Window Coverings
            </button>
          </li>
          <li>
            <button onClick={(e) => handleCategoryClick(e.target, Blinds)}>
              Blinds
            </button>
          </li>
          <li>
            <button onClick={(e) => handleCategoryClick(e.target, Shades)}>
              Shades
            </button>
          </li>
          <li>
            <button onClick={(e) => handleCategoryClick(e.target, Shutters)}>
              Shutters
            </button>
          </li>
          <li>
            <button onClick={(e) => handleCategoryClick(e.target, Drapery)}>
              Drapery
            </button>
          </li>
        </ul>
      </div>

      {currentCategory}
    </div>
  );
}
