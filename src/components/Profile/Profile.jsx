import React from "react"
import Button from "../UI/Button/Button"
import './Profile.scss'

function Profile() {
  return(<>
      <div className="profile">
          <div className="profile__title">Профиль</div>
          <div className="subtitle">Введите платежные данные</div>
          <div className="profile__content">
            <div className="left-side"></div>
            <div className="right-side"></div>
          </div>
          <Button type="submit">Сохранить</Button>
      </div>
    
    </>)
}

export default Profile