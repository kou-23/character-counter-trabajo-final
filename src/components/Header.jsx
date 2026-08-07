import { useState } from "react"
import logo from "../assets/images/logo.png"

const Header = ({ dark, handleDarkTheme }) => {
  return (
    <header>
      <div className="title-container">
        <img src={logo} alt="Logo de Character Counter" className="logo" />
        <h1>Character Counter</h1>
      </div>
      <button onClick={() => handleDarkTheme(!dark)}>☀</button>
    </header>
  )
}

export { Header }