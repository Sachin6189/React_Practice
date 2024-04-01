import React from 'react'
// import EmpDetails from './EmpDetails'

const Data = () => {

    const data = [
        {
            empID: 1,
            userName: 'Sachin',
            divID:1
        },
        {
            empID: 2,
            userName: 'Mayank',
         divID:2
        },
        {
            empID: 3,
            userName: 'Sudhanshu',
          divID:3
        },
        {
            empID: 4,
            userName: 'Robin',
           divID:1
        },
        {
            empID: 5,
            userName: 'Surankan',
            divID:2
        },
        {
            empID: 6,
            userName: 'Sonu',
          divID:4
        },
        {
            empID: 7,
            userName: 'Tarun',
            divID:5
            
        },
        {
            empID: 8,
            userName: 'Revanth',
            divID:7
        },
        {
            empID: 9,
            userName: 'Saba',
           divID:8
        },
        {
            empID: 10,
            userName: 'Javv',
        divID:9
        },
        {
            empID: 11,
            userName: 'Riya',
         divID:10
        },
        {
            empID: 12,
            userName: 'Jamuna',
           divID:7
        },
        {
            empID: 13,
            userName: 'Chandana',
           divID:6
        },
        {
            empID: 14,
            userName: 'Nikhil',
            divID:4
        },
        {
            empID: 15,
            userName: 'Kshitij',
          divID:9
        },
        {
            empID: 16,
            userName: 'Salaj',
          divID:5
        },
        {
            empID: 17,
            userName: 'Sourav',
          divID:10
        },
        {
            empID: 18,
            userName: 'Roshan',
            divID:8
        },
        {
            empID: 19,
            userName: 'Sunil',
            divID:3
        },
        {
            empID: 20,
            userName: 'Shibu',
           divID:7
        }

    ]

    const locations = [
        {
            locID: 1,
            locName: 'Jamshedpur'
        },
        {
            locID: 2,
            locName: 'Luckhnow'
        },
        {
            locID: 3,
            locName: 'Delhi'
        },
        {
            locID: 4,
            locName: 'Bangalore'
        }
    ]

    const divisions = [
        {
            divID: 1,
            divName: "SVBU",
            locID: 1
        },
        {
            divID: 2,
            divName: "DVBU",
            locID: 1
        },
        {
            divID: 3,
            divName: "CVBU",
            locID: 1
        },
        {
            divID: 4,
            divName: "DPDS",
            locID: 1
        },
        {
            divID: 5,
            divName: "TVBU",
            locID: 2
        },
        {
            divID: 6,
            divName: "NVBU",
            locID: 2
        },
        {
            divID: 7,
            divName: "RVBU",
            locID: 3
        },
        {
            divID: 8,
            divName: "JVBU",
            locID: 3
        },
        {
            divID: 9,
            divName: "YVBU",
            locID: 4
        },
        {
            divID: 10,
            divName: "ZVBU",
            locID: 4
        }
    ]


    return (
        <div>
            {/* <EmpDetails loc={locations} div={divisions} data={data} /> */}
        </div>
    )
}
// export default Data
