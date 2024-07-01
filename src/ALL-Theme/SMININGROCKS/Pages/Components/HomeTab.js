// BottomTabNavigation.js
import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import { FaHome, FaUser, FaEnvelope } from 'react-icons/fa';
import { FaShoppingCart } from "react-icons/fa";
import { TbCategoryFilled } from "react-icons/tb";
import { useRecoilValue } from 'recoil';
import { CartListCounts, loginState } from '../../../../Recoil/atom';
import { Badge, Button, Tooltip } from '@mui/material';
import { IoMenuOutline } from 'react-icons/io5';



const HomeTab = () => {
  const [activeTab, setActiveTab] = useState("/");
  const getCartListCount = useRecoilValue(CartListCounts)
  const islogin = useRecoilValue(loginState);
  const location = useLocation();

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };


  // const handleClick = async () => {
    // if ('vibrate' in navigator) {
    //   const didVibrate = navigator.vibrate(200); // Vibrate for 200ms
    //   if (didVibrate) {
    //     alert('Device is vibrating');
    //   } else {
    //     alert('Device did not vibrate. Check device settings.');
    //   }
    // } else {
    // await Haptics.impact({ style: ImpactStyle.Heavy });
    //   alert('not support IOS');
    // }
  //   await Haptics.vibrate();
  // };


  // const [vibrating, setVibrating] = useState(false);

  // const toggleVibrating = () => {
  //   setVibrating(prevVibrating => !prevVibrating);
  // };


  // useVibrate(vibrating, [100], false,
  //   {
  //     onFinish: toggleVibrating
  //   });



  return (
    <>
      {location.pathname == '/productdetail' ?
        <>
          {/* <button
            style={{
              position:'fixed',
              bottom:0,
              height:'8vh',
              width:'100%',
              padding: '10px 20px',
              fontSize: '16px',
              backgroundColor:'#f0f0f0',
              color: '#7D7f85',
              border:'none',
              cursor: 'pointer',
              fontWeight:'bold',
              boxShadow:'rgba(0, 0, 0, 0.16) 0px 1px 4px',
              transition: 'background-color 0.3s',
            }}
          >
            Add to cart
          </button> */}
        </>
        :
        <div style={styles.container}>
          <NavLink to="/" style={styles.tab} activeClassName="active" onClick={() => handleTabChange("/")}>
            <Button style={{ display: 'flex', flexDirection: 'column', color: 'rgb(102, 102, 102)' }}>
              <FaHome style={activeTab === "/" ? styles.activeIcon : styles.icon} />
              <span style={activeTab === "/" ? styles.activeText : styles.text}>Home</span>
            </Button>
          </NavLink>
          <NavLink to="/Menu" style={styles.tab} activeClassName="active" onClick={() => handleTabChange("/Menu")}>
            <Button style={{ display: 'flex', flexDirection: 'column', color: 'rgb(102, 102, 102)' }}>
              <IoMenuOutline style={activeTab === "/Menu" ? styles.activeIcon : styles.icon} />
              <span style={activeTab === "/Menu" ? styles.activeText : styles.text}>Menu</span>
            </Button>
          </NavLink>

          {islogin === 'true' ?
            <NavLink to="/account" style={styles.tab} activeClassName="active" onClick={() => handleTabChange("/account")}>
              <Button style={{ display: 'flex', flexDirection: 'column', color: 'rgb(102, 102, 102)' }}>
                <FaUser style={activeTab === "/account" ? styles.activeIcon : styles.icon} />
                <span style={activeTab === "/account" ? styles.activeText : styles.text}>Account</span>
              </Button>
            </NavLink>
            : <NavLink to="/AccountWothoutLogin" style={styles.tab} activeClassName="active" onClick={() => handleTabChange("/AccountWothoutLogin")}>
              <Button style={{ display: 'flex', flexDirection: 'column', color: 'rgb(102, 102, 102)' }}>
                <FaUser style={activeTab === "/AccountWothoutLogin" ? styles.activeIcon : styles.icon} />
                <span style={activeTab === "/AccountWothoutLogin" ? styles.activeText : styles.text}>Account</span>
              </Button>
            </NavLink>}

          {islogin === 'true' ?
            <NavLink to="/CartPage" style={styles.tab} activeClassName="active"
              onClick={() => {
                handleTabChange("/CartPage");
                // handleClick();
              }}
            >
              <Button style={{ display: 'flex', flexDirection: 'column', color: 'rgb(102, 102, 102)' }}>
                <Badge
                  badgeContent={getCartListCount}
                  overlap={"rectangular"}
                  color="secondary"
                  className="badge12"
                  style={{ marginInline: '10px' }}
                >
                  <Tooltip title="Cart">
                    <FaShoppingCart style={activeTab === "/CartPage" ? styles.activeIcon : styles.icon} />
                  </Tooltip>
                </Badge>
                <span style={activeTab === "/CartPage" ? styles.activeText : styles.text}>Cart</span>
              </Button>
            </NavLink>
            :
            <NavLink to="/WithoutLoginCart" style={styles.tab} activeClassName="active"
              onClick={() => {
                handleTabChange("/WithoutLoginCart");
                // handleClick();
              }}
            >
              <Button style={{ display: 'flex', flexDirection: 'column', color: 'rgb(102, 102, 102)' }}>
                {/* <Badge
                  badgeContent={getCartListCount}
                  overlap={"rectangular"}
                  color="secondary"
                  style={{ marginInline: '10px' }}
                > */}
                  {/* <Tooltip title="Cart"> */}
                    <FaShoppingCart style={activeTab === "/WithoutLoginCart" ? styles.activeIcon : styles.icon} />
                  {/* </Tooltip> */}
                {/* </Badge> */}
                <span style={activeTab === "/WithoutLoginCart" ? styles.activeText : styles.text}>Cart</span>
              </Button>
            </NavLink>}
        </div>
      }
    </>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'fixed',
    bottom: 0,
    width: '100%',
    backgroundColor: '#f0f0f0',
    height: '60px',
    borderTop: '1px solid #ccc',
  },
  tab: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
    flex: 1,
    color: '#666',
  },
  icon: {
    marginBottom: '5px',
    fontSize: '20px',
  },
  activeIcon: {
    color: '#0000ff78',
    fontSize: '20px',
  },
  text: {
    fontSize: '12px',
  },
  activeText: {
    color: '#0000ff78',
    fontSize: '12px',
    marginBottom: '-5px',
    paddingBlock: '5px'
  },
};

export default HomeTab;
