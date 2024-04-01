// import React from "react";
// import './EmpDetails.css'
// import { useState } from 'react';

const EmpDetails = ({ data }) => {


    const uniqueLocation = [...new Set(data.map((item) => item.location))];
    console.log(uniqueLocation);

    const uniqueDivision = [...new Set(data.map((item) => item.division))];
    console.log(uniqueDivision);

    console.log(data)

    // const [locationfilter, setLocationFilter] = useState('')


    return (
        <div className="container">
            <label className="LocLab">Select a Location:</label>
            <select name="Location" id="Location" className="Location">
                <option value="all">All Locations</option>
                {uniqueLocation.map((locDetails, index) => (
                    <option key={index} value="locations">{locDetails}</option>
                ))}

            </select>

            <label className="DivLab">Select the Division:</label>
            <select name="Division" id="Division" className="Division">
                <option value="all">All Divisions</option>
                {uniqueDivision.map((divDetails, index) => (
                    <option key={index} value="divisions">{divDetails}</option>
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
                    {data.map((detail, index) => (
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
    )
}
// export default EmpDetails;