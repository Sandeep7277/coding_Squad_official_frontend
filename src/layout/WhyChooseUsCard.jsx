import "../styles/whyChooseUs.scss";
import { PropTypes } from "prop-types";
const WhyChooseUsCard = (props) => {
  const icons = props.icons;
  const title = props.title;
  const description = props.description;

  return (
    <div className="WhyChooseUsCard d-flex flex-column ">
      <div className="cardIcon">{icons}</div>
      <h2 className="cardTitle">{title}</h2>
      <p className="cardDescription">{description}</p>
    </div>
  );
};

WhyChooseUsCard.propTypes = {
  icons: PropTypes.icons,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default WhyChooseUsCard;
