import { TbArrowRightDashed } from "react-icons/tb"

const Title = ({title,place,time}) => {
  return (
      <div className="flex items-center justify-between title-tile">
          <h1 className="flex items-center gap-2 rotate-90">{title}<span><TbArrowRightDashed /></span></h1>
          <div>
              <p>{place}</p>
              {time && <p>{time}</p>}
          </div>
      </div>
  )
}

export default Title