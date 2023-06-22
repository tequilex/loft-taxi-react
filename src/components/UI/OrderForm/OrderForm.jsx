import React, {useState, useEffect} from "react";
import {connect} from 'react-redux'
import Button from "../Button/Button";
import PriceCard from "../../PriceCard/PriceCard";
import { getAddresses, getRoute } from "../../../store/actions";
import { 
  FormControl,
  MenuItem,
  Select,
  InputLabel
} from "@material-ui/core";
import './OrderForm.scss'

const prices = [
  {title: 'Стандарт', price: 150, img: 0},
  {title: 'Премиум', price: 250, img: 1},
  {title: 'Бизнес', price: 300, img: 2},
]


const OrderForm = ({getAddresses, getRoute, stateAddresses}) => {
  const [addresses, setAddresses] = useState([])
  const [start, setStart] = useState('')
  const [end, setEnd] = useState('')
  const [plan, setPlan] = useState('Стандарт')

  useEffect(() => {
    if(!stateAddresses[0]) {
      getAddresses()
    }
  }, [getAddresses, stateAddresses])
  useEffect(() => {
    if(stateAddresses) {
      setAddresses(stateAddresses)
    }
  }, [stateAddresses])

  
  const handleSubmit = async (e) => {
    e.preventDefault()
    await getRoute(start, end)
  }

  const changePlan = (planTitle) => {
    setPlan(planTitle)
  }

  return(
    <div className="form__wrapper">
    <form 
    className="form__container"
    onSubmit={(e) => handleSubmit(e)}
    >
      <div className="select__form">
        <FormControl className="formControl">
          {start ? <div className="selectStart" /> : null}
          <InputLabel>Откуда</InputLabel>
          <Select 
          className="select"
          onChange={(e) => setStart(e.target.value)}
          value={start}
          >
            {addresses ? addresses
            .filter((el) => el !== end)
            .map((item) => (
              <MenuItem value={item} key={item}>
                {item}
              </MenuItem>
            ))
          : null}
          </Select>
        </FormControl>
        <FormControl className="formControl">
        {end ? <div className="selectEnd" /> : null}
          <InputLabel>Куда</InputLabel>
          <Select 
          className="select"
          onChange={(e) => setEnd(e.target.value)}
          value={end}
          >
              {addresses ? addresses
              .filter((el) => el !== start)
              .map((item) => (
                <MenuItem value={item} key={item}>
                  {item}
                </MenuItem>
              ))
            : null}
          </Select>
        </FormControl>
      </div>
      <div className="sub__form">
        <div className="price__form">
          {prices ? prices.map((el, index) => (
            <PriceCard 
            key={index}
            info={el}
            plan={plan}
            value={el.title}
            changePlan={changePlan}
            />
          ))
        : null}
        </div>
        <div className="submit__btn">
          <Button type="submit">Заказать</Button>
        </div>
      </div>
    </form>
  </div>
  )
}


export default connect((state) => ({
  stateAddresses: state.addressReducer.addresses
}),
  {
    getAddresses,
    getRoute,
    
  }
)(OrderForm)