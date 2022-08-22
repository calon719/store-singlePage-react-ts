import CommentItem from './CommentItem'
import commentsType from './../global/commentsType'

type commentsListProps = {
  data: Array<commentsType>;
}

function CommentsList({ data }: commentsListProps) {
  const items = data.map((item, index) => <CommentItem key={item.productTitle + item.name} data={item} index={index} />)

  return (
    <ul className="flex">
      {items}
    </ul>
  )
}

export default CommentsList