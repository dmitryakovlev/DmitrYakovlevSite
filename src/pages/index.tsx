import { ActionIcon, useMantineColorScheme } from '@mantine/core'
import { SunIcon, MoonIcon } from '@heroicons/react/20/solid'

import Home from '@/components/home'

export default function HomePage() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()
  const dark = colorScheme === 'dark'
  return (
    <>
      <ActionIcon
        variant="outline"
        color={dark ? 'yellow' : 'blue'}
        onClick={() => toggleColorScheme()}
        title="Toggle color scheme"
      >
        {dark ? <SunIcon /> : <MoonIcon />}
      </ActionIcon>
      <Home />
    </>
  )
}
