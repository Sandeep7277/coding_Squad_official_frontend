import TopHeader from "../layout/TopHeader";
import MainHeader from "../layout/MainHeader";
import Facts from "../layout/Facts";
import WhyChooseUs from "../layout/WhyChooseUs";
import RequestAQuote from "../layout/RequestAQuote";
import "bootstrap/dist/css/bootstrap.min.css";
import TeamMembers from "../layout/TeamMembers";
import Footer from "../layout/Footer";
const Home = () => {
  return (
    <div>
      <TopHeader />
      <MainHeader />
      <Facts />
      <WhyChooseUs />
      <RequestAQuote />
      <TeamMembers />
      <Footer />
      <div className="m-4 p-4">hi</div>
    </div>
  );
};

export default Home;
