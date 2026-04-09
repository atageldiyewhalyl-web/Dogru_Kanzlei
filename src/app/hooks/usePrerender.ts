import { useEffect } from 'react';

/**
 * Hook to signal to the prerenderer (Puppeteer) that the page is fully rendered.
 * Instead of a fixed timeout, this should be called by each page component.
 * 
 * @param ready Condition to wait for (e.g. data loaded). Defaults to true (mount).
 */
export function usePrerender(ready: boolean = true) {
  useEffect(() => {
    const id = 'prerender-ready';
    
    const t = setTimeout(() => {
      if (!document.getElementById(id)) {
        const el = document.createElement('div');
        el.id = id;
        el.style.display = 'none';
        document.body.appendChild(el);
        // Also dispatch events for safety
        document.dispatchEvent(new Event('render-event'));
      }
    }, 2000); // 2 second safety buffer

    return () => clearTimeout(t);
  }, [ready]);
}
