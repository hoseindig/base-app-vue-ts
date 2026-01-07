import { mount } from '@vue/test-utils'
import Welcome from '../Welcome.vue'
import { describe, it, expect } from 'vitest'

describe('Welcome.vue', () => {
    it('renders a greeting that begins with Good', () => {
        const wrapper = mount(Welcome)
        expect(wrapper.text()).toMatch(/^Good (morning|afternoon|evening)/)
    })
})