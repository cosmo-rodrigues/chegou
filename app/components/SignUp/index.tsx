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
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const createUserFormSchema = z.object({
  email: z
    .string()
    .nonempty('O email é obrigatório')
    .email('Formato de email inválido'),
  password: z.string().min(6, 'A senha precisa ter no mínimo 6 caracteres'),
});

type CreateUserFormData = z.infer<typeof createUserFormSchema>;

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
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateUserFormData>({
    resolver: zodResolver(createUserFormSchema),
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
          Sign up
        </Typography>
        <Box
          component='form'
          noValidate
          onSubmit={handleSubmit(createUser)}
          sx={{ mt: 3 }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                name='firstName'
                required
                fullWidth
                id='firstName'
                label='Nome'
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id='lastName'
                label='Sobrenome'
                name='lastName'
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth required>
                <InputLabel id='documentType'>Documento</InputLabel>
                <Select
                  id='documentType'
                  label='Documento'
                  name='documentType'
                >
                  <MenuItem value='RG'>RG</MenuItem>
                  <MenuItem value='CPF'>CPF</MenuItem>
                  <MenuItem value='PASSAPORTE'>Passaporte</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id='documentNumber'
                label='Número do doc'
                name='documentNumber'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id='email'
                label='Email'
                name='email'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name='password'
                label='Senha'
                type='password'
                id='password'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name='confirmPassword'
                label='Confirme sua senha'
                type='password'
                id='confirmPassword'
              />
            </Grid>
          </Grid>
          <Button
            type='submit'
            fullWidth
            variant='contained'
            sx={{ mt: 3, mb: 2 }}
          >
            CADASTRAR
          </Button>
          <Grid container justifyContent='flex-end'>
            <Grid item>
              <Link href='#'>Já tem uma conta? Entrar</Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 5 }} />
    </Container>
  );
}
