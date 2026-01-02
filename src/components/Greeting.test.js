import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

test('renders greeting message', () => {
    render(<Greeting />);
    const greetingElement = screen.getByText(/Hello, welcome to our website!/i);
    expect(greetingElement).toBeInTheDocument();
});