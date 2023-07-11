import { useState } from 'react';

function ContactForm() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleFrom=async()=>
     {

        let a= await fetch('http://localhost:4000/submit', {

        method: 'post',
        body: JSON.stringify({ name, email, message }),
        headers: {
            'Content-Type': 'application/json'
        },
      });

      console.log(a);

      alert("Thank you for your helpful feedback.");


        
     }





  return (

    <div>
        
      
        
        
        <div className="isolate bg-gray-700 px-6 py-24 sm:py-32 lg:px-8">
            <div
                className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
                aria-hidden="true"
            >
                <div
                    className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-bg-gradient-to-tr from-[#ff80b5] to-[#9089fc]  opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Contact Us</h2>
                <p className="mt-2 text-lg leading-8 text-gray-500">
                    Aute magna irure deserunt veniam aliqua magna enim voluptate.
                </p>
            </div>
            <div className="mx-auto mt-16 max-w-xl sm:mt-20">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div>



                        <label htmlFor="Name" className="block text-sm font-semibold leading-6 text-gray-500">
                            Name
                        </label>







                        <div className="mt-2.5">



                            <input
                                type="text"
                                name="name"
                                value={name}
                        

                                onChange={e=> setName(e.target.value)}

                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />






                        </div>
                    </div>
                    <div className="sm:col-span-2">

                        <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-500">
                            Email
                        </label>

                        <div className="mt-2.5">



                            <input
                                type="email"
                                name="email"
                                value={email}
                        

                                onChange={e=> setEmail(e.target.value)}




                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />






                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        {/*
  Message */}

                        <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-500">
                            Message
                        </label>




                        <div className="mt-2.5">






                            {/* textarea */}

                            <textarea
                                name="message"
                                rows={4}
                                value={message}


                                onChange={e=> setMessage(e.target.value)}









                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    
                            />

                            <button type="button" 
                                    onClick={handleFrom}  className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >Submit</button>
        






                        </div>
                    </div>
                </div>
                <div className="mt-10">







                </div>
            </div>
    </div>

        
       
    </div>
  )
}

export default  ContactForm;
