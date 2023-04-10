import { Container } from '@mantine/core'
import Hero from './Hero'
import Work from './Work'

export default function Home() {
  return (
    <>
      <Hero />
      <Container
        display="grid"
        size="lg"
        mt="4rem"
        px={{ base: 'md', xs: '4rem' }}
        sx={(theme) => ({
          [`@media (min-width: ${theme.breakpoints.sm})`]: {
            gridTemplateColumns: 'repeat(3, 1fr)',
          },
        })}
      >
        <Work />
      </Container>
    </>
  )
}

//   <a href="/pdf/CV0321.pdf" className="home-header__btn" target="_blank">
//     Open my CV
//   </a>
