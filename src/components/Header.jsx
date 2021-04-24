import React, { useState } from 'react'

const Header = () =>
    <div className="flex flex-row py-1 px-2 bg-gray-100 shadow">
        <div className="p-2 flex-0 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 6.35 6.35"><path d="M3.185.186a1.99 1.99 0 00-.057 0 1.99 1.99 0 00-.948.266 1.99 1.99 0 00-.729 2.72 1.99 1.99 0 00.04.066l1.69 2.926.695-1.205-.465-.806a1.99 1.99 0 00.76-.252 1.99 1.99 0 00.728-2.72A1.99 1.99 0 003.185.186zm-.029 1.209a.782.782 0 01.696.39.782.782 0 01-.286 1.069.782.782 0 01-1.068-.287.782.782 0 01.286-1.068.782.782 0 01.372-.104z" fill="#0078d7" /></svg>
        </div>
        <div className="p-2 flex-1 font-bold text-xl text-gray-700">
            Hebrew Tools
        </div>
        <a className="py-2 px-4 rounded-lg font-bold hover:bg-gray-200 text-gray-700 hover:text-blue-600" href="https://parabible.com">
            Try out parabible.com
        </a>
    </div>
export default Header