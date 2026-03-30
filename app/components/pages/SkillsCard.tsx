import React, { FC } from "react";

type Props = {
  item: any;
};

const SkillsCard: FC<Props> = ({ item }) => {
  return (
    <div className="skill-card">
      <div className="skill-card-icon">
        <img src={item.img} alt={`${item.name} icon`} className="skill-card-img" />
      </div>

      <h3 className="skill-card-title">{item.name}</h3>

      <div className="skill-card-underline" aria-hidden="true"></div>
    </div>
  );
};

export default SkillsCard;