import Image from "next/image";

export default function Footer() {
  return (
    <div className="bg-black py-5 mt-14 text-white">
      <div className="container mx-auto flex justify-between">
        <p className="uppercase">&copy; 2024 InsideOut all rights reserved</p>
        <ul className="flex space-x-3">
          {/* Facebook */}
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

          {/* Instagram */}
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

          {/* Twitter */}
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

          {/* Phone */}
          <li>
            <a href="#">
              <Image
                src="/icons/352510_local_phone_icon.svg"
                width={20}
                height={20}
                alt="phone icon"
              ></Image>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
