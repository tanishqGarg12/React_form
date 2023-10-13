import React, { useState } from 'react'

function Form() {
    const [FormData,setFormData]=useState({
        firstname:"",
        lastname:"",
        fathername:"",
        email:"",
        phone:"",
        country:"INDIA",
        streetaddress:"",
        city:"",
        state:"",
        zipcode:null,
        income:"",
        adhar:1234-5678-9874
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
        <div>
            <form
            action=''
            onSubmit={submithandler}>
            <div>

            <label htmlFor='firstname'>FIRST NAME</label>
            <br></br>
            <input
            type='text'
            name='Firstname'
            id='firstname'
            required
            placeholder='Aryan'
            onChange={changeHandler}
            value={FormData.firstname}
            />
            </div>
            
            {/* <br></br> */}
            <div>
            <label htmlFor='lastname'>LAST NAME</label>
            <br></br>
            <input
            type='text'
            name='lastname'
            id='lastname'
            onChange={changeHandler}

            value={FormData.lastname}
            required
            placeholder='mittal'
            />
            </div>

            <div>
            <label htmlFor='fathername'>FATHER'S NAME</label>
            <br></br>
            <input
            type='text'
            name='fathername'
            id='fathername'
            onChange={changeHandler}
            value={FormData.fathername}
            required

            />
            </div>

            <div>
            <label 
            htmlFor="phone">PHONE NUMBER</label>
            
            <input 
            type="number" 
            id='phone'
            name='phone'
            placeholder='7894561237'
            onChange={changeHandler}
                value={FormData.zipcode}
            required
            />
        </div>

            <div>
            <label htmlFor='email'>EMAIL</label>
            <br></br>
            <input
            type='email'
            name='email'
            id='email'
            placeholder="abc45@gmail.com"
            onChange={changeHandler}
            value={FormData.email}

            required
            />
            </div>


            <div>
            <label htmlFor='email'>COUNTRY</label>
            <br></br>
            <select
                name='country'
                id='country'
                placeholder='India'
                onChange={changeHandler}
                value={FormData.country}
                required
            >

                <option value="INDIA">INDIA</option>
                <option value="CANADA">CANADA</option>
                <option value="USA">USA</option>
                <option value="RUSSIA">RUSSIA</option>
            </select>
            </div>

            <div>
                <label htmlFor='streetaddress'>STREET ADDRESS</label>
                <br></br>
                <textarea
                name='streetaddress'
                id='streetaddress'
                placeholder='manav chownk'
                onChange={changeHandler}
                value={FormData.streetaddress}
                rows={5}
                cols={30}
                required
                >

                </textarea>
            </div>


            <div>
                <label htmlFor='city'>CITY</label>
                <br></br>
                <input
                type='text'
                name='city'
                id='city'
                placeholder='shirdi'
                onChange={changeHandler}
                value={FormData.city}
                required
                ></input>
            </div>


            <div>
                <label htmlFor='state'>STATE</label>
                <br></br>
                <input
                type='text'
                name='state'
                id='state'
                placeholder='kerala'
                onChange={changeHandler}
                value={FormData.state}
                required
                ></input>
            </div>


            <div>
            <label 
            htmlFor="zipCode">ZIP / POSTAL CODE</label>
            
            <input 
            type="number" 
            id='zipCode'
            name='zipCode'
            placeholder='124001'
            onChange={changeHandler}
                value={FormData.zipcode}
            required
            />
        </div>

            <div>
            <label 
            htmlFor="income">FAMILY-INCOME</label>
            
            <input 
            type="number" 
            id='income'
            name='income'
            placeholder='50000'
            onChange={changeHandler}
                value={FormData.income}
            required
            />
        </div>

            <div>
            <label 
            htmlFor="adhar">AADHAR-NUMBER </label>
            
            <input 
            type="number" 
            id='adhar'
            name='adhar'
            placeholder='7894-5612-7894'
            onChange={changeHandler}
                value={FormData.adhar}
            required
            />
        </div>

        <button 
        type='submit'
        >Submit</button>
            </form>

            
        </div>
    )
}

export default Form

