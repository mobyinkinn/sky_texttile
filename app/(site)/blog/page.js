// import Blog from "@/app/components/blog/Blog";
// import axios from "axios";

// let data;
// const fetchData = async () => {
//   try {
//     const response = await axios.get(
//       "https://skybackend.pmcommu.in/api/v1/seo/getByPageName?pagename=blog"
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

// export default function Index() {
//   return <Blog />;
// }

import Blog from "@/app/components/blog/Blog";
import axios from "axios";

export async function generateMetadata() {
  try {
    const response = await axios.get(
      "https://skybackend.pmcommu.in/api/v1/seo/getByPageName?pagename=blog"
    );

    const data = response.data.message;

    return {
      title: data?.title || "Default Title",
      description: data?.description || "Default Description",
      keywords: data?.keywords || "default, keywords",
    };
  } catch (error) {
    console.error("Error fetching metadata:", error);
    return {
      title: "Error Title",
      description: "Error Description",
      keywords: "error, keywords",
    };
  }
}

export default function Index() {
  return <Blog />;
}
