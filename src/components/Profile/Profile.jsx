import React, {useState, useEffect} from "react"
import Input from '@mui/material/Input'
import cardEllipse from '../../assets/img/cardEllipse.svg'
import cardLogo from '../../assets/img/cardLogo.svg'
import cardSquare from '../../assets/img/cardSquare.svg'
import Button from "../UI/Button/Button"
import { connect } from "react-redux"
import { useHistory } from "react-router-dom";
import { saveCard, getCard} from '../../store/actions'
import { useFormik } from "formik"
import * as Yup from 'yup'
import './Profile.scss'

function Profile({saveCard, getCard}) {
  let history = useHistory();

  const saveCardData = localStorage.getItem('cardData')
  const data = JSON.parse(saveCardData)

  const placeHolder = (preview, value, simbol) => {
    Array.from(value).forEach(el => preview = preview.replace(simbol, el) )
  
    return preview.replace(/(\d?)\D+$/, '$1')
  }

  const regName = (value) => value.replace(/\d/g, '')
  const regCVC = (value) => value.replace(/\D/g, '').substr(0, 3)
  const regDate = (value) => placeHolder('**/**', value.replace(/\D/g, ''), '*')
  const regCard = (value) => placeHolder('**** **** **** ****', value.replace(/\D/g, ''), '*')

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

  const formik = useFormik({
    initialValues: {
      cardName: data?.cardName,
      cardNumber: data?.cardNumber,
      expiryDate: data?.expiryDate,
      cvc: data?.cvc
    },
    validationSchema: Yup.object({
      cardName: Yup.string()
      .required('Введите Ваше имя и фамилию'),
      cardNumber: Yup.string()
      .min(16, 'Проверьте номер карты')
      .required('Поле обязательно для заполнения'),
      expiryDate: Yup.string()
      .min(4, 'Проверьте дату')
      .required('Поле обязательно для заполнения'),
      cvc: Yup.string()
      .min(3, 'Проверьте Ваш CVC код')
      .required('Поле обязательно для заполнения')
    }),
    onSubmit: values => handleSubmit(values)
  })



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
                type="cardName"
                name="cardName"
                placeholder="ANDREY IVANOV"
                onChange={(e) => {formik.handleChange(e); setCardName(regName(e.target.value))}}
                onBlur={formik.handleBlur} 
                value={cardName}
              />
              {formik.touched.cardName && formik.errors.cardName ? (<div>{formik.errors.cardName}</div>) : null}
            </div>
            <div className="input">
              <label htmlFor="" className="input__title">Номер карты</label>
              <Input
                type="card"
                name="cardNumber"
                placeholder="0000 0000 0000 0000"
                onChange={(e) => {formik.handleChange(e); setCardNumber(regCard(e.target.value))}}
                onBlur={formik.handleBlur} 
                value={cardNumber}
              />
              {formik.touched.cardNumber && formik.errors.cardNumber ? (<div>{formik.errors.cardNumber}</div>) : null}
              </div>
              <div className="card-row">
                <div className="input">
                  <label htmlFor="" className="input__title">MM/YY</label>
                  <Input
                    type="text"
                    name="expiryDate"
                    placeholder="00/00"
                    onChange={(e) => {formik.handleChange(e); setExpiryDate(regDate(e.target.value)) }}
                    onBlur={formik.handleBlur} 
                    value={expiryDate}
                  />
                  {formik.touched.expiryDate && formik.errors.expiryDate ? (<div>{formik.errors.expiryDate}</div>) : null}
                </div>
                <div className="input">
                  <label htmlFor="" className="input__title">CVC</label>
                  <Input
                    type="text"
                    name="cvc"
                    placeholder="***"
                    onChange={(e) => {formik.handleChange(e); setCvc(regCVC(e.target.value)) }}
                    onBlur={formik.handleBlur} 
                    value={cvc}
                  />
                  {formik.touched.cvc && formik.errors.cvc ? (<div>{formik.errors.cvc}</div>) : null}
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