import { useEffect, useState } from "react";
import { Layout, CardContener } from "../components";
import "../styles/home-page.scss";

const HomePage = () => {
  const [data, setData] = useState(null); // State to store fetched data
  const [loading, setLoading] = useState(true); // State to manage loading state
  const [error, setError] = useState(null); // State to store any error

  useEffect(() => {
    // Define the async function inside useEffect
    const fetchData = async () => {
      try {
        // Replace with your actual URL
        const response = await fetch("/data.json");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result); // Store the fetched data in state
        setLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        setError(error); // Store error in state if any
        setLoading(false); // Set loading to false in case of error
      }
    };

    // Call the async function
    fetchData();
  }, []); // Empty dependency array means this effect runs once after the initial render

  // Conditional rendering based on state
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <Layout>
        <section id="home-page">
          <div className="banner">
            <div>
              <h2>Chez vous, partout et ailleurs</h2>
            </div>
          </div>
          <div className="home-content">
            <CardContener data={data} />
          </div>
        </section>
      </Layout>
    </>
  );
};
export default HomePage;
