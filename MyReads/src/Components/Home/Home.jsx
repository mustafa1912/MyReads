import React, { useState, useEffect } from 'react'
import axios from "axios";
import Swal from 'sweetalert2'

function Home() {
    // data
    const [AllBooks, satAllBooks] = useState([])
    const [booksReading, satbooksReading] = useState([])
    const [booksWantRead, satbooksWantRead] = useState([])
    const [booksRead, satbooksRead] = useState([])

    useEffect(() => {
        GetData();
    }, [])
    // get
    const GetData = async () => {
        await axios.get('http://localhost:4000/allBooks').then(({ data }) => { satAllBooks(data) })
        await axios.get('http://localhost:4000/reading').then(({ data }) => { satbooksReading(data) })
        await axios.get('http://localhost:4000/read').then(({ data }) => { satbooksRead(data) })
        await axios.get('http://localhost:4000/wantToRead').then(({ data }) => { satbooksWantRead(data) })
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
    // 
    const FunMovereadingToWantToRead = (eleID, eleName) => {
        axios.get(`http://localhost:4000/allBooks/${eleID}`).then(({ data }) => {
            axios.post('http://localhost:4000/wantToRead', data).then(({ data }) => {
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
            axios.delete('http://localhost:4000/reading/' + eleID)
        })
    }
    const FunMoveReadingToRead = (eleID, eleName) => {
        axios.get(`http://localhost:4000/allBooks/${eleID}`).then(({ data }) => {
            axios.post('http://localhost:4000/read', data).then(({ data }) => {
                Swal.fire(
                    'احسنت',
                    ('تم اضافة الكتاب ' + eleName + ' لرف القراءة'),
                    'success'
                )
                console.log(data.data)
                GetData();
            }).catch(({ response: { data } }) => {
                Swal.fire({
                    icon: 'error',
                    title: 'خطأ',
                    text: ('هذا الكتاب موجود بالفعل في رف القراءة'),
                })
            })
            axios.delete('http://localhost:4000/reading/' + eleID)
        })
    }
    // 
    const FunMoveReadToReading = (eleID, eleName) => {
        axios.get(`http://localhost:4000/allBooks/${eleID}`).then(({ data }) => {
            axios.post('http://localhost:4000/reading', data).then(({ data }) => {
                Swal.fire(
                    'احسنت',
                    ('تم اضافة الكتاب ' + eleName + ' لرف القراءة'),
                    'success'
                )
                console.log(data.data)
                GetData();
            }).catch(({ response: { data } }) => {
                Swal.fire({
                    icon: 'error',
                    title: 'خطأ',
                    text: ('هذا الكتاب موجود بالفعل في رف القراءة'),
                })
            })
            axios.delete('http://localhost:4000/read/' + eleID)
        })
    }
    const FunMovereadToWantToRead = (eleID, eleName) => {
        axios.get(`http://localhost:4000/allBooks/${eleID}`).then(({ data }) => {
            axios.post('http://localhost:4000/wantToRead', data).then(({ data }) => {
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
            axios.delete('http://localhost:4000/read/' + eleID)
        })
    }
    // 
    const FunMoveWantToReadToReading = (eleID, eleName) => {
        axios.get(`http://localhost:4000/allBooks/${eleID}`).then(({ data }) => {
            axios.post('http://localhost:4000/reading', data).then(({ data }) => {
                Swal.fire(
                    'احسنت',
                    ('تم نقل الكتاب ' + eleName + ' لرف القراءة'),
                    'success'
                )
                console.log(data.data)
                GetData();
            }).catch(({ response: { data } }) => {
                Swal.fire({
                    icon: 'error',
                    title: 'خطأ',
                    text: ('هذا الكتاب موجود بالفعل في رف القراءة'),
                })
            })
            axios.delete('http://localhost:4000/wantToRead/' + eleID)
        })
    }
    const FunMoveWantToReadToRead = (eleID, eleName) => {
        axios.get(`http://localhost:4000/allBooks/${eleID}`).then(({ data }) => {
            axios.post('http://localhost:4000/read', data).then(({ data }) => {
                Swal.fire(
                    'احسنت',
                    ('تم نقل  الكتاب ' + eleName + ' لرف القراءة'),
                    'success'
                )
                console.log(data.data)
                GetData();
            }).catch(({ response: { data } }) => {
                Swal.fire({
                    icon: 'error',
                    title: 'خطأ',
                    text: ('هذا الكتاب موجود بالفعل في رف القراءة'),
                })
            })
            axios.delete('http://localhost:4000/wantToRead/' + eleID)
        })
    }
    return (
        <React.Fragment>
            <div className="container px-4 py-5" id="custom-cards">
                <h2 className="pb-2 border-bottom">books</h2>
                <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
                    {AllBooks.map(ele => (
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
                        </div>
                    ))}
                </div>
            </div>
            <div className="container px-4 py-5" id="custom-cards">
                <h2 className="pb-2 border-bottom">book reading</h2>
                <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
                    {booksReading.map(ele => (
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
                                    <div className="col-6">
                                        <button className="btn btn-primary w-100" onClick={() => FunMovereadingToWantToRead(ele.id, ele.name)}>want read</button>
                                    </div>
                                    <div className="col-6">
                                        <button className="btn btn-primary w-100" onClick={() => FunMoveReadingToRead(ele.id, ele.name)}>read</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="container px-4 py-5" id="custom-cards">
                <hr></hr>
                <h2 className="pb-2 border-bottom">want to read</h2>
                <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
                    {booksWantRead.map(ele => (
                        <div className="col-12 col-sm-12 col-md-4" key={ele.id}>
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
                                <div className="col-6">
                                    <button className="btn btn-primary w-100" onClick={() => FunMoveWantToReadToReading(ele.id, ele.name)}>reading </button>
                                </div>
                                <div className="col-6">
                                    <button className="btn btn-primary w-100" onClick={() => FunMoveWantToReadToRead(ele.id, ele.name)}>read</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="container px-4 py-5" id="custom-cards">
                <hr></hr>
                <h2 className="pb-2 border-bottom">Books read</h2>
                <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
                    {booksRead.map(ele => (
                        <div className="col-12 col-sm-12 col-md-4" key={ele.id}>
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
                                <div className="col-6">
                                    <button className="btn btn-primary w-100" onClick={() => FunMoveReadToReading(ele.id, ele.name)}>reading </button>
                                </div>
                                <div className="col-6">
                                    <button className="btn btn-primary w-100" onClick={() => FunMovereadToWantToRead(ele.id, ele.name)}>want read</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </React.Fragment>
    )
}

export default Home