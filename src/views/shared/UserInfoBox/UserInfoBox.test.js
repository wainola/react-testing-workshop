import React from 'react'
import UserInfoBox from './index'
import { shallow } from 'enzyme'

describe('<UserInfoBox />', () => {
    let shallowComp
    beforeEach(() => {
        const props = {
            user: {
                name: 'pepito gonzales',
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
})