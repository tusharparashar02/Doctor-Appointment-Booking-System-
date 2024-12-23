import React from "react";

const Contact = () => {
  const contactInfo = [
    { icon: "mail", text: "heliumdigitalhealthcare@example.com" },
    { icon: "phone", text: "180-548-2588" },
    { icon: "Developer", text: "Group-110, GLA UNIVERSITY" },
  ];

  return (
    <div>
      <div className="max-w-5xl max-lg:max-w-3xl mx-auto bg-white my-6 font-[sans-serif]">
        <div className="text-center px-6">
          <h2 className="text-gray-800 text-3xl font-extrabold">
            Contact Us 😊
          </h2>
          <p className="text-sm text-gray-500 mt-4">
            Need trusted medical advice? Looking for certified doctors to
            provide expert healthcare guidance?
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-4 p-2 shadow rounded-lg mt-12">
          {/* Contact Information */}
          <div className="bg-[#011c2b] rounded-lg p-6">
            <h2 className="text-xl text-white">Contact Information</h2>
            <p className="text-sm text-gray-300 mt-4">
              Struggling with long wait times? Want quick and convenient access
              to consultations and appointments?
            </p>
            <ul className="mt-16 space-y-8">
              {contactInfo.map((info, index) => (
                <li key={index} className="flex items-center">
                  <span className="text-white">{info.icon}</span>
                  <a href="#" className="text-sm text-gray-500 ml-4">
                    {info.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Other sections can go here */}
          <div className="bg-gray-100 rounded-lg p-6">
            <h2 className="text-xl text-gray-800">Send a Message</h2>
            <form className="space-y-4 mt-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-2 border border-gray-300 rounded"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-2 border border-gray-300 rounded"
              />
              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full p-2 border border-gray-300 rounded"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
              >
                Submit
              </button>
            </form>
          </div>

          {/* FAQ or Additional Info Section */}
          <div className="bg-gray-100 rounded-lg p-6">
            <h2 className="text-xl text-gray-800">
              Frequently Asked Questions
            </h2>
            <ul className="space-y-4 mt-4">
              <li>
                <strong>How can I contact you?</strong>
                <p className="text-sm text-gray-500">
                  You can reach us via email or phone provided above.
                </p>
              </li>
              <li>
                <strong>What are your working hours?</strong>
                <p className="text-sm text-gray-500">
                  Monday to Sunday, 10:00 AM to 9:00 PM.
                </p>
              </li>
              <li>
                <strong>Do you provide remote consultations?</strong>
                <p className="text-sm text-gray-500">
                  Yes, reach out to us to schedule an appointment.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
