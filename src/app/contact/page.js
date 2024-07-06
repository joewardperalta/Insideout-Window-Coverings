"use client";

import ContactForm from "@/components/ContactForm";
import Image from "next/image";

export default function Contact() {
  return (
    <div className="container mx-auto py-14 flex justify-between">
      <div>
        {/* Contact information */}
        <ul className="grid grid-cols-2 gap-20">
          <li>
            <h5 className="text-2xl font-semibold uppercase mb-8">
              Contact us
            </h5>

            <div className="flex">
              <Image
                className="mr-2 mb-3"
                src="/icons/352510_local_phone_icon (1).svg"
                width={20}
                height={20}
                alt="phone icon"
              ></Image>
              <a className="mt-0" href="tel:(289) 980-0725">
                (289) 980-0725
              </a>
            </div>

            <div className="flex">
              <Image
                className="mr-2"
                src="/icons/1564504_email_letter_mail_message_icon.svg"
                width={20}
                height={20}
                alt="phone icon"
              ></Image>
              <a href="mailto:mel@insideoutwindowcoverings.ca">
                mel@insideoutwindowcoverings.ca
              </a>
            </div>
          </li>

          <li>
            <h5 className="text-2xl font-semibold uppercase mb-8">
              Opening hours
            </h5>

            <div className="mb-5">
              <p>Mon - Fri:</p>
              <p>9am - 5pm</p>
            </div>
          </li>
        </ul>
      </div>

      <ContactForm />
    </div>
  );
}
