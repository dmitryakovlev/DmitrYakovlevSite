import { Avatar, Card, Code, Flex, Text, Title } from '@mantine/core'

interface IWorkPosition {
  date: string
  name: string
  position: string
  logo?: string
  desc?: string[]
}

const workPosition: IWorkPosition[] = [
  {
    date: 'Jan 2014 - May 2018',
    name: 'Studio F8',
    position: 'Photo retoucher / UI designer',
    logo: '/images/logos/f8.png',
    desc: ['Photoshop', 'Capture One'],
  },
  {
    date: 'May 2018 - Mar 2019',
    name: 'Diehl Controls',
    position: 'Industrial UX & UI designer',
    logo: '/images/logos/diehl.png',
    // desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus et excepturi aspernatur fugiat facilis incidunt quis!',
  },
  {
    date: 'Apr 2019 - Mar 2022',
    name: 'SignOnTheGo, LLC',
    position: 'Design developer',
    logo: '/images/logos/smartech.png',
    //     desc: `— UX / UI design for development applications
    // — Implementation of the frontend part of internet solutions (Razor, CSS, C#)
    // — Cooperation in a team with programmers
    // — Responsibility for quality of code, accuracy of displaying and functioning of frontend code in various browsers`,
  },
  {
    date: 'Feb 2022 - Present',
    name: 'Igluu.cz',
    position: 'Frontend developer / UX & UI designer',
    logo: '',
    //     desc: `— Implementation of the frontend part of internet solutions (React, NextJS, Tailwind, CSS-in-component, GraphQL, Node.js,)
    // — Mentoring and support for UX and UI
    // — Preparing components using Storybook
    // — Responsibility for quality of code, accuracy of displaying and functioning of frontend code in various browsers`,
  },
  {
    date: 'Jul 2022 - Present',
    name: 'Scalo',
    position: 'Frontend developer / UX & UI designer',
    logo: '',
    // desc: 'Quos consequuntur fugiat vitae, commodi corrupti, maiores natus quis vel eligendi ab veritatis ducimus!',
  },
]

const WorkPosition = ({ date, name, position, logo, desc }: IWorkPosition) => {
  return (
    <>
      <Flex direction="column" gap="sm">
        <Text
          size="xs"
          pl="sm"
          sx={(theme) => ({
            color: `${
              theme.colorScheme === 'dark'
                ? theme.colors.orange[4]
                : theme.colors.orange[6]
            }`,
            borderLeft: 'solid 2px',
          })}
        >
          {date}
        </Text>
        <Flex align="center" gap="sm">
          <Avatar
            size="lg"
            style={{
              flexShrink: 0,
            }}
          />
          <Flex
            direction="column"
            style={{
              flexGrow: 1,
            }}
          >
            <Text fw="bold">{name}</Text>
            <Text size="sm">{position}</Text>
          </Flex>
        </Flex>
        <Flex c="dimmed" wrap="wrap" align="center">
          Technologies used:{' '}
          {desc?.map((desc, key) => (
            <Code m=".25rem" key={key}>
              {desc}
            </Code>
          ))}
        </Flex>
        {/* <Text c="dimmed">{desc}</Text> */}
      </Flex>
    </>
  )
}

const Work = () => (
  <>
    <Card
      sx={(theme) => ({
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
        backgroundColor: `${
          theme.colorScheme === 'dark'
            ? theme.colors.dark[6]
            : theme.colors.gray[0]
        }`,
        [`@media (min-width: ${theme.breakpoints.sm})`]: {
          gridColumnStart: 1,
          gridColumnEnd: 3,
          padding: '1.5rem',
        },
      })}
    >
      <Title order={3}>Work experience</Title>
      <Flex direction="column-reverse" gap="2rem">
        {workPosition.map((item, key) => (
          <WorkPosition {...item} key={key} />
        ))}
      </Flex>
    </Card>
  </>
)

export default Work
