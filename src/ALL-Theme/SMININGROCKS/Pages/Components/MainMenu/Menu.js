import React, { useEffect, useState } from 'react'
import { IoClose } from 'react-icons/io5';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { loginState, menuTransfData, newMenuData } from '../../../../../Recoil/atom';
import { CommonAPI } from '../../../Utils/API/CommonAPI';
import { useNavigate } from 'react-router-dom';
import { ACCOUNT, LOGIN } from '../../../lib/consts/Strings';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
import { Box, ButtonBase, List, ListItem, ListItemText, Tab, Tabs, Typography } from '@mui/material';
import { TabContext, TabPanel } from '@mui/lab';
import SwipeableViews from 'react-swipeable-views';
import './Menu.css'
import { FilterListAPI } from '../../../Utils/API/FilterListAPI';
import { productListApiCall } from '../../../Utils/API/ProductListAPI';
import { getDesignPriceList } from '../../../Utils/API/PriceDataApi';
import { toast } from 'react-toastify';

export default function Menu() {


    const [islogin, setislogin] = useRecoilState(loginState);
    const [isB2bFlag, setIsB2BFlaf] = useState('');
    const [isOpen, setIsOpen] = useState(true);
    const [menuData, setMenuData] = useState([]);
    const [selectedData, setSelectedData] = useState([]);
    const setMenutransData = useSetRecoilState(menuTransfData)
    const [menuItems, setMenuItems] = useState([]);


    const [menul0data, setMenul0data] = useState([])
    const [menul1data, setMenul1data] = useState([])
    const [menul2data, setMenul2data] = useState([])
    const navigation = useNavigate();

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: false, // Enable autoplay
        // autoplaySpeed: 3000,
        // prevArrow: false, 
        // nextArrow: false,
    };


    useEffect(() => {
        if (islogin === 'true') {

            getMenuApi()

            let data0 = JSON.parse(localStorage.getItem('tempMenu0data')) ?? "";
            let data1 = JSON.parse(localStorage.getItem('tempMenu1data')) ?? "";
            let data2 = JSON.parse(localStorage.getItem('tempMenu2data')) ?? "";
            setMenul0data(data0);
            setMenul1data(data1);
            setMenul2data(data2);

            // getMenuApi()
            const storeInit = JSON.parse(localStorage.getItem('storeInit')) ?? "";
            const { IsB2BWebsite } = storeInit;
            setIsB2BFlaf(IsB2BWebsite);
        }
    }, [islogin])


    const getMenuApi = async () => {

        const storeInit = JSON.parse(localStorage.getItem("storeInit")) ?? ""
        const Customer_id = JSON.parse(localStorage.getItem("loginUserDetail")) ?? ""
        // if (storeInit && Customer_id) {
        let pData = JSON.stringify({ "FrontEnd_RegNo": `${storeInit?.FrontEnd_RegNo}`, "Customerid": `${Customer_id?.id ?? 0}` })

        let pEnc = btoa(pData)

        const body = {
            con: "{\"id\":\"\",\"mode\":\"GETMENU\",\"appuserid\":\"nimesh@ymail.in\"}",
            f: "onload (GETMENU)",
            p: pEnc
        }

        await CommonAPI(body).then((res) => {
            console.log("getmenuData", res?.Data?.rd)
            setMenuData(res?.Data?.rd)
            // transformData(res?.Data?.rd)
            //   separateData(res?.Data?.rd)

        })
        // }
    }


    // const separateData = (menuData) => {

    //     let tempMenu0data = Array.from(new Set(menuData?.map(item => JSON.stringify({
    //         menuname: item.menuname,
    //         param0dataname: item.param0dataname,
    //         param0dataid: item.param0dataid,
    //         param0name: item.param0name,
    //         param0id: item.param0id
    //     }))))?.map(item => JSON.parse(item));

    //     let tempMenu1data = Array.from(new Set(menuData?.map(item => JSON.stringify({
    //         param1id: item.param1id,
    //         param1name: item.param1name,
    //         param1dataid: item.param1dataid,
    //         param1dataname: item.param1dataname
    //     }))))?.map(item => JSON.parse(item));

    //     let tempMenu2data = Array.from(new Set(menuData?.map(item => JSON.stringify({
    //         param2id: item.param2id,
    //         param2name: item.param2name,
    //         param2dataid: item.param2dataid,
    //         param2dataname: item.param2dataname
    //     }))))?.map(item => JSON.parse(item));

    //     // Update states
    //     localStorage.setItem('tempMenu0data', JSON.stringify(tempMenu0data));
    //     localStorage.setItem('tempMenu1data', JSON.stringify(tempMenu1data));
    //     localStorage.setItem('tempMenu2data', JSON.stringify(tempMenu2data));

    //     islogin === 'true' && setMenul0data(tempMenu0data);
    //     islogin === 'true' && setMenul1data(tempMenu1data);
    //     islogin === 'true' && setMenul2data(tempMenu2data);
    // };

    // const transformData = (data) => {
    //     const transformedData = data?.reduce((acc, item) => {
    //         const existingItem = acc.find(i => i.levelid === item.levelid);
    //         if (existingItem) {
    //             const existingParam1 = existingItem.param1.find(p => p.param1dataid === item.param1dataid);
    //             if (existingParam1) {
    //                 if (item.param2id) {
    //                     const existingParam2 = existingParam1.param2.find(p => p.param2dataid === item.param2dataid);
    //                     if (!existingParam2) {
    //                         existingParam1.param2.push({
    //                             param2id: item.param2id,
    //                             param2name: item.param2name,
    //                             param2dataid: item.param2dataid,
    //                             param2dataname: item.param2dataname
    //                         });
    //                     }
    //                 }
    //             } else {
    //                 const newParam1 = {
    //                     param1id: item.param1id,
    //                     param1name: item.param1name,
    //                     param1dataid: item.param1dataid,
    //                     param1dataname: item.param1dataname,
    //                     menuname: item.menuname, // Include menuname here
    //                     param2: []
    //                 };
    //                 if (item.param2id) {
    //                     newParam1.param2.push({
    //                         param2id: item.param2id,
    //                         param2name: item.param2name,
    //                         param2dataid: item.param2dataid,
    //                         param2dataname: item.param2dataname
    //                     });
    //                 }
    //                 existingItem.param1.push(newParam1);
    //             }
    //         } else {
    //             const newItem = {
    //                 levelid: item.levelid,
    //                 menuname: item.menuname,
    //                 param0dataname: item.param0dataname,
    //                 param0dataid: item.param0dataid,
    //                 param0name: item.param0name,
    //                 param0id: item.param0id,
    //                 param1: []
    //             };
    //             if (item.param1id) {
    //                 const newParam1 = {
    //                     param1id: item.param1id,
    //                     param1name: item.param1name,
    //                     param1dataid: item.param1dataid,
    //                     param1dataname: item.param1dataname,
    //                     menuname: item.menuname, // Include menuname here
    //                     param2: []
    //                 };
    //                 if (item.param2id) {
    //                     newParam1.param2.push({
    //                         param2id: item.param2id,
    //                         param2name: item.param2name,
    //                         param2dataid: item.param2dataid,
    //                         param2dataname: item.param2dataname
    //                     });
    //                 }
    //                 newItem.param1.push(newParam1);
    //             }
    //             acc.push(newItem);
    //         }
    //         return acc;
    //     }, []);

    //     // setFinalData(transformedData);
    // };

    // const getMenuApi = async () => {

    //     const storeInit = JSON.parse(localStorage.getItem("storeInit")) ?? ""
    //     const Customer_id = JSON.parse(localStorage.getItem("loginUserDetail")) ?? ""
    //     // if (storeInit && Customer_id) {
    //     let pData = JSON.stringify({ "FrontEnd_RegNo": `${storeInit?.FrontEnd_RegNo}`, "Customerid": `${Customer_id?.id ?? 0}` })

    //     let pEnc = btoa(pData)

    //     const body = {
    //         con: `{\"id\":\"\",\"mode\":\"GETMENU\",\"appuserid\":\"${Customer_id.userid}"\}`,
    //         f: "onload (GETMENU)",
    //         p: pEnc
    //     }

    //     await CommonAPI(body).then((res) => {
    //         // console.log("getmenuData",res?.Data?.rd)
    //         transformData(res?.Data?.rd)

    //         separateData(res?.Data?.rd)
    //     })
    //     // }
    // }


    const fetchData = () => {
        const value = localStorage.getItem('LoginUser');
        const val = (value === 'true' ? 'true' : 'false')
        setislogin(val);
    };


    useEffect(() => {
        fetchData();
    }, []);

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        setSelectedData(menuItems[newValue] || []);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
        setSelectedData(menuItems[index] || []);
        console.log('(menuItems[newValue](menuItems[newValue]', menuItems[index].menuname);
        handleLoginMenuClickSwipe(menuItems[index].menuname, null, "iconclicked")
    };

    const [selectedMenu, setSelectedMenu] = useState(menuItems[0]?.menuname);
    const handleLoginMenuClick = (menuName, menuItem, iconclicked) => {

        if (iconclicked == 'iconclicked') {
            navigation('/productpage');
            setSelectedMenu(prevMenu => (prevMenu === menuName ? menuName : menuName));
            return;
        }
        const { param1, ...menuItemWithoutParam1 } = menuItem;
        handleMenuClick(menuItemWithoutParam1)
    };

    const handleLoginMenuClickSwipe = (menuName, menuItem, iconclicked) => {

        if (iconclicked == 'iconclicked') {
            setSelectedMenu(prevMenu => (prevMenu === menuName ? menuName : menuName));
            return;
        }
        const { param1, ...menuItemWithoutParam1 } = menuItem;
        handleMenuClick(menuItemWithoutParam1)
    };

    const handleLoginMenuClickMainMenu = (menuName, menuItem, iconclicked) => {

        if (iconclicked == 'iconclicked') {
            setSelectedMenu(prevMenu => (prevMenu === menuName ? menuName : menuName));
            return;
        }
        const { param1, ...menuItemWithoutParam1 } = menuItem;
        handleMenuClick(menuItemWithoutParam1)
    };

    const handleLoginMenuClickFirstTime = (menuName, menuItem, iconclicked) => {

        if (iconclicked == 'iconclicked') {
            setSelectedMenu(prevMenu => (prevMenu === menuName ? menuName : menuName));
            return;
        }
        const { param1, ...menuItemWithoutParam1 } = menuItem;
        handleMenuClick(menuItemWithoutParam1)
    };

    const [hoveredIndex, setHoveredIndex] = useState(null);


    const handleMenuClick = async (menuItem, param1Item = null, param2Item = null) => {
        const { param1, param2, ...cleanedMenuItem } = menuItem;

        let menuDataObj = { ...cleanedMenuItem };

        if (param1Item) {
            const { param1, param2, ...cleanedParam1Item } = param1Item;
            menuDataObj = { ...menuDataObj, ...cleanedParam1Item };

            console.log('Menu Item:', cleanedMenuItem);
            console.log('Submenu Item:', cleanedParam1Item);

            if (param2Item) {
                menuDataObj = { ...menuDataObj, ...param2Item };
                console.log('Second Submenu Item:', param2Item);
            }
        } else {
            console.log('Menu Item:', cleanedMenuItem);
        }

        console.log('Menu Data Object:', menuDataObj);

        let finalData = {
            menuname: menuDataObj?.menuname ?? "",
            FilterKey: menuDataObj.param0name ?? "",
            FilterVal: menuDataObj.param0dataname ?? "",
            FilterKey1: menuDataObj?.param1name ?? "",
            FilterVal1: menuDataObj?.param1dataname ?? "",
            FilterKey2: menuDataObj?.param2name ?? "",
            FilterVal2: menuDataObj?.param2dataname ?? ""
        }

        console.log('finalData', finalData);
        // navigation("/productpage", { state: { menuFlag: true, filtervalue: finalData } })


        if (finalData) {
            let resData;
            await FilterListAPI(finalData)
            await productListApiCall(finalData).then((res) => {
                if (res) {
                    resData = res;
                    console.log("res", res);
                    setMenutransData(res)
                    localStorage.setItem("allproductlist", JSON.stringify(res))
                    localStorage.setItem("finalAllData", JSON.stringify(res))
                }
                return res
            }).then(async (res) => {
                if (res) {
                    let autoCodeList = JSON.parse(localStorage.getItem("autoCodeList"))
                    await getDesignPriceList(finalData, 1, {}, {}, autoCodeList).then((res) => {
                        if (res) {
                            // console.log("test",res);
                            localStorage.setItem("getPriceData", JSON.stringify(res))
                            // navigation(`/productpage/?${finalData?.FilterKey}=${finalData?.FilterVal}/${finalData?.FilterKey1}=${finalData?.FilterVal1}/${finalData?.FilterKey2}=${finalData?.FilterVal2}`, { state: { menuFlag: finalData?.menuname, filtervalue: finalData } })
                            navigation(`/productpage`, { state: { menuFlag: finalData?.menuname, filtervalue: finalData } })
                        }
                        // setTimeout(() => {
                        //   setDrawerOpen(false);
                        //   handleMouseLeave();
                        // }, 50)
                    })
                }
            }).catch((err) => {
                if (err) {
                    toast.error("Something Went Wrong!!");
                }
            })
        }
        localStorage.setItem('menuparams', JSON.stringify(finalData));
    };
    const handleSubMenuClick = (menuItem, subMenuName, subMenuItem, iconclicked) => {
        navigation('/productpage');
        const { param1, ...menuItemWithoutParam1 } = menuItem;
        const { param2, ...subMenuItemWithoutParam2 } = subMenuItem;
        handleMenuClick({ ...menuItemWithoutParam1, ...subMenuItemWithoutParam2 });
    };

    const handleSubSubMenuClick = (menuItem, subMenuItem, subSubMenuName, subSubMenuItem) => {
        navigation('/productpage');
        const { param1, ...menuItemWithoutParam1 } = menuItem;
        const { param2, ...subMenuItemWithoutParam2 } = subMenuItem;
        handleMenuClick({ ...menuItemWithoutParam1, ...subMenuItemWithoutParam2, ...subSubMenuItem })
    };


    useEffect(() => {
        const uniqueMenuIds = [...new Set(menuData?.map(item => item?.menuid))];

        const uniqueMenuItems = uniqueMenuIds.map(menuid => {
            const item = menuData?.find(data => data?.menuid === menuid);
            const param1DataIds = [...new Set(menuData?.filter(data => data?.menuid === menuid)?.map(item => item?.param1dataid))];

            const param1Items = param1DataIds.map(param1dataid => {
                const param1Item = menuData?.find(data => data?.menuid === menuid && data?.param1dataid === param1dataid);
                const param2Items = menuData?.filter(data => data?.menuid === menuid && data?.param1dataid === param1dataid)?.map(item => ({
                    param2dataid: item?.param2dataid,
                    param2dataname: item?.param2dataname,
                    param2id: item?.param2id,
                    param2name: item?.param2name
                }));
                return {
                    menuname: param1Item?.menuname,
                    param1dataid: param1Item?.param1dataid,
                    param1dataname: param1Item?.param1dataname,
                    param1id: param1Item?.param1id,
                    param1name: param1Item?.param1name,
                    param2: param2Items
                };
            });

            return {
                menuid: item?.menuid,
                menuname: item?.menuname,
                param0dataid: item?.param0dataid,
                param0dataname: item?.param0dataname,
                param0id: item?.param0id,
                param0name: item?.param0name,
                param1: param1Items
            };
        });

        setMenuItems(uniqueMenuItems);
        handleLoginMenuClickFirstTime(uniqueMenuItems[0]?.menuname, null, "iconclicked")
    }, [menuData]);



    return (
        <div className="smlingDraweOverlayNoUnderLine">
            <div className="smlingDraweOverlay ">
                <div
                    style={{
                        display: "flex",
                        margin: "20px",
                    }}
                >

                    {islogin === 'true' && (<div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            width: "20%",
                            justifyContent: "flex-end",
                        }}
                    >
                    </div>
                    )}
                </div>
            </div>


            {islogin !== 'true' && <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', marginTop: '200px' }}>
                <p style={{ margin: '0px', fontWeight: 500 }}>No Data Available</p>
                <button style={{
                    height: '35px',
                    width: '150px',
                    backgroundColor: '#e1e1e1',
                    border: 'none',
                    outline: 'none',
                    fontSize: '18px',
                    fontWeight: 500,
                    borderRadius: '5px',
                    marginTop: '5px'
                }} onClick={() => navigation('/signin')}>Login</button>
            </div>}


            {/* 
                {menuItems.map(menuItem => (
                  <div key={menuItem.menuid}>
                    <ButtonBase
                      component="div"
                      onClick={() => handleLoginMenuClick(menuItem.menuname, null, "iconclicked")}
                      className="muilistMenutext"
                      style={{ width: '100%' }}
                    >
                      <ListItem style={{ padding: '0px 5px 0px 5px', borderBottom: '1px solid lightgray' }}>
                        <ListItemText primary={menuItem.menuname} className="muilistMenutext" />
                      </ListItem>
                    </ButtonBase>
                    {selectedMenu === menuItem.menuname && (
                      <>
                        <ButtonBase
                          component="div"
                          onClick={() => handleLoginMenuClick(menuItem.menuname, menuItem)}
                          style={{ width: '100%', display: 'flex', justifyContent: 'start' }}
                        >
                          <div style={{ paddingLeft: '10px', fontSize: '15px', marginTop: '5px' }}>
                            <button class="underline-button">view all</button>
                          </div>
                        </ButtonBase>
                        <List>
                          {menuItem.param1.map(subMenuItem => (
                            <div key={subMenuItem.param1dataid}>
                              <ButtonBase
                                component="div"
                                onClick={() => handleSubMenuClick(menuItem, subMenuItem.param1dataname, subMenuItem)}
                                style={{ width: '100%' }}
                              >
                                <p style={{ margin: '0px 0px 0px 15px', width: '100%' }}>{subMenuItem.param1dataname}</p>
                              </ButtonBase>
                              {selectedMenu === menuItem.menuname && (
                                <>
                                  <List style={{ paddingTop: '0px', paddingBottom: '0px' }}>
                                    {subMenuItem.param2.map(subSubMenuItem => (
                                      <ButtonBase
                                        component="div"
                                        onClick={() => handleSubSubMenuClick(menuItem, subMenuItem, subSubMenuItem.param2dataname, subSubMenuItem)}
                                        style={{ width: '100%' }}
                                      >
                                        <ListItem key={subSubMenuItem.param2dataid} style={{ paddingLeft: '30px', paddingTop: '0px', paddingBottom: '0px' }}>
                                          <ListItemText primary={subSubMenuItem.param2dataname} className="muilist2ndSubMenutext" />
                                        </ListItem>
                                      </ButtonBase>
                                    ))}
                                  </List>
                                </>
                              )}
                            </div>
                          ))}
                        </List>
                      </>
                    )}
                  </div>
                ))} */}




            <TabContext value={value}>
                {islogin === 'true' && <div className='tabMainMenu'>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        textColor="primary"
                        indicatorColor="primary"
                        centered
                        variant='scrollable'
                        className='tabMainSmilingMobile'
                    >
                        {menuItems.map((item, index) => (
                            <Tab label={item.menuname} onClick={() => handleLoginMenuClickMainMenu(item.menuname, null, "iconclicked")} />
                        ))}
                    </Tabs>
                </div>}



                <SwipeableViews
                    index={value}
                    onChangeIndex={handleChangeIndex}
                    enableMouseEvents
                    animateTransitions
                    style={{ minHeight: '600px' }}
                >
                    {menuItems.map(menuItem => (
                        <TabPanel value={value} index={0} style={{ marginInline: '15%', padding: '0px', marginBottom: '100px' }}>
                            {selectedMenu === menuItem.menuname && (
                                <>
                                    <ButtonBase
                                        component="div"
                                        onClick={() => handleLoginMenuClick(menuItem.menuname, menuItem)}
                                        style={{ width: '100%', display: 'flex', justifyContent: 'start' }}
                                    >
                                        <div style={{ paddingLeft: '10px', fontSize: '15px', marginTop: '5px' }}>
                                            <button class="underline-button">view all</button>
                                        </div>
                                    </ButtonBase>
                                    <List>
                                        {menuItem.param1.map(subMenuItem => (
                                            <div key={subMenuItem.param1dataid}>
                                                <ButtonBase
                                                    component="div"
                                                    onClick={() => handleSubMenuClick(menuItem, subMenuItem.param1dataname, subMenuItem)}
                                                    style={{ width: '100%' }}
                                                >
                                                    <p style={{ margin: '0px 0px 0px 15px', width: '100%', fontWeight: 500, height: '38px', display: 'flex', alignItems: 'center' }}>{subMenuItem.param1dataname}</p>
                                                </ButtonBase>
                                                {selectedMenu === menuItem.menuname && (
                                                    <>
                                                        <List style={{ paddingTop: '0px', paddingBottom: '0px' }}>
                                                            {subMenuItem.param2.map(subSubMenuItem => (
                                                                <ButtonBase
                                                                    component="div"
                                                                    onClick={() => handleSubSubMenuClick(menuItem, subMenuItem, subSubMenuItem.param2dataname, subSubMenuItem)}
                                                                    style={{ width: '100%', height: '30px' }}
                                                                >
                                                                    <ListItem key={subSubMenuItem.param2dataid} style={{ paddingTop: '0px', paddingBottom: '0px' }}>
                                                                        <ListItemText primary={subSubMenuItem.param2dataname} className="muilist2ndSubMenutext" style={{ height: '38px', display: 'flex', alignItems: 'center'}}/>
                                                                    </ListItem>
                                                                </ButtonBase>
                                                            ))}
                                                        </List>
                                                    </>
                                                )}
                                            </div>
                                        ))}
                                    </List>
                                </>
                            )}
                        </TabPanel>
                    ))}
                    {/* <TabPanel value={value} index={1} style={{ marginInline: '15%', padding: '0px' }}>


                    </TabPanel>
                    <TabPanel value={value} index={2} style={{ marginInline: '15%', padding: '0px' }}>


                    </TabPanel> */}
                </SwipeableViews>
            </TabContext>
        </div>
    )
}

















