import bannerImg from './../assets/images/banner.png'

function Banner() {
  const bannerStyle = {
    backgroundImage: `url(${bannerImg})`,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
  }

  return (
    <div style={bannerStyle} className="h-105 mb-15 px-8 md:px-13 py-6 md:py-12 flex items-end">
      <p className="text-white text-4xl">
        窩窩家居
        <br />
        跟您一起品味生活
      </p>
    </div>
  )
}

export default Banner