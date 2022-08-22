type imgItemProps = {
  img: string;
  content: string;
}

function ImgItem({ img, content }: imgItemProps) {
  const imgStyle = {
    backgroundImage: `url(${img})`,
    backgroundPosition: 'center center',
    backgroundSize: 'cover'
  }

  return (
    <li>
      <div className="h-35 mb-2" style={imgStyle} />
      <p className="text-center text-xl">{content}</p>
    </li>
  )
}

export default ImgItem