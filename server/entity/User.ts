import { Entity, Column } from "typeorm";
import { BaseEntity } from "../base/BaseEntity";

@Entity('user')
export class User extends BaseEntity {

    @Column()
    user_name: string;

    @Column()
    password: string;

    @Column()
    type: number;

}
