import "../styles/footer.scss";
import { MdLocationOn, MdCall, MdMail } from "react-icons/md";
import { GoArrowRight } from "react-icons/go";
import { FaUserTie } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      <section className="footer mx-0">
        <div className="Footer row mx-0 ">
          <div className="col-lg-3 col-12 text-end">
            <div className="TFooter  text-center p-4 ">
              <div className="d-flex justify-content-center">
                <FaUserTie className="fs-1 me-2" />
                <h1 className="fw-bold">Startup</h1>
              </div>
              <div className="py-3">
                <p>
                  Lorem diam sit erat dolor elitr et, diam lorem justo amet
                  clita stet eos sit. Elitr dolor duo lorem, elitr clita ipsum
                  sea. Diam amet erat lorem stet eos. Diam amet et kasd eos duo.
                </p>
              </div>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control p-3"
                  placeholder="Your Email"
                  aria-describedby="button-addon2"
                ></input>
                <button
                  className="btn btn-primary "
                  type="submit"
                  id="signUpButton"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-12 p-4 mt-4">
            <h3 className="py-4">Get In Touch</h3>
            <div className="p-2  d-flex ">
              <MdLocationOn className="me-2" />
              <p>123 Street, New York, USA</p>
            </div>
            <div className="p-2 p-sm-0 d-flex">
              <MdMail className="me-2" />
              <p>info@example.com</p>
            </div>
            <div className="p-2 p-sm-0 d-flex">
              <MdCall className="me-2" />
              <p>+012 345 67890</p>
            </div>
          </div>
          <div className="col-lg-3 col-12 p-4 mt-4">
            <h3 className="py-4">Quick Links</h3>

            <ul className=" list-unstyled social-links mb-0 ">
              <li className="">
                <a href="#">
                  <GoArrowRight />
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <GoArrowRight />
                  <span>About Us</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <GoArrowRight />
                  <span>Our Services</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <GoArrowRight />
                  <span>Meet The Team</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <GoArrowRight />
                  <span>Latest Blog</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <GoArrowRight />
                  <span>Contact Us</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-12  p-4 mt-4">
            <h3 className="py-4">Popular Links</h3>

            <ul className=" list-unstyled social-links mb-0">
              <li className="">
                <a href="#">
                  <GoArrowRight />
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <GoArrowRight />
                  <span>About Us</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <GoArrowRight />
                  <span>Our Services</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <GoArrowRight />
                  <span>Meet The Team</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <GoArrowRight />
                  <span>Latest Blog</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <GoArrowRight />
                  <span>Contact Us</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="BFooter p-3 text-center fs-2">
          <p>
            © <a href=""> Your Site Name</a>. All Rights Reserved. Designed by
            <a href="">HTML Codex</a> Distributed By: <a href=""> ThemeWagon</a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Footer;
