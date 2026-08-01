import { useState, useEffect } from "react";
import axios from "axios";
import BookingModal from "./BookingModel";

export default function CarCard() {

    const [cars, setCars] = useState([]);
    const [selectedCar, setSelectedCar] = useState(null);

    useEffect(() => {
        fetchCars();
    }, []);

    const fetchCars = async () => {
        try {
            const response = await axios.get("http://localhost:8080/api/cars");
            setCars(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <section className="bg-gray-100 py-12">
            <div className="max-w-7xl mx-auto px-6">
                <h1 className="text-4xl font-bold text-center mb-10">Available Cars</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {cars.map((car) => (
                        <div key={car.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">

                            <img src={`http://localhost:8080/uploads/${car.image}`} alt={car.carName} className="w-full h-52 object-cover"/>

                            <div className="p-5">
                                <h2 className="text-2xl font-bold">{car.carName}</h2>

                                <div className="mt-4 space-y-2">
                                    <p><span className="font-semibold">Seats :</span>{" "}{car.seats}</p>
                                    <p><span className="font-semibold">Place :</span>{" "}{car.place}</p>
                                    <p className="text-green-600 text-xl font-bold">₹ {car.price}</p>
                                </div>

                                {car.booked ? (
                                    <button disabled className="mt-5 w-full bg-gray-500 text-white py-3 rounded-lg cursor-not-allowed">Already Booked</button>
                                ) : (
                                    <button onClick={() => setSelectedCar(car)} className="mt-5 w-full bg-yellow-400 hover:bg-yellow-500 py-3 rounded-lg font-semibold">Book Now</button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {selectedCar && (
                <BookingModal car={selectedCar} closeModal={() => setSelectedCar(null)} refreshCars={fetchCars}/>
            )}

        </section>
    );
}