import React from 'react'

const MyAdj = (props) => {
    return (
        <div className="container">
        <div className='row' style={{ textAlign: 'left' }}>
            <div className="col-5" style={{width:"100%"}}>
            <h5>My adjustments:</h5>
            </div>
            <div className="col-7">
            Minimum age:   {props.Adj.minAge}<br />
            Maximum age:    {props.Adj.maxAge}<br />
            Minimum distance:    {props.Adj.minDis} <br />
            Minimum distance:    {props.Adj.maxDis} < br />
            </div>
        </div >
        </div>
    )
}
export default MyAdj
