import s from '../componentCSS/sidebar.module.css'

function SidebarList (props) {
    return (
        <li className={s.list}>
        <button class="nav-link text-black" onClick={() => props.click(props.name)}>
          {props.name}
        </button>
      </li>
    );
}

export default SidebarList;