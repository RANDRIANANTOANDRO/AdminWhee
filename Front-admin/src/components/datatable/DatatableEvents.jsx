import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { eventSource } from "../../EventSource";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import EventService from "../../services/EventService";

const DatatableEvents = () => {
  const [data, setData] = useState(EventService.getEvents());
  useEffect(() => {
    const logInterest = async () => {
        const resp = await EventService.getEvents();
        setData(resp.data)
    };
    logInterest();
}, [data, setData])

  const handleDelete = (idEvent) => {
    setData(data.filter((item) => item.idEvent !== idEvent));
  };


  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">Voir Plus</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.idEvent)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Ajouter Evenements
        <Link to="/users/new" className="link">
          Ajouter Evenements
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={eventColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        getRowId={(data)=> data.idEvent} 
        checkboxSelection
      />
    </div>
  );
};

export default DatatableEvents;