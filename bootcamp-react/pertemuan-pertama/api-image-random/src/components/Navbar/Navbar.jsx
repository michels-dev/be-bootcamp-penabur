import { Image } from 'primereact/image';

export default function Navbar({ home, menuItems }) {
  return (
    <div className='navbar bg-white w-full flex px-4 h-8 top-0 text-dark items-center justify-between shadow-lg shadow-gray-200 font-GabaritoReguler'>
      <div className='flex-1'>
        <Image src='/src/assets/image/logo/darklogopenabur.png' className='w-8' />
        <a href='' className='text-lg font-normal ml-2'>{home}</a>
      </div>
      <div className='flex'>
        <ul className='px-1'>
          {menuItems.map((item, index) => (
            <li key={index} className="px-5">
              <a className='flex items-center space-x-2'>
                <span className='font-GabaritoReguler text-sm'>{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
