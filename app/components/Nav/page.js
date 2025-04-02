import Image from "next/image"

export default function Nav() {
  return (
    <nav className="nav">
      <div className="nav__wrapper">
       <figure className="nav__img--mask">
          <img className="nav__img" src="/logo.png" width={495} height={114} />
        </figure> 
        <ul className="nav__list--wrapper">
          <li className="nav__list nav__list--login">Login</li>
          <li className="nav__list nav__list--login">About</li>
          <li className="nav__list nav__list--login">Contact</li>
          <li className="nav__list nav__list--login">Help</li>
        </ul>
      </div>
    </nav>
  )
}