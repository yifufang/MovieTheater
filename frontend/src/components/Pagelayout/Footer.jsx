
export default function Footer() {
  return (
    <footer className="text-gray-600 body-font border-t">
      <div className="container px-5 py-2 mx-auto">
        <div className="flex flex-wrap md:text-left text-center order-first">
          <div className="lg:w-1/2 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              CATEGORIES
            </h2>
            <nav className="list-none">
              <li>
                <a className="text-gray-600 hover:text-gray-800" href="/">Home</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800" href="/membership">Membership</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800" href="/book-tickets">Book Tickets</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800" href="/contact-us">Contact Us</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800" href="/about-us">About Us</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              SUBSCRIBE TO US
            </h2>
            <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
              <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                <label
                  htmlFor="footer-field"
                  className="leading-7 text-sm text-gray-600"
                >
                  Email
                </label>
                <input
                  type="text"
                  id="footer-field"
                  name="footer-field"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex mb-2 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white dark:bg-gray-800">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center">
          <div className="text-sm text-gray-500 sm:text-center dark:text-gray-400 lg:w-1/2 md:w-1/2 w-full px-4 text-left">
            © 2023
            <a href="#" className="hover:underline">
              TeamAlpha™
            </a>
            . All Rights Reserved.
          </div>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0 lg:w-1/2 w-full px-4">
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
