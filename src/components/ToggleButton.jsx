import React, { useState } from 'react'

const callWithEventTargetChecked = callback => e => {
    console.log(e)
    callback(e.target.checked)
}

const checkedStyles =
    "absolute block w-4 h-4 mt-1 ml-1 rounded-full shadow inset-y-0 left-0 focus-within:shadow-outline transition-transform duration-300 ease-in-out bg-blue-500 transform translate-x-full"
const uncheckedStyles =
    "absolute block w-4 h-4 mt-1 ml-1 rounded-full shadow inset-y-0 left-0 focus-within:shadow-outline transition-transform duration-300 ease-in-out bg-gray-100"

const ToggleButton = ({ text, checked, onChange }) =>
    <label for="toggle" class="flex flex-row content-center cursor-pointer">
        <span class="relative">
            <span class="block w-10 h-6 bg-gray-200 rounded-full shadow-inner"></span>
            <span class={checked ? checkedStyles : uncheckedStyles}>
                <input
                    id="toggle"
                    type="checkbox"
                    class="absolute opacity-0 w-0 h-0"
                    checked={checked}
                    onChange={callWithEventTargetChecked(onChange)} />
            </span>
        </span>
        <span class={"flex items-center ml-3 text-sm select-none font-bold "
            + (checked ? "text-gray-500" : "text-gray-400")}>
            {text}
        </span>
    </label>
export default ToggleButton



    // <div class="flex justify-center items-center">
    //     <div className={"relative rounded-full w-12 h-6 transition duration-200 ease-linear"
    //         + (checked ? 'bg-green-400' : 'bg-gray-400')}
    //     >
    //         <label for="toggle"
    //             className={"absolute left-0 bg-white border-2 mb-2 w-6 h-6 rounded-full transition transform duration-100 ease-linear cursor-pointer"
    //                 + (checked ? 'translate-x-full border-green-400' : 'translate-x-0 border-gray-400')}></label>
    //         <input type="checkbox" id="toggle" name="toggle"
    //             class="appearance-none w-full h-full active:outline-none focus:outline-none"
    //             onChange={callWithEventTargetChecked(onChange)} />
    //     </div>
    // </div>