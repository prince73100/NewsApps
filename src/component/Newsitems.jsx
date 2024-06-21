import React, { useEffect, useState } from 'react'
import Newsbody from './Newsbody'
import axios from 'axios'
import Spineer from './Spineer'
import { useDispatch, useSelector } from 'react-redux'
import { fetchactions } from '../store';
import ReactPaginate from 'react-paginate';

function Newsitems({ category }) {
    const { spineer } = useSelector((store) => store.fetchNews)
    const { datalength } = useSelector((store) => store.fetchNews)
    const dispatch = useDispatch()
    const [datas, setdatas] = useState([])
    axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`).then((res) => {
        dispatch(fetchactions.setlength(res.data.articles.length))
    })
    useEffect(() => {
        axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}&page=1&pageSize=6`).then((res) => {
            setdatas(res.data.articles)
            dispatch(fetchactions.isSpinner())
        })
    }, [])

    const fetchAgain = (currentPage) => {
        axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}&page=${currentPage}&pageSize=6`).then((res) => {
            setdatas(res.data.articles)
            dispatch(fetchactions.isSpinner())
        })
    }
    const handlepageClick = (data) => {
        const currentpage = data.selected + 1
        fetchAgain(currentpage)
    }
    return (
        <div className="container">
            <div className='my-4 '>
                <h1 className='headline' style={{ textAlign: "center" }}> NewsBreak - Top <span className=' text-primary'> {category} </span> News </h1>
            </div>
            {spineer && <Spineer />}
            <div className="news-item">
                {
                    datas.map((data) => {
                        return <div className="news-sub-item newsItems" key={data.url}>
                            <Newsbody key={data.url} title={data.title.slice(0, 35)} description={data.description == null ? "" : data.description.slice(0, 60)} image={data.urlToImage === null ? "https://techcrunch.com/wp-content/uploads/2024/05/Minecraft-keyart.jpg?resize=1200,720" : data.urlToImage} url={data.url} publishedAt={data.publishedAt} />
                        </div>
                    })
                }
            </div>
            <div className='my-4 p-4'>
                <ReactPaginate
                    onPageChange={handlepageClick}
                    pageRangeDisplayed={5}
                    pageCount={Math.ceil(datalength / 6)}
                    activeClassName={'active'}
                    className={'pagination justify-content-center'}
                    pageClassName={'page-item'}
                    pageLinkClassName={'page-link'}
                    previousClassName={'page-item'}
                    nextClassName={'page-item'}
                    previousLinkClassName={'page-link'}
                    nextLinkClassName={'page-link'}
                    onClick={window.scrollTo(0, 0)}
                />
            </div>
        </div>
    )
}

export default Newsitems
