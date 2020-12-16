// We're using our own custom render function for redux conneceted compoenentsand not RTL's render
import { render, fireEvent, screen } from "../../tests/test-utils";
import Counter from "./Counter";

describe("Counter Comp", () => { 

    it('should render with given state from Redux store', () => {
        const {getByTestId} = render(<Counter />);
        const count = getByTestId('count').textContent;
        expect(count).toBe('0')
    });
   
    it('should dispatch action increment on button click', () => {
        const {getByText, getByTestId} = render(<Counter />);
        fireEvent.click(getByText('+'));
        const count = getByTestId('count').textContent;
        expect(count).toBe('1')
    });
    it('should dispatch an action decrement on button click', () => {
        const {getByText, getByTestId} = render(<Counter />);
        fireEvent.click(getByText('-'));
        const count = getByTestId('count').textContent;
        expect(count).toBe('-1')
    });
    // todo: alan - add test to change input then trigger event and check value.

});
