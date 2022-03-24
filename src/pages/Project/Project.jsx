import { useEffect,useState } from "react"
import Container from "../../components/shared/Container/Container";
import { Content ,ProjectCard, ProjectDes, ProjectTitle} from './ProjectStyle';

const Project = () => {

  const [repos,setRepos] = useState([]);

  useEffect(()=>{
    const getRepo = async()=>{      
      try {
        const respone = await fetch('https://api.github.com/users/mostafa-kheibary/repos');
        const data = await respone.json(); 
        setRepos(data.splice(0,10))
      }
      catch (error) {
        console.log(error);    
      }
    }

    getRepo();
  },[])

  return (
    <Container>
      <Content>
        {repos.map((repo)=>(
          <ProjectCard key={repo.name}>
            <ProjectTitle>{repo.name}</ProjectTitle>
            <ProjectDes>{repo.description}</ProjectDes>
          </ProjectCard>
        ))}
      </Content>
    </Container>
  )
}

export default Project