import { Container, Flex, Text, Title } from '@mantine/core'

interface ISocialLink {
  id: number
  url: string
  className: string
}

const socialLink: ISocialLink[] = [
  {
    id: 0,
    url: 'https://github.com/dmitryakovlev',
    className: 'github',
  },
  {
    id: 1,
    url: 'https://www.linkedin.com/in/dmitryakovlev/',
    className: 'linkedin',
  },
  {
    id: 2,
    url: 'https://www.facebook.com/dmitr.yakovlev',
    className: 'facebook',
  },
  {
    id: 3,
    url: 'https://www.instagram.com/dmitr.yakovlev/',
    className: 'instagram',
  },
]

// const HeaderSocial: FC<ISocialLink> = ({ url, className }) => (
//   <a
//     href={url}
//     className={`home-header__social-img ${className}`}
//     target="_blank"
//   ></a>
// )

export default function Home() {
  return (
    <>
      <Container size="lg" px={{ base: 'md', xs: '4rem' }}>
        <Flex direction="column" maw="40rem">
          <Title
            sx={(theme) => ({
              fontSize: '2rem',

              [`@media (min-width: ${theme.breakpoints.sm})`]: {
                fontSize: '3.5rem',
              },
            })}
          >
            UX/UI Designer & Front-end Developer
          </Title>
          <Text mt="lg" c="dimmed">
            {`
            Hi, I'm Dmitriy Yakovlev! Here you can see my portfolio works and
            read a little about me. You can also contact me with a proposal
            for cooperation. I'm pleased to take a part in interesting
            projects. Let's start!
            `}
          </Text>
        </Flex>
      </Container>
      {/* <Skills />
      <Experience />
      <About />
      <Portfolio /> */}
    </>
  )
}

//   <h1 className="home-header__title">Hi, I&apos;m Dmitriy Yakovlev</h1>
//   <h2 className="home-header__subtitle">
//
//   </h2>
//   <p className="home-header__text">
//     Here you can see my portfolio works and read a little about me. You can
//     also contact me with a proposal for cooperation. I&apos;m pleased to
//     take a part in interesting projects. Let&apos;s start!
//   </p>
//   <div className="home-header__social">
//     {socialLink.map((param) => (
//       <HeaderSocial {...param} key={param.id} />
//     ))}
//   </div>
//   <a href="/pdf/CV0321.pdf" className="home-header__btn" target="_blank">
//     Open my CV
//   </a>
