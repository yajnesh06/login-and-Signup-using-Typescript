import { Formik, Form } from 'formik';
import { SignUpFormValues } from '../../types/auth';
import { signUpSchema } from '../../utils/validation';
import { FormField } from './FormField';
import { PasswordStrength } from './PasswordStrength';

export const SignUpForm: React.FC = () => {
  const initialValues: SignUpFormValues = {
    name: '',
    email: '',
    password: '',
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={signUpSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setTimeout(() => {
          alert('Sign Up Successful!');
          resetForm();
          setSubmitting(false);
        }, 1000);
      }}
    >
      {({ values, isSubmitting }) => (
        <Form className="auth-form">
          <h2>Sign Up</h2>
          <FormField
            label="Name"
            name="name"
            type="text"
            placeholder="Enter your name"
          />
          <FormField
            label="Email"
            name="email"
            type="email"
            placeholder="Enter your email"
          />
          <FormField
            label="Password"
            name="password"
            type="password"
            placeholder="Enter your password"
          />
          <PasswordStrength password={values.password} />
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Signing up...' : 'Sign Up'}
          </button>
        </Form>
      )}
    </Formik>
  );
};