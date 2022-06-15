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
      title: 'Bolna social media web application',
      description:
        'That is a kind of socila media web application in which you can chat to pepole on a certd=ain scpecifoc topics',
        code: 'https://github.com/avinash1410-cyber/socialapp-BOLNA-',
        preview: 'http://avinash8654340.pythonanywhere.com/',
    },
    {
      title: 'Video chat application',
      description:
        'In this project two pepole can talk to each other with the controllling features aslo present in the Application',
      code: 'https://github.com/avinash1410-cyber/VC',
      preview: 'https://github.com/avinash1410-cyber/VC',
    },
    {
      title: 'E-commerce API',
      description:
        'That is the backend API for a a e commerce web application wiht all modern features',
      code: 'https://github.com/avinash1410-cyber/E-commerec-API',
      preview:
        'https://github.com/avinash1410-cyber/E-commerec-API',
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
          <Link href='https://github.com/avinash1410-cyber?tab=repositories'>
            {'More on Github >'}
          </Link>
        </ProjectWrapper>
      </Content>
    </Container>
  );
};

export default Project;
