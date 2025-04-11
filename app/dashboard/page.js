import Image from "next/image"
import { IoIosSearch } from "react-icons/io";

export default function Dashboard() {
  return (
    <body>
      <div id="__next">
        <div className="wrapper">
          <div className="search__background">
            <div className="search__wrapper">
              <figure>
                <img className="nav__img" src="/logo.png" />
              </figure>
              <div className="search__content">
                <div className="search">
                  <div className="search__input--wrapper">
                    <input className="search__input" placeholder="Search for books" type="text" value="" />
                    <div className="search__icon">
                      <IoIosSearch />
                    </div>
                  </div>
                </div>
                <div className="sidebar__toggle--btn"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  )
}