import { useContext, useState } from "react";
import { Header } from "./components/Header";
import { Menu } from "./components/Menu";
import { Modal } from "./components/Modal";
import { ModalCompleted } from "./components/ModalCompleted";
import { MenuContent } from "./containers/MenuContent";
import { AppContext, AppProvider } from "./context/context";

export default function App() {
  const { openModal } = useContext(AppContext)

  return (
    <>
      <Header />
      <MenuContent />
      <Menu />
      <Modal />
      <ModalCompleted />
    </>

  )
}