import React from 'react'
import { Link } from 'react-router-dom';

export default function Notfound() {
    return (<>
    <div className='flex justify-center items-center'>
        <div className="notFoundIcon mt-5 text-center">
            <span className='p-5'>
                    <i className="fa-solid fa-circle-info  text-danger fa-4x"></i>
            </span>
            <div className='text-white mt-5'>
                
                <h2 className='font-semibold h1'>Error 404  Not Found Page</h2>
            </div>
        </div>
    </div>
    </>
    )
}
