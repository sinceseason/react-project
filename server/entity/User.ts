import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    user_name: string;

    @Column()
    password: string;

    @Column()
    type: number;

}
