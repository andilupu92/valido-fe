import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Mock ResizeObserver
class MockResizeObserver {
  observe() { return vi.fn(); }
  unobserve() { return vi.fn(); }
  disconnect() { return vi.fn(); }
}


window.ResizeObserver = MockResizeObserver;