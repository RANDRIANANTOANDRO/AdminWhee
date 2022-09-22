import {EventSeatRounded} from '@mui/icons-material';
import EventService from './services/EventService'
export const userColumns = [
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

      field: "heure_vent",
      headerName: "Date",
      width: 100,
    },
    { field: "Note_vent",
    headerName: "Note",
    width: 100,
     
    },
  ];
  
  //temporary data
  export const userRows = [
    {
      id: 1,
      username: "Snow",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      status: "active",
      email: "1snow@gmail.com",
      age: 35,
    },
    {
      id: 2,
      username: "Jamie Lannister",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "2snow@gmail.com",
      status: "passive",
      age: 42,
    },
    {
      id: 3,
      username: "Lannister",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "3snow@gmail.com",
      status: "pending",
      age: 45,
    },

        field: "description",
        headerName: "Description",
        width: 250
    }, {},
];

export const userRows = [

    {
        "idEvent": 1,
        "titre": "Global Solo Challenge",
        "lieuEvent": "Majunga",
        "heureEvent": "07:00:00",
        "dateEvent": "2022-09-29T21:00:00.000+00:00",
        "description": "Le Global Solo Challenge est un tour du monde en solitaire et sans escale au départ de Majunga, Madagascar.",
        "image": "images/offer_1.jpg",
        "note": null,
        "categories": []
    },
    {
        "idEvent": 2,
        "titre": "Rallye Montgolfière de Madagascar",
        "lieuEvent": "Antsirabe",
        "heureEvent": "05:30:00",
        "dateEvent": "2022-10-18T21:00:00.000+00:00",
        "description": "Le ciel d’Antsirabe et de Morondava sera orné de montgolfières avec cette première édition.",
        "image": "images/offer_2.jpg",
        "note": null,
        "categories": []
    },
    {
        "idEvent": 3,
        "titre": "Rock in Fianara",
        "lieuEvent": "Fianarantsoa",
        "heureEvent": "09:00:00",
        "dateEvent": "2022-11-26T21:00:00.000+00:00",
        "description": "Rock in Fianara est le plus grand festival du monde qui accueille plus d’un million de participants à chaque édition.",
        "image": "images/rock.jpg",
        "note": null,
        "categories": []
    },
    {
        "idEvent": 4,
        "titre": "Grand prix de Karting",
        "lieuEvent": "Imerintsiatosika",
        "heureEvent": "10:15:00",
        "dateEvent": "2022-12-24T21:00:00.000+00:00",
        "description": "Le Grand Prix karting d'Imerintsiatosika est une des plus anciennes et l'une des trois courses les plus prestigieuses à Madagascar, disputée sur le circuit SRK Imerintsiatosika.",
        "image": "images/monaco2.jpg",
        "note": null,
        "categories": []
    }, {
        "idEvent": 5,
        "titre": "Tech House Madness by Bradih-Silo &amp; Friends",
        "lieuEvent": "Isoraka",
        "heureEvent": "20:00:00",
        "dateEvent": "2022-12-04T21:00:00.000+00:00",
        "description": "no comment® bar vous présente Tech House Madness by Bradih-Silo &amp; Friends ce samedi 5 décembre 2020 au no comment® bar Isoraka à partir de 20h.\nEntrée gratuite – consommation obligatoire – l'établissement se                 réserve le droit d'entrée.\nVenez nombreux !!!",
        "image": "https://www.nocomment.mg/wp-content/plugins/k_builder/assets/js/jquery_kmp_composer/application/imagehandles.php?f=/wp-content/uploads/Ev%C3%A8nements/NCBar/2020/Decembre/no-comment-madagascar-PopUp-Silo.jpg&h=400&w=263&x=0&y=0&nh=400&nw=263",
        "note": null,
        "categories": []
    }
];

// temporary data
// export const userRows = [
// {
//     id: 1,
//     username: "Snow",
//     img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//     status: "active",
//     email: "1snow@gmail.com",
//     age: 35,
// },
// {
//     id: 2,
//     username: "Jamie Lannister",
//     img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//     email: "2snow@gmail.com",
//     status: "passive",
//     age: 42,
// },
// {
//     id: 3,
//     username: "Lannister",
//     img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//     email: "3snow@gmail.com",
//     status: "pending",
//     age: 45,
// },
// {
//     id: 4,
//     username: "Stark",
//     img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//     email: "4snow@gmail.com",
//     status: "active",
//     age: 16,
// },
// {
//     id: 5,
//     username: "Targaryen",
//     img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//     email: "5snow@gmail.com",
//     status: "passive",
//     age: 22,
// },
// {
//     id: 6,
//     username: "Melisandre",
//     img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//     email: "6snow@gmail.com",
//     status: "active",
//     age: 15,
// },
// {
//     id: 7,
//     username: "Clifford",
//     img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//     email: "7snow@gmail.com",
//     status: "passive",
//     age: 44,
// },
// {
//     id: 8,
//     username: "Frances",
//     img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//     email: "8snow@gmail.com",
//     status: "active",
//     age: 36,
// },
// {
//     id: 9,
//     username: "Roxie",
//     img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//     email: "snow@gmail.com",
//     status: "pending",
//     age: 65,
// },
// {
//     id: 10,
//     username: "Roxie",
//     img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//     email: "snow@gmail.com",
//     status: "active",
//     age: 65,
// },
// ];
