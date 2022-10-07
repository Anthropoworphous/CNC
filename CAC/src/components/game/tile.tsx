import { component$, useStore, $ } from '@builder.io/qwik';

export const Tile = component$(() => {
    const store = useStore({
        containedEntities: []
    })

    const style = {
        backgroundColor: 'rgba(0, 0, 0, 1)',
    };

    const clickHandler = $(() => 
        {} // click handler
    );

    return (
        <>
            <button onClick$={clickHandler}>
            </button>
            <span style={style}>
                
            </span>
        </>
    )
})