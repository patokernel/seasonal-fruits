import { Fragment } from "react"
import { winterFruits } from "../data/WinterFruits"
import Fruit from "./Fruit"

const WinterFruits = () => {
  return (
    <Fragment>
      {
        winterFruits.map((fruit) =>
          <Fruit
            fruitImg={fruit.fruitImg}
            plantImg={fruit.plantImg}
            fruitName={fruit.fruitName}
            species={fruit.species}
            family={fruit.family}
            origin={fruit.origin}
            description={fruit.description}
            production1={fruit.production1}
            production2={fruit.production2}
            production3={fruit.production2}
            micronutrient1={fruit.micronutrient1}
            micronutrient2={fruit.micronutrient2}
            micronutrient3={fruit.micronutrient3}
          />
        )
      }
    </Fragment>
  )
}

export default WinterFruits