import { mount } from '@vue/test-utils'
import ProfileView from '../../views/ProfileView.vue'
import i18n from '@/i18n'
import { describe, it, expect, beforeEach } from 'vitest'

beforeEach(() => localStorage.clear())

describe('ProfileView', () => {
    it('saves name and settings to localStorage', async () => {
        const wrapper = mount(ProfileView, { global: { plugins: [i18n] } })

        const input = wrapper.find('input')
        await input.setValue('Alice')
        await wrapper.find('button').trigger('click')

        const s = JSON.parse(localStorage.getItem('baseapp.user') as string)
        expect(s.name).toBe('Alice')

        // change language
        const selects = wrapper.findAll('select')
        await selects[1].setValue('fa')
        const st = JSON.parse(localStorage.getItem('baseapp.settings') as string)
        expect(st.language).toBe('fa')
    })
})