import { FaInstagram } from 'react-icons/fa';
import './footer.css'
import FooterCard from './FooterCard'
import { LuFacebook } from "react-icons/lu";
import { PiPencil } from 'react-icons/pi';
import NewsLetter from './NewsLetter';

const footerData = [
    {
        title: 'Email us',
        icon: <PiPencil />,
        link: "mailto:info@mywebsite.com"
    }, {
        icon: <LuFacebook />,
        title: 'Follow us on Facebook',
        link: "www.fb.com"
    }, {
        icon: <FaInstagram />,
        title: 'Follow us on Instagram',
        link: "www.instagram.com",
    }
]

const Footer = () => {
    return (
        <div className=''>
            <div>
                <div className="vendor-cta">
                    <p className="mb-10 text-3xl">Interested in becoming a vendor?</p>
                    <button className="vendor-button">click here</button>
                </div>
            </div>
            <div className='grid gap-4 sm:justify-center lg:gap-10 lg:grid-cols-3'>
                {
                    footerData.map((item, index) => {
                        return (<div key={index}>
                            <FooterCard key={index} {...item} />
                        </div>)
                    })
                }

            </div>
            <div className='mt-10'>
                <NewsLetter/>
            </div>
        </div>
    )
}

export default Footer