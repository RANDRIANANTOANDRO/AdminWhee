export const eventColumns = [
    {
        field: "idEvent",
        headerName: "id",
        width: 70
    },
    {
        field: "image",
        headerName: "Img",
        width: 20,
        renderCell: (params) => {
            return (
                <div className="cellWithImg">
                    <img className="cellImg"
                        src={
                            params.row.image
                        }
                        alt="EventImage"/> {
                    params.row.eventname
                } </div>
            );
        }
    },
    {
        field: "titre",
        headerName: "Titre",
        width: 230
    },

    {
        field: "description",
        headerName: "Description",
        width: 250
    }, {},
];
