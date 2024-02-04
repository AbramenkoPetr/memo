import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    } from 'typeorm';
@Entity('memo')
    export class MemoEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column('text')
    title: string;
    @Column('text')
    description: string;
    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;
    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date;
    }