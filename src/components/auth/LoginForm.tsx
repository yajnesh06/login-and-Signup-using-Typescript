import { Formik, Form, Field } from 'formik';
import { LoginFormValues } from '../../types/auth';
import { loginSchema } from '../../utils/validation';
import { FormField } from './FormField';
import { saveEmailToStorage, clearEmailFromStorage, getEmailFromStorage } from '../../utils/storage';

export const LoginForm: React.FC = () => {
  const initialValues: LoginFormValues = {
    email: getEmailFromStorage() || '',
    password: '',
    rememberMe: false,
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={loginSchema}
      onSubmit={(values, { setSubmitting }) => {
        if (values.rememberMe) {
          saveEmailToStorage(values.email);
        } else {
          clearEmailFromStorage();
        }

        setTimeout(() => {
          alert('Login Successful!');
          setSubmitting(false);
        }, 1000);
      }}
    >
      {({ values, isSubmitting }) => (
        <Form className="auth-form">
          <h2>Login</h2>
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
          <div className="remember-me">
            <label>
              <Field
                type="checkbox"
                name="rememberMe"
              />
              Remember Me
            </label>
          </div>
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Logging in...' : 'Login'}
          </button>
        </Form>
      )}
    </Formik>
  );
};