import System from "./system";
import Velocity from "../components/velocity.component";
import Transform from "../components/transform.component";

class MovementSystem extends System {

    getRequiredComponents(){
        return [ Velocity, Transform ];
    }

    updateEntity = entity => {
        const { transform, velocity } = entity.components;

        transform.position.add(velocity.position);
        transform.rotation.add(velocity.rotation);

        console.log(transform.position);
    }

}

export default MovementSystem;