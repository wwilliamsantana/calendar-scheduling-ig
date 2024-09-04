import { Heading, Text } from '@ignite-ui/react'
import { Container, Hero, Preview } from './styles'
import Image from 'next/image'
import imagePreview from '../../assets/image-home.png'

export default function Home() {
  return (
    <Container>
      <Hero>
        <Heading as={'h1'} size="4xl">
          Agendamento descomplicado
        </Heading>
        <Text size="x1">
          Conecte seu calendário e permita que as pessoas marquem agendamentos
          no seu tempo livre.
        </Text>
      </Hero>
      <Preview>
        <Image
          src={imagePreview}
          height={400}
          quality={100}
          alt="Calendário simbolizando aplicação em funcionamento"
          priority
        />
      </Preview>
    </Container>
  )
}
