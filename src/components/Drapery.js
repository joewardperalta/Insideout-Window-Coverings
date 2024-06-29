import Product from "./Product";

export default function Drapery() {
  return (
    // Product Introductory
    <div>
      <div className="bg-window-drapery bg-cover bg-center bg-no-repeat mb-14">
        <div className="container mx-auto pt-72 pb-24 text-white">
          <div className="w-1/2">
            <h2 className="text-4xl font-semibold uppercase mb-8">Drapery</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Habitant morbi tristique senectus et netus et malesuada fames ac.
              Placerat duis ultricies lacus sed. Vivamus arcu felis bibendum ut
              tristique et. Sed risus pretium quam vulputate dignissim
              suspendisse in est ante.
            </p>
          </div>
        </div>
      </div>

      {/* List of products */}
      <div className="container mx-auto py-14 grid grid-cols-3 gap-10">
        <Product
          imgUrl="/roman-shades.jpg"
          title="Product Title"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <Product
          imgUrl="/010bc1_4625a03a952e4392a01f0ea9690d9c19~mv2.jpeg"
          title="Product Title"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices in iaculis nunc sed."
        />
        <Product
          imgUrl="/window-shades-Nashville-7.png"
          title="Product Title"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus sed viverra tellus in hac habitasse platea dictumst vestibulum. Facilisi nullam vehicula ipsum a arcu cursus."
        />
        <Product
          imgUrl="/window-shades-Nashville-7.png"
          title="Product Title"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus sed viverra tellus in hac habitasse platea dictumst vestibulum. Facilisi nullam vehicula ipsum a arcu cursus."
        />
        <Product
          imgUrl="/roman-shades.jpg"
          title="Product Title"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <Product
          imgUrl="/010bc1_4625a03a952e4392a01f0ea9690d9c19~mv2.jpeg"
          title="Product Title"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices in iaculis nunc sed."
        />
      </div>
    </div>
  );
}
