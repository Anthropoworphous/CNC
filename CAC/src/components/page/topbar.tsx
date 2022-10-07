import { component$ } from "@builder.io/qwik";

export const Topbar = component$(() => {
    const style = {
        top: 0,
        padding: "10px",
        backgroundColor: "gray",
        color: "white"
    };

    return (
        <div style={style}>
            C&C
            <>
            </>
        </div>
    )
})