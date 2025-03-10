
import Home from "../components/home/Home";
export const dynamic = "force-dynamic"; // Ensures the page is always dynamic
export async function generateMetadata() {
  let metaData = {
    title: "Default Title",
    description: "Default Description",
    keywords: "Default Keywords",
  };

  try {
    const response = await fetch(
      "https://skytextilesbackend.pmcommu.in/api/v1/seo/getByPageName?pagename=home",
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

export default async function Page() {
  let pageData = {
    h1: "Default H1",
    h2: "Default H2",
  };

  // Fetching the H1 and H2 data
  try {
    const response = await fetch(
      "https://skytextilesbackend.pmcommu.in/api/v1/seo/getByPageName?pagename=home",
      {
        cache: "no-store", // Fetch fresh data every time
      }
    );
    const data = await response.json();

    if (data?.message) {
      pageData = {
        h1: data.message.h1 || "Default H1",
        h2: data.message.h2 || "Default H2",
      };
    }
  } catch (error) {
    console.error("Error fetching page data:", error);
  }

  return (
    <>
      <h1 style={{ display: "none" }}>{pageData.h1}</h1>
      <h2 style={{ display: "none" }}>{pageData.h2}</h2>
      <Home />
    </>
  );
}
