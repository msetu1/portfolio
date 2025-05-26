"use client"
import { BsGithub } from 'react-icons/bs';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

const Contact = () => {
    return (
        <div className="max-w-6xl mx-auto my-20 border">
            <h2 className="text-3xl font-bold mb-10 text-center text-[#6C63FF]"> Contact<span className="text-white"> Me</span> 
             </h2>
            <div className="flex flex-col lg:flex-row gap-10 ">
            <div className="w-[40%] flex items-center justify-center ">
  <div className=" w-full space-y-8 border border-[#6C63FF] p-6">
    {/* Location */}
    <div className="flex items-start gap-4">
      <div className="bg-[#6C63FF] p-3 rounded">
        <FaMapMarkerAlt className=" text-xl" />
      </div>
      <div>
        <h3 className="text-lg font-semibold">Location:</h3>
        <p className="text-sm">Dhaka, Bangladesh</p>
      </div>
    </div>

    {/* Email */}
    <div className="flex items-start gap-4">
      <div className="bg-[#6C63FF] p-3 rounded">
        <FaEnvelope className=" text-xl" />
      </div>
      <div>
        <h3 className="text-lg font-semibold">Email:</h3>
        <p className="text-sm break-words">abidahmedmahin21@gmail.com</p>
      </div>
    </div>

    {/* Phone */}
    <div className="flex items-start gap-4">
      <div className="bg-[#6C63FF] p-3 rounded">
        <FaPhone className=" text-xl" />
      </div>
      <div>
        <h3 className="text-lg font-semibold">WhatsApp or Call:</h3>
        <p className="text-sm">+8801761332232</p>
      </div>
    </div>
    <div className="flex space-x-3 text-2xl mt-2">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <FaFacebook className="hover:text-blue-500" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <FaTwitter className="hover:text-sky-400" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <BsGithub className="hover:text-sky-400" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <FaLinkedin className="hover:text-blue-400" />
                </a>
              </div>
  </div>
</div>

                    <div className="w-[60%]">
                <form className="w-full max-w-3xl space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block mb-1">Your Name</label>
                        <input
                        type="text"
                        className="w-full px-4 py-2 bg-black border border-[#6C63FF] rounded outline-none text-white"
                        placeholder="Type your name"
                        />
                    </div>
                    <div>
                        <label className="block mb-1">Your Email</label>
                        <input
                        type="email"
                        className="w-full px-4 py-2 bg-black border border-[#6C63FF] rounded outline-none text-white"
                        placeholder="Enter your email"
                        />
                    </div>
                    </div>

                    <div>
                    <label className="block mb-1">Your Phone</label>
                    <input
                        type="number"
                        className="w-full px-4 py-2 bg-black border border-[#6C63FF] rounded outline-none text-white"
                        placeholder="Your Phone Number"
                    />
                    </div>

                    <div>
                    <label className="block mb-1">Message</label>
                    <textarea
                        rows={4}
                        className="w-full px-4 py-2 bg-black border border-[#6C63FF] rounded outline-none text-white"
                        placeholder="Write your message"
                    ></textarea>
                    </div>

                    <button className="px-4 py-2 rounded border-2 border-[#6C63FF]  font-semibold bg-transparent hover:bg-[#6C63FF] hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105">
            Send Message
            </button>
                </form>
                    </div>
            </div>
        </div>
    );
};

export default Contact;