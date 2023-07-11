import {render, screen} from "@testing-library/react"
import { Counter } from "./Counter"
import userEvent from '@testing-library/user-event'
import "./Counter"

describe("Counter Tests", () => {

     test("check COUNTER renders correctly or not", () => {
          render(<Counter />)
          const counterElm = screen.getByRole("heading");
          expect(counterElm).toBeInTheDocument();

          const counterBtnElm = screen.getByRole("button", {
               name: "INCREMENT"
          });
          expect(counterBtnElm).toBeInTheDocument();
     });

     test("renders count of 0 on initial render", () => {
          render(<Counter />)
          const counterElement = screen.getByRole("heading");
          // "toHaveTextContent"
          expect(counterElement).toHaveTextContent("0");
     });

     // user.setup() and user.click()     
     
     test("renders count of 1 when clicking on INCREMENT button", async () => {
          const user = userEvent.setup()
          render(<Counter />)
          const incrBtn = screen.getByRole("button", {
               name: "INCREMENT"
          });
          await user.click(incrBtn);
          const countElmnt = screen.getByRole("heading");
          expect(countElmnt).toHaveTextContent("1");
     });
})