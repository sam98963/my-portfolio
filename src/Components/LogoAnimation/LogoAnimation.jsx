import "./LogoAnimation.css"
export default function LogoAnimation(){
  return(
    <div className="mx-2 sm:mx-8 h-16 sm:h-24 w-16 sm:w-24 rounded-full border-2 border-white relative">
      <div id="goggles" className=" w-6 h-6 rounded-full bg-white"></div>
      <div id="guitar" className=" w-6 h-6 rounded-full bg-white"></div>
      <div id="games" className=" w-6 h-6 rounded-full bg-white"></div>
    </div>
  )
}