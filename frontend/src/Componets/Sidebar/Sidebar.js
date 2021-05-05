import "./Sidebar.css";
import { SidebarData } from "./SidebarData";
import SubMenu from "../../SubMenu";

const Sidebar = () => {
  return (
    <>
        <div className=" Sidebar bg-warning ">
          {SidebarData.map((item, index) => {
            return <SubMenu item={item} key={index} />;
          })}
        </div>
    </>
  );
}

export default Sidebar;
