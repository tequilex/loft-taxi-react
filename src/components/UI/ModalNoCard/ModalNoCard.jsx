import React from "react";
import './ModalNoCard.scss'
import Button from "../Button/Button";
import {Link} from 'react-router-dom'

const ModalNoCard = () => {
  return (
      <div className="ModalNoCard">
        <div className="ModalNoCard__title">Привяжите карту</div>
        <div className="ModalNoCard__subtitle">Для заказа такси, необходимо ввести платежные данные</div>
        
        <Link to='/profile'>
          <Button type='submit'>Перейти в профиль</Button>
        </Link>
        </div>
  )
}


export default ModalNoCard