// import React, { useEffect, useState } from 'react';
// import './Category.css';
// import { CommonAPI } from '../../../Utils/API/CommonAPI';
// import { CircularProgress } from '@mui/material';
// import { IoArrowBack } from "react-icons/io5";
// import { useNavigate } from 'react-router-dom';

// export default function Category() {
//     const [imageURL, setImageURL] = useState('');
//     const [uKey, setYouKey] = useState('');
//     const [availableImages, setAvailableImages] = useState([]);
//     const [isLoading, setIsLoading] = useState(false);
//     const navigation = useNavigate();

//     const checkImageAvailability = async (imageUrl) => {
//         try {
//             const img = await fetch(imageUrl);
//             if (img.ok) {
//                 return true;
//             } else {
//                 return false;
//             }
//         } catch (error) {
//             console.error('Error:', error);
//             return false;
//         }
//     };

//     useEffect(() => {
//         const getCategoryData = async () => {
//             try {
//                 setIsLoading(true);
//                 const ImageURL = localStorage.getItem('UploadLogicalPath');
//                 setImageURL(ImageURL);

//                 const storeInit = JSON.parse(localStorage.getItem('storeInit'));
//                 const { FrontEnd_RegNo, ukey } = storeInit;
//                 setYouKey(ukey);

//                 const combinedValue = JSON.stringify({
//                     FrontEnd_RegNo: `${FrontEnd_RegNo}`, Customerid: localStorage.getItem('LogdinCustomerId') || '0'
//                 });

