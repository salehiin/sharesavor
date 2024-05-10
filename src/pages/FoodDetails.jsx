import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const FoodDetails = () => {
  const { user } = useContext(AuthContext);

  const food = useLoaderData();

  const {
    _id,
    foodName,
    donatorName,
    donatorImage,
    quantity,
    pickupLocation,
    expiredDateTime,
    additionalNotes,
    userEmail,
  } = food || {};

  const handleFormSubmission = async (e) => {
    e.preventDefault();
    const form = e.target;
    const foodId = _id;
    // const fName = form.fname.value
    // const foodPhoto = form.photo.value
    // const dEmail = form.email.value
    // const dName = form.dname.value
    // const rDate = form.rdate.value
    // const pLocation = form.locate.value
    // const eDate = form.edate.value
    const email = user?.email;
    // const aNotes = form.notes.value
    // const status = 'Pending'
    const comment = form.comment.value;

    const begFood = {
      comment,
      email,
    };
    console.table(begFood);
  };

  return (
    <div className="flex flex-col md:flex-row justify-around gap-5  items-center min-h-[calc(100vh-306px)] md:max-w-screen-xl mx-auto ">
      {/* Job Details */}
      <div className="flex-1  px-4 py-7 bg-white rounded-md shadow-md md:min-h-[350px]">
        <div className="flex items-center justify-between">
          {/* <span className='text-sm font-light text-gray-800 '>
              Deadline: 12/08/2024
            </span> */}
          {/* <span className='px-4 py-1 text-xs text-blue-800 uppercase bg-blue-200 rounded-full '>
              Web Development
            </span> */}
          <p className="font-bold">Donor name: {donatorName}</p>
          <p>Pick Up: {pickupLocation}</p>
        </div>

        <div>
          <h1 className="mt-2 text-3xl font-semibold text-gray-800 ">
            {foodName}
          </h1>
          <p>Quantity: {quantity}</p>
          <p>Expired date: {expiredDateTime}</p>

          {/* MODAL START */}

          {/* You can open the modal using document.getElementById('ID').showModal() method */}
          <button
            className="btn"
            onClick={() => document.getElementById("my_modal_4").showModal()}
          >
            open modal
          </button>
          <dialog id="my_modal_4" className="modal">
            <div className="modal-box w-11/12 max-w-5xl">
              <h3 className="font-bold text-lg">Hello!</h3>
              <p className="py-4">{foodName}</p>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button, it will close the modal */}
                  <button className="btn">Food Request</button>
                </form>
              </div>
            </div>
          </dialog>

          {/* MODAL END*/}

          {/* <p className='mt-2 text-lg text-gray-600 '>
              Lorem ipsum dolor sit amet consectetur adipisicing elit...
            </p> */}
          <p className="mt-6 text-sm font-bold text-gray-600 ">
            Buyer Details:
          </p>
          <div className="flex items-center gap-5">
            <div>
              <p className="mt-2 text-sm  text-gray-600 ">Name: Jhankar Vai.</p>
              <p className="mt-2 text-sm  text-gray-600 ">
                Email: jhankar@mahbub.com {userEmail}
              </p>
            </div>
            <div className="rounded-full object-cover overflow-hidden w-14 h-14">
              <img src="" alt="" />
            </div>
          </div>
          <p className="mt-6 text-lg font-bold text-gray-600 ">
            Range: $100 - $150
          </p>
        </div>
      </div>
      {/* Place A Bid Form */}
      <section className="p-6 w-full  bg-white rounded-md shadow-md flex-1 md:min-h-[350px]">
        <h2 className="text-lg font-semibold text-gray-700 capitalize ">
          Place A Bid
        </h2>

        <form onSubmit={handleFormSubmission}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            {/* <div>
                <label className='text-gray-700 ' htmlFor='price'>
                  Price
                </label>
                <input
                  id='price'
                  type='text'
                  name='price'
                  className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                />
              </div> */}
            {/* FOOD NAME */}
            {/* <div>
                <label className='text-gray-700 ' htmlFor='price'>
                  Price
                </label>
                <input
                  id='fname'
                  type='text'
                  name='fname'
                  className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                />
              </div> */}

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

            <div>
              <label className="text-gray-700 " htmlFor="comment">
                Comment
              </label>
              <input
                id="comment"
                name="comment"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>
            <div className="flex flex-col gap-2 ">
              <label className="text-gray-700">Deadline</label>

              {/* Date Picker Input Field */}
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <button
              type="submit"
              className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            >
              Place Bid
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default FoodDetails;
