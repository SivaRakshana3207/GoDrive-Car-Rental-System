export default function Navbar() {
  return (
    <nav className="bg-black text-white px-8 py-4 flex justify-between items-center">

      <h1 className="text-3xl font-bold">
        <span className="text-yellow-400">Go</span>Drive
      </h1>

      <div className="hidden md:flex gap-8">
        <a href="#" className="hover:text-yellow-400">Home</a>
        <a href="#" className="hover:text-yellow-400">Cars</a>
        <a href="#" className="hover:text-yellow-400">About</a>
        <a href="#" className="hover:text-yellow-400">Contact</a>
      </div>

      <button className="bg-yellow-400 text-black px-5 py-2 rounded-lg font-semibold hover:bg-yellow-500">Book Now</button>

    </nav>
  );
}