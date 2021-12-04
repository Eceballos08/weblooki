import "./sidebar.css";
import {
  Home,
  Assignment,
  Storefront,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

/*const dark = document.querySelector(".dark");
const night = document.querySelector(".night");
const light = document.querySelector(".light");
const sidebar = document.querySelector(".sidebar");
const activeListItem = document.querySelector(".list-item.active");
*/
/*dark.addEventListener("click", () => {
  sidebar.className = "sidebar";
  activeListItem.className = "list-item active";
});

night.addEventListener("click", () => {
    sidebar.className = "sidebar night";
    activeListItem.className = "list-item night active";
});

light.addEventListener("click", () => {
    sidebar.className = "sidebar light";
    activeListItem.className = "list-item light active";
});
*/

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Principal</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
            <li className="sidebarListItem active">
              <Home className="sidebarIcon" />
              Home
            </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Menú</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <Assignment className="sidebarIcon" />
                Citas
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                Productos
              </li>
            </Link>
          </ul>
        </div>
      </div>
      <div class="sidebar-bottom">
            <div class="color-box dark">1</div>
            <div class="color-box night">2</div>
            <div class="color-box light">3</div>
        </div>
    </div>
  );
}
