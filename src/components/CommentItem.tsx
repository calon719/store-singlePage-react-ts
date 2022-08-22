type comment = {
  productImg: string;
  productTitle: string;
  avator: string;
  name: string;
  comment: string;
}

type commentItemProps = {
  data: comment;
  index: number;
}

function CommentItem({ data, index }: commentItemProps) {
  return (
    <li className={`flex bg-white min-w-[350px] ${index ? 'ml-8' : ''}`}>
      <img className="h-24" src={data.productImg} alt={data.productTitle} />
      <div className="px-4 py-3">
        <div className="flex items-center mb-2">
          <img className="h-10 aspect-square" src={data.avator} alt="avator" />
          <p className="ml-2 leading-4">
            {data.name}
            <br />
            <span className="text-primary text-sm">{data.productTitle}</span>
          </p>
        </div>
        <p>{data.comment}</p>
      </div>
    </li>
  )
}

export default CommentItem