import React, {useState, useEffect} from "react"
import Input from '@mui/material/Input'
import cardEllipse from '../../assets/img/cardEllipse.svg'
import cardLogo from '../../assets/img/cardLogo.svg'
import cardSquare from '../../assets/img/cardSquare.svg'
import Button from "../UI/Button/Button"
import { connect } from "react-redux"
import { useHistory } from "react-router-dom";
import { saveCard, getCard} from '../../store/actions'

import './Profile.scss'

function Profile({saveCard, getCard}) {
  let history = useHistory();

  const [cardNumber, setCardNumber] = useState("0000 0000 0000 000")
  const [expiryDate, setExpiryDate] = useState("00/00")
  const [cardName, setCardName] = useState("")
  const [cvc, setCvc] = useState("")


  useEffect(() => {
    const getCardData = getCard()
    console.log(getCardData);
  },[getCard])

    const handleSubmit = (e) => {
    e.preventDefault()
      const cardNumber = e.target.cardNumber ? e.target.cardNumber.value : null
      const cardName = e.target.cardName ? e.target.cardName.value : null
      const expiryDate = e.target.expiryDate ? e.target.expiryDate.value : null
      const cvc = e.target.cvc ? e.target.cvc.value : null
      
      localStorage.setItem('cardData', cardName)

      saveCard(cardNumber, cardName, expiryDate, cvc)
  }

  return (
    <div className="Page__overlay" onClick={() => {history.push('/')}}>
    <div className="profile" onClick={e => e.stopPropagation()}>
      <form className="profile__form" onSubmit={handleSubmit}>
        <div className="profile__title">Профиль</div>
        <div className="profile__subtitle">Введите платежные данные</div>
        <div className="profile-form__wrapper">
          <div className="form__info">
            <div className="input">
              <label htmlFor="" className="input__title">Имя владельца</label>
              <Input
                type="carName"
                name="cardName"
                placeholder="ANDREY IVANOV"
                onChange={(e) => setCardName(e.target.value)}
              />
            </div>
            <div className="input">
              <label htmlFor="" className="input__title">Номер карты</label>
              <Input
                type="card"
                name="cardNumber"
                placeholder="0000 0000 0000 0000"
                onChange={(e) => setCardNumber(e.target.value)}
              />
              </div>
              <div className="card-row">
                <div className="input">
                  <label htmlFor="" className="input__title">MM/YY</label>
                  <Input
                    type="text"
                    name="expiryDate"
                    placeholder="00/00"
                    onChange={(e) => setExpiryDate(e.target.value)}
                  />
                </div>
                <div className="input">
                  <label htmlFor="" className="input__title">CVC</label>
                  <Input
                    type="text"
                    name="cvc"
                    placeholder="***"
                    onChange={(e) => setCvc(e.target.value)}
                  />
                </div>
              </div>
          </div>
          <div className="preview">
          <div className="preview__top">
            <img src={cardLogo} alt="" className="preview__logo" />
            <span className="preview__date">{expiryDate}</span>
          </div>
          <div className="preview__cardNum">{cardNumber}</div>
          <div className="preview__bottom">
            <img src={cardSquare} alt="" />
            <img src={cardEllipse} alt="" />
          </div>
        </div>
        </div>
        <Button type="submit">Сохранить</Button>
      </form>
    </div>
    </div>  
  )
}

export default connect(state => ({
  cardNumber: state.CardData.cardNumber,
  expiryDate: state.CardData.expiryDate,
  cardName: state.CardData.cardName,
  cvc: state.CardData.cvc
}),
{saveCard, getCard})(Profile)