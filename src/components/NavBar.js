import Image from "next/image";

export default function NavBar() {
  return (
    <div>
      <div className="bg-black">
        <div className="container mx-auto flex items-center justify-between px-10 py-2">
          <ul className="flex space-x-3">
            {/* Facebook icon */}
            <li>
              <a href="#">
                <Image
                  src="/icons/5279111_network_fb_social media_facebook_facebook logo_icon (1).svg"
                  width={20}
                  height={20}
                  alt="facebook icon"
                ></Image>
              </a>
            </li>

            {/* Instagram icon */}
            <li>
              <a href="#">
                <Image
                  src="/icons/8679433_instagram_fill_icon.svg"
                  width={20}
                  height={20}
                  alt="instagram icon"
                ></Image>
              </a>
            </li>

            {/* Twitter icon */}
            <li>
              <a href="#">
                <Image
                  src="/icons/5279123_tweet_twitter_twitter logo_icon.svg"
                  width={20}
                  height={20}
                  alt="twitter icon"
                ></Image>
              </a>
            </li>
          </ul>

          <div className="flex">
            <Image
              className="mr-2"
              src="/icons/352510_local_phone_icon.svg"
              width={20}
              height={20}
              alt="phone icon"
            ></Image>
            <p className="text-white">123-456-7890</p>
          </div>
        </div>
      </div>

      <nav className="container mx-auto flex items-center justify-between py-5 px-10">
        <h1 className="text-3xl font-extrabold">Blinds.</h1>
        <ul className="flex space-x-10 font-medium">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/products">Products</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
