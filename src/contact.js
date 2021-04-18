import React, { useEffect, useState } from 'react'
import './App.css'
import firebasedb from './firebase';

import { FaBeer,FaUserCircle,FaMobileAlt,AiTwotoneMail } from 'react-icons/fa';
import { faEnvelope,faEdit,faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Contact = () => {
    console.log('df',firebasedb.child('contact'));
    const [values,setValues] = useState({
        fullname:"",
        mobile:"",
        email:"",
        address:""

    })

    const [contactObjects,setContactObjects] = useState({})

    const {fullname,mobile,email,address} = values;

    useEffect(()=>{
        firebasedb.on('value',snapshot => {
            if(snapshot.val() != null){
                setContactObjects({...snapshot.val()})
            }
            console.log(snapshot.val().contacts);
        })
    },[])

    const onChangeHandler = (e)=>{
        e.preventDefault();
        const {name,value} = e.target;

        setValues({
            ...values,
            [name]: value
        })
    }

    const onClickSave = ()=>{
        firebasedb.child('contacts').push({
            values,
            
        }).then(()=>{console.log("added successfully")})
        .catch(console.error('error saving contact'))

    }
    
      /*   const sdff =Object.keys(contactObjects.contacts).map(id =>{
            return console.log(contactObjects.contacts[id].values.fullname)
        })
         */

/*     console.log("id",sdff) */

    return (

        <section className="section_2">
          <div className="left">
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1"><FaUserCircle /></span>
                </div>
                <input type="text" class="form-control" onChange={e =>onChangeHandler(e)} name="fullname" placeholder="Full name" aria-label="fullname" aria-describedby="basic-addon1" />
            </div>
            <div className="second_input">
                <div className="first input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1"><FaMobileAlt /></span>
                </div>
                <input className="email" class="form-control" onChange={e =>onChangeHandler(e)}  name="mobile" placeholder="Mobile" aria-label="Mobile" aria-describedby="basic-addon1" />
                </div>
                <div className="second input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">
                    <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                    </span>
                </div>
                <input type="text" class="form-control" onChange={e =>onChangeHandler(e)}  name="email" placeholder="E-mail" aria-label="E-mail" aria-describedby="basic-addon1" />
            </div>
            </div>
            <div className="input-group">
                <textarea class="form-control" onChange={e =>onChangeHandler(e)}  name="address" placeholder="Address" aria-label="With textarea"></textarea>
            </div>
            <div className="input-group">
            <button type="button" onClick={()=>onClickSave()} class="btn btn-primary btn-lg btn-block">Save</button>
            </div>
           
          </div>

          <div className="right">{
            Object.keys(contactObjects).length === 0 ?
            <h2>List of Contacts</h2>
            :
            <table className="table">
             <thead>
              <tr>
               <th  scope="col">Full name</th>
               <th  scope="col">Mobile</th>
               <th  scope="col"> E-mail</th>
               <th  scope="col"> Action</th>
              </tr>
             </thead>
             <tbody>
             {
                 Object.keys(contactObjects.contacts).map( id =>{
                     return <tr key={id}>
                        <td>{contactObjects.contacts[id].values.fullname}</td>
                        <td>{contactObjects.contacts[id].values.mobile}</td>
                        <td>{contactObjects.contacts[id].values.email}</td>
                        <td>
                        <a className="btn text-primary"><FontAwesomeIcon icon={faEdit}></FontAwesomeIcon></a>
                        <a className="btn text-danger"><FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon></a>
                        
                        </td>
                     </tr>
                 })
             }
             </tbody>
            </table>}
          </div>
        </section>
    )
}

export default Contact
