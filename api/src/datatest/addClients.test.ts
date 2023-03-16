import {models} from '../db'
const {client} = models
import {v4 as uuid} from 'uuid'

export const testData = async ()=>{
    console.log('created client')
    await client.create({
        id: uuid(),
        user: 'test1',
        password: '1234',
        name: 'test1name',
        dni:  1234,
        avatar: 'image default',
        height: 1.1,
        weight: 1.1,
        age: 10,
        phone: 1234, 
        mail: 'mail default',
        adress: 'adress default',
        active: true,
        debt: true,
        debtAmount: 1,
        routine: 'routine default'
    })
    await client.create({
        id: uuid(),
        user: 'test2',
        password: '1234',
        name: 'test2name',
        dni:  1234,
        avatar: 'image default',
        height: 1.1,
        weight: 1.1,
        age: 10,
        phone: 1234, 
        mail: 'mail default',
        adress: 'adress default',
        active: true,
        debt: true,
        debtAmount: 1,
        routine: 'routine default'
    })
    await client.create({
        id: uuid(),
        user: 'test3',
        password: '1234',
        name: 'test3name',
        dni:  1234,
        avatar: 'image default',
        height: 1.1,
        weight: 1.1,
        age: 10,
        phone: 1234, 
        mail: 'mail default',
        adress: 'adress default',
        active: true,
        debt: true,
        debtAmount: 1,
        routine: 'routine default'
    })
    await client.create({
        id: uuid(),
        user: 'test4',
        password: '1234',
        name: 'test1name',
        dni:  1234,
        avatar: 'image default',
        height: 1.1,
        weight: 1.1,
        age: 10,
        phone: 1234, 
        mail: 'mail default',
        adress: 'adress default',
        active: true,
        debt: true,
        debtAmount: 1,
        routine: 'routine default'
    })
}