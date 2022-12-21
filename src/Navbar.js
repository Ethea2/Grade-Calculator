const Navbar = () => {
    return (
        <nav class="border-gray-200 px-2 sm:px-4 py-2.5 rounded palette4">
            <div class="container flex flex-wrap items-center justify-between mx-auto">
                <a class="flex items-center">
                    <img src="https://freepngimg.com/thumb/calculator/75064-logo-symbol-green-calculator-download-hd-png.png" class="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
                    <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">DLSU Grade Calculator</span>
                </a>
                <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400" aria-controls="navbar-default" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                </button>
                <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg palette3 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
                        {/* md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 */}
                        <li>
                            <a href="#" class="block py-2 pl-3 pr-4 text-emerald-100 bg-blue-700 rounded md:bg-transparent md:text-emerald-900 md:p-0 text-emerald-900" aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href="#" class="block py-2 pl-3 pr-4 text-gray-400 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-emerald-900 md:p-0">About</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar