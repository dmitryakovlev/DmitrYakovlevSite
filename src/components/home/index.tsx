import {
  ActionIcon,
  Anchor,
  Avatar,
  Container,
  Flex,
  Text,
  Title,
} from '@mantine/core'
import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
} from '@tabler/icons-react'
import Head from 'next/head'

import avatar from './avatar.webp'

interface ISocialLink {
  id: number
  url: string
  icon: JSX.Element
}

const socialLink: ISocialLink[] = [
  {
    id: 0,
    url: 'https://github.com/dmitryakovlev',
    icon: <IconBrandGithub size="1.5rem" />,
  },
  {
    id: 1,
    url: 'https://www.linkedin.com/in/dmitryakovlev/',
    icon: <IconBrandLinkedin size="1.5rem" />,
  },
  {
    id: 2,
    url: 'https://www.facebook.com/dmitr.yakovlev',
    icon: <IconBrandFacebook size="1.5rem" />,
  },
  {
    id: 3,
    url: 'https://www.instagram.com/dmitr.yakovlev/',
    icon: <IconBrandInstagram size="1.5rem" />,
  },
]

export default function Home() {
  return (
    <>
      <Container size="lg" px={{ base: 'md', xs: '4rem' }}>
        <Flex direction="column" maw="40rem">
          <Avatar
            src="/images/avatar.webp"
            size="xl"
            radius="10rem"
            alt="it's me"
          />
          <Title
            mt="lg"
            sx={(theme) => ({
              fontSize: '2rem',

              [`@media (min-width: ${theme.breakpoints.sm})`]: {
                fontSize: '3rem',
              },
            })}
          >
            UX/UI Designer & Frontend Developer
          </Title>
          <Text mt="lg" c="dimmed">
            {`
            Hi, I'm Dmitriy Yakovlev! Here you can see my portfolio works and
            read a little about me. You can also contact me with a proposal
            for cooperation. I'm pleased to take a part in interesting
            projects. Let's start!
            `}
          </Text>
          <Flex mt="lg" gap="sm">
            {socialLink.map(({ ...props }, key) => (
              <Anchor key={key} href={props.url} target="_blank">
                <ActionIcon size="lg" c="dimmed">
                  {props.icon}
                </ActionIcon>
              </Anchor>
            ))}
          </Flex>
        </Flex>
      </Container>
      {/* <Skills />
      <Experience />
      <About />
      <Portfolio /> */}
    </>
  )
}

//   <a href="/pdf/CV0321.pdf" className="home-header__btn" target="_blank">
//     Open my CV
//   </a>
