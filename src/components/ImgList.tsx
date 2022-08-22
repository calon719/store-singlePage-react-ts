import ImgItem from './ImgItem'
import heroImg1 from './../assets/images/heroImg-1.png'
import heroImg2 from './../assets/images/heroImg-2.png'
import heroImg3 from './../assets/images/heroImg-3.png'

type imgData = {
  img: string;
  content: string;
}

function ImgList() {
  const imgs: Array<imgData> = [
    {
      img: heroImg1,
      content: '原木料環保'
    },
    {
      img: heroImg2,
      content: '好收納'
    },
    {
      img: heroImg3,
      content: '好組裝'
    },
  ]

  const items = imgs.map(item => <ImgItem key={item.img} img={item.img} content={item.content} />)

  return (
    <ul id="advantage" className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-0">
      {items}
    </ul>
  )
}

export default ImgList