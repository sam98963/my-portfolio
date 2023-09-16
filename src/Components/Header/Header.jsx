export default function Header(){
  return(
    <header className="h-40 w-full flex items-center justify-between text-secondary">
      <img />
      <div className="h-full flex w-3/5 sm:w-2/5 items-end justify-around mb-10">
        <p>Projects</p>
        <p>About</p>
        <p className="pr-2">Contact</p>
      </div>
    </header>
  )
}