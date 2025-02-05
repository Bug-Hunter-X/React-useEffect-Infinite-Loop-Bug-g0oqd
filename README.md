# React useEffect Infinite Loop Bug

This repository demonstrates a common but subtle bug in React involving the `useEffect` hook.  The bug stems from incorrectly using the state variable within the `useEffect` dependency array, causing an infinite loop. 

## Bug Description
The provided `MyComponent` uses `useEffect` to update the `count` state.  However, because `count` is in the dependency array, the effect runs every time `count` changes, leading to an infinite loop as the `useEffect` continuously increments the `count`.

## Solution
The solution involves removing `count` from the dependency array. If the effect doesn't need to run on every `count` change then other approaches can be used as appropriate.  Alternatively, use a conditional to prevent the state update inside of the useEffect from triggering a re-render.  This can be complex depending on the desired effect.