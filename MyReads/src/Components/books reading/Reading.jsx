import React, { useState, useEffect } from 'react'
import { useParams, NavLink } from 'react-router-dom';
import axios from "axios";

function Reading() {
    // data
    const [booksReading, satbooksReading] = useState([])
    useEffect(() => {
        GetData();
    }, [])
    // get
    const GetData = async () => {
        await axios.get('http://localhost:4000/reading').then(({ data }) => { satbooksReading(data) })
    }
    return (
        <React.Fragment>
            <div className="container px-4 py-5" id="custom-cards">
                <h2 className="pb-2 border-bottom">book reading</h2>
                <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
                    {booksReading.map(ele => (
                        <div className="col-12 col-sm-12 col-md-4" key={ele.id}>
                            <div className="img-book card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" >
                                <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                                    <h2 className="book-title pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">{ele.name}</h2>
                                    <ul className="reader d-flex list-unstyled mt-auto">
                                        <li className="d-flex align-items-center me-3 mt-4">
                                            <p>{ele.authorName}</p>
                                        </li>
                                        <li className=" d-flex align-items-center mt-4">
                                            <svg className="bi me-2" width="1em" height="1em">
                                            </svg>
                                            <p>{ele.year}</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="row mt-2">
                                <div className="col-4">
                                    <button className="btn btn-primary w-100">reading </button>
                                </div>
                                <div className="col-4">
                                    <button className="btn btn-primary w-100">want read</button>
                                </div>
                                <div className="col-4">
                                    <button className="btn btn-primary w-100">read</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </React.Fragment>
    )
}

export default Reading