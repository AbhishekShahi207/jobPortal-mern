export default function Footer() {
  return (
    <footer className="w-full bg-white border-t mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* Logo + About */}
          <div>
            <h2 className="text-2xl font-bold">
              Job<span className="text-orange-600">Portal</span>
            </h2>
            <p className="text-gray-500 mt-3 leading-relaxed text-sm">
              A modern job platform connecting skilled professionals with
              opportunities that help them grow in their careers.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li className="hover:text-orange-600 cursor-pointer">Home</li>
              <li className="hover:text-orange-600 cursor-pointer">Jobs</li>
              <li className="hover:text-orange-600 cursor-pointer">Browse</li>
              <li className="hover:text-orange-600 cursor-pointer">Post a Job</li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Top Categories</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li className="hover:text-orange-600 cursor-pointer">Full Stack Developer</li>
              <li className="hover:text-orange-600 cursor-pointer">Data Analyst</li>
              <li className="hover:text-orange-600 cursor-pointer">UI/UX Designer</li>
              <li className="hover:text-orange-600 cursor-pointer">Business Analyst</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>Email: shahiabhi9900gmail.com</li>
              <li>Phone: +91 63559 08917</li>
              <li>Location: India</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t mt-10 pt-6"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
          <p>© {new Date().getFullYear()} JobPortal. All Rights Reserved.</p>

          <div className="flex space-x-6 mt-4 md:mt-0">
            <a className="hover:text-orange-600 cursor-pointer">Privacy Policy</a>
            <a className="hover:text-orange-600 cursor-pointer">Terms & Conditions</a>
            <a className="hover:text-orange-600 cursor-pointer">Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
