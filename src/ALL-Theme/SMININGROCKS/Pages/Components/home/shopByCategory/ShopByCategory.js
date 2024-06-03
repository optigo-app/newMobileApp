import React from 'react'
import './ShopByCategory.css'
import { Colors } from '../../../../lib/consts/Colors'
import { storImagePath } from '../../../../Utils/globalFunctions/GlobalFunction'
import { useNavigate } from 'react-router-dom'
import Slider from 'react-slick'

export default function ShopByCategory() {

  const navigation = useNavigate();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    // prevArrow: false, 
    // nextArrow: false,
  };

  return (
    <div>
      <div className='linkingLoveMain' style={{ marginTop: '-10px' }}>
        <div className='linkingLoveImage'>
          <img src={`${storImagePath()}/images/promoset2Banner/promoSetMainBanner2.jpg`} className='linkingLoveImageDesign' onClick={() => navigation('/productpage')}/>
        </div>
        <div className='linkingLove'>
          <p className='linkingTitle'>FLORA</p>
          <p className='linkingDesc'>High end affordable luxury with sophisticated designs for your every day.</p>
          <p className='linkingShopCol'>SHOP COLLECTION</p>
          <Slider {...settings} >
            <div className='linkRingLove'>
              <div className='linkRingLoveImgMain'>
                <div className='linkLoveRing1'>
                  <img src={`${storImagePath()}/images/promoset2Banner/promoSetBanner2Img1.jpg`} className='likingLoveImages' />
                </div>
                <div className='linkLoveRing1Desc'>
                  <p className='ring1Desc'>Lab Grown Diamond 1.97ctw Chain Linking Bracelet BL-01993WHT</p>
                </div>
              </div>
              <div className='linkRingLoveImgMain'>
                <div className='linkLoveRing2'>
                  <img src={`${storImagePath()}/images/promoset2Banner/promoSetBanner2Img2.jpg`} className='likingLoveImages' />
                </div>
                <div className='linkLoveRing1Desc'>
                  <p className='ring1Desc'>Lab Grown Diamond 1.97ctw Chain Linking Bracelet BL-01993WHT</p>
                </div>
              </div>
            </div>

            <div className='linkRingLove'>
              <div className='linkRingLoveImgMain'>
                <div className='linkLoveRing1'>
                  <img src={`${storImagePath()}/images/promoset2Banner/promoSetBanner2Img3.jpg`} className='likingLoveImages' />
                </div>
                <div className='linkLoveRing1Desc'>
                  <p className='ring1Desc'>Lab Grown Diamond 1.97ctw Chain Linking Bracelet BL-01993WHT</p>
                  {/* <p style={{ fontSize: '12px' }}>White Gold / $4,949.00</p> */}
                </div>
              </div>
              <div className='linkRingLoveImgMain'>
                <div className='linkLoveRing2'>
                  <img src={`${storImagePath()}/images/promoset2Banner/promoSetBanner2Img4.jpg`} className='likingLoveImages' />
                </div>
                <div className='linkLoveRing1Desc'>
                  <p className='ring1Desc'>Lab Grown Diamond 1.97ctw Chain Linking Bracelet BL-01993WHT</p>
                  {/* <p style={{ fontSize: '12px' }}>White Gold</p> */}
                </div>
              </div>
            </div>

            <div className='linkRingLove'>
              <div className='linkRingLoveImgMain'>
                <div className='linkLoveRing1'>
                  <img src={`${storImagePath()}/images/promoset2Banner/promoSetBanner2Img5.jpg`} className='likingLoveImages' />
                </div>
                <div className='linkLoveRing1Desc'>
                  <p className='ring1Desc'>Lab Grown Diamond 1.97ctw Chain Linking Bracelet BL-01993WHT</p>
                </div>
              </div>
              <div className='linkRingLoveImgMain'>
                <div className='linkLoveRing2'>
                  <img src={`${storImagePath()}/images/promoset2Banner/promoSetBanner2Img6.jpg`} className='likingLoveImages' />
                </div>
                <div className='linkLoveRing1Desc'>
                  <p className='ring1Desc'>Lab Grown Diamond 1.97ctw Chain Linking Bracelet BL-01993WHT</p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>

      <div>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          marginTop: '45px',
          backgroundColor: '#c38c6d'
        }} className='smilingSopCateMain'>
          <div className='shopByCategoryBox1Main'>
            <div className='shopByCategoryBox'>
              <img src={`${storImagePath()}/images/shopByCategory/shopByCategory1.jpg`} className='shopByCategoryBoxImg' />
            </div>
            <div className='shopByCategoryBox'>
              <img src={`${storImagePath()}/images/shopByCategory/shopByCategory1.jpg`} className='shopByCategoryBoxImg'/>
            </div>
          </div>
          <div className='shopByCategoryBox2Main'>
            <div className='shopByCategoryBox'>
              <img src={`${storImagePath()}/images/shopByCategory/shopByCategory1.jpg`} className='shopByCategoryBoxImg' />
            </div >
            <div className='shopByCategoryBox'>
              <img src={`${storImagePath()}/images/shopByCategory/shopByCategory1.jpg`} className='shopByCategoryBoxImg' />
            </div>
          </div>
        </div>
      </div>

      {/* <div>
        <p className='shopbycategoryTitle'>Shop By Category</p>
        <div className='shopbycategoryDesc'>
          <p style={{
            color: 'rgb(125, 127, 133)',
            fontSize: '13px',
            width: '240px',
            textAlign: 'center'
          }}>Discover KayraCreation Fine Jewelry! Brilliant and Better!</p>
        </div>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }} className='smilingSopCateMain'>
          <div className='shopByCategoryBox1Main'>
            <div className='shopByCategoryBox'>
              <img src={`${storImagePath()}/images/HomePage/shopByCategory/shopByCategory1.png`} className='shopByCategoryBoxImg' />
              <p style={{ fontWeight: 500, color: Colors.fontColor, textAlign: 'center' }}>EARRING</p>
            </div>
            <div className='shopByCategoryBox'>
              <img src={`${storImagePath()}/images/HomePage/shopByCategory/shopByCategory2.png`} className='shopByCategoryBoxImg' />
              <p style={{ fontWeight: 500, color: Colors.fontColor, textAlign: 'center' }}>NACKLACES</p>
            </div >
          </div>
          <div className='shopByCategoryBox2Main'>
            <div className='shopByCategoryBox'>
              <img src={`${storImagePath()}/images/HomePage/shopByCategory/shopByCategory3.png`} className='shopByCategoryBoxImg' />
              <p style={{ fontWeight: 500, color: Colors.fontColor, textAlign: 'center' }}>PENDANT</p>
            </div>
          <div className='shopByCategoryBox'>
              <img src={`${storImagePath()}/images/HomePage/shopByCategory/shopByCategory4.png`} className='shopByCategoryBoxImg' />
              <p style={{ fontWeight: 500, color: Colors.fontColor, textAlign: 'center' }}>RING</p>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  )
}
