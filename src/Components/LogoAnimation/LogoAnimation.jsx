import "./LogoAnimation.css"
export default function LogoAnimation(){
  return(
    <div id = "avatar" className="mx-2 sm:mx-8 h-16 sm:h-24 w-16 sm:w-24 rounded-full border-2 border-white relative">
      <div id="goggles" className=" w-8 h-8 rounded-full">
        <div>

        </div>
      </div>
      <div id="guitar" className=" w-8 h-8 rounded-full "></div>
      <div id="football" className=" w-8 h-8 rounded-full"></div>
      <div id="trumpet" className=" w-8 h-8 rounded-full"></div>
      <div id="bike" className=" w-8 h-8 rounded-full"></div>
    </div>
  )
}