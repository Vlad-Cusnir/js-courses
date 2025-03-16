import { object, ref, string } from 'yup';

const commonSchema = {
  email: string()
    .required('Please provide an email address.')
    .email('The email address does not appear to have a valid format.'),
  password: string()
    .required('Please type a password.')
    .min(6, 'The password needs to be at least 6 characters long.'),
};

export const loginSchema = object(commonSchema);

export const registerSchema = object({
  ...commonSchema,
  retypePassword: string()
    .required('Please type your password again.')
    .oneOf([ref('password')], 'The passwords did not match.'),
  firstName: string().required('Please tell us your first name.'),
  lastName: string().required('Please tell us your last name.'),
});

