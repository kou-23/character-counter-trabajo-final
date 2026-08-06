import { useState } from "react"

const Header = ({ dark, handleDarkTheme }) => {
  return <header>
    <div>
      <h1>Character Counter</h1>
    </div>
    <button onClick={() => handleDarkTheme(!dark)}>☀</button>
  </header>
}

export { Header }