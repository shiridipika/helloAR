import SidebarList from './SidebarList';

function SideBar(props) {

  

  const sidebarList = ["Products", 'Demo Script', 'Customers', 'Sales Team', 'Demos', 'Settings'];
    return ( <div class=" col-lg-2  bg-white" 
    style={{ backgroundColor: 'white', display: 'inline-block'}}>
    <ul class="nav nav-pills flex-column mb-auto" style={{borderRight: '0.5px solid', borderColor: '#D0C9C0'}}>
      {sidebarList.map(items => {
        return <SidebarList name={items} click={props.click}/>
      })}
    </ul>
  </div>
  );
}

export default SideBar;