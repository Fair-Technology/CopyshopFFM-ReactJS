const Navbar = () => {
  return (
    <div className="container bg-red-500 mx-auto flex justify-between items-center h-20">
      <Logo />
      <NavList />
    </div>
   
  )
}

export default Navbar

const Logo = () => { 
  return <div className="pl-20">Logo img here</div>
  
 }

const NavList = () => { 
  return (
    <ul className="flex space-x-3 pr-20">
    <NavListItem page ='Home'/>
    <NavListItem page ='Cart'/>
    <NavListItem page ='OrderState'/>
    </ul>
  ) 

 }


 const NavListItem = (props:{page:String,}) =>{
  return (<li>{props.page}</li>)
}