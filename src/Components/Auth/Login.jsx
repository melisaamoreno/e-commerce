import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  VStack,
  Input,
  Button,
  useToast,
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { object, string } from 'yup'
import { useDispatch } from 'react-redux'
import { login } from '../../redux/slices/authSlice'

const schema = object({
  email: string()
    .email('Por favor ingrese un email válido')
    .required('Este campo es requerido'),
  password: string()
    .min(8, 'La contraseña debe tener más de 8 caracteres')
    .required('Este campo es requerido'),
})

export const Login = () => {
  const toast = useToast()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const dispatch = useDispatch()
  const onSubmit = async ({ email, password }) => {
    const response = await fetch('http://localhost:1337/api/auth/local', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ identifier: email, password }),
    })
    const user = await response.json()
    dispatch(login(user))

    toast({
      title: `Bienvenid@ ${user.user.username} `,
      description: 'Que bueno verte de nuevo ;)',
      status: 'success',
      duration: 9000,
      isClosable: true,
    })
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
