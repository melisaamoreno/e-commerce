import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  VStack,
  Input,
  Button,
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { object, string } from 'yup'

const schema = object({
  email: string()
    .email('Por favor ingrese un email válido')
    .required('Este campo es requerido'),
  password: string()
    .min(8, 'La contraseña debe tener más de 8 caracteres')
    .required('Este campo es requerido'),
})

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = async ({ email, password }) => {
    const response = await fetch(
      'https://strapiecommerce-production-4333.up.railway.app/api/auth/local',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ identifier: email, password }),
      }
    )
    const user = await response.json()
    console.log(user)
  }

  return (
    <>
      <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={errors.email}>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input id="email" {...register('email')} />
          <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={errors.password}>
          <FormLabel htmlFor="password">Password</FormLabel>
          <Input id="password" {...register('password')} />
          <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
        </FormControl>

        <Button
          type="submit"
          size="md"
          w="100%"
          colorScheme="blue"
          isLoading={isSubmitting}
        >
          Iniciar sesión
        </Button>
      </VStack>
    </>
  )
}
