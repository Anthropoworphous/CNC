import { v4 as newUUID } from 'uuid';

export enum EntityType {
    UNKNOWN,
    PLAYER,
    DROPPED_ITEM,
    NPC,
    MOB
}

export class Entity {
    id: String;
    name: String;
    description: String;
    // image = '';
    type: EntityType;

    constructor(
        id: String = newUUID(), 
        name: String = "Unknown", 
        description: String = "This entity does not have a description",
        type: EntityType = EntityType.UNKNOWN
    ) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.type = type;
    }
}