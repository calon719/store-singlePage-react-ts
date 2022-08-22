function MultiSteps() {
  return (
    <ol className="flex flex-col md:flex-row justify-center items-center">
      <li className="multiSteps-item mb-16 md:mb-0">
        <div
          className="rounded-full border-3 border-black w-[115px] aspect-square
          flex justify-center items-center mb-2 mx-auto"
        >
          <i className="bi bi-cart-fill text-6xl" />
        </div>
        <p className="text-center text-xl">
          STEP.1
          <br />
          選購商品
        </p>
      </li>
      <li className="multiSteps-item mb-16 md:mb-0 md:ml-22">
        <div
          className="rounded-full border-3 border-black w-[115px] aspect-square
          flex justify-center items-center mb-2 mx-auto"
        >
          <i className="bi bi-list-ul text-6xl" />
        </div>
        <p className="text-center text-xl">
          STEP.2
          <br />
          填寫預定資料
        </p>
      </li>
      <li className="multiSteps-item mb-16 md:mb-0 md:ml-22">
        <div
          className="rounded-full border-3 border-black w-[115px] aspect-square
          flex justify-center items-center mb-2 mx-auto"
        >
          <i className="bi bi-check-lg text-6xl" />
        </div>
        <p className="text-center text-xl">
          STEP.3
          <br />
          預定成功
        </p>
      </li>
      <li className="multiSteps-item md:ml-22">
        <div
          className="rounded-full border-3 border-black w-[115px] aspect-square
          flex justify-center items-center mb-2 mx-auto"
        >
          <i className="bi bi-envelope-fill text-6xl" />
        </div>
        <p className="text-center text-xl">
          STEP.4
          <br />
          Email 付款資訊
        </p>
      </li>
    </ol>
  )
}

export default MultiSteps