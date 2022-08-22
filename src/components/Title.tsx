type titleProps = {
  title: string;
  color?: string;
}

function Title({ title, color }: titleProps) {
  return <h2 className={`text-center text-3xl mb-8 ${color ? `text-${color}` : ''}`}>
    {title}
  </h2>
}

export default Title
