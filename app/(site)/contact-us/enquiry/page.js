// import Enquiry from "@/app/components/getintouch/parts/Enquiry";
// import axios from "axios";


// let data;
// const fetchData = async () => {
//   try {
//     const response = await axios.get(
//       "https://sky-backend-bvuy.onrender.com/api/v1/seo/getByPageName?pagename=enquiry"
//     );
//     // setData(response.data.message); // Assuming the response data is an array

//     data = response.data.message;
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   }
// };

// const main = async () => {
//   await fetchData();
//   console.log(data); // This will now log the fetched data

//   return {
//     title: data?.title,
//     description: data?.description,
//     keywords: data?.keywords,
//   };
// };
// export const metadata = await main();

// export default function Index() {
//   return (
//     <>
//       <h1 style={{ display: "none" }}>
//         Best T-Shirt, Kids Wear, Uniform Design & Company in Ahmedabad, Gujarat,
//         India & Asia: SKY Textiles
//       </h1>
//       <h1 style={{ display: "none" }}>Contact</h1>
//       <h2 style={{ display: "none" }}>
//         Sky textiles India Pvt Ltd. Get in touch with Sky Textile for
//         high-quality fabrics and exceptional customer service. Contact us today
//         to discuss your textile needs and place your order.
//       </h2>
//       <h2 style={{ display: "none" }}>Contact - Sky Textiles</h2>
//       <h2 style={{ display: "none" }}>Come find us</h2>
//       <h2 style={{ display: "none" }}>Where to now?</h2>
//       <Enquiry />;
//     </>
//   );
// }



import Enquiry from "@/app/components/getintouch/parts/Enquiry";
export const dynamic = "force-dynamic"; // Ensures the page is always dynamic

export async function generateMetadata() {
  let metaData = {
    title: "Default Title",
    description: "Default Description",
    keywords: "Default Keywords",
  };

  try {
    const response = await fetch(
      "https://sky-backend-bvuy.onrender.com/api/v1/seo/getByPageName?pagename=enquiry",
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
  return <Enquiry />;
}
