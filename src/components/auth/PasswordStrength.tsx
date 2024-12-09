import { calculatePasswordStrength } from '../../utils/validation';

interface PasswordStrengthProps {
  password: string;
}

export const PasswordStrength: React.FC<PasswordStrengthProps> = ({ password }) => {
  const strength = calculatePasswordStrength(password);
  const getStrengthText = () => {
    if (strength === 0) return 'Very Weak';
    if (strength === 1) return 'Weak';
    if (strength === 2) return 'Fair';
    if (strength === 3) return 'Good';
    if (strength === 4) return 'Strong';
    return 'Very Strong';
  };

  return (
    <div className="password-strength" role="status">
      <div className="strength-bars">
        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            className={`strength-bar ${index < strength ? 'filled' : ''}`}
            aria-hidden="true"
          />
        ))}
      </div>
      <span>Password Strength: {getStrengthText()}</span>
    </div>
  );
};