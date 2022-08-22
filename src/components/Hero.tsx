import Banner from './Banner'
import ImgList from './ImgList'
import Title from './Title'

function Hero() {
  return (
    <div className="container pt-8 pb-15">
      <Banner />
      <Title title={'床墊優勢'} />
      <ImgList />
    </div>
  )
}

export default Hero