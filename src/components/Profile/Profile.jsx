import React, {useState, useEffect} from "react"
import Input from '@mui/material/Input'
import cardEllipse from '../../assets/img/cardEllipse.svg'
import cardLogo from '../../assets/img/cardLogo.svg'
import cardSquare from '../../assets/img/cardSquare.svg'
import Button from "../UI/Button/Button"
import { connect } from "react-redux"
import { useHistory } from "react-router-dom";
import { saveCard, getCard} from '../../store/actions'
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from 'yup'
import './Profile.scss'

function Profile({saveCard, getCard}) {
  let history = useHistory();

  const saveCardData = localStorage.getItem('cardData')
  const data = JSON.parse(saveCardData)

  const [cardNumber, setCardNumber] = useState(data?.cardNumber)
  const [expiryDate, setExpiryDate] = useState(data?.expiryDate)
  const [cardName, setCardName] = useState(data?.cardName)
  const [cvc, setCvc] = useState(data?.cvc)

  useEffect(() => {
    const getCardData = getCard()
    console.log(getCardData);
  },[getCard])

    const handleSubmit = (e) => {
    e.preventDefault()
    const carData = {
      cardNumber: e.target.cardNumber ? e.target.cardNumber.value : null,
      cardName: e.target.cardName ? e.target.cardName.value : null,
      expiryDate: e.target.expiryDate ? e.target.expiryDate.value : null,
      cvc: e.target.cvc ? e.target.cvc.value : null
    }
      localStorage.setItem('cardData', JSON.stringify(carData))

      saveCard(cardNumber, cardName, expiryDate, cvc)
  }



  return (
    <Formik
    initialValues={{
      cardName: data?.cardName,
      cardNumber: data?.cardNumber,
      expiryDate: data?.expiryDate,
      cvc: data?.cvc
    }}
    validationSchema = {Yup.object({
      cardName: Yup.string()
      .required('Введите ваше имя'),
      cardNumber: Yup.string()
      .required('Введите номер карты')
      .matches(/\d{13,18}/, 'не верный формат'),
      expiryDate: Yup.string()
      .min(4, 'Проверьте дату')
      .required('Поле обязательно для заполнения'),
      cvc: Yup.string()
      .min(3, 'Проверьте ваш CVC код')
      .matches(/\d{3,5}/, 'не верный формат')
      .required('Поле обязательно')
    })}
    >
    <div className="Page__overlay" onClick={() => {history.push('/')}}>
    <div className="profile" onClick={e => e.stopPropagation()}>
      <Form className="profile__form" onSubmit={handleSubmit}>
        <div className="profile__title">Профиль</div>
        <div className="profile__subtitle">Введите платежные данные</div>
        <div className="profile-form__wrapper">
          <div className="form__info">
            <div className="input">
              <label htmlFor="" className="input__title">Имя владельца</label>
              <Field
                as={Input}
                type="cardName"
                name="cardName"
                placeholder="ANDREY IVANOV"
              />
              <ErrorMessage name="cardName"/>
            </div>
            <div className="input">
              <label htmlFor="" className="input__title">Номер карты</label>
              <Field
                as={Input}
                type="card"
                name="cardNumber"
                placeholder="0000 0000 0000 0000"
                onChange={(e) => setCardName(e.target.value)}
              />
              <ErrorMessage name="cardNumber"/>
              </div>
              <div className="card-row">
                <div className="input">
                  <label htmlFor="" className="input__title">MM/YY</label>
                  <Field
                    as={Input}
                    type="text"
                    name="expiryDate"
                    placeholder="00/00"
                  />
                  <ErrorMessage name="expiryDate"/>
                </div>
                <div className="input">
                  <label htmlFor="" className="input__title">CVC</label>
                  <Field
                    as={Input}
                    type="text"
                    name="cvc"
                    placeholder="***"
                  />
                  <ErrorMessage name="cvc"/>
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
      </Form>
    </div>
    </div>  
  </Formik>
  )
}

export default connect(state => ({
  cardNumber: state.CardData.cardNumber,
  expiryDate: state.CardData.expiryDate,
  cardName: state.CardData.cardName,
  cvc: state.CardData.cvc
}),
{saveCard, getCard})(Profile)