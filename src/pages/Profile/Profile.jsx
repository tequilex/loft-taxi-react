import Header from "../../components/Header/Header";

function Profile({onNavigate}) {
  return(
    <>
      <Header onNavigate={onNavigate} />
      <div>Профиль</div>
    </>
  )
}

export default Profile