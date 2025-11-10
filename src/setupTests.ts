import { vi } from 'vitest';

// Mock ResizeObserver
class MockResizeObserver {
  observe() {
    return vi.fn();
  }
  unobserve() {
    return vi.fn();
  }
  disconnect() {
    return vi.fn();
  }
}

globalThis.ResizeObserver = MockResizeObserver;
