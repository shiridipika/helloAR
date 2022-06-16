import { useState } from 'react';
import s from '../componentCSS/sidebar.module.css';
function Modal(props) {

    let nextID = 1;
    const [users, setUser] = useState({
        id: nextID++,
        user: '',
        lastSignIn: '',
        role: ''
    })

    function handleChange(event) {
        const{value,name} = event.target;
        setUser(prevValue => {
            return ({...prevValue, [name]:value})
        })
    }
    
    function submitUser(event) {
        event.preventDefault();
        setUser({
            user:"",
            role:''
        })
    }

    return ( 
        <div>
          <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{backgroundColor: '#5FD068', border: 'none', padding: '5px 32px', borderRadius:'16%'}}>
            ADD USER
          </button>
  
          <div class="modal fade" id="exampleModal" tabindex="-1">
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content" style={{width:'800px'}}>
                <div class="modal-body" className={s.modalDiv}>
                  <div class="container-fluid">
                    <div class="row" style={{width:'800px', height: '400px'}}>
                      <div className={s.modalBody} class="col-md-5" style={{backgroundColor: '#FF8C8C', padding:'16px', color:'white', textAlign:'center'}}>
                        <img src='images/add-user.png' alt='userimg' />
                        <p style={{textAlign: 'left', marginTop: '50px', fontSize: '15px'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                      </div>
                      <div className={s.modalBody}  class="col-md-7" style={{padding:'16px'}}>
                        <h4 style={{paddingTop: '20px'}}>User Information</h4>
                        <br />
                        <label for="emailID" class="form-label"><b>Email Id of User</b></label>
                        <input name="user" type="email" class="form-control" id="emailID" placeholder="name@example.com" style= {{width: '400px'}} onChange={handleChange}></input>
                        <br />
                        <label for="Role" class="form-label" ><b>Role</b></label>
                        <select name='role' class="form-select" onChange={handleChange} style= {{width: '200px'}}>
                          <option value="">Select</option>
                          <option value="Admin">Admin</option>
                          <option value="Owner">Owner</option>
                          <option value="Sales">Sales</option>
                        </select>
                        <br/> <br />
                        <div style={{float: 'right'}}>
                          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" style={{width: '100px', marginRight:'20px', backgroundColor: '#FFB562', border:'none'}}>Cancel</button>
                          <button type="button" class="btn btn-primary" data-bs-dismiss="modal" style={{width: '100px', marginRight:'40px', backgroundColor: '#5FD068', border:'none'}} onClick={() => props.addItem(users)} onSubmit={submitUser}>Add</button></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    ); 
}

export default Modal;