import React, { useState, useEffect } from "react";
import "./Video.css";
import { storImagePath } from "../../../../Utils/globalFunctions/GlobalFunction";
import CountdownTimer from '../CountDownTimer/CountDownTimer'
import { useRecoilValue } from "recoil";
import { loginState } from "../../../../../../Recoil/atom";
import ReactPlayer from 'react-player';
import Skeleton from '@mui/material/Skeleton';
import { LocalDining } from "@mui/icons-material";
import Slider from "react-slick";
export default function Video() {
  const islogin = useRecoilValue(loginState);
  const [loading, setLoading] = useState(true);
  const [isLoginStatus, setIsloginStatus] = useState();
  const [videoStarted, setVideoStarted] = useState(false);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000,
    // prevArrow: false, 
    // nextArrow: false,

  };

  useEffect(() => {
    if (islogin) {
      setIsloginStatus(islogin)
    }
  }, [])

  const handleVideoLoad = () => {
    setLoading(false);
  };

  const handleVideoPlay = () => {
    setVideoStarted(true);
    setLoading(false);
  };

  console.log('loding--', loading);
  return (
    <div>
      {/* {islogin == 'false' ? (
        <>
          {loading == 'true' ? (
            <Skeleton variant="rectangular" width='100%' height={700} animation="wave" />
          ) : (
            <ReactPlayer
              url={`${storImagePath()}/images/HomePage/MainBanner/videos/HomepageMainBannerVideo.mp4`}
              playing={true}
              muted={true}
              controls={!videoStarted}
              loop={true}
              width='100%'
              height='auto'
              onReady={handleVideoLoad}
              onPlay={handleVideoPlay}
            />
          )}
        </>
      ) :
        <>
          <img loading="lazy" src={`${storImagePath()}/images/HomePage/MainBanner/image/HomepageMainBannerVideo.png`} style={{ width: '100%' }} />
          <CountdownTimer />
        </>
      } */}


      <Slider {...settings}>
        {/* onClick={() => naviagtion('/productpage')} */}
        <div className='homePageSliderImagwMain'>
          <img src={`${storImagePath()}/images/topBanner/HomepageMainBannerImage1.jpg`} className='homePageSliderImagw' />
        </div>

        <div className='homePageSliderImagwMain'>
          <img src={`${storImagePath()}/images/topBanner/HomepageMainBannerImage2.jpg`} className='homePageSliderImagw' />
        </div>

        <div className='homePageSliderImagwMain'>
          <img src={`${storImagePath()}/images/topBanner/HomepageMainBannerImage3.jpg`} className='homePageSliderImagw' />.
        </div>

        <div className='homePageSliderImagwMain'>
          <img src={`${storImagePath()}/images/topBanner/HomepageMainBannerImage4.jpg`} className='homePageSliderImagw' />
        </div>
      </Slider>
      <div className='gradient_background'>
        <p>Grab flat $50 off with code FRI600 | Konw More</p>
      </div>

    </div>
  );
}
