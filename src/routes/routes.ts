import { LazyExoticComponent } from "react";
import BudgetPage from "../pages/BugdetPage";
import SalaryCalculator from "../pages/SalaryCalculator";

type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  name: string;
  Component: JSXComponent | LazyExoticComponent<() => JSX.Element>;
}

export const routes: Route[] = [
  {
    to: "./budget",
    path: "/budget",
    Component: BudgetPage,
    name: "budgetPage",
  },
  {
    to: "./salary-calculator",
    path: "salary-calculator",
    Component: SalaryCalculator,
    name: "salaryCalculatorPage",
  },
];
