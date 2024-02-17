import { useState } from "react";
import "../styles/facts.scss";
import { FaUsers, FaCheck, FaAward } from "react-icons/fa";
const Facts = () => {
  const [fact1] = useState("Happy Cients");
  const [fact2] = useState("Project Done");
  const [fact3] = useState("Win Awards");
  const [clientCount] = useState(12345);

  return (
    <section className=" facts  row mx-0 ">
      <div className="happyClients col-lg-4 col-12">
        {FactsItem(<FaUsers className=" icon" />, fact1, clientCount)}
      </div>
      <div className="projectDone col-lg-4 col-12">
        {FactsItem(<FaCheck className="icon2" />, fact2, clientCount)}
      </div>
      <div className="winAwards col-lg-4 col-12">
        {FactsItem(<FaAward className=" icon" />, fact3, clientCount)}
      </div>
    </section>
  );
};

const FactsItem = (icons, fact, clientCount) => {
  return (
    <div>
      <div className="d-flex justify-content-center align-items-center p-2">
        <div className="p-4">{icons}</div>
        <div>
          <div className="fs-5">{fact}</div>
          <div className="fs-2 fw-bold">{clientCount}</div>
        </div>
      </div>
    </div>
  );
};

export default Facts;
