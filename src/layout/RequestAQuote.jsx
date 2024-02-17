import RequestAQuoteForm from "./RequestAQuoteForm";
import "../styles/requestAQuote.scss";
import { FaReply } from "react-icons/fa";
import { IoCallSharp } from "react-icons/io5";
const RequestAQuote = () => {
  return (
    <div className="container-fluid requestAQuote row ">
      <div className="  requestQuestL col-lg-8 col-12 ">
        <h5 className="heading1">REQUEST A QUOTE</h5>
        <h1 className="fw-bolder ">
          Need A Free Quote? Please Feel Free to Contact Us
        </h1>
        <div className="d-flex justify-content-between">
          <h6>
            <FaReply className=" icons me-2 fs-4" />
            Reply within 24 hours
          </h6>
          <h6>
            <IoCallSharp className=" icons me-2 fs-4" />
            24 hrs telephone support
          </h6>
        </div>
        <p className="text-secondary">
          Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd
          ipsum. Dolor ea et dolore et at sea ea at dolor, justo ipsum duo rebum
          sea invidunt voluptua. Eos vero eos vero ea et dolore eirmod et.
          Dolores diam duo invidunt lorem. Elitr ut dolores magna sit. Sea
          dolore sanctus sed et. Takimata takimata sanctus sed.
        </p>
        <div className="d-flex ">
          <IoCallSharp className="contactIcon me-4" />

          <div>
            <h5>Call to ask any question</h5>
            <h4 className="Contact fw-bold">+012 345 6789</h4>
          </div>
        </div>
      </div>
      <div className="requestAQuoteForm col-lg-4 col-12 ">
        <RequestAQuoteForm />
      </div>
    </div>
  );
};

export default RequestAQuote;
