
const api = "https://api.foursquare.com/v2/venues/explore?"

// Generate a unique token for storing your bookshelf data on the backend server.

//   const headers = {
//   'Accept': 'application/json',
//   'Authorization': token
// }

const clientId = "client_id=V2FTPNJNN0G31J43RBA45305LIGBZZ2VHRLU5HV3QCRR3ORB"
const clientSecret = 'client_secret=H2PLHLO0QR1PIAAKJ34T5RUZR0FRQLSZJJ4IZN2M4KQC0MPF'
const version = 'v=20180505'
const section = 'section=coffee'

export const getAll = (lat,lng) =>
  fetch(`${api}ll=${lat},${lng}&${clientId}&${clientSecret}&${version}&${section}`)
    .then(res => {return res.json()})

// export const getAll = () =>
//   fetch(`${api}/books`, { headers })
//     .then(res => res.json())
//     .then(data => data.books)