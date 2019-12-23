import React from 'react'

import Slider from './Slider'

const Adjustments = (props) => {
    const Filter = {};
    Filter.gender = "Female";


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
    }



    return (
        <div>
            <form>
                <h5>Hi Dater!</h5>
                <div>
                    I would like to meet <select required onChange={myGender}>
                        {/* <option disabled selected>Select your option</option> */}
                        <option value="Female">Female</option>
                        <option value="Male">Male</option>
                    </select>
                </div><br />
                <div>
                    <Slider filterfun={ageUp} name='Age range:'></Slider>
                    <Slider filterfun={disUp} name='Distance range:'></Slider>
                </div>
                <input type="button" value="Done" onClick={() => {
                    props.Adjustments(Filter)


                }}></input>
            </form>
        </div>
    )
}
export default Adjustments;
