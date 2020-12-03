import React, { useState, useEffect } from 'react';
import ContactForm from "./ContactForm";
import firebaseDb from "./config/firebase"

const Contacts = () => {

    let [currentId, setCurrentId] = useState('');
    let [contactObjects, setContactObjects] = useState({})

    //Once components load complete
    useEffect(() => {
        firebaseDb.database().ref('contacts').on('value', snapshot => {
            if (snapshot.val() != null) {
                setContactObjects({
                    ...snapshot.val()
                });
            }
        })
    }, [])


    const addOrEdit = (obj) => {
        if (currentId == '')
            firebaseDb.database().ref('contacts').push(
                obj,
                err => {
                    if (err)
                        console.log(err)
                    else
                        setCurrentId('')
                })
        else
            firebaseDb.database().ref(`contacts/${currentId}`).set(
                obj,
                err => {
                    if (err)
                        console.log(err)
                    else
                        setCurrentId('')
                })
    }

    const onDelete = id => {
        if (window.confirm('Are you sure to delete this record?')) {
            firebaseDb.database().ref(`contacts/${id}`).remove(
                err => {
                    if (err)
                        console.log(err)
                    else
                        setCurrentId('')
                })
        }
    }


    return (
        <>
            <div >
                <div >
                    <h1 >Contact Manager</h1>
                </div>
            </div>
            <div >
                <div>
                    <ContactForm {...({ currentId, contactObjects, addOrEdit })} ></ContactForm>
                </div>
                <div>
                    <table>
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Mobile</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            Object.keys(contactObjects).map((key) => (
                                <tr key={key}>
                                    <td>{contactObjects[key].fullName}</td>
                                    <td>{contactObjects[key].mobile}</td>
                                    <td>{contactObjects[key].email}</td>
                                    <td >
                                        <a  onClick={() => { setCurrentId(key) }}>
                                            <i >ImageEdit</i>
                                        </a>
                                        <a  onClick={() => { onDelete(key) }}>
                                            <i >ImageDelete </i>
                                        </a>
                                    </td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default Contacts;