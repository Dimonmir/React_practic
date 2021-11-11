import React from "react";

function pickFromSyntheticEvent<T extends HTMLElement>() {
    return <K extends keyof T>(key: K) =>
        <E extends ((t: T[k]) => void)>(fn: E) =>
            (e: React.SyntheticEvent<T>) =>
                fn(e.currentTarget[key]);
}