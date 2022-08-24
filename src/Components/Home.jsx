import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
export default function Home() {
    const [GetBooksData, setGetBooksData] = useState([]);
    let num = new Array(10).fill(1).map((elem , i )=>i+1);
    async function getApiData(pageNumber) {
        let { data } = await axios.get(`https://gutendex.com/books/?page=${pageNumber}`)
            setGetBooksData(data.results);
    }
    useEffect(() => {
        getApiData(1);
    }, [])
    
    return (<>
        <div className="displayBooks mt-5">
            
            <div className="row justify-center g-3">
                {GetBooksData.length > 0 ?<>{GetBooksData.map((book , i)=><div key={i} className=" col-md-2">
                    <div className="Book  text-white relative">
                        <Link to={`/bookDescription/${book.id}`}>
                            <div className="Badg flex justify-center items-center top-0">
                                {book.languages}
                            </div>
                            <div className="seeMore border-S relative mb-3">
                                <img src={book.formats["image/jpeg"]} alt='img' className='w-100' />
                                <div className="blurDesc w-100 h-100 absolute flex justify-center items-center">
                                    <span className='text-center'>
                                        <p className='lead mb-4'> click Here</p>
                                        <i className="fa-solid fa-circle-arrow-right fa-2xl fa-bounce text-primary"></i>
                                    </span>
                                </div>
                            </div>
                            <p className='FS-14 h6 font-medium'><span className='text-primary font-extrabold'>author :</span> {book.authors[0]["name"]}</p>
                            <span className='FS-14 font-medium'><span className='text-primary font-extrabold'>Downloads :</span>  { book.download_count}</span>
                        </Link>
                        
                    </div>
                </div>)}
                </>:<div className='vh-100 flex justify-center items-center'>   
                        <i className="fa-solid fa-spinner fa-spin fa-2xl text-primary"></i></div>}
                
            </div>
            <nav aria-label="..." className='py-5 flex justify-center items-center'>
                <ul className="pagination pagination-sm">
                    {num.map((pageNum)=><li key={pageNum} onClick={()=>getApiData(pageNum)} className="page-item "><a className="cursor-pointer page-link bg-transparent font-semibold">{ pageNum }</a></li>)}
                </ul>
            </nav>
        </div>
    </>
    )
}
