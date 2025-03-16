import { toast } from 'react-toastify';
import { loginSchema } from './validationSchemas';
import { useValidateForm } from '../../utils/useValidateForm';
import { useAuthContext } from './AuthContext';
import { useRedirectWhenLoggedIn } from './useRedirectWhenLoggedIn';

export function Login() {
  const { values, errors, handleInputChange, handleSubmit } = useValidateForm(loginSchema, {
    email: '',
    password: '',
  });
  
  const { login } = useAuthContext();
  useRedirectWhenLoggedIn();

  async function onSubmit(values) {
    const data = await fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    }).then((res) => res.json());
    
    if(data.accessToken) {
      toast.success('You have logged in successfully.');
      login(data);
    } else {
      toast.error(data);
    }
  }

  return (
    <form className="brandForm" onSubmit={handleSubmit(onSubmit)} noValidate>
      <h1 className="spanFull">Login</h1>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        value={values.email}
        onChange={handleInputChange}
      />
      {errors?.email && <p className="errorMessage">{errors.email}</p>}
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        name="password"
        value={values.password}
        onChange={handleInputChange}
      />
      {errors?.password && <p className="errorMessage">{errors.password}</p>}
      <button type="submit" className="secondColumn">
        Login
      </button>
    </form>
  );
}
