import React, { useEffect,useState } from 'react'
import AddEmployeeForm from './AddEmployeeForm';
import EmpDetails from './EmpDetails'

const data = [
    {
        empID: 1,
        userName: 'Sachin',
        location: 'Jamshedpur',
        division: 'CVBU'
    },
    {
        empID: 2,
        userName: 'Mayank',
        location: 'Luckhnow',
        division: 'SVBU'
    },
    {
        empID: 3,
        userName: 'Sudhanshu',
        location: 'Pune',
        division: 'DPDS'
    },
    {
        empID: 4,
        userName: 'Robin',
        location: 'Bangalore',
        division: 'DVBU'
    },
    {
        empID: 5,
        userName: 'Surankan',
        location: 'Delhi',
        division: 'SVBU'
    },
    {
        empID: 6,
        userName: 'Sonu',
        location: 'Luckhnow',
        division: 'DVBU'
    },
    {
        empID: 7,
        userName: 'Tarun',
        location: 'Jamshedpur',
        division: 'CVBU'
    },
    {
        empID: 8,
        userName: 'Revanth',
        location: 'Bangalore',
        division: 'DPDS'
    },
    {
        empID: 9,
        userName: 'Saba',
        location: 'Bangalore',
        division: 'SVBU'
    },
    {
        empID: 10,
        userName: 'Salaj',
        location: 'Jamshedpur',
        division: 'DPDS'
    },
    {
        empID: 11,
        userName: 'Riya',
        location: 'Luckhnow',
        division: 'DVBU'
    },
    {
        empID: 12,
        userName: 'Jamuna',
        location: 'Delhi',
        division: 'CVBU'
    },
    {
        empID: 13,
        userName: 'Chandana',
        location: 'Bangalore',
        division: 'DVBU'
    },
    {
        empID: 14,
        userName: 'Nikhil',
        location: 'Luckhnow',
        division: 'DPDS'
    },
    {
        empID: 15,
        userName: 'Kshitij',
        location: 'Luckhnow',
        division: 'CVBU'
    },
    {
        empID: 16,
        userName: 'Salaj',
        location: 'Bangalore',
        division: 'DPDS'
    },
    {
        empID: 17,
        userName: 'Sourav',
        location: 'Jamshedpur',
        division: 'SVBU'
    },
    {
        empID: 18,
        userName: 'Roshan',
        location: 'Luckhnow',
        division: 'SVBU'
    },
    {
        empID: 19,
        userName: 'Sunil',
        location: 'Delhi',
        division: 'DVBU'
    },
    {
        empID: 20,
        userName: 'Shibu',
        location: 'Bangalore',
        division: 'ERC'
    }

];

const getData = ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(data);
        },1000)
    })
}

const Data = () => {

    const [currData, setCurrData] = useState([]);

    const addEmployee = (newEmployee) => {
        setCurrData([...currData, newEmployee]);
        // setCurrData((oldState)=>([...oldState, newEmployee])) 
    };

    useEffect(()=>{
        getData().then((res)=>{
            console.log(res);
            setCurrData(res);
        })
    },[])
    

    return (
        <div>
            <AddEmployeeForm addEmployee={addEmployee}/>
            <EmpDetails data={currData} />
        </div>
    )
}

export default Data
