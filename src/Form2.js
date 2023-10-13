import React, { useState } from 'react'
import './form2.css'

function Form2() {
    const [FormData,setFormData]=useState({
        firstname:"",
        lastname:"",
        email:"",
        phone:"",
        Amount:"",
        country:"INDIA",
        state:"",
 
    })

    function changeHandler(event){
        const{name,type,value,checked}=event.target;

        setFormData((p)=>{
            return({
                ...p,
                [name]:type==='checkbox'?checked:value
            })

        })
    }

    function submithandler(event){
        event.preventDefault();
        console.log(FormData)
        let data = Object.keys(FormData).map((key) => `${key} = ${FormData[key]}`);
        // join() returns an array as a string
        data = data.join(" \n");
        alert(data);


    }
    return (

        <div className='main'>
            <div className='box'>
            eeName*= 
                

            </div>

            {/* <div className='main1'>
            <p>THANK YOU FOR DONATING <span className='span'></span></p>
            </div> */}

            <form
            action=''
            onSubmit={submithandler}>

                
            <div >
            <label htmlFor='firstname'>First name</label>
           
            <input
            type='text'
            name='firstname'
            id='firstname'
            required
            placeholder='First Name'
            onChange={changeHandler}
            value={FormData.firstname}
            />
            </div>
            <br></br>
            {/* <br></br> */}
            <div>
            <label htmlFor='lastname'>Last name</label>
            
            <input
            type='text'
            name='lastname'
            id='lastname'
            onChange={changeHandler}

            value={FormData.lastname}
            required
            placeholder='Last Name'
            />
            </div>
            <br></br>

            <div>
            <label 
            htmlFor="phone">Phone Number</label>
            
            
            <input 
            type="text" 
            id='phone'
            name='phone'
            placeholder='Phone No.'
            onChange={changeHandler}
                value={FormData.zipcode}
            required
            />
        </div>
        <br></br>

            <div>
            <label 
            htmlFor="phone">Amount</label>
           
            <input 
            type="text" 
            id='Amount'
            name='Amount'
            placeholder='AMOUNT'
            onChange={changeHandler}
                value={FormData.Amount}
            required
            />
        </div>
        <br></br>

            <div>
            <label htmlFor='email'>Email</label>
         
            <input
            type='email'
            name='email'
            id='email'
            placeholder="EMAIL"
            onChange={changeHandler}
            value={FormData.email}

            required
            />
            </div>
            <br></br>


            <div>
            <label htmlFor='email'>Country</label>
            
            <select
             
                name='country'
                id='country'
                placeholder='COUNTRY'
                onChange={changeHandler}
                value={FormData.country}
                required
            >

                <option value="INDIA">India</option>
                <option value="CANADA">Canada</option>
                <option value="USA">USA</option>
                <option value="RUSSIA">Russia</option>
            </select>
           
            </div>
            <br></br>



            <div>
                <label htmlFor='state'>State</label>
                
                <input
                type='text'
                name='state'
                id='state'
                placeholder='State'
                onChange={changeHandler}
                value={FormData.state}
                required
                classname="inputs"></input>
            </div>

            <br></br>
        <button
        className='btn' 
        type='submit'
        >NEXT
        </button>

        </form>

            
        </div>
    )
}

export default Form2