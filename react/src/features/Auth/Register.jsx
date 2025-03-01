import { useState } from 'react';
import { object, ref, string } from 'yup';

const validationSchema = object({
  email: string().required('Please provide an email address.').email('The email address does not appear to have a valid format.'),
  password: string().required('Please type a password.').min(6, 'The password needs to be at least 6 characters long.'),
  retypePassword: string().required('Please type your password again.').oneOf([ref('password')], 'The passwords did not match.'),
  firstName: string().required('Please tell us your first name.'),
  lastName: string().required('Please tell us your last name.'),
});

function validateInput(values, schema) {
  try {
    schema.validateSync(values, { abortEarly: false });
    return null;
  } catch (e) {
    const res = {};
    for(const error of e.inner) {
      res[error.path] = error.message;
    }
    return res;    
  }
}

export function Register() {
  const [values, setValues] = useState({
    email: '',
    password: '',
    retypePassword: '',
    firstName: '',
    lastName: '',
  });
  const [errors, setErrors] = useState(null);
  const [shouldValidateAsYouType, setShouldValidateAsYouType] = useState(false);

  function handleInputChange(e) {
    // const newValues = { ...values };
    // newValues[e.target.name] = e.target.value;
    // setValues(newValues);
    // setValues({ ...values, [e.target.name]: e.target.value })

    const newValues = {...values, [e.target.name]: e.target.value};
    if(shouldValidateAsYouType) {
      const errors = validateInput(newValues, validationSchema);
      setErrors(errors);
    }
    setValues(newValues);
    // values este inca valoarea veche de dinainte de set !!!!!!!!!!!!
  }

  function handleSubmit(e) {
    e.preventDefault();

    const errors = validateInput(values, validationSchema);
    if(errors) {
      setShouldValidateAsYouType(true);
      setErrors(errors);
    } else {
      console.log('Yupiiiii!');
      
    }
  }

  return (
    <form className="brandForm" onSubmit={handleSubmit} noValidate>
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
      {errors?.retypePassword && <p className="errorMessage">{errors.retypePassword}</p>}
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
