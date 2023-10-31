import logo from "../../../Statics/logo.png";

export default function NavBar() {
  return (
    <div className="container mx-auto flex flex-wrap p-1.5 flex-col md:flex-row items-center">
      <div className="flex items-center flex-shrink-0 mr-6">
        <img className="h-16 w-20" src={logo} alt="Logo" />
      </div>
      <div class="mr-3">
        <h1 className="text-3xl text-gray-900">TeamAlpha</h1>
      </div>
      <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <a className="mr-5 hover:text-gray-900" href="/">
          Home
        </a>
        <a className="mr-5 hover:text-gray-900" href="/membership">
          Membership
        </a>
        <a className="mr-5 hover:text-gray-900" href="/browse-movie">Book Tickets</a>
        <a className="mr-5 hover:text-gray-900" href="/contact-us">Contact Us</a>
        <a className="mr-5 hover:text-gray-900" href="/about-us">About Us</a>
      </nav>
      <a href="/auth/login" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 px-4 focus:ring-blue-300 font-medium rounded-lg text-sm py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
        Login
      </a>
    </div>
  );
}
