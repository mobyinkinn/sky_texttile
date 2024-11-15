import Csr from "@/app/components/sustainiblity/parts/Csr";

let data;
const fetchData = async () => {
  try {
    const response = await axios.get(
      "http://localhost:8000/api/v1/seo/getByPageName?pagename=csr"
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

export default function index() {
  return <Csr />;
}
