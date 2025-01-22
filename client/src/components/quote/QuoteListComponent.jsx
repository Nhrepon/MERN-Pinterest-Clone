import {useEffect} from 'react';

import QuoteStore from "../../dashboard/store/QuoteStore.js";
import {Link} from "react-router-dom";

const QuoteListComponent = ({data}) => {

    const {quoteList, getQuoteList}=QuoteStore();
    useEffect(()=>{
        (async ()=>{
            await getQuoteList();
        })()
    },[])


    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h2 className="fs-2 fw-bold text-center mt-3">Quote</h2>
                    <hr/>
                </div>
            </div>
            <div className="row">
                {quoteList && quoteList.length > 0 && quoteList.map((item, index) => {
                    return (
                        <div className="col-12 d-flex flex-wrap" key={index}>
                            <div className="card shadow w-100 my-2">
                                <Link to={"/quote/"+item._id} className="text-black">
                                    <div className="card-body d-flex flex-column justify-content-center">
                                        <h2 className="fs-5 card-title">"{item.quote}"</h2>
                                        <p className="card-text text-end">-{item.author['name']}</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
    );
};

export default QuoteListComponent;