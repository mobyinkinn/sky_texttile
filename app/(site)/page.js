import axios from "axios";
import Home from "../components/home/Home";

let data;
const fetchData = async () => {
  try {
    const response = await axios.get(
      "https://skybackend.pmcommu.in/api/v1/seo/getByPageName?pagename=home"
    );
    // setData(response.data.message); // Assuming the response data is an array

    data = response.data.message;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const main = async () => {
  await fetchData();

  return {
    title: data?.title,
    description: data?.description,
    keywords: data?.keywords,
  };
};
export const metadata = await main();

// export const metadata = {
//   title: data?.title,
//   description: data?.description,
//   keywords: data?.keywords,
// };

export default function Index() {
  return (
    <>
      <h1 style={{ display: "none" }}>
        Best Textile Manufacturing Company in Ahmedabad, Gujarat, India & Asia:
        Sky Textiles
      </h1>

      <h2 style={{ display: "none" }}>
        SKY Textiles delivers its clients with a ONE-STOP-SOLUTION that includes
        design, advancement, supplying, industrial production, and sales,
        enabling them to continue expanding new inventions and potential in our
        product.
      </h2>
      <Home />
    </>
  );
}
