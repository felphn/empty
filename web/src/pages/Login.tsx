import { useForm } from 'react-hook-form';

import api from '../services/ApiService';

interface IUserData {
  email: string;
  password: string;
}

function Login() {
  const { register, handleSubmit } = useForm();

  const onSubmitData = async (data: IUserData) => {
    console.log(data);
    try {
      await api.post('/signin', data);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <main>
      <form onSubmit={handleSubmit(onSubmitData)}>
        <label htmlFor="email">E-mail</label>
        <input
        {...register('email', { required: true })}
        type="email"
        name="email"
        className="email-field"
        />

        <label htmlFor="password">Password</label>
        <input
        {...register('password', { required: true, maxLength: 20 })}
        type="password"
        name="password"
        className="password-field"
        />

        <button type="submit">
          Sign in
        </button>
      </form>
    </main>
  );
}

export { Login };
