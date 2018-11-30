import { Column, PrimaryGeneratedColumn, Entity } from "typeorm";

@Entity()
export class Wharf {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    wharf_name: String;
}