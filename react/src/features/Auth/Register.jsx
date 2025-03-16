import { toast } from 'react-toastify';
import { useValidateForm } from '../../utils/useValidateForm';
import { registerSchema } from './validationSchemas';
import { useAuthContext } from './AuthContext';
import { useRedirectWhenLoggedIn } from './useRedirectWhenLoggedIn';

export function Register() {
  const { values, errors, handleSubmit, handleInputChange } = useValidateForm(registerSchema, {
    email: '',
    password: '',
    retypePassword: '',
    firstName: '',
    lastName: '',
  });
  const { login } = useAuthContext();
  useRedirectWhenLoggedIn();

  async function onSubmit(values) {
    // const {retypePassword, ...sendToServer} = values;
    const sendToServer = { ...values };
    delete sendToServer.retypePassword;

    const data = await fetch('http://localhost:3000/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(sendToServer),
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
      <h1 className="spanFull">Register</h1>
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
      <label htmlFor="retypePassword">Retype Password</label>
      <input
        type="password"
        id="retypePassword"
        name="retypePassword"
        value={values.retypePassword}
        onChange={handleInputChange}
      />
      {errors?.retypePassword && (
        <p className="errorMessage">{errors.retypePassword}</p>
      )}
      <label htmlFor="firstName">First Name</label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        value={values.firstName}
        onChange={handleInputChange}
      />
      {errors?.firstName && <p className="errorMessage">{errors.firstName}</p>}
      <label htmlFor="lastName">Last Name</label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        value={values.lastName}
        onChange={handleInputChange}
      />
      {errors?.lastName && <p className="errorMessage">{errors.lastName}</p>}
      <button type="submit" className="secondColumn">
        Register
      </button>
    </form>
  );
}
