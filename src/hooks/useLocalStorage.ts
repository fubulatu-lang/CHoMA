import { useState } from "react";

export function useLocalStorage<T>(
    key: string,
    initialValue: T
) {

    const [value, setValue] = useState<T>(() => {

        const item = localStorage.getItem(key);

        return item
            ? JSON.parse(item)
            : initialValue;

    });

    function update(value: T) {

        setValue(value);

        localStorage.setItem(
            key,
            JSON.stringify(value)
        );

    }

    return [value, update] as const;

}