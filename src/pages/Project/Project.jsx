import { useEffect, useState, useRef } from 'react';
import Container from '../../components/shared/Container/Container';
import {
  Content,
  ProjectCard,
  ProjectDes,
  ProjectTitle,
  ProjectWrapper,
  Link,
} from './ProjectStyle';
import Text from '../../components/shared/Text/Text';
import Loader from '../../components/elements/Loader/Loader';
const Project = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const isMount = useRef(true);

  useEffect(() => {
    const getRepo = async () => {
      try {
        setError(false);
        setLoading(true);
        const respone = await fetch(
          'https://api.github.com/users/mostafa-kheibary/repos?type=public'
        );
        const data = await respone.json();
        if (isMount.current === true) {
          setRepos(data.splice(11, 20));
          setLoading(false);
        }
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    };

    getRepo();
    return () => {
      isMount.current = false;
    };
  }, []);

  const Projects = () => {
    return (
      <>
        <Text type='h4' size={3} weight={500}>
          My Project
        </Text>
        <ProjectWrapper>
          {repos.map((repo) => (
            <ProjectCard key={repo.name}>
              <ProjectTitle>{repo.name}</ProjectTitle>
              <ProjectDes>{repo.description}</ProjectDes>
            </ProjectCard>
          ))}
          <Link href='https://www.github.com/mostafa-kheibary?tab=repositories'>
            {'More on Github >'}
          </Link>
        </ProjectWrapper>
      </>
    );
  };

  return (
    <Container>
      <Content
        key='page3'
        initial={{ y: '5rem', opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: '-5rem', opacity: 0 }}
      >
        {loading ? <Loader /> : <Projects />}
        {error && (
          <Text type='p' size={2} weight={300}>
            your internet have issus
          </Text>
        )}
      </Content>
    </Container>
  );
};

export default Project;
