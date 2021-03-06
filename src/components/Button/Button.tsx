type ButtonProps = {
  onClick: () => void
  children: React.ReactNode
}

const Button = ({ onClick, children }: ButtonProps): JSX.Element => (
  <button type="button" onClick={onClick}>
    {children}
  </button>
)

export default Button
