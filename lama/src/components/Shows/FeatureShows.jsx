import React from "react";
import Card from "../Card/Card";
import "./FeatureShows.scss";
import useFetch from "../../Hooks/useFetch.js";

const FeaturedProducts = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

  return (
    <div className="featureShows">
      <div className="top">
        <h1>{type} Shows em destaque</h1>
        <p>
        Os shows em destaque, oferecem uma experiência única e inesquecível,
         seja por um artista renomado, uma produção grandiosa ou um repertório excepcional.
        </p>
      </div>
      <div className="bottom">
        {error
          ? "Something went wrong!"
          : loading
          ? "loading"
          : data?.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default FeaturedProducts;
