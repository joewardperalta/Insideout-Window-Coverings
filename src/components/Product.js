import Image from "next/image";

export default function Product({ imgUrl, title, desc }) {
  return (
    <div className="product bg-white rounded w-2/6">
      <div className="h-80">
        <Image
          className="object-cover w-full h-full rounded-t"
          src={imgUrl}
          width={2000}
          height={300}
          alt="Product Image"
        />
      </div>
      <div className="p-5">
        <h6 className="font-semibold mb-3 text-2xl">{title}</h6>
        <p>{desc}</p>
      </div>
    </div>
  );
}
