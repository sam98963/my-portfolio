export default function Collage(){
  return(
  <main  className="w-screen h-auto lg:h-screen flex items-center justify-center bg-gradient-to-br from-primary via-forth to-tertiary" >
      <section className="w-4/5 h-4/5 overflow-hidden rounded-2xl">
        <figure className="h-full w-full rotate-12 scale-150">
         
          <div className="h-1/2 lg:w-full w-1/2 flex">
            <img src="https://images.unsplash.com/photo-1687863664540-81eb283dbd1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
              className="flex-2 h-full w-full object-cover lg:p-2 sm:p-1.5 p-1 rounded-lg"/>
            <img src="https://images.unsplash.com/photo-1694554060925-c36fa7f9918d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
            className="flex-1 h-full w-full object-cover lg:p-2 sm:p-1.5 p-1 rounded-lg"/>
          </div>
          <div className="h-1/2 lg:w-full w-1/2 flex">
          <img src="https://images.unsplash.com/photo-1687863664540-81eb283dbd1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
            className="flex-1 h-full w-full object-cover lg:p-2 sm:p-1.5 p-1"/>
            <img src="https://images.unsplash.com/photo-1694554060925-c36fa7f9918d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
            className="flex-2 h-full w-full object-cover lg:p-2 sm:p-1.5 p-1"/>
          </div>
        </figure>
      </section>
    </main>
  )
}