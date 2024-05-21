export type CardProps = {
  image: string,
  value: string,
  name: string
}

const Card = ({
  image,
  value,
  name
}: CardProps) => {
  return (
    <div className="flex items-center w-full rounded-md bg-light-grey shadow-card">
      <img src={image} className="m-8 mr-6" width={60} height={60} />
      <div className="flex flex-col">
        <h3 className="text-secondary-color text-xl font-bold">{value}</h3>
        <p className="text-legend-grey text-sm font-medium">{name}</p>
      </div>
    </div>
  )
}

export default Card;