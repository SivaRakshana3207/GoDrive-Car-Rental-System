import carBG from "../assets/carBG.PNG";

export default function Hero() {
  return (
    <section className="relative h-[650px]">

      <img src={carBG} alt="Car" className="absolute w-full h-full object-cover"/>

      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-3xl ml-12 text-white">
          <h1 className="text-6xl font-bold leading-tight">Rent Your Dream Car</h1>
          <p className="text-xl mt-6">
            Choose from a wide range of affordable cars.
            Fast booking, secure payment, and a comfortable ride.
          </p>
          <button className="mt-8 bg-yellow-400 text-black px-8 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-500 transition">
            Book Your Ride
          </button>
        </div>
      </div>

    </section>
  );
}