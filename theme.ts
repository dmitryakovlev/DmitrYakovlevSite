import type { MantineThemeOverride } from '@mantine/core'
import { createStyles, rem, em } from '@mantine/core'

export const theme: MantineThemeOverride = {
  colorScheme: 'light',
  fontFamily: 'Prompt',
  // primaryColor: '#181822',
  // primaryShade: 5,
  colors: {
    gray: [
      '#F7FAFC',
      '#EDF2F7',
      '#E2E8F0',
      '#CBD5E0',
      '#A0AEC0',
      '#718096',
      '#4A5568',
      '#2D3748',
      '#1A202C',
      '#171923',
    ],
  },
  cursorType: 'pointer',
  defaultRadius: 'lg',
}
