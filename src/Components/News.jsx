import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Loading from './Loading'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'

const News = (props) => {


    // articles = [{
    //     "source": { "id": null, "name": "/FILM" },
    //     "author": "Travis Yates",
    //     "title": "How A Richard Pryor Skit Became A Companion Piece To The Star Wars Holiday Special",
    //     "description": "There's random, and then there is stumbling across Richard Pryor bartending in the \"Star Wars\" universe. If you spend enough time searching \"Star Wars\" on YouTube, that's exactly what you'll uncover. Unfortunately, we only get a brief glimpse of the colorful …",
    //     "url": "https://www.slashfilm.com/1123995/how-a-richard-pryor-skit-became-a-companion-piece-to-the-star-wars-holiday-special/",
    //     "urlToImage": "https://www.slashfilm.com/img/gallery/how-a-richard-pryor-skit-became-a-companion-piece-to-the-star-wars-holiday-special/l-intro-1669946371.jpg",
    //     "publishedAt": "2022-12-02T02:03:04Z",
    //     "content": "\"The Richard Pryor Show\" debuted on September 13, 1977, a mere months after the debut of \"Star Wars: A New Hope.\" As Ultimate Classic Rock notes, the one-shot sketch show used a previous sketch speci… [+1651 chars]"
    // },
    // {
    //     "source": { "id": null, "name": "The Punch" },
    //     "author": "Damilola Aina",
    //     "title": "Abuja communities where residents live in fear of miners",
    //     "description": "Foreign firms operating mining sites have been making lives unbearable for residents of the Chachi community, Zuma Rock Estate in Niger State. DAMILOLA AINA writes on the effects on the people Chididum, a seven-year-old boy, is afraid. He is seated with his e…",
    //     "url": "https://punchng.com/abuja-communities-where-residents-live-in-fear-of-miners/",
    //     "urlToImage": "https://cdn.punchng.com/wp-content/uploads/2022/11/16195754/abuja-area.jpg",
    //     "publishedAt": "2022-11-16T23:28:51Z",
    //     "content": "Foreign firms operating mining sites have been making lives unbearable for residents of the Chachi community, Zuma Rock Estate in Niger State. DAMILOLA AINA writes on the effects on the people\r\nChidi… [+15211 chars]"
    // }
    // ]
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
    const {country,category,apiKey,pageSize,progress,mode}=props

    useEffect(() => {   
        
        const updateArticles = async () => {
            setLoading(true)
            progress(20)
            let data = await fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${page}&pageSize=${pageSize}`);
            progress(50)

            let parsedData = await data.json();
            progress(70)


            setArticles(parsedData.articles)
            setLoading(false)
            setTotalResults(parsedData.totalResults)
            progress(100)
            document.title = `${category} - Harshey's`
        }
        updateArticles()
        // eslint-disable-next-line
    }, [])

    // const handleNextClick = async () => {
    //     this.setState({
    //         loading: true,
    //         page: page + 1

    //     }, () => {
    //       updateArticles();
    //         this.setState({
    //             prevBtnState: false
    //         }, () => {
    //             // Math.ceil(totalResult / this.pageSize)   Means that, it will return the total pages
    //             page + 1 > Math.ceil(totalResult / this.pageSize) ? this.setState({ nextBtnState: true }) : this.setState({ nextBtnState: false })
    //         })
    //     })
    // }
    // const handlePrevClick = async () => {
    //     this.setState({
    //         loading: true,
    //         page: page - 1

    //     }, () => {
    //        updateArticles();
    //         this.setState({
    //             nextBtnState: false,

    //         }, () => {
    //             if (page === 1) {
    //                 this.setState({ prevBtnState: true })
    //             }
    //         })
    //     })

    // }

    const FetchData = async () => {
        setPage(page+1)
        let data = await fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${page+1}&pageSize=${pageSize}`)
        let parsedData = await data.json();
        
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
    }
    return (
        <div className="container my-4" style={{ color: mode === "light" ? "black" : "white" }}>
            <h1 className='text-center' style={{marginTop: '100px'}}>Top {category} Headlines For You</h1>
            {loading && <Loading />}
            <InfiniteScroll
                dataLength={articles.length} //This is important field to render the next data
                next={FetchData}
                hasMore={articles.length !== totalResults}
                loader={<Loading />}>
                <div className="container">
                    <div className='row'>
                        {
                            articles.map((article, index) => {
                                
                                return <div className="col-md-4 col-sm-6 my-5" key={index}>
                                    <NewsItem
                                        mode={mode}
                                        publishedAt={article.publishedAt}
                                        title={article.title ? article.title.slice(0, 45) + "..." : "breacking news"}
                                        discription={article.description ? article.description.slice(0, 45) + "..." : "breacking news"}
                                        urlToImage={article.urlToImage}
                                        author={article.author}
                                        urlForBtn={article.url}
                                        source={article.source.name} />
                                </div>
                            })
                        }
                    </div>
                </div>
            </InfiniteScroll>


            {/* for button */}

            {/* // <div className='d-flex justify-content-around'>
                //     <button disabled={prevBtnState} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; previous</button>
                //     <button disabled={nextBtnState} type="button" className="btn btn-dark" onClick={this.handleNextClick}>next &rarr;</button>
                // </div> */}
        </div>
    )
}

News.defaultProps = {
    pageSize: 10,
    country: 'in',
    category: "general"
}
News.ProtoTypes = {
    pageSize: PropTypes.number,
    country: PropTypes.string,
    category: PropTypes.string
}

export default News;