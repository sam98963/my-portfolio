import "./Contact.css"
import {useState} from "react"
import FormSubmitModal from "../FormSubmitModal/FormSubmitModal";
export default function Contact(){
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [emailData, setEmailData] = useState({
    fromName: "",
    fromEmail: "",
    fromMessage: ""
  });

  function validateEmail(email){
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
  }

  function validateForm(mail){
    if(mail.fromName.trim() == ""){
      alert("Please enter your name.")
      return false
    } 

    if(mail.fromMessage.trim() == ""){
      alert("Please enter a message.")
      return false
    } 

    if(!validateEmail(mail.fromEmail)){
      alert("Please enter a valid email.")
      return false
    }
    return true
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setEmailData((prevState) => ({ ...prevState, [name]: value }));
  }

  async function handleSendEmail(event){
    // console.log("email attempt")
    event.preventDefault();
    const mail = {
      fromEmail: emailData.fromEmail,
      fromName: emailData.fromName,
      fromMessage: emailData.fromMessage,
    }

    if(validateForm(mail)){
      // console.log("fetch attempt")
      const response = await fetch("https://wilzo-portfolio-server.onrender.com/contact", {
        method: 'POST',
        headers: {
          "Content-Type" : "application/json"
        },
        body: JSON.stringify(mail)
      })
      if (response.ok) {
        setIsModalVisible(true);
      } else {
        console.error('Request failed:', response.status, response.statusText);
      }
    }
  }




  return(
    <>
    <main id="contact" className="w-screen h-auto sm:h-screen flex md:items-center justify-center bg-gradient-to-tr from-primary via-forth to-tertiary text-white pt-10 lg:pt-0 relative">
    <FormSubmitModal setIsModalVisible={setIsModalVisible} isModalVisible={isModalVisible}/>
      <section className="w-4/5 sm:h-4/5 h-3/5 flex flex-col sm:text-md text-sm">
        <h1 className="sm:text-8xl text-6xl text-center sm:text-start">Contact Me</h1>
        <section className="h-4/5 w-full flex flex-col md:flex-row sm:items-center pt-10">
          <article className="flex-1 lg:px-5 flex flex-col items-center text-start">
            <div>
            <h3 className=" text-2xl sm:text-4xl md:text-5xl text-center sm:text-start flex flex-col items-center sm:items-start">Lets build something unforgettable <span className="block text-4xl sm:text-6xl md:text-8xl border-b-4 border-white w-fit">together.</span></h3>
            </div>
            <figure className="sm:self-start mt-5 pt-2 sm:text-2xl text-lg md:text-3xl items-center justify-center lg:justify-start flex  w-4/5 lg:w-3/5">
              <p className="lg:ml-2">I&apos;m also here:</p>
              <a href="https://www.linkedin.com/in/samwilliamson2918/" rel="noreferrer" target="_blank" className="transform scale-100 hover:scale-110 transition-transform duration-200 px-2"><i className="devicon-linkedin-plain"></i></a>
              <a href = "https://twitter.com/WilzoCodes" rel="noreferrer" target="_blank" className="transform scale-100 hover:scale-110 transition-transform duration-200 px-2"><i className="devicon-twitter-original"></i></a>
            </figure>
          </article>
          <form className="flex-1 flex flex-col px-5 items-center sm:text-lg py-10 md:pt-0 w-full">
            <label className="flex flex-col w-full md:w-4/5 py-2">
              Name
              <input type="text" name="fromName" onChange={handleInputChange} className="text-black rounded-sm border border-forth bg-tertiary opacity-50 h-10 mt-1 focus:outline-none focus:border-fifth focus:shadow-input"/>
            </label>
            <label className="flex flex-col w-full md:w-4/5 py-2">
              Email
              <input type="text" name="fromEmail" onChange={handleInputChange} className="text-black rounded-sm border border-forth bg-tertiary opacity-50 h-10 mt-1 focus:outline-none focus:border-fifth focus:shadow-input"/>
            </label>
            <label className="flex flex-col w-full md:w-4/5 py-2">
              Message
              <textarea type="text-area" name="fromMessage" onChange={handleInputChange} className="text-black rounded-sm border border-forth bg-tertiary opacity-50 h-20 mt-1 focus:outline-none focus:border-fifth focus:shadow-input"/>
            </label>
            <button onClick={handleSendEmail} className="btn w-full md:w-4/5 bg-white rounded-sm mt-2 py-3 rounded-xl relative flex items-center justify-center"><span>Submit</span></button>
          </form>
        </section>
      </section>
    </main>
    </>
  )
}