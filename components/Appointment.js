// import Script from "next/script";
import Image from "next/image";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Appointment() {
  // function initMap() {
  //     // The location of Uluru
  //     const google = window.google
  //     const uluru = { lat: -25.344, lng: 131.036 };
  //     // The map, centered at Uluru
  //     const map = new google.maps.Map(document.getElementById("map"), {
  //       zoom: 8,
  //       center: uluru,
  //     });
  //     // The marker, positioned at Uluru
  //     const marker = new google.maps.Marker({
  //       position: uluru,
  //       map: map,
  //     });
  // }
  const [data,setData] = useState({
    name: "",
    contact: "",
    email: "",
    message: ""
  })

  const handleSubmit = () => {
    if(
        data.name === "" || data.name === null
        || data.contact === "" || data.contact === null
        || data.email === "" || data.email === null
        ){
          toast.error("Fill All The Required Details!", {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }else{
          setData({
            name: "",
            contact: "",
            email: "",
            message: ""
          })
          toast.success("Appointment Request Successfully Sent!", {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          toast.success("We Will Be Contacting You Soon!", {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
  }

  return (
    <div className="flex flex-col md:flex-row border-t-2 border-t-slate-500 py-2 bg-black p-4">
      <div className="grid w-full">
        <p className="text-xl font-semibold text-white w-11/12 mx-auto">
          REQUEST AN APPOINTMENT
        </p>
        <input
          type="text"
          className="w-11/12 mx-auto p-2 my-2 rounded ring-2 ring-sky-500 "
          id="name"
          placeholder="Name"
          value={data.name}
          onChange={e => setData({...data,name: e.target.value})}
        />
        <input
          type="text"
          className="w-11/12 mx-auto p-2 my-2 rounded ring-2 ring-sky-500 "
          id="contact"
          placeholder="Contact"
          value={data.contact}
          onChange={e => setData({...data,contact: e.target.value})}
        />

        <input
          type="email"
          className="w-11/12 mx-auto p-2 my-2 rounded ring-2 ring-sky-500 "
          id="email"
          placeholder="Email"
          value={data.email}
          onChange={e => setData({...data,email: e.target.value})}
        />

        <textarea
          id="message"
          className="w-11/12 mx-auto p-2 my-2 rounded ring-2 ring-sky-500 "
          placeholder="Message / Query"
          value={data.message}
          onChange={e => setData({...data,message: e.target.value})}
        />
        <button
          type="submit"
          className="bg-sky-500 w-11/12 my-2 mx-auto font-semibold text-white py-1 rounded"
          onClick={handleSubmit}
        >
          SUBMIT
        </button>
      </div>
      <div className="w-full grid gap-4 py-2">
        <p className="text-xl font-semibold text-white w-11/12 mx-auto">
          LOCATION
        </p>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.google.ca/maps/search/++++++++++++3483+Red+Hawk+Road,+Kensington,+Minnesota/@45.7779592,-95.7066502,15z/data=!3m1!4b1"
          className="flex items-center pt-8 mx-auto relative w-11/12 h-96"
        >
          <Image
            src="/location.jpg"
            layout="fill"
            objectCover="cover"
            alt="location"
          />
        </a>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <style jsx>{``}</style>
    </div>
  );
}
