import "../styles/home.scss";
import { MdLocationOn, MdCall, MdMail } from "react-icons/md";
import {
  TiSocialTwitter,
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialInstagram,
  TiSocialYoutube,
} from "react-icons/ti";

const TopHeader = () => {
  return (
    // <div className="">
    <section className="container-fluid top-header-section d-flex justify-content-between  py-2 flex-wrap">
      <div className="  d-flex flex-wrap">
        <div className="p-2">
          <MdLocationOn />
          <span className="p-1">123 Street, New York, USA</span>
        </div>
        <div className="p-2">
          <MdCall />
          <span className="p-1"> +012 345 6789</span>
        </div>
        <div className="p-2">
          <MdMail />
          <span className="p-1">info@example.com</span>
        </div>
      </div>

      <div className=" ">
        <ul className=" list-unstyled social-links mb-0 d-flex">
          <li className="">
            <a href="#">
              <TiSocialTwitter />
            </a>
          </li>
          <li>
            <a href="#">
              <TiSocialFacebook />
            </a>
          </li>
          <li>
            <a href="#">
              <TiSocialLinkedin />
            </a>
          </li>
          <li>
            <a href="#">
              <TiSocialInstagram />
            </a>
          </li>
          <li>
            <a href="#">
              <TiSocialYoutube />
            </a>
          </li>
        </ul>
      </div>
    </section>
    // </div>
  );
};

export default TopHeader;
