import axios from "axios";
import Card from "../card/Card";
import Header from "../Header/Header";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

import "./Home.css";

const Home = () => {
  const [pageCount, setPageCount] = useState(1);
  const [planet, setPlanet] = useState([]);

  const URL = `https://swapi.dev/api/planets/?format=json`;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [setPlanet]);
  useEffect(() => {
    getDets();
  }, []);

  const getDets = async () => {
    try {
      const { data } = await axios.get(URL);
      setPlanet(data);
      // console.log(data);
      setPageCount(Math.ceil(data?.count / 10));
    } catch (error) {
      console.log(error);
    }
  };

  const handlePageClick = async (page) => {
    const currentPage = page.selected + 1;

    try {
      if (currentPage === undefined) return;
      const { data } = await axios.get(
        `https://swapi.dev/api/planets/?page=${currentPage}&format=json`
      );
      setPlanet(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="container">
        <Header />
        <div className="hero">
          <Card planet={planet} />
        </div>
        <div className="react-page">
          <ReactPaginate
            previousLabel={"previous"}
            nextLabel={"next"}
            breakLabel={"..."}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={3}
            onPageChange={handlePageClick}
            containerClassName={"page-container pagination"}
            pageClassName={"pagination"}
            pageLinkClassName={"pagination"}
            previousClassName={"pagination"}
            previousLinkClassName={"pagination"}
            nextClassName={"pagination"}
            nextLinkClassName={"pagination"}
            breakClassName={"pagination"}
            breakLinkClassName={"pagination"}
            activeClassName={"active"}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
