// import axios from "axios";
// import Home from "../components/home/Home";

import Home from "../components/home/Home";

// let data;
// const fetchData = async () => {
//   try {
//     const response = await axios.get(
//       "https://sky-backend-bvuy.onrender.com/api/v1/seo/getByPageName?pagename=home"
//     );
//     // setData(response.data.message); // Assuming the response data is an array

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

// // export const metadata = {
// //   title: data?.title,
// //   description: data?.description,
// //   keywords: data?.keywords,
// // };

// export default function Index() {
//   return (
//     <>
//       <h1 style={{ display: "none" }}>
//         Best Textile Manufacturing Company in Ahmedabad, Gujarat, India & Asia:
//         Sky Textiles
//       </h1>

//       <h2 style={{ display: "none" }}>
//         SKY Textiles delivers its clients with a ONE-STOP-SOLUTION that includes
//         design, advancement, supplying, industrial production, and sales,
//         enabling them to continue expanding new inventions and potential in our
//         product.
//       </h2>
//       <Home />
//     </>
//   );
// }



export const dynamic = "force-dynamic"; // Ensures the page is always dynamic

export async function generateMetadata() {
  let metaData = {
    title: "Default Title",
    description: "Default Description",
    keywords: "Default Keywords",
  };

  try {
    const response = await fetch(
      "https://sky-backend-bvuy.onrender.com/api/v1/seo/getByPageName?pagename=home",
      {
        cache: "no-store", // Fetches fresh data every time
      }
    );
    const data = await response.json();

    if (data?.message) {
      metaData = {
        title: data.message.title || "Default Title",
        description: data.message.description || "Default Description",
        keywords: data.message.keywords || "Default Keywords",
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
  return <Home />;
}
