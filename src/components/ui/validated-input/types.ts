export interface TValidatedInputUIProps {
  placeholder: string;
  type: string;
  name: string;
  value: string;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  error: string;
  formatPhoneNumber: (value: string) => string;
}
