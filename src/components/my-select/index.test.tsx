import { act, render, fireEvent } from "@testing-library/react";
import MySelect from ".";

describe("复现 select 组件集成测试报错", () => {
  function toggleOpen(container: ReturnType<typeof render>["container"]): void {
    fireEvent.mouseDown(container.querySelector(".ant-select-selector")!);
    act(() => {
      jest.runAllTimers();
    });
  }

  test("select 组件 open 为 true 时报错", async () => {
    render(<MySelect open />);
  });

  test("点击 select 组件", async () => {
    const { container } = render(<MySelect />);
    toggleOpen(container);
  });
});
