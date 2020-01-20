class Vec3 {

    constructor(x = 0, y = 0, z = 0) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.updateMagnitude();
    }

    clone(){
        return new Vec3(this.x, this.y, this.z);
    }

    add(other){
        if(typeof other !== "object"){
            other = new Vec3(other, other, other);
        }

    	this.x += other.x;
    	this.y += other.y;
    	this.z += other.z;
        this.updateMagnitude();
        return this;
    }

    sub(other){
    	this.x -= other.x;
    	this.y -= other.y;
    	this.z -= other.z;
        this.updateMagnitude();
        return this;
    }

    /**
     * Normalize this vector
     * @param thickness
     */
    normalize(thickness = 1) {
        const l = this.magnitude;
        this.x = this.x / l * thickness;
        this.y = this.y / l * thickness;
        this.z = this.z / l * thickness;
        this.updateMagnitude();
        return this;
    }

    /**
     * Internal method for updating the magnitude
     * This caching saves performance
     */
    updateMagnitude(){
        this.magnitude = Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
        return this;
    }

    /**
     * Rotate this Vector
     * @param deltaAngle in degrees
     */
    rotate(deltaAngle) {
        const degToRad = Math.PI/180;
        this.rotateRadians(deltaAngle * degToRad);
        return this;
    }

    /**
     * Rotate this Vector in radians
     * @param radians
     */
    rotateRadians(radians) {
        const cos = Math.cos(radians);
        const sin = Math.sin(radians);
        const newX = cos * this.x - sin * this.y;
        const newY = sin * this.x + cos * this.y;
        this.x = newX;
        this.y = newY;
        return this;
    }

}

export default Vec3;