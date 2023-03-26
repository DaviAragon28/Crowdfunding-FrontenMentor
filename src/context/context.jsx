import { createContext, useState } from "react";

const AppContext = createContext(null)

const AppProvider = ({ children }) => {
    const [openMenu, setOpenMenu] = useState(false)
    const [openModal, setOpenModal] = useState(false)
    const [openModalCompleted, setOpenModalCompleted] = useState(false)

    const onHandleModal = () => setOpenModal(!openModal)
    const onHandleMenu = () => setOpenMenu(!openMenu)
    const onModalCompleted = () => {
        setOpenModal(false)
        setOpenModalCompleted(true)
    }
    const closeModalCompleted = () => setOpenModalCompleted(false)

    return (
        <AppContext.Provider value={{ openMenu, onHandleMenu, openModal, onHandleModal, onModalCompleted, openModalCompleted, closeModalCompleted }}>
            {children}
        </AppContext.Provider>
    )
}

export { AppContext, AppProvider }