import {render, screen} from "@testing-library/react"
import { Counter } from "./Counter"
import userEvent from '@testing-library/user-event'

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

     // dblClick
     
     test("renders count of 2 when user clicks on INCREMENT button twice", async () => {
          const user = userEvent.setup();
          render(<Counter />)
          const incrBtnElm = screen.getByRole("button", {
               name: "INCREMENT"
          });
          await user.dblClick(incrBtnElm);
          const countDivElm = screen.getByRole("heading");
          expect(countDivElm).toHaveTextContent("2");
     });

     test("renders count of 10 after clicking on set button", async () => {
          const user = userEvent.setup();
          render(<Counter />)
          const amountInputElm = screen.getByRole("spinbutton");
          // for input of type="number", role is spinbutton and not typebox
          await user.type(amountInputElm, "10");
          expect(amountInputElm).toHaveValue(10);

          const setBtnElm = screen.getByRole("button", {
               name: "Set Amount"
          });

          await user.click(setBtnElm);
          const setAmountElm = screen.getByRole("heading");
          expect(setAmountElm).toHaveTextContent("10")
     });

          test("elements are focused in the right order when pressed tab key", async () => {
          const user = userEvent.setup();
          render(<Counter/>)

          const incrmBtn = screen.getByRole("button", {name:"INCREMENT"});
          const inptBoxElm = screen.getByRole("spinbutton");
          const setAmntElm = screen.getByRole("button", { name: "Set Amount" });

          await user.tab();
          expect(incrmBtn).toHaveFocus();

          await user.tab();
          expect(inptBoxElm).toHaveFocus();

          await user.tab();
          expect(setAmntElm).toHaveFocus();
     });
})
