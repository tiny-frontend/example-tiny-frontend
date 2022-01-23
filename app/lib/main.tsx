interface Props {
  name: string;
}

export const ExampleSmolFrontend: React.FC<Props> = ({ name }) => (
  <>Hello {name}!</>
);
