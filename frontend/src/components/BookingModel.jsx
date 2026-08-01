import { useState } from "react";
import axios from "axios";

export default function BookingModal({ car, closeModal, refreshCars }) {

    const [customerName, setCustomerName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [bookedDate, setBookedDate] = useState("");

    const bookCar = async () => {
        try {
            await axios.post("http://localhost:8080/api/booking", {
                carID: car.id,
                customerName,
                phoneNumber,
                bookedDate
            });

            alert("Booked Successfully");
            closeModal();
            refreshCars();
        } catch (error) {
            console.log(error);
            alert("Booking Failed");
        }
    };

    return (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
            <div className="bg-white p-8 rounded-xl w-96">
                <h2 className="text-2xl font-bold mb-5">Book {car.carName}</h2>

                <input className="border w-full p-2 mb-3 rounded" placeholder="Customer Name" onChange={(e) => setCustomerName(e.target.value)}/>
                <input className="border w-full p-2 mb-3 rounded" placeholder="Phone Number" onChange={(e) => setPhoneNumber(e.target.value)}/>
                <input type="date" className="border w-full p-2 mb-5 rounded" onChange={(e) => setBookedDate(e.target.value)}/>

                <div className="flex justify-end gap-3">
                    <button onClick={closeModal} className="bg-gray-500 text-white px-4 py-2 rounded"> Cancel</button>
                    <button onClick={bookCar} className="bg-yellow-400 px-4 py-2 rounded">Confirm</button>
                </div>
            </div>
        </div>
    );
}