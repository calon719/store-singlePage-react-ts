import Title from './Title'
import CommentsList from './CommentsList'
import commentsType from './../global/commentsType'

import avator1 from './../assets/images/avator-1.png'
import avator2 from './../assets/images/avator-2.png'
import avator3 from './../assets/images/avator-3.png'
import avator4 from './../assets/images/avator-4.png'
import avator5 from './../assets/images/avator-5.png'
import avator6 from './../assets/images/avator-6.png'

import productImg1 from './../assets/images/productImg-1.png'
import productImg2 from './../assets/images/productImg-2.png'
import productImg3 from './../assets/images/productImg-3.png'
import productImg4 from './../assets/images/productImg-4.png'
import productImg5 from './../assets/images/productImg-5.png'
import productImg6 from './../assets/images/productImg-6.png'

function Comments() {
  const commentsData: Array<commentsType> = [
    {
      productImg: productImg1,
      productTitle: 'Jodan 雙人床架',
      avator: avator1,
      name: '王六角',
      comment: 'CP值很高。'
    },
    {
      productImg: productImg2,
      productTitle: 'Antony 雙人床架',
      avator: avator2,
      name: 'Leaf',
      comment: '很喜歡～還有送三年保固～'
    },
    {
      productImg: productImg3,
      productTitle: 'Charles 系列儲物組合',
      avator: avator3,
      name: '美濃鄧子琪',
      comment: '廚房必備美用品！'
    },
    {
      productImg: productImg4,
      productTitle: 'Louvre 雙人床架',
      avator: avator4,
      name: '小杰',
      comment: '非常舒適，有需要會再回購'
    },
    {
      productImg: productImg5,
      productTitle: 'Charles 雙人床架',
      avator: avator5,
      name: '江八角',
      comment: '品質不錯～'
    },
    {
      productImg: productImg6,
      productTitle: 'Antony 床邊桌',
      avator: avator6,
      name: 'juni讚神',
      comment: '讚ㄉ！'
    },
  ]

  const commentsData1 = commentsData.filter((item, i) => i < 3)
  const commentsData2 = commentsData.filter((item, i) => i >= 3 && i < 6)

  return (
    <div className="bg-secondary">
      <div className="container pt-15 pb-20">
        <Title title={'好評推薦'} color={'white'} />
        <ul>
          <li className="mb-5 pl-[95px] w-full overflow-auto">
            <CommentsList data={commentsData1} />
          </li>
          <li className="w-full overflow-auto">
            <CommentsList data={commentsData2} />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Comments