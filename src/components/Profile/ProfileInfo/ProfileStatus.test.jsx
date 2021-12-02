import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

//внутри дескрайба набор тестов
//программно имитируем, то что делает пользователь на странице и проверяем, что компонента отрабатывает так как нужно
describe("ProfileStatus component", () => {
    test("status from props should be in the state", () => {
        const component = create(<ProfileStatus status="anton.js" />); //create виртуально(фейково рендерит компоненту)
        const instance = component.getInstance(); // instance - экземпляр объекта на  основе классовой компоненты
        expect(instance.state.status).toBe("anton.js");
    });
    test("after creation <span> should be displayed", () => {
        const component = create(<ProfileStatus status="anton.js" />); //create виртуально(фейково рендерит компоненту)
        const root = component.root
        let span = root.findByType('span')
        expect(span).not.toBeNull()
    });
    test("after creation <input> shouldn't be displayed", () => {
        const component = create(<ProfileStatus status="anton.js" />); //create виртуально(фейково рендерит компоненту)
        const root = component.root
        expect(() => {
            let input = root.findByType('input')
        }).toThrow();
    });
    test("after creation <span> should contains correct status", () => {
        const component = create(<ProfileStatus status="anton.js" />); //create виртуально(фейково рендерит компоненту)
        const root = component.root
        let span = root.findByType('span')
        expect(span.children[0]).toBe('anton.js')
    });
    test("input should be dispayed in editMode instead of span", () => {
        const component = create(<ProfileStatus status="anton.js" />); //create виртуально(фейково рендерит компоненту)
        const root = component.root
        let span = root.findByType('span')
        span.props.onDoubleClick()
        let input = root.findByType('input')
        expect(input.props.value).toBe('anton.js')
    });
    test("callback should be called ", () => {
        const mockCallback = jest.fn()  //фейковая функция, которую передадим в качестве колбека
        const component = create(<ProfileStatus status="anton.js" updateStatus={mockCallback} />); //create виртуально(фейково рендерит компоненту)
        const instance = component.getInstance()
        instance.deactivateEditMode()
        expect(mockCallback.mock.calls.length).toBe(1) // должна быть вызвана 1 раз
    });
});