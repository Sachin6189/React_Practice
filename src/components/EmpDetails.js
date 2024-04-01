import React, { useState, useEffect } from "react";
import './EmpDetails.css'
import AddEmployeeForm from "./AddEmployeeForm";

const EmpDetails = ({ data }) => {
    const [locationFilter, setLocationFilter] = useState('all');
    const [divisionFilter, setDivisionFilter] = useState('all');
    const [filterData, setFilterData] = useState(data);
    const [uniqueLocation, setUniqueLocation] = useState([]);
    const [uniqueDivision, setUniqueDivision] = useState([]);
    // const [showAddEmployeeModal, setShowAddEmployeeModal] = useState(false);
    
    useEffect(() => {
        const uniqueLoc = [...new Set(data.map((item) => item.location))];
        setUniqueLocation(uniqueLoc);
    }, [data]);

    useEffect(() => {
        if (locationFilter !== 'all') {
            const filteredDivisions = [...new Set(data.filter(item => item.location === locationFilter).map((item) => item.division))];
            setUniqueDivision(filteredDivisions);
        } else {
            const allDivisions = [...new Set(data.map((item) => item.division))];
            setUniqueDivision(allDivisions);
        }
    }, [data, locationFilter]);

    useEffect(() => {
        const filteredData = data.filter((item) => {
            if (locationFilter !== 'all' && divisionFilter !== 'all') {
                return item.location === locationFilter && item.division === divisionFilter;
            } else if (locationFilter !== 'all') {
                return item.location === locationFilter;
            } else if (divisionFilter !== 'all') {
                return item.division === divisionFilter;
            }
            return item;
        });
        setFilterData(filteredData);
    }, [data, locationFilter, divisionFilter]);

    

    return (
        
        <div className="container">
            <AddEmployeeForm />
            <hr /><hr />
            <label className="LocLab">Select a Location:</label>
            <select name="Location" id="Location" className="Location" value={locationFilter} onChange={(e) => setLocationFilter(e.target.value)}>
                <option value="all">All Locations</option>
                {uniqueLocation.map((locDetails, index) => (
                    <option key={index} value={locDetails}>{locDetails}</option>
                ))}
            </select>

            <label className="DivLab">Select the Division:</label>
            <select name="Division" id="Division" className="Division" value={divisionFilter} onChange={(e) => setDivisionFilter(e.target.value)}>
                <option value="all">All Divisions</option>
                {uniqueDivision.map((divDetails, index) => (
                    <option key={index} value={divDetails}>{divDetails}</option>
                ))}
            </select>

            <table className="table">
                <thead className="tableHead">
                    <tr>
                        <th>EmpID</th>
                        <th>UserName</th>
                        <th>Location</th>
                        <th>Division</th>
                    </tr>
                </thead>

                <tbody className="tableBody">
                    {filterData.map((detail, index) => (
                        <tr key={index}>
                            <td>{detail.empID}</td>
                            <td>{detail.userName}</td>
                            <td>{detail.location}</td>
                            <td>{detail.division}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            
        </div>
    );
};

export default EmpDetails;
