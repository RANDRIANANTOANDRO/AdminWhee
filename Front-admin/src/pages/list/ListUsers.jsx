import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import DataTableUsers from "../../components/datatable/DataTableUsers"

const ListUsers = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
       <DataTableUsers/>
      </div>
    </div>
  )
}

export default ListUsers