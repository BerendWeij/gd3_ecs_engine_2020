import { removeFromArray } from "./utils/array.utils";

class Engine {

    entities = [];
    systems = [];

    constructor(frameRate = Engine.default.frameRate) {
        this.frameRate = frameRate;
    }

    /**
     * Add an entity to the engine
     * @param entity
     */
    addEntity(entity) {
        this.systems.forEach(system => system.onNewEntity(entity));
    }

    /**
     * Remove an entity from the engine
     * @param entity
     */
    removeEntity(entity) {
        this.systems.forEach(system => system.onRemoveEntity(entity));
    }

    /**
     * Add a system to the engine
     * @param system
     */
    addSystem(system) {
        this.systems.push(system);
    }

    /**
     * Remove a system from the engine
     * @param system
     */
    removeSystem(system) {
        removeFromArray(this.systems, system);
    }

    /**
     * Get the current framerate
     * @returns {int} the current framerate
     */
    get frameRate() {
        return this._frameRate;
    }

    /**
     * Set the current framerate
     * @param {int} value - the current framerate
     */
    set frameRate(value) {
        this._frameRate = value;
        if(!this.updateIntervalId){
            return;
        }
        clearInterval(this.updateIntervalId);
        this.start();
    }

    start(){
        this.updateIntervalId = setInterval(this.update, 1000 / this.frameRate);
    }

    /**
     * Update frame tick
     */
    update = () => {
        this.systems.forEach(system => system.update());
    };

}

// default properties
Engine.default = {
    frameRate : 60
};

export default Engine;