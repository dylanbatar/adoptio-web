import { Logo } from "../../../components/logo";
import { AiOutlineTwitter, AiFillLinkedin, AiFillGithub } from "react-icons/ai";

export const Footer = () => {
  return (
    <footer>
      <div className="container mx-auto my-6">
        <div className="lg:grid grid-cols-4 gap-4 p-5">
          <div className="">
            <Logo />
          </div>
          <div className="">
            <h3 className="text-indigo-900 text-2xl mb-2">About</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Architecto quibusdam amet nisi. A impedit recusandae accusantium
              officia minima! Esse error asperiores corporis similique eveniet
              commodi perspiciatis sint dolores magnam distinctio.
            </p>
          </div>
          <div className="">
            <h3 className="text-indigo-900 text-2xl mb-2">Contact</h3>
            <a className="block">dylanbatar2@gmail.com</a>
            <a className="block">xxx-xxx-xxx</a>
          </div>
          <div className="social">
            <br className="mb-2"></br>
            <ul className="flex justify-center items-center">
              <li className="bg-sky-300 mr-2 p-2 text-white rounded-lg transition delay-75 hover:bg-orange-500 cursor-pointer">
                <a href="https://www.linkedin.com/in/dylan-batista-617027178/">
                  <AiFillLinkedin size={24} />
                </a>
              </li>
              <li className="bg-sky-300 mr-2 p-2 text-white rounded-lg transition delay-75 hover:bg-orange-500 cursor-pointer">
                <a href="https://twitter.com/dylanbatar">
                  <AiOutlineTwitter size={24} />
                </a>
              </li>
              <li className="bg-sky-300 p-2 text-white rounded-lg transition delay-75 hover:bg-orange-500 cursor-pointer">
                <a href="https://github.com/dylanbatar">
                  <AiFillGithub size={24} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
