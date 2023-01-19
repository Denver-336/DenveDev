import Logo from "./Logo"
import Menu from "./Menu"

export default function Header() {
  return (
    <header className="main-header">
      <div className="content-wrapper">
        <Logo />
        <span id="open-menu-button" className="jam jam-menu"></span>
        <Menu />
      </div>
    </header>
  )
}