import { Entity, Column, ObjectIdColumn, ObjectId } from 'typeorm';

const authMethods = ['email', 'google', 'facebook', 'apple', 'github', 'phone'];

@Entity()
export class User {
    @ObjectIdColumn()
    id: ObjectId;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    fullName: string;

    @Column()
    userName: string;

    @Column()
    imgUrl: string;

    @Column({
        type: 'enum',
        enum: authMethods,
        default: 'email',
    })
    authMethod: string;

    @Column()
    countryCode: string;

    @Column()
    ISOCode: string;

    @Column()
    phone: string;

    @Column()
    email: string;

    @Column()
    activationCode: string;

    @Column()
    password: string;


    @Column({ default: false })
    isEmailVerified: boolean;

    @Column({ default: false })
    isPhoneVerified: boolean;

    @Column({ default: false })
    isProfileCompleted: boolean;

    @Column({
        type: 'enum',
        enum: ['active', 'deleted', 'inActive'],
        default: 'active',
    })
    status: string;

    @Column()
    googleId: string;

    @Column()
    facebookId: string;

    @Column()
    appleId: string;

    @Column()
    githubId: string;

    @Column()
    twitterId: string;

    @Column({ type: 'date', default: null })
    lastAccess: Date;
}
