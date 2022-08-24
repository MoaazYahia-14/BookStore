import React from 'react';
import Poster from './BookPoster.png'
import { Link } from 'react-router-dom';
export default function GetStart() {
    return (<>
    <div className="GetStart h-screen flex justify-center items-center text-white ">
        <div className="row">
            <div className="GetStartHeader relative flex justify-center items-center mb-5 shadow p-5">
                    <div className="col-md-6">
                        <h2 className='mb-5'>Welcome to our book store , click below to get started</h2>
                        <Link to='/home'>
                            <button type="button" class="btn btn-outline-primary font-semibold">Get Start</button>
                        </Link>
                    </div>
                    <div className="col-md-4">
                        <img src={Poster} alt="img"  className='w-100 rounded-3'/>
                    </div>
                </div>
        </div>
    </div>
    </>
    )
}
