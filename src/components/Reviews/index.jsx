import React, { useRef, useState } from "react";
import "./styles.css";

import RatingStar from "../../assets/images/Star.svg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";

const ReviewsComponent = () => {
  const reviews = [
    {
      title: "Hellen redd",
      content:
        "Elsa is AWESOME! We had 34 people in total attend our destination wedding in Punta Cana. Elsa handles the reservations, payments, and ground reservations for all with zero issues! She represented us with the resort and addressed any",
    },
    {
      title: "VAL S.",
      content:
        "You are truly a professional in your line of work and we appreciate all the assistance you gave.  You truly exemplify that people matter and always took care of your customers.",
    },

    {
      title: "JESS L.",
      content:
        "I can’t thank our travel agent, Elsa Davis, enough for all the effort she put into making sure all mine and my guest needs and concerns were taken care of and in a timely manner. Due to the COVID-19 pandemic our trip was cancelled and Elsa has been so helpful to do everything she could to ensure our group was reimbursed from the resort and airlines. We are inexperienced travelers and she has been so helpful and patient to answer all of our questions and concerns. Thank you Elsa Davis! We look forward to traveling in the future.",
    },
    {
      title: "Consumer",
      content:
        "I have booked group rates with Elsa previously and ALL have been amazing. She takes her time to listen to her clients so she can accommodate them to the best of her ability. Elsa is always available for questions and always get the best.",
    },
  ];

  return (
    <>
      <div className="reviewsHead">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper"
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="swiper-slide">
                <div className="review-card">
                  <div className="ratingIcons">
                    <img src={RatingStar} alt="" />
                    <img src={RatingStar} alt="" />
                    <img src={RatingStar} alt="" />
                    <img src={RatingStar} alt="" />
                    <img src={RatingStar} alt="" />
                  </div>
                  <p>{review.content}</p>
                  <h1>{review.title}</h1>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default ReviewsComponent;
