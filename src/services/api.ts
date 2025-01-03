//Aca todo lo que conecta al backend pasa por aca
// import { createClient } from "@supabase/supabase-js";

import axios from "axios";

// const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
// const supabaseKey = import.meta.env.VITE_SUPABASE_KEY as string;

// const supabase = createClient(supabaseUrl, supabaseKey);
// export default supabase;

// /* ESTO MISMO HICE ARRIBA PARA REUTILIZARLO DESPUES EN APP.TSX
// consenv.VITE_SUPABASE_URL as string,
//     import.meta.t supabase = createClient(
//     import.meta.env.VITE_SUPABASE_KEY as string,
// );*/

// //Cuando se haga api.get('/algo') se va a hacer un GET a import.meta.env.VITE_API_URL/algo
// export const api = axios.create({
//     baseURL: import.meta.env.VITE_API_URL,
// });

// // eslint-disable-next-line @typescript-eslint/no-explicit-any
// export const generateQueryParams = (data: any) => {
//   let params = "";
//   for (const key in data) {
//       if (data[key] !== undefined) {
//           params += (params ? "&" : "?") + key + "=" + data[key];
//       }
//   }
//   return params;
// };


// Configura la instancia de axios
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL + '/api', // Asegúrate de que esta URL sea correcta
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // Incluye las credenciales en las solicitudes si es necesario
});

export default api;