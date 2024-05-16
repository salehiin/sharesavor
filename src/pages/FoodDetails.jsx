import { useContext, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import toast from "react-hot-toast";

const FoodDetails = () => {

  const [startDate, setStartDate] = useState(new Date());


  const { user } = useContext(AuthContext);

  const navigate = useNavigate()

  const food = useLoaderData();

  const {
    _id,
    foodName,
    foodImage,
    // donatorName,
    // donatorImage,
    requestDate, 
    quantity,
    pickupLocation,
    expiredDateTime,
    additionalNotes,
    userEmail,
    donar,
  } = food || {}

  const handleFormSubmission = async (e) => {
    e.preventDefault()
    if (user?.email === donar?.email)
      return toast.error('Action not permitted!')
   
    // if(user?.email ===donar?.email) return toast.error('Action not permitted!')
    
    const form = e.target
    const foodId = _id
    const name = foodName
    const fphoto = foodImage
    // const displayName = donatorName
    const rdate = requestDate
    const location = pickupLocation
    const expiry = expiredDateTime
    const email = user?.email
    const donator_email = donar?.email
    const donator_name = donar?.name
    // const notes = additionalNotes
    const comment = form.comment.value
    const status = 'Pending'

    const begData = {
      foodId, name, fphoto, rdate, location, expiry, email, donator_name, 
      donator_email, comment, status, donar}

    console.table(begData)
    try{
      const {data} = await axios.post(`${import.meta.env.VITE_API_URL}/beg`, begData)
      console.log(data)
      toast.success('Your Request Successful!')
        navigate('/myrequests')
    }catch (err){
      console.log(err)
    }
  }

  return (
    <div className="flex flex-col md:flex-row justify-around gap-5  items-center min-h-[calc(100vh-306px)] md:max-w-screen-xl mx-auto ">

      
                      {/* CARD CARD CARD CARD CARD CARD CARD CARD CARD CARD  */}

                      <div className="card lg:card-side bg-base-100 shadow-xl m-8">
                        <figure className="w-full"><img className="w-full rounded-2xl" src={foodImage} alt="Album"/></figure>
                        <div className="card-body">
                          <h2 className="card-title text-[#ff006e] text-3xl">{foodName}</h2>
                          <p>{additionalNotes}</p>
                          <p>Quantity: {quantity}</p>
                          <p>{user?.email}</p>
                          <p>Location: {pickupLocation}</p>
                          <p>Expired Date: {new Date(food.expiredDateTime).toLocaleDateString()}</p>
                          <div className="card-actions justify-end">
                            {/* MODAL START */}

          {/* You can open the modal using document.getElementById('ID').showModal() method */}
          <button
            className="btn btn-secondary"
            onClick={() => document.getElementById("my_modal_4").showModal()}
          >
            Food Request
          </button>
          <dialog id="my_modal_4" className="modal">
            <div className="modal-box w-11/12 max-w-5xl">
              {/* <h3 className="font-bold text-lg">Hello!</h3> */}
              
                <img className="object-cover w-20 h-20 border-2 border-blue-500 rounded-full dark:border-blue-400" alt="Food" src={foodImage}></img> 
              
              <p className="py-4 text-xl text-[#ff006e] font-bold">{foodName}</p>
              <div className="modal-action">
                {/* Food Details */}

                  {/* Place A Bid Form */}
                    <section className="p-6 w-full  bg-white rounded-md shadow-md flex-1 md:min-h-[350px]">
                      <h2 className="text-lg font-semibold text-gray-700 capitalize ">
                        Place A Request
                      </h2>





                      {/* FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM */}
                      {/* FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM */}

                      <form onSubmit={handleFormSubmission}>
                        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                          
                          {/* FOOD NAME */}
                          <div>
                              <label className='text-gray-700 ' htmlFor='price'>
                                Food Name
                              </label>
                              <input
                                id='name'
                                type='text'
                                name='name'
                                disabled
                                defaultValue={foodName}
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                              />
                          </div>
                          {/* Food Image */}
                          <div>
                              <label className='text-gray-700 ' htmlFor='price'>
                                Food Image
                              </label>
                              <input
                                id='fphoto'
                                type='text'
                                name='fphoto'
                                disabled
                                defaultValue={foodImage}
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                              />
                          </div>

                          {/* FOOD ID */}
                          
                          <div>
                              <label className='text-gray-700 ' htmlFor='price'>
                                Food ID
                              </label>
                              <input
                                id='fname'
                                type='text'
                                name='foodId'
                                disabled
                                defaultValue={_id}
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                              />
                          </div>
                          {/* DONATOR EMAIL */}
                          <div>
                            <label className="text-gray-700 " htmlFor="emailAddress">
                              Donator Email
                            </label>
                            <input
                              id="emailAddress"
                              type="email"
                              name="donator_email"
                              disabled
                              defaultValue={donar?.email}
                              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                            />
                        </div>

                        {/* DONATOR NAME */}
                          <div>
                            <label className="text-gray-700 " htmlFor="emailAddress">
                             Donator Name
                            </label>
                            <input
                              id="donarName"
                              // type="text"
                              name="donator_name"
                              disabled
                              defaultValue={donar?.name}
                              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                            />
                          </div>
                        {/* USER EMAIL   */}
                          <div>
                            <label className="text-gray-700 " htmlFor="emailAddress">
                              Email Address
                            </label>
                            <input
                              id="emailAddress"
                              type="email"
                              name="email"
                              disabled
                              defaultValue={user?.email}
                              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                            />
                          </div>
                        {/* REQUEST DATE */}
                          <div>
                            <label className="text-gray-700 block" htmlFor="emailAddress">
                            Request Date
                            </label>
                            <DatePicker 
                              className='block w-full pl-4 pr-60 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring' 
                              selected={startDate} 
                              onChange={(date) => setStartDate(date)} />
                            {/* <input
                              id="emailAddress"
                              type="date"
                              name="rdate"
                              
                              disabled
                              defaultValue={new Date(requestDate).toLocaleDateString()}
                              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                            /> */}
                            
                          </div>
                        {/* PICKUP LOCATION */}
                          <div>
                            <label className="text-gray-700 " htmlFor="emailAddress">
                              Pickup Location
                            </label>
                            <input
                              id="emailAddress"
                              type="text"
                              name="location"
                              disabled
                              defaultValue={pickupLocation}
                              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                            />
                          </div>
                            {/* EXPIRED DATE */}
                          <div>
                            <label className="text-gray-700 " htmlFor="emailAddress">
                            Expired Date
                            </label>
                            {/* <input
                              id="emailAddress"
                              type="date"
                              name="expiry"
                              disabled
                              defaultValue={expiredDateTime}
                              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                            /> */}

                            <p className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring">{new Date(food.expiredDateTime).toLocaleDateString()}</p>
                            
                          </div>  
                          {/* ADDITIONAL NOTES */}
                          <div>
                            <label className="text-gray-700 " htmlFor="comment">
                              Comment
                            </label>
                            <input
                              id="comment"
                              name="comment"
                              type="text"
                              
                              // defaultValue={additionalNotes}
                              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                            />
                          </div>
                          {/* <div className="flex flex-col gap-2 "> */}
                            {/* <label className="text-gray-700">Expired date: {new Date(expiredDateTime).toLocaleDateString()}</label> */}

                            {/* <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} /> */}
                          {/* </div> */}
                        </div>

                        <div className="flex justify-end mt-6">
                          {/* <button
                            type="submit"
                            className="btn px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                          >
                            Place Request
                          </button> */}
                        </div>
                        <button
                            type="submit"
                            className="btn btn-primary px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                          >
                            Place Request
                          </button>
                          
                          
                      </form>

                      {/* FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM */}
                      {/* FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM FORM */}
                      
                    </section>


                {/* Food Details */}
                
              </div>
            </div>
          </dialog>

          {/* MODAL END*/}
                          </div>
                        </div>
                      </div>


                      {/* CARD CARD CARD CARD CARD CARD CARD CARD CARD CARD  */}

      {/* Job Details */}
      {/* <div className="flex-1  px-4 py-7 bg-white rounded-md shadow-md md:min-h-[350px]">
      <img className="object-cover w-20 h-20 border-2 border-blue-500 rounded-full dark:border-blue-400" alt="Food" src={foodImage}></img> */}
        {/* <div className="flex items-center justify-between"> */}
          {/* <span className='text-sm font-light text-gray-800 '>
              Deadline: 12/08/2024
            </span> */}
          {/* <span className='px-4 py-1 text-xs text-blue-800 uppercase bg-blue-200 rounded-full '>
              Web Development
            </span> */}
          
          
        {/* </div> */}

        {/* <div>
          <h1 className="mt-2 text-3xl font-semibold text-gray-800 ">
            {foodName}
          </h1>
          <p>Quantity: {quantity}</p>
          <p>Expired date: {new Date(expiredDateTime).toLocaleDateString()}</p>
          {user?.email}
        </div> */}
      {/* </div> */}
      
    </div>
  );
};

export default FoodDetails;


// v-5 43:43