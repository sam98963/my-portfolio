import "./LogoAnimation.css"
export default function LogoAnimation(){
  return(
    <div id = "avatar" className="mx-8 sm:mx-16 h-64 md:h-72 lg:h-96 w-64 md:w-72 lg:w-96 rounded-full border-2 border-white relative mt-12 sm:mt-16">
      <div id="goggles" className=" w-8 h-8 rounded-full">
        <div>

        </div>
      </div>
      <div id="guitar" className=" sm:w-8 sm:h-8 w-6 h-6  rounded-full "></div>
      <div id="football" className=" sm:w-8 sm:h-8 w-6 h-6 rounded-full"></div>
      <div id="trumpet" className=" sm:w-8 sm:h-8 w-6 h-6 rounded-full"></div>
      <div id="bike" className=" sm:w-8 sm:h-8 w-6 h-6 rounded-full"></div>
    </div>
  )
}