import { camelCase } from "../utils/casing.utils";

class Entity {

    _components = {};

    constructor(){

    }

    addComponent(component) {
        const className = component.constructor.name;
        const componentName = camelCase(className);
        this._components[ componentName ] = component;
    }

    removeComponent(component) {
        const className = component.constructor.name;
        const componentName = camelCase(className);
        delete this._components[ componentName ];
    }

    getComponent(componentName) {
        return this._components[ componentName ];
    }

    hasComponent(componentName) {
        return this._components[ componentName ] !== undefined;
    }

    hasComponentClass(className) {
        const componentName = camelCase(className);
        return this.hasComponent(componentName);
    }

    /**
     * Get the current list of components
     * @returns {object} the current list of components
     */
    get components() {
        return this._components;
    }

}

export default Entity;