import React from "react";


function Form(props) {


    return(
        <div>
            <h1>New User Onboarding Form</h1>
            <div>
                <form>
                    <label>
                        <strong>Name </strong>
                        <input type="text"/>
                        <br />
                    </label>
                    <label>
                        <strong>Email </strong>:
                        <input type="email"/>
                        <br />
                    </label>
                    <label>
                        <strong>Password </strong>:
                        <input type="text"/>
                        <br />
                    </label>
                    <label>
                        <strong>Position </strong>
                        <select id="positions" name="positions">
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
                        <input type="radio" />
                        Mrs.
                        <input type="radio" />
                        Ms.
                        <input type="radio" />
                        Dr.
                        <input type="radio" />
                        <br />
                    </label>
                    <label>
                        <strong>Terms of Service:</strong>
                        <input type="checkbox" name="termsOfService" value="yes" />
                        <br />
                    </label>
                    <button>
                        Submit!
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Form;