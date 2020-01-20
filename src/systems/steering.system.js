import System from "./system";
import Velocity from "../components/velocity.component";
import Transform from "../components/transform.component";
import Destination from "../components/destination.component";

class SteeringSystem extends System {

    getRequiredComponents() {
        return [ Velocity, Transform, Destination ];
    }

    updateEntity = entity => {
        const { transform, velocity, destination } = entity.components;

        const speed = 5;
        const desiredStep = transform.position.clone().sub(destination.position);

        desiredStep.normalize();

        const desiredVelocity = desiredStep.clone();
        desiredVelocity.x *= speed;
        desiredVelocity.y *= speed;
        desiredVelocity.z *= speed;

        const steeringForce = desiredVelocity.sub(velocity);

        //velocity = velocity.add() + steeringForce / mass;
    }

}

export default SteeringSystem;