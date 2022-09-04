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
import { login } from '../../redux/slices/authSlice'
import { useDispatch } from 'react-redux'

const schema = object({
  username: string().required('Este campo es requerido'),
  email: string()
    .email('Por favor ingrese un email válido')
    .required('Este campo es requerido'),
  password: string()
    .min(8, 'La contraseña debe tener más de 8 caracteres')
    .required('Este campo es requerido'),
})

export const Register = () => {
  const toast = useToast()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const dispatch = useDispatch()

  const onSubmit = async ({ username, email, password }) => {
    const response = await fetch(
      'http://localhost:1337/api/auth/local/register',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password }),
      }
    )
    const data = await response.json()
    dispatch(login(data))
  }

  return (
    <>
      <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={errors.username}>
          <FormLabel htmlFor="username">User</FormLabel>
          <Input id="username" {...register('username')} />
          <FormErrorMessage>{errors.username?.message}</FormErrorMessage>
        </FormControl>

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
          onClick={() =>
            toast({
              title: 'Cuenta creada',
              description: 'Ahora podés ver todos nuestros productos',
              status: 'success',
              duration: 9000,
              isClosable: true,
            })
          }
        >
          Registrarse
        </Button>
      </VStack>
    </>
  )
}
