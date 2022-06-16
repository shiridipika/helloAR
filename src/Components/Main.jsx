import { useEffect, useState } from "react";
import Modal from "./Modal";
import TableRow from "./TableRow";

function Main() {

    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        const data = JSON.parse(window.localStorage.getItem('items'));
        if (data!==null) {
         setTableData(data);
        }
      }, []);

    useEffect(() => {
        window.localStorage.setItem('items', JSON.stringify(tableData));
      }, [tableData]);

    

    function addData (newUser) {
        setTableData(prevItems => {
            return [...prevItems, newUser];
        })
        console.log(tableData);
    };

    function Delete(id) {
        setTableData(prevItems => {
            return prevItems.filter((tableData,index) => {
                return index!==id;
            })
        })
    }
    
    return(
        <div class=" ms-sm-auto col-lg-9 px-md-4" style={{display:'inline-block'}}>
          <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
            <Modal addItem={addData}/>
          </div>

          <table id="dataTable" class="table table-bordered">
            <thead>
              <tr class=" table-secondary">
                <th scope="col">#</th>
                <th scope="col">User</th>
                <th scope="col">Last Signed In</th>
                <th scope="col">Role</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((user,index) => {
                return <TableRow key={index} id={index} user={user.user} role={user.role} delete={Delete} />
              })} 
            </tbody>
          </table>
        </div>
    );
}

export default Main;