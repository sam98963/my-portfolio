import "./LogoAnimation.css"
export default function LogoAnimation(){
  return(
    <div id = "avatar" className="mx-8 sm:mx-20 h-64 md:h-72 lg:h-88 w-64 md:w-72 lg:w-88 rounded-full border-2 border-white relative my-16 sm:my-12 sm:mt-20 my">
      <div id="goggles" className=" w-8 h-8 rounded-full">
        <div>

        </div>
      </div>
      <div id="guitar" className="rounded-full "></div>
      <div id="football" className="rounded-full"></div>
      <div id="trumpet" className="rounded-full"></div>
      <div id="bike" className="rounded-full"></div>
    </div>
  )
}