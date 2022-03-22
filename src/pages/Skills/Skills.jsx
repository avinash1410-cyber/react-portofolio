import { useRef } from "react";
import Text from "../../components/shared/Text/Text";
import SkillCard from "../../components/elements/skillCard/SkillCard";
import { SkillWrapper,Container } from "./SkillStyle";

const Skills = () => {
 
  const skills = useRef([
   'javaScript(ES6+)','React','html','css','styled-component','redux','tailwind'
 ]);
 
  return (
  <Container>
    <Text size={2} >Tolls that i use :</Text>
    <SkillWrapper>
      {skills.current.map((skill)=>(
        <SkillCard name={skill}/>
        ))}
    </SkillWrapper>
  </Container>
  )
}

export default Skills;