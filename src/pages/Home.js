import React, { useEffect, useState } from "react";
import { Navbar } from "../component/Navbar";
import axios from "axios";
import { Link } from "react-router-dom";

function Home() {
  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(false);
  async function fetchAll() {
    setloading(true);
    try {
      // let Data = await axios.get("https://www.melivecode.com/api/attractions", {
      let Data = await axios.get(
        "https://62519153dfa31c1fbd6fbf0f.mockapi.io/data"
        // {
        //   headers: {
        //     Authorization: window.localStorage.getItem("token"),
        //   },
        // }
      );
      setdata(Data.data);
      setloading(false);
    } catch (error) {
      setloading(false);
      console.log(" added error" + error);
    }
  }
  useEffect(() => {
    fetchAll();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container">
        <h3 className="text-primary lead fw-normal mt-2 fs-3">
          Around The world
        </h3>
        {loading ? (
          <p className=" home-loading">Loading ...</p>
        ) : (
          <div className="row g-2 ">
            {data.map((e) => {
              return (
                <>
                  <div class="col-lg-4 card p-0 ">
                    <Link to={`/edit/${e.id}`}>
                      <img
                        src={e.coverimage}
                        class="card-img-top list-img"
                        alt="img"
                      />
                      <div class="card-body">
                        <h5 class="card-title text-dark">{e.name}</h5>
                        <p class="card-text text-secondary text-truncate">
                          {e.detail}
                        </p>
                        <p class="card-text">
                          <small class="text-primary text-uppercase">
                            Learn More
                          </small>
                        </p>
                      </div>
                    </Link>
                  </div>
                </>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}

export default Home;
