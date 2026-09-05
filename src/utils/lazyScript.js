/**
 * Lazy Third-Party Script Loader
 * Defers external analytics, tracking pixels, tag managers, and widgets
 * until after the window has fired the 'load' event and the browser is completely idle.
 */

import { runOnIdle } from './scheduler';

/**
 * Loads an external JavaScript file asynchronously after page load & idle time.
 * 
 * @param {string} src - The script source URL
 * @param {Object} [options={}] - Additional script configuration
 * @param {string} [options.id] - Optional DOM ID for duplicate prevention
 * @param {boolean} [options.async=true] - Load asynchronously
 * @param {boolean} [options.defer=true] - Defer execution
 * @param {Record<string, string>} [options.dataset] - Data attributes (e.g. dataset: { site: '123' })
 * @param {number} [options.idleTimeout=3000] - Max time before forcing idle execution
 * @returns {Promise<HTMLScriptElement>}
 */
export function loadDeferredScript(src, options = {}) {
  const {
    id,
    async = true,
    defer = true,
    dataset = {},
    idleTimeout = 3000
  } = options;

  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined' || typeof document === 'undefined') {
      return resolve(null);
    }

    // Prevent duplicate injections if an ID is provided
    if (id && document.getElementById(id)) {
      return resolve(document.getElementById(id));
    }

    const inject = () => {
      runOnIdle(() => {
        try {
          const script = document.createElement('script');
          script.src = src;
          script.async = async;
          script.defer = defer;
          if (id) script.id = id;

          Object.entries(dataset).forEach(([key, value]) => {
            script.dataset[key] = value;
          });

          script.onload = () => resolve(script);
          script.onerror = (err) => reject(err);

          document.body.appendChild(script);
        } catch (err) {
          reject(err);
        }
      }, idleTimeout);
    };

    if (document.readyState === 'complete') {
      inject();
    } else {
      window.addEventListener('load', inject, { once: true });
    }
  });
}
