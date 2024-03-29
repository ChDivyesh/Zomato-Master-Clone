import React from "react";
import { Link, useParams } from "react-router-dom";
import { IoMdArrowDropright } from "react-icons/io";
import Slider from "react-slick";
import ReactStars from "react-rating-stars-component";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

// components
import MenuCollection from "../../Components/restaurant/MenuCollection";
import MenuSimilarRestaurantcard from "../../Components/restaurant/MenuSimilarRestaurantcard";
import { NextArrow, PrevArrow } from "../../Components/CarousalArrow";
import ReviewCard from "../../Components/restaurant/Reviews/reviewCard";
import Mapview from "../../Components/restaurant/Mapview";

const Overview = () => {
  const { id } = useParams();

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <>
      <div className="flex flex-col md:flex-row relative">
        <div className="w-full md:w-8/12">
          <h2 className="font-semibold text-lg md:text-xl my-4">
            About this place
          </h2>
          <div className="flex justify-between items-center">
            <h4 className="text-lg font-medium">Menu</h4>
            <Link to={`/restaurant/${id}/menu`}>
              <span className="flex items-center gap-1 text-zomato-400">
                See all menu <IoMdArrowDropright />
              </span>
            </Link>
          </div>
          <div className="flex flex-wrap gap-3 my-4">
            <MenuCollection
              menuTitle="Menu"
              pages="3"
              image={[
                "https://b.zmtcdn.com/data/menus/920/19438920/21fa39744f465abc5f947f1e9319fb5d.jpg",
                "https://images.unsplash.com/photo-1526382551041-3c817fc3d478?dpr=2&auto=format&w=1024&h=1024",
              ]}
            />
          </div>
          <h4 className="text-lg font-medium my-4">Cuisines</h4>
          <div className="flex flex-wrap gap-2">
            <span className="border border-gray-600 text-blue-600 px-2 py-1 rounded-full">
              Street Food
            </span>
            <span className="border border-gray-600 text-blue-600 px-2 py-1 rounded-full">
              Street Food
            </span>
            <span className="border border-gray-600 text-blue-600 px-2 py-1 rounded-full">
              Street Food
            </span>
          </div>
          <div className="my-4">
            <h4 className="text-lg font-medium">Average Cost</h4>
            <h6>₹100 for one order (approx.)</h6>
            <small className="text-gray-500">
              Exclusive of applicable taxes and charges, if any
            </small>
          </div>
          <div className="my-4">
            <h4 className="text-lg font-medium">Similar Restaurants</h4>
            <div>
              <Slider {...settings}>
                <MenuSimilarRestaurantcard
                  image="https://b.zmtcdn.com/data/pictures/chains/5/18711475/4be376adb66b75764946d00a7dcf9991_featured_v2.jpg?output-format=webp"
                  title="tea"
                />
                <MenuSimilarRestaurantcard
                  image="https://b.zmtcdn.com/data/pictures/chains/5/18711475/4be376adb66b75764946d00a7dcf9991_featured_v2.jpg?output-format=webp"
                  title="tea"
                />
                <MenuSimilarRestaurantcard
                  image="https://b.zmtcdn.com/data/pictures/chains/5/18711475/4be376adb66b75764946d00a7dcf9991_featured_v2.jpg?output-format=webp"
                  title="tea"
                />
                <MenuSimilarRestaurantcard
                  image="https://b.zmtcdn.com/data/pictures/chains/5/18711475/4be376adb66b75764946d00a7dcf9991_featured_v2.jpg?output-format=webp"
                  title="tea"
                />
                <MenuSimilarRestaurantcard
                  image="https://b.zmtcdn.com/data/pictures/chains/5/18711475/4be376adb66b75764946d00a7dcf9991_featured_v2.jpg?output-format=webp"
                  title="tea"
                />
              </Slider>
            </div>
          </div>
          <div className="my-4">
            <h4 className="text-lg font-medium">
              Rate your delivery experience
            </h4>
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={24}
              activeColor="#ffd700"
            />
          </div>
          <div className="my-4 w-full  md:hidden flex flex-col gap-4">
            <Mapview
              title="Mumbai Xpress"
              phno="+911212121212"
              mapLocation={[12.988134202889283, 77.59405893120281]}
              address="15, Sigma Central Mall, Cunningham Road, vijayawada, Andhra Pradesh"
            />
          </div>
          <div className="my-4 flex flex-col gap-4">
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
          </div>
        </div>
        <aside
          style={{ height: "fit-content" }}
          className="hidden md:flex md:w-4/12 sticky rounded-xl top-2 bg-white p-3 shadow-md flex flex-col gap-4"
        >
            <Mapview
            title="Mumbai Xpress"
            phno="+911212121212"
            mapLocation={[12.988134202889283, 77.59405893120281]}
            address="15, Sigma Central Mall, Cunningham Road, vijayawada, Andhra Pradesh"
          />
          
        </aside>
      </div>
    </>
  );
};

export default Overview;