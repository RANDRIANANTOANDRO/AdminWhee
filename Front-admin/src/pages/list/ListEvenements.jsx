import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import DatatableEvents from "../../components/datatable/DatatableEvents"

const ListEvenements = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <DatatableEvents/>
      </div>
    </div>
  )
}

export default ListEvenements