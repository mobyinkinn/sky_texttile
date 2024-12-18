// import Clients from "@/app/components/clients/Clients";
// import axios from "axios";

// let data;
// const fetchData = async () => {
//   try {
//     const response = await axios.get(
//       "https://sky-backend-bvuy.onrender.com/api/v1/seo/getByPageName?pagename=clients"
//     );

//     data = response.data.message;
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   }
// };

// const main = async () => {
//   await fetchData();

//   return {
//     title: data?.title,
//     description: data?.description,
//     keywords: data?.keywords,
//   };
// };
// export const metadata = await main();

// export default function index() {
//   return <Clients />;
// }


import axios from "axios";
import Clients from "@/app/components/clients/Clients";

export async function generateMetadata() {
  let metaData = {
    title: "Default Title",
    description: "Default Description",
    keywords: "Default Keywords",
  };

  try {
    const response = await axios.get(
      "https://sky-backend-bvuy.onrender.com/api/v1/seo/getByPageName?pagename=clients"
    );
    if (response.data?.message) {
      metaData = {
        title: response.data.message.title || "Default Title",
        description: response.data.message.description || "Default Description",
        keywords: response.data.message.keywords || "Default Keywords",
      };
    }
  } catch (error) {
    console.error("Error fetching metadata:", error);
  }

  return {
    title: metaData.title,
    description: metaData.description,
    keywords: metaData.keywords,
  };
}

export default function Page() {
  return <Clients />;
}
