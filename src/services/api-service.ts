import axios from 'axios';

export const authorizeUser = async (destinyMembershipId: string) => {
  const apiUrl = `${process.env.VUE_APP_BUNGIE_API_BASE_URL}/App/OAuth/Token/`;
  return axios.post(
    apiUrl,
    {
      grant_type: 'authorization_code',
      code: destinyMembershipId,
    },
    {
      auth: {
        username: process.env.VUE_APP_BUNGIE_API_OAUTH_CLIENT_ID,
        password: process.env.VUE_APP_BUNGIE_API_OAUTH_CLIENT_SECRET,
      },
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    }
  )
    .then((response) => {
      console.log(response);
      return response;
    })
    .catch((error) => console.log(error));
};

export const refreshAuthorizationToken = async (refreshToken: string) => {
  const apiUrl = `${process.env.VUE_APP_BUNGIE_API_BASE_URL}/App/OAuth/Token/`;
  return axios.post(
    apiUrl,
    {
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
    },
    {
      auth: {
        username: process.env.VUE_APP_BUNGIE_API_OAUTH_CLIENT_ID,
        password: process.env.VUE_APP_BUNGIE_API_OAUTH_CLIENT_SECRET,
      },
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    }
  )
    .then((response) => response)
    .catch((error) => console.log(error));
};

// export const getUserDestinyProfile =

// export const getSitesFromAPI = async () => {
//   const apiUrl = `${process.env.VUE_APP_SERVER_BASE_URL}/Sites`;
//   return axios.get(apiUrl, { headers })
//     .then((response) => response)
//     .catch((error) => error);
// };

// const getProfile = () => {
//   axios
//     .get(
//       'https://www.bungie.net/Platform/Destiny2/3/Profile/4611686018493738057/?components=100,200',
//       {
//         headers: {
//           'X-API-Key': 'b455f8e6d2e448b89601098aba25ece6',
//         },
//       }
//     )
//     .then((response) => {
//       console.log(response.data.Response);
//     });
// };

// const getVault = () => {
//   axios
//     .get(
//       'https://www.bungie.net/Platform/Destiny2/3/Profile/4611686018493738057/?components=102',
//       {
//         headers: {
//           'X-API-Key': 'b455f8e6d2e448b89601098aba25ece6',
//           Authorization: `bearer ${destinyAccessToken.value}`,
//         },
//       }
//     )
//     .then((response) => {
//       console.log(
//         response.data.Response.profileInventory.data.items.filter(
//           (item: any) => item.itemInstanceId !== null
//         )
//       );
//     });
// };
