import WhyChooseUsHeader from "./WhyChooseUsHeader";
import WhyChooseUsCard from "./WhyChooseUsCard";
import { FaCubes } from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <div className="WhyChooseUs mx-0 px-0 ">
      <WhyChooseUsHeader />
      <div className="row mt-4 mx-0">
        <div className=" col-lg-4 col-12">
          <WhyChooseUsCard
            icons={<FaCubes />}
            title="Best In Industry"
            description="Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et diam dolor"
          />
          <WhyChooseUsCard
            icons={<FaCubes />}
            title={"Best In Industry"}
            description={
              "Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et diam dolor"
            }
          />
        </div>
        <div className=" col-lg-4 col-12">
          <img style={{ width: "100%" }} src="/images/feature.jpg" alt="" />
        </div>
        <div className="col-lg-4 col-12">
          <WhyChooseUsCard
            icons={<FaCubes />}
            title={"Best In Industry"}
            description={
              "Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et diam dolor"
            }
          />
          <WhyChooseUsCard
            icons={<FaCubes />}
            title={"Best In Industry"}
            description={
              "Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et diam dolor"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
