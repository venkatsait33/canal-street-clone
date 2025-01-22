
const TabTitleWithImage = ({ t1, t2, t3, img, chineseText }) => {
    return (
        <div className="flex items-center justify-between mt-[100px] ml-10">
            <div className="">
                <p className=" text-[100px] flex-col flex  gap-2"><span>{t1}</span><span>
                    {t2}
                </span> <span>
                        {t3}
                    </span></p>
            </div>
            <div>
                <picture className="relative">
                    <img src={img} alt="" className="w-[70%]" />

                </picture>
                <p className="absolute top-[6%] left-[72%] right-0 text-[80px] flex-col flex  gap-2">{chineseText}</p>
            </div>
        </div>
    )
}

export default TabTitleWithImage