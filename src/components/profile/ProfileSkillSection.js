import React from 'react';
import SkillBar from 'react-skillbars';
import ScrollAnimation from 'react-animate-on-scroll';

const SKILLS = [
  {type: "Java", level: 86},
  {type: "Javascript", level: 78},
  {type: "Spring", level: 75},
  {type: "Python", level: 70},
  {type: "ReactJS", level: 66},
  {type: "Docker", level: 70},
  {type: "AWS", level: 65},
  {type: "ELK", level: 60},
  {type: "NoSQL", level: 57},
  {type: "C#", level: 50}
];

const colors = {
  "bar": "#3498db",
  "title": {
    "text": "#fff",
    "background": "#2980b9"
  }
};

const ProfileSkillSection = () => {
  return (
    <div className="col-xs-6 col-lg-6">
      <ScrollAnimation animateIn='fadeInRight' animateOnce={true} offset={500}>
        <SkillBar skills={SKILLS} height={28} offset={0} colors={colors}/>
      </ScrollAnimation>
    </div>
  );
};

export default ProfileSkillSection;