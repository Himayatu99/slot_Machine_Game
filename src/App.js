import React from "react"
import './index.css'
import SlotM from "./SlotM"
const App = () => {
  return (
    <>
      <div className="heading_style">
        <h1>🎰 Slot Machine Game 🎰 </h1>
        <SlotM x='😊' y='😊' z='😊' />
        <SlotM x='💟' y="💘" z='💝' />
        <SlotM x='💰' y='💸' z='🔑' />
      </div>

    </>
  )
}
export default App