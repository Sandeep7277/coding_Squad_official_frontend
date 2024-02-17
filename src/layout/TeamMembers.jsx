import "../styles/TeamMember.scss";
import TeamMemberCard from "./TeamMemberCard";
const TeamMembers = () => {
  return (
    <div>
      <div className=" TeamMembers text-center WhyChooseUsHeader mt-4">
        <h5>TEAM MEMBERS</h5>
        <h1 className="fw-bolder">
          Professional Stuffs Ready to <br />
          Help Your Business
        </h1>
      </div>
      <div className="text-center d-flex TeamMemberCard justify-content-between flex-wrap">
        <div>
          <TeamMemberCard
            pic={<img className="w-100" src="/images/sandeep.jpg" alt="" />}
            name="Sandeep Kumar"
            designation="UI Developer"
          />
        </div>
        <div>
          <TeamMemberCard
            pic={<img className="w-100" src="/images/sandeep.jpg" alt="" />}
            name="Sandeep Kumar"
            designation="UI Developer"
          />
        </div>
        <div>
          <TeamMemberCard
            pic={<img className="w-100" src="/images/sandeep.jpg" alt="" />}
            name="Sandeep Kumar"
            designation="UI Developer"
          />
        </div>
      </div>
    </div>
  );
};

export default TeamMembers;
