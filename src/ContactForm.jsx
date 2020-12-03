import React, { useState, useEffect } from 'react';

const ContactForm = (props) => {
    const initialFieldValues = {
        fullName: '',
        mobile: '',
        email: '',
    }

    let [values, setValues] = useState(initialFieldValues)


    useEffect(() => {
        if (props.currentId == '')
            setValues({...initialFieldValues})
        else
            setValues({
                ...props.contactObjects[props.currentId]
            })
    }, [props.currentId, props.contactObjects])

    const handleInputChange = e => {
        var {name, value} = e.target;
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleFormSubmit = e => {
        e.preventDefault()
        props.addOrEdit(values);
    }

    return (
        <form autoComplete="off" onSubmit={handleFormSubmit}>
            <div>
                <div>
                    <div>
                        <i>FullNam</i>
                    </div>
                </div>
                <input  name="fullName" placeholder="Full Name"
                       value={values.fullName}
                       onChange={handleInputChange}
                />
            </div>
            <div >
                <div>
                    <div>
                        <div>
                            <i>Mobile</i>
                        </div>
                    </div>

                    <input  name="mobile" placeholder="Mobile"
                           value={values.mobile}
                           onChange={handleInputChange}
                    />
                </div>
                <div >
                    <div>
                        <div>
                            <i>Email</i>
                        </div>
                    </div>
                    <input  name="email" placeholder="Email"
                           value={values.email}
                           onChange={handleInputChange}
                    />
                </div>
            </div>

            <div >
                <input type="submit" value={props.currentId == "" ? "Save" : "Update"}/>
            </div>
        </form>
    );
}


export default ContactForm;