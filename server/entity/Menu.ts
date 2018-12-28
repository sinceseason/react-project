import { Column, Entity } from "typeorm";
import { BaseEntity } from '../base/BaseEntity'

@Entity('menu')
export class Menu extends BaseEntity {

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