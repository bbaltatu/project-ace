<script lang="ts" setup></script>

<template>
  <div>
    <button type="button" id="regionDropdownButton" data-dropdown-toggle="regionDropdown" class="hidden items-center p-2 pr-3 pl-4 text-gray-500 rounded-lg md:inline-flex hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600">
        flowbite.com
        <!-- Icon -->
        <svg class="ml-1 w-6 h-6" fill="currentColor" aria-hidden="true" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </button>
    <div id="regionDropdown" class="hidden z-30 w-60 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
        <ul class="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="regionDropdownButton">
        <li>
            <div class="flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
            <div class="flex items-center h-5">
                <input id="helper-radio-4" name="helper-radio" type="radio" value="" class="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
            </div>
            <div class="ml-2 text-sm">
                <label for="helper-radio-4" class="font-medium text-gray-900 dark:text-gray-300">
                    <div>themesberg.com</div>
                    <p id="helper-radio-text-4" class="text-xs font-normal text-gray-500 dark:text-gray-300">Free templates and themes</p>
                </label>
            </div>
            </div>
        </li>
        <li>
            <div class="flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
            <div class="flex items-center h-5">
                <input id="helper-radio-5" name="helper-radio" type="radio" value="" class="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
            </div>
            <div class="ml-2 text-sm">
                <label for="helper-radio-5" class="font-medium text-gray-900 dark:text-gray-300">
                    <div>iconscale.com</div>
                    <p id="helper-radio-text-5" class="text-xs font-normal text-gray-500 dark:text-gray-300">Open-source SVG icons</p>
                </label>
            </div>
            </div>
        </li>
        <li>
            <div class="flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
            <div class="flex items-center h-5">
                <input id="helper-radio-6" name="helper-radio" type="radio" value="" class="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
            </div>
            <div class="ml-2 text-sm">
                <label for="helper-radio-6" class="font-medium text-gray-900 dark:text-gray-300">
                    <div>ui.glass</div>
                    <p id="helper-radio-text-6" class="text-xs font-normal text-gray-500 dark:text-gray-300">Glassmorphism UI framework</p>
                </label>
            </div>
            </div>
        </li>
        </ul>
    </div>
  </div>
</template>

<style scoped></style>
