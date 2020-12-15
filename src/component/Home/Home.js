import React from 'react';

import './Home.css';
import Product from './Product/Product';

const Home = () => {
    return (
        <div className="home">
            <div className="home__container">
                <img 
                    className="home__image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg%22alt=%22amazon-picture"
                    alt="amazon"
                />
                <div className="home__row">
                    <Product 
                        id="10"
                        title="HP 24mh FHD Monitor - Computer Monitor with 23.8-Inch IPS Display"
                        image="https://iili.io/KT9Rql.md.png"
                        price={174.99}
                        rating={5}
                    />
                    <Product 
                        id="20"
                        title="FIODIO Mechanical Gaming Keyboard, LED Rainbow Gaming"
                        image="https://iili.io/KT5DZb.png"
                        price={49.99}
                        rating={5}
                    />
                    <Product 
                        id="30"
                        title="CyberpowerPC Gamer Xtreme VR Gaming PC, Intel i5-10400F 2.9GHz"
                        image="https://iili.io/KT7fta.md.png"
                        price={999.99}
                        rating={5}
                    />
                    <Product 
                        id="40"
                        title="TP-Link AC1750 Smart WiFi Router (Archer A7) - Dual Band Gigabit"
                        image="https://iili.io/KT7SHP.png"
                        price={59.99}
                        rating={5}
                    />
                </div>
                <div className="home__row">
                    <Product 
                        id="50"
                        title="TP-Link WiFi 6 AX3000 Smart WiFi Router (Archer AX50) – 802.11ax Router, Gigabit Router, Dual Band"
                        image="https://iili.io/KT7PWJ.md.png"
                        price={149.99}
                        rating={5}
                    />
                    <Product 
                        id="60"
                        title="AMD Ryzen 7 3700X 8-Core, 16-Thread Unlocked Desktop Processor with Wraith Prism LED Cooler"
                        image="https://iili.io/KTY5dB.md.png"
                        price={329.99}
                        rating={5}
                    />
                    <Product 
                        id="70"
                        title="NVIDIA Quadro GV100 Volta GPU 32GB Graphics Video Card"
                        image="https://iili.io/KTYGqv.md.png"
                        price={8599.99}
                        rating={5}
                    />
                </div>
                <div className="home__row">
                    <Product 
                        key="80"
                        title="Asus ROG Strix Z390-E Gaming Motherboard LGA1151 (Intel 8th 9th Gen) ATX DDR4 DP HDMI M.2 USB 3.1 Gen2 802.11AC Wi-Fi"
                        image="https://iili.io/KTYsIe.png"
                        price={239.99}
                        rating={5}
                    />
                    <Product 
                        key="90"
                        title="Intel Core i7-9700K Desktop Processor 8 Cores up to 4.9 GHz Turbo Unlocked with Gaming Motherboard LGA1151"
                        image="https://iili.io/KTYeXs.md.png"
                        price={508.99}
                        rating={5}
                    />
                </div>
                <div className="home__row">

                    <Product 
                        key="100"
                        title="Intel Core i7-9700K Desktop Processor & MSI Z390-A PRO LGA1151 (Intel 8th and 9th Gen) M.2 USB 3.1 Gen 2 DDR4 HDMI DP CFX Dual Gigabit LAN ATX Z390"
                        image="https://iili.io/KTYjet.png"
                        price={325.99}
                        rating={5}
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;