import Enquiry from "@/app/components/getintouch/parts/Enquiry";
import axios from "axios";

// export const metadata = {
//   title:
//     "Best T-Shirt, Kids Wear, Uniform Design & Company in Ahmedabad, Gujarat, India & Asia: SKY Textiles",
//   description:
//     "Sky textiles India Pvt Ltd. Get in touch with Sky Textile for high-quality fabrics and exceptional customer service. Contact us today to discuss your textile needs and place your order.",
//   keywords:
//     "Textile, Fabrics, Weaving, Textile industry, Textile manufacturing, Textile products, Textile market, Textile suppliers, Fabric production, Textile trade, Textile job works, Garment manufacturers, Yarn suppliers, Fabric wholesalers, T-shirt manufacturers, Shirt production, Kids wear suppliers, Uniform design services, B2B textile services, Textile manufacturing company, Apparel production, Custom fabric printing, Garment sourcing, Textile outsourcing, Bulk textile orders, Quality textile products, Customized uniform solutions, Fabric customization, Apparel design services, Wholesale textile distribution, Textile manufacturers in Gujarat, Fabric suppliers Gujarat, Indian textile industry, Gujarat textile exports, Quality textiles Gujarat, Textile mills Gujarat, Fabric production India, Gujarat textile market, Textile weaving Gujarat, Sustainable textiles Gujarat, Gujarat textile infrastructure, Traditional Indian textiles Gujarat, Gujarat textile innovations, Gujarat textile manufacturing hub, Cotton textiles Gujarat, Gujarat silk industry, Textile printing Gujarat, Gujarat textile craftsmanship, Textile dyeing techniques Gujarat, Gujarat textile trade partners",
// };

let data;
const fetchData = async () => {
  try {
    const response = await axios.get(
      "https://skybackend.pmcommu.in/api/v1/seo/getByPageName?pagename=enquiry"
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

export default function Index() {
  return (
    <>
      <h1 style={{ display: "none" }}>
        Best T-Shirt, Kids Wear, Uniform Design & Company in Ahmedabad, Gujarat,
        India & Asia: SKY Textiles
      </h1>
      <h1 style={{ display: "none" }}>Contact</h1>
      <h2 style={{ display: "none" }}>
        Sky textiles India Pvt Ltd. Get in touch with Sky Textile for
        high-quality fabrics and exceptional customer service. Contact us today
        to discuss your textile needs and place your order.
      </h2>
      <h2 style={{ display: "none" }}>Contact - Sky Textiles</h2>
      <h2 style={{ display: "none" }}>Come find us</h2>
      <h2 style={{ display: "none" }}>Where to now?</h2>
      <Enquiry />;
    </>
  );
}
