import React from "react";
import Button from "../Button/Button";
import './ModalOrderCreated.scss'


const ModalOrderCreated = (events) => {
  const {clear} = events
  return (
      <div className="modalOrder">
        <div className="modalOrder__title">Заказ размещен</div>
        <div className="modalOrder__subtitle">Ваше такси уже едет к вам. Прибудет приблизительно через 10 минут.</div>
        <div className="modalOrder__button" onClick={() => clear()} >
          <Button type='submit'>Сделать новый заказ</Button>
        </div>
      </div>
  )
}


export default ModalOrderCreated