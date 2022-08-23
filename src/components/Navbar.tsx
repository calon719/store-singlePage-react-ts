import LinkMenu from './LinkMenu'
import LinkMenuMobile from './LinkMenuMobile'

function Navbar() {
  return (
    <nav className="sticky top-0 right-0 left-0 z-50 border-b-40 border-black px-4 bg-white">
      <div className="container flex justify-between items-center py-9">
        <a className="block hover:text-primary transition-colors" href="/">
          <h1 className="font-extrabold text-2xl">WOWOROOM</h1>
        </a>
        <LinkMenu />
        <LinkMenuMobile />
      </div>
    </nav>
  )
}

export default Navbar
