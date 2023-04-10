import Link from 'next/link'
import {
  ActionIcon,
  useMantineColorScheme,
  Header,
  Container,
  Group,
  Burger,
  rem,
  Avatar,
  NavLink,
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { SunIcon, MoonIcon } from '@heroicons/react/20/solid'
import { useRouter } from 'next/router'

type Navbar = {
  link: string
  label: string
}[]

const navbar: Navbar = [
  { link: '/about', label: 'About' },
  { link: '/projects', label: 'Projects' },
  { link: '/uses', label: 'Uses' },
]

const Navbar = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()
  const dark = colorScheme === 'dark'
  const router = useRouter()

  const [opened, { toggle }] = useDisclosure(false)

  const items = navbar.map((item) => (
    <Link key={item.label} href={item.link} style={{ textDecoration: 'none' }}>
      <NavLink
        label={item.label}
        active={router.pathname === item.link}
        styles={(theme) => ({
          root: {
            fontWeight: 600,
            borderBottom: '1px solid transparent',
            transition: 'all 200ms',

            '&:hover': {
              backgroundColor: 'transparent',
              color: `${
                theme.colorScheme === 'dark'
                  ? theme.colors.orange[4]
                  : theme.colors.orange[6]
              }`,
            },

            '&[data-active]': {
              backgroundColor: 'transparent',
              color: `${
                theme.colorScheme === 'dark'
                  ? theme.colors.orange[4]
                  : theme.colors.orange[6]
              }`,
              borderColor: `${
                theme.colorScheme === 'dark'
                  ? theme.colors.orange[4]
                  : theme.colors.orange[6]
              }`,
            },

            '&[data-active]:hover': {
              backgroundColor: 'transparent',
            },
          },
        })}
      />
    </Link>
  ))

  return (
    <Header height="4rem" pos="sticky">
      <Container
        size="lg"
        px={{ base: 'md', xs: '4rem' }}
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '100%',
        }}
      >
        <Link href="/">
          <Avatar
            src="/images/avatar.webp"
            size="2.125rem"
            radius="10rem"
            alt="it's me"
          />
        </Link>

        <Group display={{ base: 'none', sm: 'flex' }} spacing="0" px="md">
          {items}
        </Group>
        <Burger
          display={{ base: 'block', sm: 'none' }}
          opened={opened}
          onClick={toggle}
          size="sm"
        />
        <ActionIcon
          display={{ base: 'none', sm: 'flex' }}
          variant="subtle"
          onClick={() => toggleColorScheme()}
          title="Toggle dark mode"
          size="lg"
        >
          {dark ? (
            <SunIcon width="1.5rem" height="1.5rem" />
          ) : (
            <MoonIcon width="1.5rem" height="1.5rem" />
          )}
        </ActionIcon>
      </Container>
    </Header>
  )
}

export default Navbar
