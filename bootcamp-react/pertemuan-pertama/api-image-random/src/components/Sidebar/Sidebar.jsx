import 'primeicons/primeicons.css';

import React from 'react';
import { Link } from 'react-router-dom';

export default function Sidebar() {
    return (
        <div className="flex">
            <div className="flex top-0 flex-col h-screen p-3 bg-blue-400 w-20 text-white font-GabaritoReguler shadow-lg shadow-gray-400">
                <div className="space-y-3">
                    <div className="flex-1">
                        <ul className="pt-2 pb-4 space-y-1 text-sm">
                            <li className="rounded-sm tooltip tooltip-right" data-tip='Dashboard'>
                                <Link
                                    to='/'
                                    className="flex items-center p-2 space-x-3 rounded-md pi pi-objects-column btn btn-ghost w-14"
                                >
                                </Link>
                            </li>
                            <li className="rounded-sm tooltip tooltip-right" data-tip='Videos'>
                                <Link
                                    to="/PageVideos"
                                    className="flex items-center p-2 space-x-3 rounded-md pi pi-youtube btn btn-ghost w-14"
                                >
                                </Link>
                            </li>
                            <li className="rounded-sm tooltip tooltip-right" data-tip='Table'>
                                <Link
                                    to='/DataSiswa'
                                    className="flex items-center p-2 space-x-3 rounded-md pi pi-table btn btn-ghost w-14"
                                >
                                </Link>
                            </li>
                            <li className="rounded-sm tooltip tooltip-right" data-tip='Logout'>
                                <a
                                    href="#"
                                    className="flex items-center p-2 space-x-3 rounded-md pi pi-sign-out btn btn-ghost w-14"
                                >
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
