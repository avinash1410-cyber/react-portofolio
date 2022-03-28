import { useRef } from 'react';

import Container from '../../components/shared/Container/Container';
import {
  Content,
  ProjectCard,
  ProjectDes,
  ProjectTitle,
  ProjectWrapper,
  Link,
  CardButtons,
  ButtonLink,
} from './ProjectStyle';
import Text from '../../components/shared/Text/Text';

const Project = () => {
  const projectData = useRef([
    {
      title: 'Todo App with React',
      description:
        'todo app created using by react and framer motion , local storage crud opration',
      preview: 'https://festive-leavitt-059597.netlify.app/',
      code: 'https://github.com/mostafa-kheibary/Todo-app-react',
    },
    {
      title: 'Github User Finder',
      description:
        'find and view all user in github using github api and react , managing state with context and reducers',
      code: 'https://github.com/mostafa-kheibary/githubFinder-react',
      preview: 'https://peaceful-franklin-ca998c.netlify.app/',
    },
    {
      title: 'Picture Finder',
      description:
        'find picture using unsplash API , managing state with context and reducers',
      code: 'https://github.com/mostafa-kheibary/picsFinder-react',
      preview:
        'https://picture-finder-react-j2q7n91xh-mostafa-kheibary.vercel.app/',
    },
  ]);

  const renderdProjects = () => {
    return projectData.current.map((pro) => {
      return (
        <ProjectCard key={pro.title}>
          <ProjectTitle>{pro.title}</ProjectTitle>
          <ProjectDes>{pro.description}</ProjectDes>
          <CardButtons>
            <ButtonLink
              href={pro.code}
              className='fa-solid fa-code'
            ></ButtonLink>
            <ButtonLink
              href={pro.preview}
              className='fa-solid fa-globe'
            ></ButtonLink>
          </CardButtons>
        </ProjectCard>
      );
    });
  };

  return (
    <Container>
      <Content
        key='page3'
        initial={{ y: '5rem', opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: '-5rem', opacity: 0 }}
      >
        <Text type='h4' size={3} weight={500}>
          My Project
        </Text>
        <ProjectWrapper>
          {renderdProjects()}
          <Link href='https://www.github.com/mostafa-kheibary?tab=repositories'>
            {'More on Github >'}
          </Link>
        </ProjectWrapper>
      </Content>
    </Container>
  );
};

export default Project;
