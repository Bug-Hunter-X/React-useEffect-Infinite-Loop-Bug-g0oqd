```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct logic: This effect only runs once after the initial render
    // If additional updates are necessary based on other factors, add them to the dependency array
    console.log('This runs only once after the component mounts');
  }, []); // Empty dependency array means it only runs once after the first render

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```