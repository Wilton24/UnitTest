import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Greeting from './Greeting';

describe('Greeting component', () => {

    test('renders the main heading', () => {
        render(<Greeting />);

        expect(
            screen.getByRole('heading', {
                name: /hello, welcome to our website!/i
            })
        ).toBeInTheDocument();
    });

    test('shows React learning text on initial render', () => {
        render(<Greeting />);

        expect(
            screen.getByText(/this is the best place to learn react/i)
        ).toBeInTheDocument();

        expect(
            screen.queryByText(/have a great day!/i)
        ).not.toBeInTheDocument();
    });

    test('shows "Have a great day!" after clicking the button', async () => {
        render(<Greeting />);

        const user = userEvent.setup();
        await user.click(
            screen.getByRole('button', { name: /change text/i })
        );

        expect(
            screen.getByText(/have a great day!/i)
        ).toBeInTheDocument();

        expect(
            screen.queryByText(/this is the best place to learn react/i)
        ).not.toBeInTheDocument();
    });

    test('toggles text back when button is clicked again', async () => {
        render(<Greeting />);

        const user = userEvent.setup();
        const button = screen.getByRole('button', { name: /change text/i });

        await user.click(button);
        await user.click(button);

        expect(
            screen.getByText(/this is the best place to learn react/i)
        ).toBeInTheDocument();

        expect(
            screen.queryByText(/have a great day!/i)
        ).not.toBeInTheDocument();
    });

});
