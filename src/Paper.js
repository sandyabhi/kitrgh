import React from 'react'
import "./style/Paper.css"
import { useState} from 'react';
function Paper() {

    const [cvalue, setCvalue] = useState('http://www.kitraigarh.com/questionpapers.aspx')
    const src2 = "http://www.kitraigarh.com/Scheme.aspx"
    const src1 = "http://www.kitraigarh.com/questionpapers.aspx"
    const src3 = "http://www.kitraigarh.com/ebook.aspx"


    return (<>
        <div className="cardsMain">
            <div className="popt">
                <select onChange={e => setCvalue(e.target.value)}>
                    <option value={src1}>Previous Year Paper</option>
                    <option value={src2}>Syllabus/Scheme</option>
                    <option value={src3}>Ebook</option>
                </select>
            </div>
            <div className="paperf">
                <iframe title="paper" width="95%"  src={cvalue} ></iframe>
            </div>
        </div>
    </>
    )
}

export default Paper
