import s from '../componentCSS/sidebar.module.css'

function SidebarList (props) {
    return (
        <li className={s.list} onClick={() => props.click(props.name)}>
        <button class="nav-link text-black" >
          {props.name}
        </button>
      </li>
    );
}

export default SidebarList;