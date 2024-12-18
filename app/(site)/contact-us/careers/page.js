import Careers from "@/app/components/getintouch/parts/Careers";
import axios from "axios";

let data;
const fetchData = async () => {
  try {
    const response = await axios.get(
      "https://skybackend.pmcommu.in/api/v1/seo/getByPageName?pagename=careers"
    );
    // setData(response.data.message); // Assuming the response data is an array

    data = response.data.message;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const main = async () => {
  await fetchData();
  console.log(data); // This will now log the fetched data

  return {
    title: data?.title,
    description: data?.description,
    keywords: data?.keywords,
  };
};
export const metadata = await main();

export default function index() {
  return <Careers />;
}
