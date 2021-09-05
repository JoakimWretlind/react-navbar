import { useState, useEffect } from 'react';
import {
    NavContainer,
    NavUL,
    NavLI,
    NavIcon
} from "./Nav.styling";
import { navData } from './navData';
import * as FaIcons from 'react-icons/fa';

const Nav = () => {
    const [navbar, setNavbar] = useState(true)
    const [isActive, setIsActive] = useState({
        activeObject: null,
        objects: navData
    });

    const showNavbar = () => setNavbar(!navbar)

    useEffect(() => {
        setIsActive({ ...isActive, activeObject: isActive.objects[0] })
    }, []);

    const handleClick = (index) => {
        setIsActive({ ...isActive, activeObject: isActive.objects[index] })
        setNavbar(!navbar)
    };

    const toggleActiveStyles = (index) => {
        if (isActive.objects[index] === isActive.activeObject) {
            return "active"
        } else {
            return "inactive"
        }
    };

    return (
        <>
            <NavIcon to="#">
                {navbar ? <FaIcons.FaTimes onClick={showNavbar} /> : <FaIcons.FaBars onClick={showNavbar} />}
            </NavIcon>
            <NavContainer navbar={navbar}>
                <NavUL>
                    {navData.map((item, index) => (
                        <NavLI key={item.id} to={item.path}
                            className={toggleActiveStyles(index)}
                            onClick={() => { handleClick(index) }}>
                            {item.title}
                        </NavLI>
                    ))}
                </NavUL>
            </NavContainer>
        </>
    )
}

export default Nav
