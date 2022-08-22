import { useState } from 'react'

function LinkMenuMobile() {
  const [menuStatus, setMenuStatus] = useState<boolean>(false)

  return (
    <div className="md:hidden">
      <button type="button" className="hover:opacity-50" onClick={() => setMenuStatus(true)}>
        <i className="bi bi-list text-2xl" />
      </button>
      <div className={`fixed top-0 bottom-0 right-0 ${menuStatus ? 'w-60' : 'w-0'} bg-white transition-all`}>
        <div className={`${menuStatus ? '' : 'hidden'}`}>
          <div className="p-4 text-right">
            <button type="button" className="hover:opacity-50" onClick={() => setMenuStatus(false)}>
              <i className="bi bi-x-lg text-2xl" />
            </button>
          </div>
          <ul className="border-t">
            <li>
              <a className="block px-6 py-4 border-b text-xl hover:text-primary transition-colors" href="#advantage">床墊優勢</a>
            </li>
            <li>
              <a className="block px-6 p-4 border-b text-xl hover:text-primary transition-colors" href="#comments">好評推薦</a>
            </li>
            <li>
              <a className="block px-6 p-4 border-b text-xl hover:text-primary transition-colors" href="#delivery">運送方式</a>
            </li>
            <li>
              <a className="block px-6 p-4 border-b text-xl hover:text-primary transition-colors" href="#order">立即預訂</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default LinkMenuMobile