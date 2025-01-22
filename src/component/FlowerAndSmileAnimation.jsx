
const FlowerAndSmileAnimation = ({data}) => {
    return (
        <div className="mt-10">
            <div className="single-announcement">
                <div className="flex items-center justify-between">
                    <div className="transition-all duration-500 animate-bounce">
                       {data}
                    </div>
                    <div className="">
                        <p className=" text-center text-[80px] font-bold">The Best of NYC</p>
                        <span>All under one roof!</span>
                    </div>
                    <div className="transition-all duration-500 transform animate-bounce">
                        <div className="rotate-180"> {data}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FlowerAndSmileAnimation