import React from "react";
import Header from "../../components/Header/Header";

function Main({onNavigate}) {
  return(
    <>
      <Header onNavigate={onNavigate} />
      <h1>Карта</h1>
    </>
  )
}

export default Main