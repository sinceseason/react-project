import { PrimaryGeneratedColumn, Column, Entity } from "typeorm";

@Entity()
export class Menu {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    main: String;

    @Column()
    parent_id: number;

    @Column()
    type: number;

    @Column()
    menu_id: number;

    @Column()
    router: String;

    @Column()
    icon: String;
}