import { useEffect, useState } from "react";

const PREFIX = "Whatsapp-clone-"; // Prefix for localStorage keys to avoid conflicts with other apps or data

/**
 * Custom hook to manage localStorage with React state synchronization.
 * @param {string} key - The unique key for the localStorage item.
 * @param {*} initialValue - The initial value to be used if no value is found in localStorage.
 * @returns {[any, function]} - Returns the current value and a setter function to update it.
 */
export default function LocalStorage(key, initialValue) {
    // Combine the prefix with the key to create a unique key for storage.
    const prefixedKey = PREFIX + key;

    // Initialize state by checking localStorage for the existing value.
    const [value, setValue] = useState(() => {
        const jsonValue = localStorage.getItem(prefixedKey); // Try to get the stored value from localStorage.
        if (jsonValue != null) return JSON.parse(jsonValue); // If found, parse it from JSON and use it.
        
        // If not found and the initial value is a function, call the function to get the value.
        if (typeof initialValue === 'function') {
            return initialValue();
        } else {
            // Otherwise, just use the initial value directly.
            return initialValue;
        }
    });

    // Update localStorage whenever `value` or `prefixedKey` changes.
    useEffect(() => {
        localStorage.setItem(prefixedKey, JSON.stringify(value)); // Store the value in localStorage as a JSON string.
    }, [prefixedKey, value]); // Run this effect whenever the key or value changes.

    // Return the current value and the setter function to update it.
    return [value, setValue];
}
