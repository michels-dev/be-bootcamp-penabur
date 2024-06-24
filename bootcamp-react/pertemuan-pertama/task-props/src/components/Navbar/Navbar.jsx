import 'primeicons/primeicons.css';

export default function Navbar({ home, menuItems }) {
  return (
    <div className="navbar bg-blue-400 w-full flex px-4 h-8 top-0 text-white items-center justify-between shadow-lg shadow-gray-300 font-GabaritoReguler">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-2xl">{home}</a>
      </div>
      <div className="flex-none text-lg">
        <ul className="menu menu-horizontal px-1">
          {menuItems.map((item, index) => (
            <li key={index} className="px-5">
              <a className="flex items-center space-x-2">
                <i className={item.icon}></i>
                <span>{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
