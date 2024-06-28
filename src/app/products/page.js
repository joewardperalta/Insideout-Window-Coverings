"use client";
import Image from "next/image";

export default function Products() {
  const products = [
    {
      title: "Window Coverings",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Habitant morbi tristique senectus et netus et malesuada fames ac. Placerat duis ultricies lacus sed. Vivamus arcu felis bibendum ut tristique et. Sed risus pretium quam vulputate dignissim suspendisse in est ante.",
    },
    {
      title: "Blinds",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus commodo viverra maecenas accumsan lacus vel facilisis volutpat. Commodo quis imperdiet massa tincidunt nunc. Nec nam aliquam sem et tortor consequat.",
    },
    {
      title: "Shades",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Auctor eu augue ut lectus arcu bibendum at varius. Viverra justo nec ultrices dui",
    },
    {
      title: "Shutters",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At risus viverra adipiscing at in. Et malesuada fames ac turpis egestas integer eget aliquet. Ut morbi tincidunt augue interdum velit euismod in pellentesque massa.",
    },
    {
      title: "Drapery",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis in eu mi bibendum. Non consectetur a erat nam at lectus urna. Id venenatis a condimentum vitae. Purus in mollis nunc sed id semper risus in hendrerit.",
    },
  ];

  // Toggle the product description
  function handleProductClick(e) {
    const currentProductNode = e.parentElement.childNodes;
    const productNodes = e.parentElement.parentElement.childNodes;

    // Hide all product description
    productNodes.forEach((element) => {
      if (currentProductNode[1] != element.childNodes[1])
        element.childNodes[1].classList.add("hidden");
    });

    // Open the current product that was clicked
    currentProductNode[1].classList.toggle("hidden");
  }

  return (
    <div className="container mx-auto flex justify-between">
      <div className="w-2/5 py-14">
        {/* Heading */}
        <h2 className="text-6xl uppercase font-semibold mb-20">
          <div className="text-3xl uppercase font-semibold text-gray-600">
            Our
          </div>
          Products
        </h2>

        {/* Categories */}
        <ul className="divide-y divide-black font-semibold text-xl">
          {products.map((product, index) => (
            <li key={product.title}>
              <button
                className="py-7 w-full text-left flex items-center justify-between"
                onClick={(e) => handleProductClick(e.target)}
                id={"product-" + index}
              >
                {product.title}{" "}
                <span className="text-3xl font-extralight pointer-events-none">
                  +
                </span>
              </button>

              <div className="text-base font-normal pb-16 hidden">
                <p>{product.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="w-2/5 pt-14">
        <Image
          className="w-full h-full object-cover rounded"
          src="/nathan-fertig-FBXuXp57eM0-unsplash.jpg"
          width={2000}
          height={2000}
          alt="window blinds"
        />
      </div>
    </div>
  );
}
