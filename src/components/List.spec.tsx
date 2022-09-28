import { render, waitForElementToBeRemoved } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import List from './List'

describe('List Component', () => {
    it('it should render list items', () => {
        const { getByText } = render(<List initialItems={['Renan', 'Luana', 'Laura', 'Maite']}/>)

        expect(getByText("Renan")).toBeInTheDocument()
        expect(getByText("Luana")).toBeInTheDocument()
        expect(getByText("Laura")).toBeInTheDocument()
        expect(getByText("Maite")).toBeInTheDocument()
    })

    it('it should be able to add new item on the list', async () => {
        const { getByText, getByPlaceholderText, findByText } = render(<List initialItems={[]}/>)

        const inputElement = getByPlaceholderText('Novo Item')
        const addButton = getByText('Adicionar')

        await userEvent.type(inputElement, 'Novo')
        await userEvent.click(addButton)

        expect(await findByText('Novo')).toBeInTheDocument()
    })

    it('it should be able to remove item from the list', async () => {
        const { getByText, getAllByText } = render(<List initialItems={['Renan', 'Luana', 'Laura', 'Maite']}/>)

        const removeButtons = getAllByText('Remover')

        await userEvent.click(removeButtons[0])

        await waitForElementToBeRemoved(() => {
            return getByText("Renan")
        })
    })
})