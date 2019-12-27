import React from 'react'

import Slider from './Slider'

const Adjustments = (props) => {
    const Filter = {};
    


    const ageUp = (e) => {
        Filter.minAge = e[0]
        Filter.maxAge = e[1]
    }
    const disUp = (e) => {
        Filter.minDis = e[0]
        Filter.maxDis = e[1]


    }

    const myGender = (e) => {
        console.log(e.target.value);
        Filter.gender = e.target.value;
        beep.play()

    }
    var beep=new Audio()
beep.src='http://www.pachd.com/a/button/button7.wav' 



    return (
        <div>
            <form>
               
                <div>
                    I would like to meet <select id="select" style={{borderRadius:"5px"}}  required onChange={myGender}>
                       <option disabled selected>Select your option</option> 
                        
                        <option value="Female">Female</option>
                        <option  value="Male">Male</option>
                        
                    </select>
                    
                </div><br />
                <div>
                    <Slider filterfun={ageUp} name='Age range:'></Slider>
                    <Slider filterfun={disUp} name='Distance range:'></Slider>
                </div>
                
                <input className="btn btn-primary" type="button" value="Done" onClick={() => {
                    console.log("sdf")
                    props.Adjustments(Filter)
                    beep.play()



                }}></input>
            </form>
        </div>
    )
}
export default Adjustments;
