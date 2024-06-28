export default function Contact() {
  return (
    <div className="container mx-auto py-14 flex justify-between">
      <div>
        {/* Heading */}
        <h2 className="text-6xl uppercase font-semibold mb-20">
          <div className="text-3xl uppercase font-semibold text-gray-600">
            Our
          </div>
          Contacts
        </h2>

        {/* Contact information */}
        <ul className="grid grid-cols-2 gap-14">
          <li>
            <h5 className="text-2xl font-semibold uppercase mb-8">Address</h5>
            <p>8650 Bathurst Street North York, ON M2R1Y9</p>
          </li>
          <li>
            <h5 className="text-2xl font-semibold uppercase mb-8">
              Contact us
            </h5>
            <p>123-456-7890</p>
            <p>info@mysite.com</p>
          </li>
          <li>
            <h5 className="text-2xl font-semibold uppercase mb-8">
              Opening hours
            </h5>
            <div className="mb-5">
              <p>Mon - Fri:</p>
              <p>10am - 7pm</p>
            </div>
            <div>
              <p>Sat - Sun:</p>
              <p>11am - 4pm</p>
            </div>
          </li>
        </ul>
      </div>

      {/* Contact form */}
      <form className="space-y-5 w-2/5">
        <div className="flex space-x-5">
          {/* Firstname */}
          <input
            className="border-2 border-gray-500 py-2 px-4 rounded w-full"
            type="text"
            id="firstname"
            name="firstname"
            placeholder="First name"
          />

          {/* Lastname */}
          <input
            className="border-2 border-gray-500 py-2 px-4 rounded w-full"
            type="text"
            id="firstname"
            name="firstname"
            placeholder="Last name"
          />
        </div>

        {/* Email */}
        <input
          className="border-2 border-gray-500 py-2 px-4 rounded w-full"
          type="email"
          id="email"
          name="email"
          placeholder="Email"
        />

        {/* Subject */}
        <input
          className="border-2 border-gray-500 py-2 px-4 rounded w-full"
          type="text"
          id="subject"
          name="subject"
          placeholder="Subject"
        />

        {/* Message */}
        <textarea
          className="border-2 border-gray-500 py-2 px-4 rounded w-full"
          id="message"
          name="message"
          placeholder="Enter your message here..."
          rows={10}
        ></textarea>

        <button
          className="bg-gray-950 rounded w-full p-3 text-center text-white"
          type="submit"
          value="Submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
