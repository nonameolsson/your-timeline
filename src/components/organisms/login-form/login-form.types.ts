export interface LoginFormProps {
  error: boolean
  onSubmit: (email: string, password: string) => Promise<void>
  isLoading: boolean
}
