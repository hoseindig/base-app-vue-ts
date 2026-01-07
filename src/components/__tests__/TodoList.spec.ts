import { mount } from '@vue/test-utils'
import TodoList from '../TodoList.vue'
import { describe, it, expect, beforeEach } from 'vitest'

describe('TodoList.vue', () => {
    beforeEach(() => localStorage.clear())

    it('adds and removes todos', async () => {
        const wrapper = mount(TodoList)

        const input = wrapper.find('input')
        await input.setValue('Test task')

        await wrapper.find('form').trigger('submit.prevent')
        expect(wrapper.findAll('li').length).toBe(1)

        // toggle complete
        await wrapper.find('input[type="checkbox"]').setChecked()
        expect(wrapper.find('li').classes()).toContain('done')

        // remove
        await wrapper.find('.remove').trigger('click')
        expect(wrapper.findAll('li').length).toBe(0)
    })

    it('edits a todo inline', async () => {
        const wrapper = mount(TodoList)
        const input = wrapper.find('input')
        await input.setValue('Original')
        await wrapper.find('form').trigger('submit.prevent')
        expect(wrapper.findAll('li').length).toBe(1)

        // start edit
        await wrapper.find('.edit').trigger('click')
        const editInput = wrapper.find('.edit-input input')
        await editInput.setValue('Updated')
        // simulate blur to save
        await editInput.trigger('blur')

        expect(wrapper.find('li span').text()).toBe('Updated')
    })
})