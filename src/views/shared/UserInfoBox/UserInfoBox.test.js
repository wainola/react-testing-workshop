import React from 'react'
import UserInfoBox from './index'
import { shallow } from 'enzyme'

describe('<UserInfoBox />', () => {
    let shallowComp
    beforeEach(() => {
        const props = {
            user: {
                name: { title: 'sr', first: 'pepito', last: 'gonzales' },
                email: 'pepito@mail.com',
                location: 'Santiago de Chile',
                login: 'pepitoUser',
                picture: 'http://some-picture.com/pepito',
                registered: new Date(),
                gender: 'male',
                cell: '+56912345678'
            },
            noInfo: {}
        }
        shallowComp = shallow(<UserInfoBox {...props} />)  
    })
    test('Deberia renderear un contenedor div con la clase user', () => {
        expect(shallowComp.find('div.user')).toHaveLength(1)
    })
    test('Deberia renderear 6 <p>', () => {
        expect(shallowComp.find('p')).toHaveLength(6)
    })
    test('Deberia renderar el nombre del usuario', () => {
        const userName = shallowComp.find('p.name').text().split(' ').filter(item => item.includes('pepito') || item.includes('gonzales'))
        expect(userName).toHaveLength(2)
    })
})