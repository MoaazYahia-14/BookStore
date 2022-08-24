import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'; 
export default function BookDescription() {
    let idBook = useParams();
    const [bookDetails, setBookDetails] = useState(null);
    async function getBookDetails(id) {
        let { data } = await axios.get(`https://gutendex.com/books/?ids=${id}`);
            setBookDetails(data.results[0])
    }
    useEffect(() => {
        getBookDetails(idBook.id);
    }, [])
    return (<>
        <div className='my-5'>
            {bookDetails !=null ?<div className="row text-white">
                <div className="col-md-3">
                    <img src={bookDetails.formats["image/jpeg"]} alt="img" className='w-100' />
                </div>
                <div className="offset-1 col-md-8">
                    <h1 className='mb-3'><span className='font-semibold'>name :</span> {bookDetails.title}</h1>
                    {bookDetails.bookshelves.length !=0?<span className='mb-3'>
                        <span className='font-semibold'>Book helve :</span> { bookDetails.bookshelves}
                    </span>:''}
                    
                    <div className='my-3'>
                        { bookDetails.subjects.length !=0? <ul className="unstyled">
                            <span className='font-semibold'>Subjects :</span>
                            <li className='mb-1'>
                                <span className='text-danger'>*</span> {bookDetails.subjects[0]}
                            </li>
                            <li className='mb-1'>
                                <span className='text-danger'>*</span> {bookDetails.subjects[1]}
                            </li>
                            <li className='mb-1'>
                                <span className='text-danger'>*</span> {bookDetails.subjects[2]}
                            </li>
                        </ul>:''}
                    </div>
                    <div className='mb-3'>
                        <ul className="unstyled">
                            <span className='font-semibold'>Author :</span>
                            <li className='mb-1'>
                                <span className='text-danger'>*</span>Author name : {bookDetails.authors[0]["name"]}
                            </li>
                            <li className='mb-1'>
                                <span className='text-danger'>*</span> Born : {bookDetails.authors[0]["birth_year"]}
                            </li>
                            <li className='mb-1'>
                                <span className='text-danger'>*</span> Died : {bookDetails.authors[0]["death_year"]}
                            </li>
                        </ul>
                    </div>
                    <div className='flex items-center mb-3'>
                        <span>
                            <button type="button" className="btn btn-outline-primary">
                                <a href={bookDetails.formats["text/html"]} target="_blank">Read Online</a>
                            </button>
                        </span>
                        <span>
                            <button type="button" className="btn btn-outline-info mx-4">
                                <a href={bookDetails.formats["application/zip"]}>Download now</a>
                            </button>
                        </span>
                    </div>
                </div>
            </div> : <div className='vh-100 flex justify-center items-center'>   
                <i className="fa-solid fa-spinner fa-spin fa-2xl text-primary"></i>
            </div>}
        </div>
    </>
    )
}
