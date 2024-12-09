import { useField } from 'formik';
import { FormFieldProps } from '../../types/auth';

export const FormField: React.FC<FormFieldProps> = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const hasError = meta.touched && meta.error;

  return (
    <div className="form-field">
      <label htmlFor={props.name}>{label}</label>
      <input
        {...field}
        {...props}
        id={props.name}
        aria-describedby={hasError ? `${props.name}-error` : undefined}
        aria-invalid={hasError ? 'true' : 'false'}
      />
      {hasError && (
        <div className="error" id={`${props.name}-error`} role="alert">
          {meta.error}
        </div>
      )}
    </div>
  );
};