import { Menubar } from 'primereact/menubar';
import 'primereact/resources/themes/saga-blue/theme.css'; // Theme CSS
import 'primereact/resources/primereact.min.css';

const Navbar = ({ home, menuItems }) => {
  const items = [
    {
      label: home,
      icon: 'pi pi-home',
    },
    ...menuItems.map(item => (
      {
        label: item,
        icon: 'pi pi-star',
      }
    )),
  ];

  const start = <img alt="logo" src="https://primefaces.org/cdn/primereact/images/logo.png" className="w-10 mr-20" />;

  return (
    <div clasName="navbar bg-base-100 flex justify-between items-center">
      <Menubar model={items} start={start} className="mr-10 w-full" />
    </div>
  );
};

// const Navbar = ({ home, menuItems}) => {
//   return (
//   <div className="navbar bg-base-100">
//   <Menubar />
//     <div className="flex-1">
//       <a className="btn btn-ghost text-xl">{home}</a>
//     </div>
//     <div className="flex-none">
//       <ul className="menu menu-horizontal px-1">
//             {menuItems.map((item, index) => (
//               <li key={index} className="px-5">
//                 <a>{item}</a>
//               </li>
//             ))}
//           </ul>
//     </div>
//   </div>
//   )
// }

// export default Navbar;
export default Navbar;