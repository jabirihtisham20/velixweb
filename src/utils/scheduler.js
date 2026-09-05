/**
 * Performance Scheduling Utilities
 * Helpers for scheduling non-critical work off the critical path,
 * chunking execution, and yielding execution time back to the main thread.
 */

/**
 * Execute a callback when the browser's main thread is idle,
 * falling back to setTimeout / requestAnimationFrame when unsupported.
 * 
 * @param {Function} callback - Function to execute when idle
 * @param {number} [timeout=2000] - Maximum milliseconds to wait before forcing execution
 * @returns {number|any} Id for cancellation
 */
export function runOnIdle(callback, timeout = 2000) {
  if (typeof window === 'undefined') {
    return callback();
  }

  if ('requestIdleCallback' in window) {
    return window.requestIdleCallback(
      (deadline) => {
        callback(deadline);
      },
      { timeout }
    );
  }

  // Graceful fallback for Safari / older browsers
  return window.setTimeout(() => {
    const start = performance.now();
    callback({
      didTimeout: true,
      timeRemaining: () => Math.max(0, 50 - (performance.now() - start))
    });
  }, Math.min(timeout, 200));
}

/**
 * Cancel a scheduled idle callback.
 * 
 * @param {number|any} id 
 */
export function cancelIdle(id) {
  if (typeof window === 'undefined') return;
  if ('cancelIdleCallback' in window) {
    window.cancelIdleCallback(id);
  } else {
    clearTimeout(id);
  }
}

/**
 * Yield control back to the main thread so the browser can paint,
 * handle input events, and avoid Total Blocking Time (TBT) penalties.
 * 
 * @returns {Promise<void>}
 */
export function yieldToMain() {
  if (typeof window !== 'undefined' && 'scheduler' in window && 'yield' in window.scheduler) {
    return window.scheduler.yield();
  }

  return new Promise((resolve) => {
    if (typeof MessageChannel !== 'undefined') {
      const channel = new MessageChannel();
      channel.port1.onmessage = () => resolve();
      channel.port2.postMessage(null);
    } else {
      setTimeout(resolve, 0);
    }
  });
}
