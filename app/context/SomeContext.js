// app/context/SomeContext.js
import { useState } from 'react';

// Provider component that holds state and passes it down as props
export function SomeProvider({ children }) {
  // Set up state or any value you want to provide across components
  const [someValue, setSomeValue] = useState("Default Value");

  // Any functions or additional state to manage
  const handleChange = (newValue) => setSomeValue(newValue);

  // Pass state and functions as props to children
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, { someValue, handleChange });
      })}
    </div>
  );
}
