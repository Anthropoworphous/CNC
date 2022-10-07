export class Coordinate {
    public x: number;
    public y: number;
    public z: number;

    constructor(x: number, y: number, z: number) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    public distance(to: Coordinate):number {
        return Math.sqrt((to.x-this.x)^2+(to.y-this.y)^2+(to.z-this.z)^2)
    }

    public move(dir: Direction, dist: number) {
        switch(dir) {
            case(Direction.UP):
                this.z += dist;
                break;
            case(Direction.DOWN):
                this.z -= dist;
                break;
            case(Direction.FRONT):
                this.y += dist;
                break;
            case(Direction.BACK):
                this.y -= dist;
                break;
            case(Direction.RIGHT):
                this.x += dist;
                break;
            case(Direction.LEFT):
                this.x -= dist;
                break;
        }
    }
}

export enum Direction {
    UP,
    DOWN,
    FRONT,
    BACK,
    LEFT,
    RIGHT
}