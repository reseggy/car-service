export interface TFormUIProps {
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;

  formData: {
    name: string;
    phone: string;
    email: string;
    message: string;
  };

  errors: {
    name: string;
    phone: string;
    email: string;
    message: string;
  };

  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}
