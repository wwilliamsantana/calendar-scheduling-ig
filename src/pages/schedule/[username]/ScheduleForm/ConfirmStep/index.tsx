import { Button, Text, TextArea, TextInput } from '@ignite-ui/react'
import { ConfirmForm, FormActions, FormError, FormHeader } from './styles'
import { CalendarBlank, Clock } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const confirmStepSchema = z.object({
  name: z.string().min(3, 'O nome precisa no mínimo 3 caracteres'),
  email: z.string().email({ message: 'Digite ume-mail válido' }),
  observations: z.string().nullable(),
})

type confirmStepProps = z.infer<typeof confirmStepSchema>

export function ConfirmStep() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<confirmStepProps>({
    resolver: zodResolver(confirmStepSchema),
  })

  function handleConfirmScheduling(data: confirmStepProps) {
    console.log(data)
  }

  return (
    <ConfirmForm as="form" onSubmit={handleSubmit(handleConfirmScheduling)}>
      <FormHeader>
        <Text>
          <CalendarBlank />
          22 de setembro
        </Text>
        <Text>
          <Clock />
          22:00
        </Text>
      </FormHeader>

      <label>
        <Text size="sm">Nome completo</Text>
        <TextInput placeholder={'Seu nome'} {...register('name')} />
        {errors.name && <FormError size="sm">{errors.name.message}</FormError>}
      </label>
      <label>
        <Text size="sm">Endereço de e-mail</Text>
        <TextInput
          placeholder={'johndoe@example.com'}
          type="email"
          {...register('email')}
        />
        {errors.email && (
          <FormError size="sm">{errors.email.message}</FormError>
        )}
      </label>

      <label>
        <Text size="sm">Observações</Text>
        <TextArea {...register('observations')} />
      </label>

      <FormActions>
        <Button type="button" variant="tertiary">
          Cancelar
        </Button>
        <Button type="submit" disabled={isSubmitting}>
          Confirmar
        </Button>
      </FormActions>
    </ConfirmForm>
  )
}
