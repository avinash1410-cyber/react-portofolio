import { useEffect,useState } from "react"
import Container from "../../components/shared/Container/Container";
import { Content ,ProjectCard, ProjectDes, ProjectTitle,ProjectWrapper} from './ProjectStyle';
import Text from "../../components/shared/Text/Text";
import Loader from "../../components/elements/Loader/Loader";
const Project = () => {

  const [repos,setRepos] = useState([]);
  const [loading ,setLoading] = useState(false);
  const [error,setError] = useState(false);

  useEffect(()=>{
    const getRepo = async()=>{      
      try {
        setError(false);
        setLoading(true);
        const respone = await fetch('https://api.github.com/users/mostafa-kheibary/repos');
        const data = await respone.json(); 
        setRepos(data.splice(0,9))
        setLoading(false);
      }
      catch (error) {
        setLoading(false)
        setError(true);    
      }
    }

    getRepo();
  },[])

const Projects = ()=>{
  return(
 <>
      <Text type='h4' size={3} weight={500}>My Project</Text>
        <ProjectWrapper>
        {repos.map((repo)=>(
          <ProjectCard key={repo.name}>
            <ProjectTitle>{repo.name}</ProjectTitle>
            <ProjectDes>{repo.description}</ProjectDes>
          </ProjectCard>
        ))}
        </ProjectWrapper>
 </> 
    );
}

  return (
    <Container>
      <Content 
      key='page3'
      initial={{y:'5rem', opacity: 0 }}
      animate={{y:0, opacity: 1 }}
      exit={{y:'-5rem', opacity: 0 }}
      >
        {loading ? <Loader /> : <Projects/>}
        {error && <Text type='p' size={2} weight={300}>your internet have issus</Text> }
      </Content>
    </Container>
  )
}

export default Project