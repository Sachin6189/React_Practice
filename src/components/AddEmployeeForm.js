import React, { useState } from "react";
import './AddEmployeeForm.css'

const AddEmployeeForm = ({addEmployee}) => {
    const [inputValues, setInputValues] = useState({
        empID: '',
        userName: '',
        location: '',
        division: ''
    });

    const [formData, setFormData] = useState([]);
    const [showModal, setShowModal] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputValues({ ...inputValues, [name]: value });
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        setFormData([...formData, inputValues]);
        addEmployee(inputValues);
        setInputValues({
            empID: '',
            userName: '',
            location: '',
            division: ''
        });
      
        console.log(inputValues)
        console.log(formData)
        setShowModal(false);
    };

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div className="container">
            
            <button className="open-modal" onClick={openModal}>Add Employee</button>
            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={closeModal}>X</span>
                        <form onSubmit={handleSubmit}>
                            <div>

                            <label className="labforEmpID">
                                EmpID:
                                <input className="empID" type="text" name="empID" value={inputValues.empID} onChange={handleChange} />
                            </label>
                            </div>
                            <div>

                            <label className="labforUserName">
                                UserName:
                                <input className="UserName" type="text" name="userName" value={inputValues.userName} onChange={handleChange} />
                            </label>
                            </div>

                            <label className="labforLocation">
                                Location:
                                <input className="location" type="text" name="location" value={inputValues.location} onChange={handleChange} />
                            </label>
                            <label className="labforDivision">
                                Division:
                                <input className="division" type="text" name="division" value={inputValues.division} onChange={handleChange} />
                            </label>
                            <button className="submit" type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AddEmployeeForm;
