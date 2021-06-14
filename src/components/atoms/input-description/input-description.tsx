interface InputDescriptionProps {
  text: string
}

export const InputDescription = ({ text }: InputDescriptionProps): JSX.Element => {
  return <p className="mt-2 text-sm text-gray-500">{text}</p>
}
