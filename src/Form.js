import React from "react";


function Form(props) {
    const {
        values,
        submit,
        inputChange,
        errors,
    } = props


    const onSubmit = event => {
        event.preventDefault()
        submit()
    }

    const onInputChange = event => {
        const { name, value } = event.target
        inputChange(name, value)
    }

    return(
        <div>
            <h1>New User Onboarding Form</h1>
            <div>
                <form>
                    <div className="errors">
                        <div>{errors.name}</div>
                        <div>{errors.email}</div>
                        <div>{errors.password}</div>
                        <div>{errors.position}</div>
                        <div>{errors.title}</div>
                        <div>{errors.termsOfService}</div>
                    </div>
                    <div>
                        <label>
                            <strong>Name </strong>
                            <input 
                                value={values.name}
                                onChange={onInputChange}
                                name="name"
                                type="text"
                            />
                            <br />
                        </label>
                        <label>
                            <strong>Email </strong>:
                            <input 
                                value={values.email}
                                onChange={onInputChange}
                                name="email"
                                type="email"
                            />
                            <br />
                        </label>
                        <label>
                            <strong>Password </strong>:
                            <input
                                value={values.password}
                                onChange={onInputChange}
                                name="password" 
                                type="text"
                            />
                            <br />
                        </label>
                        <label>
                            <strong>Position </strong>
                            <select 
                                id="positions" 
                                name="positions"
                                onChange={onInputChange}
                                value={values.position}
                            >
                                <option value="defaultOption">--Select One--</option>
                                <option value="teamLeader">Team Leader</option>
                                <option value="frontendEngineer">Frontend Engineer</option>
                                <option value="backendEngineer">Backend Engineer</option>
                                <option value="uiuxDesigner">UI/UX Designer</option>
                            </select>
                            <br />
                        </label>
                        <label>
                            <strong>Title: </strong>
                            Mr.
                            <input 
                                type="radio"
                                name="title"
                                value="Mr."
                                checked={values.title === "Mr."}
                                onChange={onInputChange}
                            />
                            Mrs.
                            <input 
                                type="radio"
                                name="title"
                                value="Mrs."
                                checked={values.title === "Mrs."}
                                onChange={onInputChange}
                            />
                            Ms.
                            <input 
                                type="radio"
                                name="title"
                                value="Ms."
                                checked={values.title === "Ms."}
                                onChange={onInputChange}
                            />
                            Dr.
                            <input 
                                type="radio"
                                name="title"
                                value="Dr."
                                checked={values.title === "Dr."}
                                onChange={onInputChange}
                            />
                            <br />
                        </label>
                        <label>
                            <strong>Terms of Service:</strong>
                            <input 
                                type="checkbox" 
                                name="termsOfService" 
                                checked={values.termsOfService} 
                            />
                            <br />
                        </label>
                        <button>
                            Submit!
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form;