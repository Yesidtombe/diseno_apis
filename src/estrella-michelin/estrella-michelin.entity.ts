/* eslint-disable prettier/prettier */

import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class EstrellaMichelinEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    fechaConsecucion: string;
}
