import Menu from "../component/food/Menu"
import Footer from "../component/Footer"
import Title from "../component/Title"
import TabTitleWithImage from "../component/TabTitleWithImage"
import FlowerAndSmileAnimation from "../component/FlowerAndSmileAnimation"
 
export const menuItems = [
    { name: "Khao Man Gai", title: 'Betong', image: "https://images.prismic.io/canalstreetmarket/056a1e39-af19-4901-9738-36ac5abbb0f9_Betong.png?auto=compress,format" },
    { name: "Coffee, Pastries & Smoothies", title: "Chinatown Deli", image: "https://images.prismic.io/canalstreetmarket/c9a661b5b3a3f08fba455f06839c5bc2153550d4_food-vendor-new-york.png?auto=compress,format" },
    { name: "Cantonese Steamed Rice Rolls", title: "Joe's Steam Rice Roll", image: "https://images.prismic.io/canalstreetmarket/02074214fef758434124320a62917c03c8490581_new-york-food-market-rice-roll.png?auto=compress,format" },
];


    const Food = () => {
       
    return (
        <div className="h-full">
            <div>
                <Title title="food" place="Food Hall Hours:" time="Mon - Sun: 11:00AM - 8:00PM"/>
            </div>
            <div>
                <TabTitleWithImage chineseText="餐饮" t1="The" t2="Food" t3="Hall" img="https://images.prismic.io/canalstreetmarket/13a988aff3e9c672350fe8330eb7386c3a85eeb9_home_page_three.jpg?auto=compress,format" />
           </div>
            <div className="flex items-center justify-center m-[100px] ">
                <Menu   />
            </div>
            <div>
                <FlowerAndSmileAnimation
                    data={<svg width="120px" height="120px" viewBox="0 0 88 90" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                    <g id="WH_new" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <g id="375-food" transform="translate(-143.000000, -2270.000000)" fill="#000000" fillRule="nonzero">
                            <g id="Group" transform="translate(30.000000, 2195.000000)">
                                <path d="M196.662655,97.6781208 C201.084664,106.974077 202.177872,118.240733 199.740961,129.403048 C195.238308,150.029294 179.791005,165 163.010576,165 C161.028621,165 159.042944,164.785014 157.108459,164.360493 L138.63803,158.690324 C120.800711,154.777884 109.148889,132.865739 114.174554,109.845421 C119.199933,86.8245235 137.441309,71.7027573 155.278345,75.6160595 L175.570016,79.7919296 C184.630803,81.7792539 192.121681,88.1313476 196.662655,97.6781208 Z M196.880554,128.775578 C201.632843,107.00647 191.811423,86.35901 174.944065,82.6592605 C174.443926,82.5494748 173.942647,82.4603268 173.441658,82.3823598 C172.182881,82.1871527 170.922388,82.0873996 169.667047,82.0873996 C154.563742,82.0873996 140.055797,95.8736792 135.798208,115.376555 C131.519745,134.973456 139.055814,153.654229 152.90663,159.888227 C154.441923,160.579041 156.051279,161.123956 157.734412,161.49316 C159.49075,161.878415 161.255096,162.064737 163.010576,162.064737 C178.11416,162.064737 192.622967,148.278454 196.880554,128.775578 Z M160.912282,111.939161 C159.838703,115.910511 156.464608,118.454862 153.376031,117.622129 C150.287453,116.789396 148.653974,112.894918 149.727552,108.923569 C150.801131,104.95222 154.175226,102.407868 157.263803,103.240601 C160.352381,104.073334 161.985861,107.967812 160.912282,111.939161 Z M174.684045,112.13791 C171.961255,111.320848 170.521076,107.49972 171.467576,103.603398 C172.414075,99.7070808 175.388459,97.2107699 178.111532,98.0278346 C180.83433,98.8449014 182.274501,102.66603 181.328006,106.562347 C180.38151,110.458668 177.406836,112.954977 174.684045,112.13791 Z M161.760532,148.524223 C155.595547,146.762924 151.150561,141.169132 149.298343,133.955195 L188.082873,123.232044 C187.902709,124.878085 187.607622,126.54461 187.181168,128.215976 C183.559867,142.407639 172.178417,151.500119 161.760532,148.524223 Z" id="happy-hour-smile2-copy"></path>
                            </g>
                        </g>
                    </g>
                </svg>} />
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}

export default Food