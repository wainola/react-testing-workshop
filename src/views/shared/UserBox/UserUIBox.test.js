import React from 'react'
import UserUIBox from './UserUIBox'
import { shallow } from 'enzyme'

describe('<UserUIBox />', () => {
    let shallowComp
    beforeEach(() => {
        shallowComp = shallow(<UserUIBox handleSubmit={() => {}} handleChange={() => {}} />)
    })

    test('Deberia renderear un form', () => {
        expect(shallowComp.find('form')).toHaveLength(1)
    })
    test('Deberia renderear 6 input', () => {
        expect(shallowComp.find('input')).toHaveLength(6)
    })
    test('Deberia renderear un button', () => {
        expect(shallowComp.find('button')).toHaveLength(1)
    })
})