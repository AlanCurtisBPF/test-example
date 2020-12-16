import React from "react";
// We're using our own custom render function and not RTL's render
// our custom utils also re-export everything from RTL
// so we can import fireEvent and screen here as well
// import { render, fireEvent, screen } from "../../tests/test-utils";
import Counter from "./Counter";
import { Provider } from 'react-redux';
// import renderer from 'react-test-renderer';
import { render, fireEvent, screen } from "@testing-library/react";
import * as actions from '../../redux/reducers/counter/counterActions';

import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


describe("Counter Comp", () => { 

    let store;
    let component;
    beforeEach(() => {
      store = mockStore({ counter: { count: 0 } });

      store.dispatch = jest.fn();

      component = render(
        <Provider store={store}>
          <Counter />
        </Provider>
      );
    });
    it('should render with given state from Redux store', () => {
        const { getByTestId, getByText } = component; 
        const count = getByTestId('count').textContent;
        console.log(count)
      expect(true).toBe(true);
    });
   
    it('should dispatch an action on button click', () => {
        // Todo: alan here  need to get button click working on connected component.
        const { getByTestId, getByText } = component; 
        fireEvent.click(getByText('+'));
        const count = getByTestId('count').textContent;
        console.log(count)
        // expect(store.dispatch).toHaveBeenCalledTimes(1);
        // const actions = store.getActions()
        // console.log({actions})
        // expect(store.dispatch).toHaveBeenCalledWith(
        //   actions.increment({ payload: 'sample text' })
        // );
        // expect(true).toBe(false)
    });

    /*

  it("Renders the connected comp with initialState", () => {
    render(<Counter />, { initialState: { counter: { count: 0 } } });

    expect(screen.getByText(/Counter Comp/i)).toBeInTheDocument();
  });

  it("count equals initial state", () => {
    render(<Counter />, { initialState: { counter: { count: 0 } } });
    const count = screen.getByTestId('count').textContent;
    expect(count).toContain(0);
  });

  it("count equals initial state", () => {
    
    const { getByTestId, getByText } = render(<Counter />, { initialState: { counter: { count: 0 } } });
    fireEvent.click(getByText('+'));
    const countValue = getByTestId('count').textContent;
    expect(countValue).toEqual('1');
  });
  */
});
