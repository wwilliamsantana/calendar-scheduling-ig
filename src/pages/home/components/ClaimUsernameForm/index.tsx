import { Button, Text, TextInput } from '@ignite-ui/react'
import { Form, FormAnnotations } from './styles'
import { ArrowRight } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const claimUsernameFormSchema = z.object({
  username: z
    .string()
    .min(3, { message: 'O usuário precisa ter no mínino 3 letras' })
    .regex(/^([a-z\\\\-]+)$/i, {
      message: 'Permitido apenas letras e hífens.',
    })
    .transform((username) => username.toLowerCase()),
})

type claimUsernameProps = z.infer<typeof claimUsernameFormSchema>

export function ClaimUsernameForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<claimUsernameProps>({
    resolver: zodResolver(claimUsernameFormSchema),
  })

  function handleUsername(data: claimUsernameProps) {
    console.log(data.username)
  }

  return (
    <>
      <Form as="form" onSubmit={handleSubmit(handleUsername)}>
        <TextInput
          size={'sm'}
          placeholder={'seu-usuario'}
          prefix={'calendar.com/'}
          {...register('username')}
        />
        <Button size="sm" type="submit">
          Reservar
          <ArrowRight />
        </Button>
      </Form>
      <FormAnnotations>
        <Text size="sm">
          {errors.username
            ? errors.username.message
            : 'Digite o nome do usuário'}
        </Text>
      </FormAnnotations>
    </>
  )
}
