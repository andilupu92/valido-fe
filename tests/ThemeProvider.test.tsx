import { renderHook } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

// Adjust this import to your file
import { useTheme, ThemeProvider } from '../src/components/theme-provider'; 

describe('useTheme Hook', () => {
  it('throws an error when used outside of a ThemeProvider', () => {
    // Suppress the expected error log from React
    const originalError = console.error;
    console.error = vi.fn();

    expect(() => renderHook(() => useTheme())).toThrow(
      'useTheme must be used within a ThemeProvider'
    );
    // Restore the original console.error
    console.error = originalError;
  });

  // It's also good practice to test the "happy path"
  it('returns the theme context when used inside a provider', () => {
    // We need to wrap the hook in the provider for it to work
    const { result } = renderHook(() => useTheme(), {
      wrapper: ThemeProvider, // Add the provider here
    });

    // It should not throw
    expect(result.error).toBeUndefined();
    // It should return the default context
    expect(result.current.theme).toBe('light');
    expect(typeof result.current.setTheme).toBe('function');
  });
});