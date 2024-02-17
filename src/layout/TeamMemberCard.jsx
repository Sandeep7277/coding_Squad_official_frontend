import "../styles/TeamMember.scss";
import { PropTypes } from "prop-types";
import {
  TiSocialTwitter,
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialInstagram,
} from "react-icons/ti";

const TeamMemberCard = (props) => {
  const pic = props.pic;
  const name = props.name;
  const designation = props.designation;

  // const ImgStyle = {
  //   backgroundImage: "url(" + pic + " )",
  // };
  return (
    <div className="TeamMemberCard">
      <div className="card-content ">
        <div className="cardPic">{pic}</div>
        <h2 className="cardName ">{name}</h2>
        <p className="cardDesignation">{designation}</p>
        <div className="  ">
          <ul className=" fs-3 list-unstyled social-links  d-flex justify-content-center">
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
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;

TeamMemberCard.propTypes = {
  pic: PropTypes.image,
  name: PropTypes.string,
  designation: PropTypes.string,
};
