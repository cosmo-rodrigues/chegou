import * as React from 'react';
import Link from 'next/link';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from '@mui/material';

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const loginUserFormSchema = z.object({
  email: z
    .string()
    .nonempty('O email é obrigatório')
    .email('Formato de email inválido'),
  password: z.string().min(6, 'A senha precisa ter no mínimo 6 caracteres'),
});

type LoginUserFormData = z.infer<typeof loginUserFormSchema>;

function Copyright(props: any) {
  return (
    <Typography
      variant='body2'
      color='text.secondary'
      align='center'
      {...props}
    >
      {'Copyright © '}
      <Link color='inherit' href='https://mui.com/'>
        Your Website
      </Link>
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginUserFormData>({
    resolver: zodResolver(loginUserFormSchema),
  });

  function createUser(data: any) {
    // TODO - Conectar com a api, ou simular alguma forma de login
    console.log('User: ', data);
  }

  return (
    <Container component='main' maxWidth='xs'>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Sign in
        </Typography>
        <Box
          component='form'
          onSubmit={handleSubmit(createUser)}
          noValidate
          sx={{ mt: 1 }}
        >
          <TextField
            margin='normal'
            required
            fullWidth
            id='email'
            label='Email'
            autoFocus
            {...register('email')}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
          <TextField
            margin='normal'
            required
            fullWidth
            label='Senha'
            type='password'
            id='password'
            {...register('password')}
            error={!!errors.password}
            helperText={errors.password?.message}
          />
          <FormControlLabel
            control={<Checkbox value='remember' color='primary' />}
            label='Lembrar-me'
          />
          <Button
            type='submit'
            fullWidth
            variant='contained'
            sx={{ mt: 3, mb: 2 }}
          >
            ENTRAR
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href='#'>Esqueceu sua senha?</Link>
            </Grid>
            <Grid item>
              <Link href='#'>{"Ainda não tem uma conta? Cadastrar"}</Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
}
