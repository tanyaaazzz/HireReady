import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 px-8 md:px-20 py-16">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between gap-12">
        {/* Logo */}
        <div>
          <h2 className="text-3xl font-bold text-white">
            Hire<span className="text-green-500">Ready</span>
          </h2>
        </div>

        {/* Product */}
        <div>
          <h3 className="text-white font-semibold mb-4">Product</h3>
          <ul className="space-y-3">
            <li>
              <a href="/" className="hover:text-green-500 transition">
                Home
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-green-500 transition">
                Resume Builder
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-green-500 transition">
                Templates
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-green-500 transition">
                ATS Checker coming soon!
              </a>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-white font-semibold mb-4">Resources</h3>
          <ul className="space-y-3">
            <li>
              <a href="/" className="hover:text-green-500 transition">
                Career Tips
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-green-500 transition">
                Blogs
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-green-500 transition">
                Community
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-green-500 transition">
                FAQs
              </a>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-white font-semibold mb-4">Legal</h3>
          <ul className="space-y-3">
            <li>
              <a href="/" className="hover:text-green-500 transition">
                Privacy
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-green-500 transition">
                Terms
              </a>
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="max-w-xs">
          <p className="leading-7">
            Build professional resumes and get ready for your dream job with
            HireReady.
          </p>

          <div className="flex gap-5 mt-6 text-lg">
            <a href="#" className="hover:text-green-500 transition">
              🌐
            </a>
            <a href="#" className="hover:text-green-500 transition">
              in
            </a>
            <a href="#" className="hover:text-green-500 transition">
              𝕏
            </a>
            <a href="#" className="hover:text-green-500 transition">
              ▶
            </a>
          </div>

          <p className="mt-6 text-sm">
            © 2026 HireReady
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;