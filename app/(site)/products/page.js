// import Products from "@/app/components/products/Products";
// import axios from "axios";

// // export const metadata = {
// //   title:
// //   "Best Textile products in Ahmedabad, Gujarat, India & Asia: SKY Textiles",
// //   description:
// //   "SKY Textiles delivers its clients with a ONE-STOP-SOLUTION that includes design, advancement, supplying, industrial production, and sales, enabling them to continue expanding new inventions and potential in our product.",
// //   keywords:
// //   "Top 10 textile companies in Ahmedabad, GSM Range 120 GSM – 450 GSM in Gujarat, Best Draw Frame Process in Gujarat, Best Rib Machines in Gujarat, Multiple fabric blend in Gujarat, Best Gujarat textile innovations, Best Sustainable Textiles in Gujarat, Best Speed Frame Process in Gujarat, Best Fleece Machines in Gujarat, Gujarat textile market in Ahmedabad, Best shirt production in Gujarat, Mills in Ahmedabad, Quality textiles in Gujarat, Quality textiles in Ahmedabad, Best quality textile manufacturing company in Ahmedabad, Best quality textile manufacturing company in Gujarat, Best quality textile infrastructure in Ahmedabad, Best quality textile infrastructure in Gujarat, Premium Quality Fabrics Gujarat, Best Quality textiles in Gujarat, Best quality textiles in Ahmedabad, Best quality textiles in India, Best quality textiles in Asia, Best Textile products in Gujarat, Best Textile products in Ahmedabad, Best textile industry in Ahmedabad, Textile infrastructure in Ahmedabad, Textile Infrastructure in Gujarat, Best Greige Fabric Manufacturing Company, Finished fabrics manufacturing company, Gujarat Spinning Mills, Best spinning mills in India, Best spinning mills in Gujarat, Best spinning mills in Asia, Top spinning mills in Ahmedabad, Top spinning mills in Gujarat, Spinning Mills in Gujarat, Textile manufacturers in Gujarat, Best t-shirt manufacturers in Ahmedabad, Best textile industry in Gujarat, Best Raw Material Mixing Process in Gujarat, Best Single Jersey machines in Gujarat, Sustainable Fabrics Gujarat, Best textile in Gujarat, Best T-shirt manufacturers in Gujarat, Best Fabrics in Gujarat, T-shirt manufacturing company, Shirt manufacturers in Ahmedabad, Best cotton mill in India, Fabric manufacturers in Gujarat, Textile, Fabrics, Weaving, Textile industry, Textile manufacturing, Textile products, Textile market, Textile suppliers, Fabric production, Textile trade, Textile job works, Garment manufacturers, Yarn suppliers, Fabric wholesalers, T-shirt manufacturers, Shirt production, Kids wear suppliers, Uniform design services, B2B textile services, Textile manufacturing company, Apparel production, Custom fabric printing, Garment sourcing, Textile outsourcing, Bulk textile orders, Quality textile products, Customized uniform solutions, Fabric customization, Apparel design services, Wholesale textile distribution, Textile manufacturers in Gujarat, Fabric suppliers Gujarat, Indian textile industry, Gujarat textile exports, Quality textiles Gujarat, Textile mills Gujarat, Fabric production India, Gujarat textile market, Textile weaving Gujarat, Sustainable textiles Gujarat, Gujarat textile infrastructure, Traditional Indian textiles Gujarat, Gujarat textile innovations, Gujarat textile manufacturing hub, Cotton textiles Gujarat, Gujarat silk industry, Textile printing Gujarat, Gujarat textile craftsmanship, Textile dyeing techniques Gujarat, Gujarat textile trade partners"
// // };

// let data;
// const fetchData = async () => {
//   try {
//     const response = await axios.get(
//       "https://skytextiles.in/api/v1/seo/getByPageName?pagename=products"
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

// export default function index() {
//   return (
//     <>
//       <h1 style={{ display: "none" }}>
//         Best Textile Manufacturing Company in Ahmedabad, Gujarat, India & Asia:
//         Sky Textiles
//       </h1>
//       <h2 style={{ display: "none" }}>
//         Sky textiles India Pvt Ltd. industry experience with high-quality,
//         long-lasting yarns produced using state-of-the-art technology. Contact
//         us today for premium cotton search compact yarns.
//       </h2>
//       <h2 style={{ display: "none" }}>Our Product</h2>
//       <h2 style={{ display: "none" }}>
//         What do we mean by our Premium Quality Cotton?
//       </h2>
//       <h2 style={{ display: "none" }}>
//         What do we mean by Combed Compact Technology?
//       </h2>
//       <h2 style={{ display: "none" }}>
//         What do we mean by P.P. Cleared Yarns?
//       </h2>
//       <h2 style={{ display: "none" }}>
//         What do we mean by Durability & Longevity?
//       </h2>
//       <h2 style={{ display: "none" }}>
//         Meet Our Awesome "Behind The Scene" Team!
//       </h2>
//       <h2 style={{ display: "none" }}>Where to now?</h2>
//       <Products />
//     </>
//   );
// }


import Products from "@/app/components/products/Products";
export const dynamic = "force-dynamic"; // Ensures the page is always dynamic

export async function generateMetadata() {
  let metaData = {
    title: "",
    description: "",
    keywords: "",
  };

  try {
    const response = await fetch(
      "https://skytextiles.in/api/v1/seo/getByPageName?pagename=products",
      {
        cache: "no-store", // Fetches fresh data every time
      }
    );
    const data = await response.json();

    if (data?.message) {
      metaData = {
        title: data.message.title || "",
        description: data.message.description || "",
        keywords: data.message.keywords || "",
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



export default async function Page() {
  let pageData = {
    h1: "",
    h2: "",
    bold: "",
    italic: "",
  };

  // Fetching the H1 and H2 data
  try {
    const response = await fetch(
      "https://skytextiles.in/api/v1/seo/getByPageName?pagename=products",
      {
        cache: "no-store", // Fetch fresh data every time
      }
    );
    const data = await response.json();

    if (data?.message) {
      pageData = {
        h1: data.message.h1 || "",
        h2: data.message.h2 || "",
        bold: data.message.bold || "",
        italic: data.message.italic || "",
      };
    }
  } catch (error) {
    console.error("Error fetching page data:", error);
  }

  return (
    <>
      <h1 style={{ display: "none" }}>{pageData.h1}</h1>
      <h2 style={{ display: "none" }}>{pageData.h2}</h2>
      <b style={{ display: "none" }}>{pageData.bold}</b>
      <i style={{ display: "none" }}>{pageData.italic}</i>
      <Products />
    </>
  );
}

