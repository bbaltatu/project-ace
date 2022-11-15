<script lang="ts" setup>
  
</script>

<template>
  <header>
  <nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-900">
      <div class="flex flex-wrap justify-between items-center">
          <div class="flex justify-start items-center">
              <a href="/" class="flex mr-6 xl:mr-8">
                <img src="https://flowbite.s3.amazonaws.com/logo.svg" class="mr-3 h-8" alt="FlowBite Logo" />
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Qubbit</span>
              </a>

              <!-- Desktop menu -->
              <div class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1">
                  <ul class="flex flex-col mt-4 space-x-6 font-medium lg:flex-row xl:space-x-8 lg:mt-0">
                      <!-- <li>
                          <a href="/" class="block text-white rounded text-primary-700 dark:text-primary-500" aria-current="page">Home</a>
                      </li> -->
                      <li>
                          <a href="/ideas" class="block text-gray-700 hover:text-primary-700 dark:text-gray-400 dark:hover:text-white">Ideas</a>
                      </li>
                      <li>
                          <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" class="flex justify-between items-center py-2 pr-4 pl-3 w-full font-medium text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-primary-700 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Apps <svg class="ml-1 w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
                          <!-- Dropdown menu -->
                          <div id="dropdownNavbar" class="hidden z-20 w-44 font-normal bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                              <ul class="py-1 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                                <li>
                                  <a href="/app/seo-meta" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Seo Meta</a>
                                </li>
                                <li>
                                  <a href="/app/seo-alt-image" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Se Alt Image</a>
                                </li>
                              </ul>
                          </div>
                      </li>
                       <li>
                          <a href="/activity-board" class="block text-gray-700 hover:text-primary-700 dark:text-gray-400 dark:hover:text-white">Activity Board</a>
                      </li>
                      <li>
                          <a href="/changelog" class="block text-gray-700 hover:text-primary-700 dark:text-gray-400 dark:hover:text-white">Changelog</a>
                      </li>
                      <li>
                          <a href="/faq" class="block text-gray-700 hover:text-primary-700 dark:text-gray-400 dark:hover:text-white">F.A.Q</a>
                      </li>
                      <li>
                          <a href="/contact" class="block text-gray-700 hover:text-primary-700 dark:text-gray-400 dark:hover:text-white">Contact</a>
                      </li>
                      <!-- <li>
                          <a href="#" class="block text-gray-700 hover:text-primary-700 dark:text-gray-400 dark:hover:text-white">Features</a>
                      </li> -->
                  </ul>
              </div>
            </div>
          <div class="flex justify-between items-center lg:order-2">
              <!-- <LayoutTopMenuNotifications />
              <span class="hidden mx-2 w-px h-5 bg-gray-200 dark:bg-gray-600 md:inline"></span>

              <LayoutTopMenuApps />
              <span class="hidden mx-2 w-px h-5 bg-gray-200 dark:bg-gray-600 md:inline"></span>
              
              <LayoutTopMenuProjects />
              <span class="hidden mx-2 w-px h-5 bg-gray-200 dark:bg-gray-600 md:inline"></span> -->

              <!-- <LayoutTopMenuUserMenu /> -->

              <a href="/login" class="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Login</a>
              <a href="/register" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Sign up</a>

              <button type="button" id="toggleMobileMenuButton" data-collapse-toggle="toggleMobileMenu" class="items-center p-2 text-gray-500 rounded-lg md:ml-2 lg:hidden hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600">
                  <span class="sr-only">Open menu</span>
                  <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
              </button>
          </div>
      </div>
  </nav>
  <nav class="bg-white dark:bg-gray-900">
      <!-- Mobile menu -->
      <ul id="toggleMobileMenu" class="hidden flex-col mt-0 w-full text-sm font-medium lg:hidden">
          <li class="block border-b dark:border-gray-800 lg:hidden">
              <button type="button" data-dropdown-toggle="regionDropdown" class="flex justify-between items-center py-3 px-4 w-full text-gray-900 lg:py-0 dark:text-white lg:hover:underline lg:px-0">
                  <span>Website <span class="ml-2 text-base text-gray-500 dark:text-gray-400">flowbite.com</span></span>
                  <svg class="w-6 h-6 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
              </button>
          </li>
          <li class="block border-b dark:border-gray-700">
              <a href="#" class="block py-3 px-4 text-gray-900 lg:py-0 dark:text-white lg:hover:underline lg:px-0" aria-current="page">Home</a>
          </li>
          <li class="block border-b dark:border-gray-700">
              <a href="#" class="block py-3 px-4 text-gray-900 lg:py-0 dark:text-white lg:hover:underline lg:px-0">Ideas</a>
          </li>
          <li class="block border-b dark:border-gray-700">
              <a href="#" class="block py-3 px-4 text-gray-900 lg:py-0 dark:text-white lg:hover:underline lg:px-0">Marketplace</a>
          </li>
          <li class="block border-b dark:border-gray-700">
              <a href="#" class="block py-3 px-4 text-gray-900 lg:py-0 dark:text-white lg:hover:underline lg:px-0">Features</a>
          </li>
          <li class="block border-b dark:border-gray-700">
              <button type="button" data-collapse-toggle="dropdownMobileNavbar" class="flex justify-between items-center py-3 px-4 w-full text-gray-900 lg:py-0 dark:text-white lg:hover:underline lg:px-0">Apps <svg class="w-6 h-6 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg></button>
              <ul id="dropdownMobileNavbar" class="hidden"> 
                  <li class="block border-t border-b dark:border-gray-700">
                      <a href="#" class="block py-3 px-4 text-gray-900 lg:py-0 dark:text-white lg:hover:underline lg:px-0">Seo Meta</a>
                  </li>
                  <li class="block border-b dark:border-gray-700">
                      <a href="#" class="block py-3 px-4 text-gray-900 lg:py-0 dark:text-white lg:hover:underline lg:px-0">Seo Alt Image</a>
                  </li>
                  <!-- <li class="block">
                      <a href="#" class="block py-3 px-4 text-gray-900 lg:py-0 dark:text-white lg:hover:underline lg:px-0">Support</a>
                  </li> -->
              </ul>
          </li>
      </ul>
  </nav>
</header>
</template>
<style scoped></style>
