import logoImg from '../assets/Copyshop-FFM-Logo_img.png'

const Navbar = () => {
  return (
  <div className=" bg-red-600 mx-auto w-full p-4">
    <div className="flex-warp sm:flex justify-between p-4">
      <div className="flex items-center justify-center  min-w-36 min-h-18 sm:mb-0">
        <Logo />
      </div>
      <div className="flex items-center justify-center min-w-48 min-h-18">
        <NavList />
      </div>
    </div>
  </div>
  )
}

export default Navbar

const Logo = () => { 
  return <img className="w-64 h-24 " src={logoImg} alt="Logo" />
 }

const NavList = () => { 
  return (
    <ul className="flex gap-8 px-8 text-2xl text-white">
    <NavListItem page ='Home' />
    <NavListItem page ='Cart' />
    <NavListItem page ='OrderState'/>
    </ul>
  ) 
}
const NavListItem = ({page, buttonClass}:{page:string, buttonClass?:string}) =>{
  return <li><button className={buttonClass}>{page}</button></li>
}