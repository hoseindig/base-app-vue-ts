import { mount } from '@vue/test-utils'
import Welcome from '../Welcome.vue'
import { describe, it, expect } from 'vitest'
import i18n from '@/i18n'

describe('Welcome.vue', () => {
    it('renders a greeting that begins with Good', () => {
        const wrapper = mount(Welcome, { global: { plugins: [i18n] } })
        expect(wrapper.text()).toMatch(/^Good (morning|afternoon|evening)/)
    })
})