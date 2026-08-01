export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white">
      <div className="max-w-7xl mx-auto px-8 py-10 grid md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-3xl font-bold"><span className="text-yellow-400">Go</span>Drive</h2>

          <p className="mt-3 text-gray-300">
            Book your dream car with affordable prices and
            premium services across Tamil Nadu.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">
            Quick Links
          </h3>

          <ul className="space-y-2 text-gray-300">
            <li>Home</li>
            <li>Cars</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">
            Contact
          </h3>

          <p>Email : support@godrive.com</p>
          <p>Phone : +91 9876543210</p>
          <p>Location : Chennai, India</p>
        </div>

      </div>

      <div className="border-t border-gray-700 text-center py-4">
        © 2026 GoDrive. All Rights Reserved.
      </div>

    </footer>
  );
}