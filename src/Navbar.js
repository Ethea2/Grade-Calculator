const Navbar = () => {
    return (
        <nav className="border-gray-200 px-2 sm:px-4 py-2.5 rounded palette4">
            <div className="container flex flex-wrap items-center justify-between mx-auto">
                <a className="flex items-center">
                    <img src="https://freepngimg.com/thumb/calculator/75064-logo-symbol-green-calculator-download-hd-png.png" className="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
                    <span className="self-center text-xl font-semibold whitespace-nowrap text-white">DLSU Grade Calculator</span>
                </a>
            </div>
        </nav>
    )
}
export default Navbar

/*

<button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-slate-200 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
                        {md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700}
                        <li>
                            <a href="#" className="block py-2 pl-3 pr-4 text-emerald-100 bg-blue-700 rounded md:bg-transparent md:text-emerald-900 md:p-0 text-emerald-900" aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 pl-3 pr-4 text-gray-400 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-emerald-900 md:p-0">About</a>
                        </li>
                    </ul>
                </div>

*/
