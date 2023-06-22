import React from "react";
import standart from '../../assets/img/standart.png'
import premium from '../../assets/img/premium.png'
import business from '../../assets/img/business.png'
import './PriceCard.scss'


const PriceCard = ({info, plan, changePlan}) => {
  const images = [standart, premium, business]
  const active = 'card__wrapper active'
  const nonActive = 'card__wrapper'

  function change() {
    if(info.title === plan) {
      return active
    } else {
      return nonActive
    }
  }

  return (
    <div className={change()}  onClick={() => changePlan(info.title)}>
      <div className="card__info">
        <div className="title">{info.title}</div>
        <div className="sub__title">Стоимость</div>
        <div className="price">{info.price} ₽</div>
      </div>
      <div className="card__img">
        <img src={images[info.img]} alt="" className="img" />
      </div>
    </div>
  )
}


export default PriceCard