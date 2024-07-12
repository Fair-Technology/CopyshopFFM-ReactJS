import logoImg from '../assets/Copyshop-FFM-Logo_img.png'

const Navbar = () => {
  return (
    <div className="container bg-red-600 mx-auto flex justify-between items-center h-20">
      <Logo />
      <NavList />
    </div>
   
  )
}

export default Navbar

const Logo = () => { 
  return <div className="pl-8 w-64 h-24 ">
    <img className="w-64 h-24 " src={logoImg} alt="Logo" />
  </div>
  
 }

const NavList = () => { 
  return (
    <ul className="flex gap-4 pr-8 text-lg text-white">
    <NavListItem page ='Home' />
    <NavListItem page ='Cart'/>
    <NavListItem page ='OrderState'/>
    </ul>
  ) 
}
 const NavListItem = ({page}:{page:string}) =>{
  return (<li>{page}</li>)
}