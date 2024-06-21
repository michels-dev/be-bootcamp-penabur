const Navbar = ({ home, menuItems}) => {
  return (
  <div className="navbar bg-base-100">
    <div className="flex-1">
      <a className="btn btn-ghost text-xl">{home}</a>
    </div>
    <div className="flex-none">
      <ul className="menu menu-horizontal px-1">
            {menuItems.map((item, index) => (
              <li key={index} className="px-5">
                <a>{item}</a>
              </li>
            ))}
          </ul>
    </div>
  </div>
  )
}

export default Navbar;