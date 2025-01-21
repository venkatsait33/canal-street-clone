import React from 'react'
import DashedBorderAnimation from '../component/DashedBorderAnimation'
import DashedBorder from '../component/DashedBorder'

const cardData = [
    {
        image: "https://images.prismic.io/canalstreetmarket/8f74dfabde9ebd66d0d078ba6cf794c77dc8ac5b_home_page_one.jpg?auto=compress,format",
        title: "Merging retail, food, art, and culture, Canal Street Market highlights top retail and design concepts, restaurants, and up-and-coming players in the downtown New York City community."

    }, {
        image: "https://images.prismic.io/canalstreetmarket/20c7997073b456fda0e6de872d23b6183892bdde_home_page_two.jpg?auto=compress,format",
        title: "Retail Market Hours:",
        time: "Thursday - Sun: 11:00AM - 7:00PM"
    }, {
        image: "https://images.prismic.io/canalstreetmarket/13a988aff3e9c672350fe8330eb7386c3a85eeb9_home_page_three.jpg?auto=compress,format",
        title: "Food Hall Hours:",
        time: "Mon - Sun: 11:00AM - 8:00PM"
    }
]

const About = () => {
    return (
        <div className='relative flex flex-col items-center justify-center w-full '>
            <div className='flex flex-col items-center justify-center '>

                <span>Canal Street Market is a carefully curated </span>
                <span>retail market, food hall & community space</span>
                <span>
                    space open year-round at 265 Canal Street.
                </span>
                <a className='relative'>
                    <span
                        //                     style={{
                        //                     paddingBottom: '4px',
                        //                     backgroundImage: `repeating-linear-gradient(
                        //   -45deg,
                        //   #ffb400,
                        //   #ffb400 1px,
                        //   transparent 0,
                        //   transparent 12px
                        // ),
                        // repeating-linear-gradient(
                        //   45deg,
                        //   #ffb400,
                        //   #ffb400 1px,
                        //   transparent 0,
                        //   transparent 12.2px
                        // )`,
                        //                     backgroundPosition: '0 103%, 2px 103%',
                        //                     backgroundSize: '17px, 10px',
                        //                     backgroundRepeat: ' repeat-x',
                        //                     animation: '0.8s infinite normal b',
                        //                     animationTimingFunction: 'linear'
                        //                 }}
                        className='' >Support Small Business</span> <span>
                        this weekend!
                    </span>
                </a>


            </div>
            <div className=''>
                <picture>
                    <img src="https://images.prismic.io/canalstreetmarket/1d99cf0e3a0144c1229f92ee5b3c63b0eaae893c_home-hero.jpg?auto=compress,format" alt="" />
                </picture>
            </div>

            <div className='relative flex flex-col items-center justify-center bg-white'>
                <h1>A New Kind of Market</h1>

                <div className='grid p-20 lg:gap-10 max-sm:grid-cols-1 max-md:grid-cols-2 lg:grid-cols-3'>
                    {cardData.map((item, index) => {
                        return (
                            <div className='flex flex-col gap-2' key={index}>
                                <picture>
                                    <img className='lg:w-[420px] h-[500px] aspect-video  ' src={item.image} alt="" />
                                </picture>
                                <h2>{item.title}</h2>
                                {item.time && <p>{item.time}</p>}
                            </div>
                        )
                    }
                    )}
                </div>
                <div className='flex items-center justify-between gap-10 '>
                    <div>
                        <svg width="116px" height="60px" viewBox="0 12 116 58" version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <defs></defs>
                            <g id="R2" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" fontFamily="PingFangSC-Semibold, PingFang SC" fontSize="60" fontWeight="500" lineSpacing="60">
                                <g id="1440_HP_v2-1-Copy-3" transform="translate(-172.000000, -3219.000000)" fill="none" stroke="#000000" strokeWidth="0.75">
                                    <text id="事件">
                                        <tspan x="170" y="3282">活動</tspan>
                                    </text>
                                </g>
                            </g>
                        </svg>
                    </div>
                    <div>
                        <p className='text-xl font-semibold text-black'>Market Events</p>
                    </div>
                    <div><svg width="116px" height="60px" viewBox="0 12 116 58" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                        <defs></defs>
                        <g id="R2" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" fontFamily="PingFangSC-Semibold, PingFang SC" fontSize="60" fontWeight="500" lineSpacing="60">
                            <g id="1440_HP_v2-1-Copy-3" transform="translate(-172.000000, -3219.000000)" fill="none" stroke="#000000" strokeWidth="0.75">
                                <text id="事件">
                                    <tspan x="170" y="3282">活動</tspan>
                                </text>
                            </g>
                        </g>
                    </svg></div>
                </div>

                <div className='flex flex-col items-center justify-center w-full h-[300px]'>
                  <DashedBorder/>
                </div>

                <div className='flex items-center justify-evenly w-full h-[400px]'>
                    <div className=''>
                        <DashedBorderAnimation text="265 Canal St.New York, NY" />

                    </div>
                    <div className=''>

                        <DashedBorderAnimation img="https://images.prismic.io/canalstreetmarket/74921c6bf0abf767666c52a6af3c001c58643587_group-11.jpg?auto=compress,format" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About