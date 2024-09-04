import { styled, Box, Text } from '@ignite-ui/react'

export const Form = styled(Box, {
  display: 'grid',
  gridTemplateColumns: '1fr auto',
  marginTop: '$4',
  padding: '$4',
  gap: '$2',

  '@media(max-width: 600px)': {
    gridTemplateColumns: '1fr',
  },
})

export const FormAnnotations = styled('div', {
  marginTop: '$2',

  [`> ${Text}`]: {
    color: '$gray200',
  },
})
