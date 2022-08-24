import React, { useState, useEffect } from 'react'
import axios from "axios";
import Swal from 'sweetalert2'

function Search() {
    const [search, setSearch] = useState([])
    const [AllBooks, satAllBooks] = useState([])

    const handelSearch = (e) => {
        setSearch(e.target.value)
    }

    useEffect(() => {
        GetData();
    }, [search])
    const GetData = async () => {
        await axios.get('http://localhost:4000/allBooks').then(({ data }) => { satAllBooks(data) })
    }

    const Funreading = (eleID, eleName) => {
        axios.get(`http://localhost:4000/allBooks/${eleID}`).then(({ data }) => {
            axios.post('http://localhost:4000/reading', data).then(({ data }) => {
                Swal.fire(
                    'احسنت',
                    ('تم اضافة الكتاب ' + eleName + ' لرف القراءة'),
                    'success'
                )
                GetData();
            }).catch(({ response: { data } }) => {
                Swal.fire({
                    icon: 'error',
                    title: 'خطأ',
                    text: ('هذا الكتاب موجود بالفعل في رف القراءة'),
                })
            })
        })
    }
    const FunWantToRead = (eleID, eleName) => {
        console.log(eleName)
        axios.get(`http://localhost:4000/allBooks/${eleID}`).then(({ data }) => {
            axios.post('http://localhost:4000/wantToRead', data).then(({ data }) => {
                Swal.fire(
                    'احسنت',
                    ('تم اضافة الكتاب ' + eleName + ' لرف تريد أن تقرأ'),
                    'success'
                )
                GetData();
            }).catch(({ response: { data } }) => {
                Swal.fire({
                    icon: 'error',
                    title: 'خطأ',
                    text: ('هذا الكتاب موجود بالفعل في رف تريد أن تقرأ'),
                })
            })
        })
    }
    const FunRead = (eleID, eleName) => {
        axios.get(`http://localhost:4000/allBooks/${eleID}`).then(({ data }) => {
            console.log(data)
            axios.post('http://localhost:4000/read', data).then(({ data }) => {
                Swal.fire(
                    'احسنت',
                    ('تم اضافة الكتاب ' + eleName + ' لرف قرأ'),
                    'success'
                )
                GetData();
            }).catch(({ response: { data } }) => {
                Swal.fire({
                    icon: 'error',
                    title: 'خطأ',
                    text: ('هذا الكتاب موجود بالفعل في رف تريد أن تقرأ'),
                })
            })
        })
    }

    return (
        <div>
            <form className="container mt-3">
                <input className="form-control me-2" type="search" value={search} onChange={handelSearch} placeholder="Search" aria-label="Search" />
            </form>
            <div className="container px-4 py-5" id="custom-cards">
                <h2 className="pb-2 border-bottom">books</h2>
                <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
                    {AllBooks.map(ele => (
                        ele.name.includes(search) || ele.authorName.includes(search) || ele.year.includes(search) ?
                            <div className="col-12 col-sm-12 col-md-4" key={ele.id}>
                                <div>
                                    <div className="img-book card card-cover overflow-hidden text-white bg-dark rounded-5 shadow-lg" >
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
                                            <button type='button' className="btn btn-primary w-100" onClick={() => Funreading(ele.id, ele.name)} >reading </button>
                                        </div>
                                        <div className="col-4">
                                            <button type='button' className="btn btn-primary w-100" onClick={() => FunWantToRead(ele.id, ele.name)}>want read</button>
                                        </div>
                                        <div className="col-4">
                                            <button type='button' className="btn btn-primary w-100" onClick={() => FunRead(ele.id, ele.name)}>read</button>
                                        </div>
                                    </div>
                                </div>
                            </div> : ''
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Search