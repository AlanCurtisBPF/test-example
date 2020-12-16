import { render, screen } from './tests/test-utils';
import App from './App';

test('renders app', () => {
  const app = render(<App />);
  expect(app).toBeDefined();
});
