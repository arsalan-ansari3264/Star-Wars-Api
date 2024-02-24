import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./CardDetails.css";

const CardDetails = () => {
  const { id } = useParams();
  const [residentData, setResidentData] = useState([]);
  const [upperURL, setupperURL] = useState([]);
  const [isopen, setIsopen] = useState(false);


  const URL = `https://swapi.dev/api/planets/${id}`;

  const handleFetch = async (url) => {
    try {
      const { data } = await axios.get(url);
      setupperURL(data);
      // console.log(data);
    } catch (error) {
      console.log(error);
    }

    upperURL.residents?.map((item) => {
      const url = item;
      const fetchResidentsData = async (url) => {
        try {
          const { data } = await axios.get(url);
          const value = data;
          setResidentData(value);
          console.log(value);
        } catch (error) {
          console.log(error);
        }
      };
      fetchResidentsData(url);
    });
  };
  useEffect(() => {
    handleFetch(URL);
  }, [id]);


 
  return (
    <div className="container">
      <Header />

      <div>Card details</div>
    </div>
  );
};

export default CardDetails;
