import Engine from "./engine";
import MovementSystem from "./systems/movement.system";
import Entity from "./entities/entitiy";
import Transform from "./components/transform.component";
import Velocity from "./components/velocity.component";
import Vec3 from './utils/vec3.utils.js';
import Destination from "./components/destination.component";
import SteeringSystem from "./systems/steering.system";

export default class Main {

    constructor() {
        const engine = new Engine();
        engine.addSystem(new MovementSystem());
        engine.addSystem(new SteeringSystem());

        const player = new Entity();
        player.addComponent(new Transform(new Vec3(0, 0, 0)));
        player.addComponent(new Velocity(new Vec3(1, 1, 1), new Vec3(1, 1, 1)));
        player.addComponent(new Destination(new Vec3(500, 1, 1)));

        engine.addEntity(player);

        engine.start();

    }

}