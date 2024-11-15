import { IonIcon } from '@ionic/react';
import { logoIonic } from 'ionicons/icons';

export default function NavTest(params) {
  return (
    <header className="bg-white">
    <nav className="flex justify-between items-center w-[92%]  mx-auto">
      <div>
        <img
          className="w-16 cursor-pointer"
          src="https://cdn-icons-png.flaticon.com/512/5968/5968204.png"
          alt="..."
        />
      </div>
      <div className="nav-links duration-500 md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto  w-full flex items-center px-5">
        <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
          <li>
            <a className="hover:text-gray-500" href="#">
              Products
            </a>
          </li>
          <li>
            <a className="hover:text-gray-500" href="#">
              Solution
            </a>
          </li>
          <li>
            <a className="hover:text-gray-500" href="#">
              Resource
            </a>
          </li>
          <li>
            <a className="hover:text-gray-500" href="#">
              Developers
            </a>
          </li>
          <li>
            <a className="hover:text-gray-500" href="#">
              Pricing
            </a>
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-6">
        <button className="bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec]">
          Sign in
        </button>
        <ion-icon
          onclick="onToggleMenu(this)"
          name="menu"
          className="text-3xl cursor-pointer md:hidden"
        />
      </div>
    </nav>
  </header>
  
  );
}

const navLinks = document.querySelector('.nav-links')
function onToggleMenu(e){
    e.name = e.name === 'menu' ? 'close' : 'menu'
    navLinks.classList.toggle('top-[9%]')
}