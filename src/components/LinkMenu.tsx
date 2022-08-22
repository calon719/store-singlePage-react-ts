function LinkMenu() {
  return (
    <ul className="hidden md:flex">
      <li>
        <a className="text-xl hover:text-primary transition-colors" href="#advantage">床墊優勢</a>
      </li>
      <li className="ml-8 lg:ml-12">
        <a className="text-xl hover:text-primary transition-colors" href="#comments">好評推薦</a>
      </li>
      <li className="ml-8 lg:ml-12">
        <a className="text-xl hover:text-primary transition-colors" href="#delivery">運送方式</a>
      </li>
      <li className="ml-8 lg:ml-12">
        <a className="text-xl hover:text-primary transition-colors" href="#order">立即預訂</a>
      </li>
    </ul>
  )
}

export default LinkMenu