//                 const encodedCombinedValue = btoa(combinedValue);
//                 const body = {
//                     "con": "{\"id\":\"\",\"mode\":\"GETCATEGORY\",\"appuserid\":\"\"}",
//                     "f": "Category (getCategory)",
//                     "p": encodedCombinedValue
//                 };

//                 const response = await CommonAPI(body);
//                 if (response.Data?.rd) {
//                     setTimeout(async () => {
//                         const formattedImages = await Promise.all(response.Data.rd.map(async item => {
//                             const imageUrl = `${ImageURL}/${ukey}/categoryimages/${encodeURIComponent(item.collectionname)}-${encodeURIComponent(item.categoryname)}/${encodeURIComponent(item.collectionname)}-${encodeURIComponent(item.categoryname)}.jpg`;
//                             const isAvailable = await checkImageAvailability(imageUrl);
//                             return { ...item, imageURL: imageUrl, isAvailable: isAvailable };
//                         }));
//                         const filteredImages = formattedImages.filter(item => item.isAvailable);
//                         setAvailableImages(filteredImages);
//                         setIsLoading(false);
//                     }, 100);
//                 }
//             } catch (error) {
//                 console.error('Error:', error);
//             }
//         };

//         getCategoryData();

//     }, []);

//     return (
//         <div>
//             {isLoading && (
//                 <div className="loader-overlay">
//                     <CircularProgress className='loadingBarManage' />
//                 </div>
//             )}
//             <p className="SmiCartListTitle">
//                 <IoArrowBack style={{height: '25px', width: '25px', marginRight: '10px'}} onClick={() => navigation('/')}/>
//                 Category
//             </p>
//             {availableImages.length === 0 && !isLoading ?
//                 <div
//                     style={{
//                         display: "flex",
//                         flexDirection: "column",
//                         justifyContent: "center",
//                         alignItems: "center",
//                         margin: "150px 0px",
//                     }}
//                 >
//                     <p
//                         style={{
//                             margin: "0px",
//                             fontSize: "20px",
//                             fontWeight: 500,
//                         }}
//                     >
//                         No Data Available
//                     </p>
//                 </div>
//                 :
//                 <div style={{ display: 'flex', flexWrap: 'wrap', marginBottom: '80px', marginInline: '5px', marginTop: '20px' }}>
//                     {availableImages.map((item, id) => (
//                         <div key={id} className='imagesViewCategoryDiv'>
//                             <img src={item.imageURL} alt={`${item.collectionname}-${item.categoryname}`}
//                                 className='imagesViewCategory' />
//                             <p className='colletioname'>{item.collectionname}</p>
//                         </div>
//                     ))}
//                 </div>
//             }
//         </div>
//     );
// }
