import React, { useEffect, useState } from "react";
import axios from "axios";
import home from './Home.module.css';
import sideImage from './image/search.png';
import { ChevronRight } from 'lucide-react';

const Home = ({ activeTab }) => {
  const [data, setData] = useState({ listings: { data: [] }}); 
  const [listingData, setListingData] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        let response;

        if (activeTab === "ai_companies") {
          response = await axios.get("http://127.0.0.1:8000/api/ai/service");
          setData(response.data); 
          console.log('Full response:', response.data.listings.data);
        } 
        else if(activeTab === "ai_services") {
          response = await axios.get("http://127.0.0.1:8000/api/ai/listing-location");
          setListingData(response.data.listing_locations || []);
          console.log('Full response:', response.data.listing_locations);
        }
        console.log(activeTab);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [activeTab]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
     <div className="data-container">
      {activeTab === "ai_companies" && (
        <div className="data-list">
          {data.listings.data.length > 0 ? (
            data.listings.data.map((company, index) => (
              <div key={index} className="data-item m-5">
                <h3>{company.listing_name}</h3>
                <p>Region: {company.region}</p>
                <p>Technology: {company.technology}</p>
              </div>
            ))
          ) : (
            <p>No companies available.</p>
          )}
        </div>
      )}
      {activeTab === "ai_services" && (
        <div className="data-list">
          {listingData.length > 0 ? (
            listingData.map((item, index) => (
              <div key={index} className="data-item">
                <h3>{item.listing_location_name}</h3>
                {item.listing_location_photo && (
                  <img src={`https://aicompanies.io/frontend/uploads/listing_location_photo/${item.listing_location_photo}`} alt="" />
                 )}

                <p>Technology: </p>
              </div>
            ))
          ) : (
            <p>No services available.</p>
          )}
        </div>
      )}
      {activeTab === "ai_tool" && (
        <div className="data-list">
          {Array.isArray(data) && data.map((tool) => (
            <div key={tool.id} className="data-item">
              <h3>{tool.name}</h3>
              <p>Company: {tool.company}</p>
              <p>Platform: {tool.platform}</p>
            </div>
          ))}
        </div>
      )}
    </div>
    <div className="container-fluid">
        <div className="row d-sm-block">
            <div className={home["main-header"]}>
            <div className=" col-lg-3 col-md-12 col-sm-12 col-12">
                <div className={home.image}>
                <img src={sideImage}  alt="" />
                </div>  
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-12 ms-lg-3">
                <div className={home["header-heading"]}>
                <h4>Share your project. Get connected with best-fit providers in minutes.</h4>
                <p>Tell us about your goals and company to generate a custom Project Brief in minutes.</p>
                </div>
              
            </div>
            <div className="col-lg-3 col-md-12 col-sm-12 col-12">
                <div className={home.buttoncompanies}>
                <button type="button" >Find Your Comapanies</button>
                </div>
            
            </div>
            </div>
           

        </div>


        <div className="container">
                <div className="row">
                    <div className={home["popular-heading-text"]}>
                    <h4>Popular Topics</h4>
                    </div>
                   
                    <div className={home["popular-heading"]}>
                    <div className="col-lg-6 col-md-12 col-sm-12 col-12 ms-lg-3">
                            <div className={home["acccordian-button"]}>
                                <h4>Why Host</h4>
                                <ChevronRight />
                            </div>
                            <div className={home["acccordian-button"]}>
                                <h4>Common questions</h4>
                                <ChevronRight />
                            </div>
                            <div className={home["acccordian-button"]}>
                                <h4>Cleanliness</h4>
                                <ChevronRight />
                            </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 col-12 ms-lg-3">
                    <div className={home["acccordian-button"]}>
                                <h4>Why Host</h4>
                                <ChevronRight />
                            </div>
                            <div className={home["acccordian-button"]}>
                                <h4>Common questions</h4>
                                <ChevronRight />
                            </div>
                            <div className={home["acccordian-button"]}>
                                <h4>Cleanliness</h4>
                                <ChevronRight />
                            </div>
                    </div>
                    </div>
                </div>
            </div>

            <section>
                <div className="container">
                    <div className="row steps-container ">
                        <div className={home["subtitle"]}>
                            <h3>We Simply every step of your research  process</h3>
                            <p>Browse , compare  shortlist  and hire  your  ideal  business partner  with ease</p>
                        </div>
                        <div className={home['steps-container']}>
                            <div className={home["step-1"]}>
                                <div className={home["step-number"]}>1</div>
                                <div className={home["step-icon"]}>📋</div>
                                <h3 className={home["step-title"]}>Select the category</h3>
                                <p className= {home["step-description"]}>Choose the type of companies you are looking for</p>
                            </div>
                            <div className={home["step-2"]}>
                                <div className={home["step-number"]}>2</div>
                                <div className={home["step-icon"]}>📋</div>
                                <h3 className={home["step-title"]}>Select the category</h3>
                                <p className= {home["step-description"]}>Choose the type of companies you are looking for</p>
                            </div>
                            <div className={home["step-3"]}>
                                <div className={home["step-number"]}>3</div>
                                <div className={home["step-icon"]}>📋</div>
                                <h3 className={home["step-title"]}>Select the category</h3>
                                <p className= {home["step-description"]}>Choose the type of companies you are looking for</p>
                            </div>
                            <div className={home["step-4"]}>
                                <div className={home["step-number"]}>4</div>
                                <div className={home["step-icon"]}>📋</div>
                                <h3 className={home["step-title"]}>Select the category</h3>
                                <p className= {home["step-description"]}>Choose the type of companies you are looking for</p>
                            </div>
                        </div>
                </div>
                </div>
            </section>
            {/* <section>
                <div className="container">
                    <div className="row">
                        <div className={home["research_process"]}>
                            <h3>We Simply every step of your research  process</h3>
                            <p>Browse , compare  shortlist  and hire  your  ideal  business partner  with ease</p>
                        </div>
                    </div>
                </div>
            </section> */}
    </div>
    </>
   
  );
};

export default Home;
