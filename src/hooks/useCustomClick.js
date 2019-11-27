import React, { useState } from 'react';

export default function useCustomClick(initialState) {
    const [element, setData] = useState(initialState)

    const handleClick = (event) => {
        const { value } = event.target;
        setData({ ...element, [value]: value })
    }

    return [element, handleClick];
}