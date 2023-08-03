import { NavLink } from "react-router-dom"
import { useState } from "react";


interface props {
    label: string;
    basePath: string;

    options?: {
        path: string;
        label: string;
    }[]
}


export const DropdownNavbar = ({ basePath, label, options }: props) => {
    const [show, setShow] = useState(false);
    const onToggleShow = () => { setShow( !show ) };
    const onHidden = () => { setShow( false ) };
    // const onShow = () => { setShow( true ) };

    const disableClick = (e: any) => { e.preventDefault() };

    if ( !options ) return (
        <div className="w-40">
            <button className="nav-1" onClick={ onToggleShow }>
                <NavLink className="flex w-40 p-3 py-0.5" to={ basePath } >{ label }</NavLink>
            </button>
        </div>
    )

    return (
        <div className="w-40" onMouseLeave={ onHidden }>
            <button className="nav-1" onClick={ onToggleShow }>
                <NavLink onClick={ disableClick } className="flex w-40 p-3 py-0.5" to={ basePath } >{ label }</NavLink>
            </button>

            <ul className={`${ show ? "absolute" : "hidden" } w-40 z-50`}>
                {
                    options.map( option => 
                        <li key={ option.label } onClick={ onHidden } className="nav-2">
                            <NavLink 
                                className="block p-3 py-0.5 bg-black bg-opacity-50 hover:bg-opacity-80" 
                                to={ basePath+option.path }>
                                    { option.label }
                            </NavLink>
                        </li>
                    )
                }
            </ul>
        </div>
    )
}