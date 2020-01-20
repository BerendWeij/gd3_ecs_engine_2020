import { removeFromArray } from "../utils/array.utils";

class System {

    // collection of the entities for this system
    targetEntities = [];

    /**
     * Get a list of components that are required for this system
     * @returns {Array}
     */
    getRequiredComponents() {
        console.warn('override this method');
        return [];
    }

    updateEntity(entity) {
        console.warn('override this method');
    }

    onEntityAdded(entity){

    }

    /**
     * Handler for validating new entities
     * @param entity
     */
    onNewEntity(entity) {
        const requiredComponents = this.getRequiredComponents();
        const hasRequiredComponents = requiredComponents.every(
            component => entity.hasComponentClass(component.name));

        if ( !hasRequiredComponents ){
            return;
        }
        this.targetEntities.push(entity);
        this.onEntityAdded(entity);
    }

    /**
     * Handler for removing entities
     * @param entity
     */
    onRemoveEntity(entity) {
        removeFromArray(this.targetEntities, entity);
    }

    /**
     * Loop over all entities for this system and update them
     */
    update() {
        const l = this.targetEntities.length;
        // for loop blijft toch het snelste helaas..
        for ( let i = 0; i < l; i++ ){
            this.updateEntity(this.targetEntities[ i ])
        }
    }

}

export default System;