import { useRef } from "react";
import SkillCard from "../../components/elements/skillCard/SkillCard";
import { SkillWrapper,Content } from "./SkillStyle";
import Container from "../../components/shared/Container/Container";
import Text from "../../components/shared/Text/Text";
const Skills = () => {
 
  const skills = useRef([
   'javaScript(ES6+)','React','html','css','styled-component','redux','tailwind','sass','Git/Github',
 ]);
 
  return (
  <Container>
  <Content initial={{y:'5rem',opacity:0}} animate={{y:0,opacity:1}} exit={{y:'-5rem',opacity:0}}>
    <Text size={2} >Tolls that i use :</Text>
    <SkillWrapper>
      {skills.current.map((skill)=>(
        <SkillCard key={skill} name={skill}/>
        ))}
    </SkillWrapper>
  </Content>
  </Container>
  )
}

export default Skills;