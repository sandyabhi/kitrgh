import React from 'react'
import "./style/Paper.css"
import { useState } from 'react';
function Paper() {

    const msrc = "";
    const [cvalue, setCvalue] = useState()
    const src2 = "http://www.kitraigarh.com/Scheme.aspx"
    const src1 = "http://www.kitraigarh.com/questionpapers.aspx"



    return (<>
        <div className="cardsMain">
            <div className="popt">
                <select onChange={e => setCvalue(e.target.value)}>
                    <option value="PYP">Previous Year Paper</option>
                    <option value="SS">Syllabus/Scheme</option>
                </select>
            </div>
            <div className="paperf">
                <iframe width="95%" frameborder="0" src={cvalue === "SS" ? src2 : src1} ></iframe>
            </div>
        </div>
    </>
    )
}

export default Paper
