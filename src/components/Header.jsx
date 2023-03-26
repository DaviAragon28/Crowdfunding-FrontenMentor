import { useContext } from "react"
import { AppContext } from "../context/context"

export const Header = () => {
    const { openMenu, onHandleMenu } = useContext(AppContext)


    return (
        <header className='relative'>
            <nav className='absolute p-6 left-0 right-0 z-40 lg:px-10 xl:px-20'>
                <ul className='flex items-center justify-between'>
                    <li className="cursor-pointer">
                        <img src="/images/logo.svg" alt="" />
                    </li>
                    <li className="cursor-pointer md:hidden" onClick={() => onHandleMenu(!openMenu)}>
                        {
                            openMenu
                                ? <img src="/images/icon-close-menu.svg" alt="icon-close" />
                                : <img src="/images/icon-hamburger.svg" alt="icon-hamburger" />
                        }
                    </li>
                    <li className="hidden md:block">
                        <div className="text-white flex gap-5 text-sm lg:gap-7 xl:gap-10">
                            <span className="hover:underline cursor-pointer">About</span>
                            <span className="hover:underline cursor-pointer">Discover</span>
                            <span className="hover:underline cursor-pointer">Get Started</span>
                        </div>
                    </li>
                </ul>
            </nav>
            <img className="w-full md:hidden" src="/images/image-hero-mobile.jpg" alt="image-hero-mobile" />
            <img className="hidden md:block" src="/images/image-hero-desktop.jpg" alt="image-hero-desktop" />
        </header>
    )
}
