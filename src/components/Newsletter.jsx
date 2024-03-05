import {useState} from 'react'

const Newsletter = () => {
    
     const [userEmail, setUserEmail] = useState({useremail:""})
     const [userInput, setUserInput] = useState("")
     
     const handleChange = (e) => {
       setUserInput(e.target.value)
       setUserEmail({...userEmail, useremail : e.target.value})
     }
// Stocker dans le localStorage sous la clé "newsletter" l'email de l'utilisateur
    const handleSubmit = (e) => {
      e.preventDefault()
      
      setUserInput("")
      const getUsersEmail = JSON.parse(window.localStorage.getItem("newsletter")) || []
      getUsersEmail.push(userEmail)
      window.localStorage.setItem("newsletter",JSON.stringify(getUsersEmail))
    }
  
  
    return (
      <div className="bg-[#0E1217] py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl text-[#E11D48] font-bold mb-4">Abonnez-vous à notre Newsletter</h2>
          <p className="text-gray-400 mb-8">Recevez les derniers articles et mises à jour directement dans votre boîte mail.</p>
          <form onSubmit={handleSubmit} method="POST" className="flex justify-center items-center gap-4 md:gap-6">
            <input
              value={userInput}
              type="email"
              name="email"
              placeholder="Entrez votre adresse email"
              className="w-full px-3 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-[#E11D48] focus:outline-none"
              onChange={handleChange} required
            />
            <button
              type="submit"
              className="px-3 py-3 bg-[#E11D48] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#C01D48] hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#E11D48] active:shadow-lg transition duration-150 ease-in-out">
              S'abonner
            </button>
          </form>
        </div>
      </div>
    </div>
    );
  };
  export default Newsletter