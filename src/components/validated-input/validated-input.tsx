import { FC } from 'react';
import { ValidatedInputUI } from '../ui/validated-input';
import { TValidatedInputProps } from './types';

export const ValidatedInput: FC<TValidatedInputProps> = ({
  placeholder,
  type,
  name,
  value,
  onChange,
  error
}) => {
  const formatPhoneNumber = (value: string) => {
    if (!value) return '+';

    const phoneNumber = value.replace(/[^\d]/g, '');
    const phoneNumberLength = phoneNumber.length;

    if (phoneNumberLength < 2)
      return `+${phoneNumber.slice(0, 1)}${phoneNumber.slice(1)}`;
    if (phoneNumberLength < 5)
      return `+${phoneNumber.slice(0, 1)} (${phoneNumber.slice(1)}`;
    if (phoneNumberLength < 8)
      return `+${phoneNumber.slice(0, 1)} (${phoneNumber.slice(1, 4)})${phoneNumber.slice(4)}`;
    if (phoneNumberLength < 10)
      return `+${phoneNumber.slice(0, 1)} (${phoneNumber.slice(1, 4)})${phoneNumber.slice(4, 7)}-${phoneNumber.slice(7)}`;
    return `+${phoneNumber.slice(0, 1)} (${phoneNumber.slice(1, 4)})${phoneNumber.slice(4, 7)}-${phoneNumber.slice(7, 9)}-${phoneNumber.slice(9, 11)}`;
  };

  const handleChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (e) => {
    const formattedValue =
      type === 'tel' ? formatPhoneNumber(e.target.value) : e.target.value;
    onChange({
      target: { name, value: formattedValue }
    } as React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>);
  };

  return (
    <ValidatedInputUI
      placeholder={placeholder}
      type={type}
      name={name}
      value={value}
      handleChange={(e) =>
        handleChange(
          e as React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
        )
      }
      error={error}
      formatPhoneNumber={formatPhoneNumber}
    />
  );
};
