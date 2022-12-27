import ResizeObserver from 'resize-observer-polyfill';

/**
 * Returns the size of an element on resize.
 *
 * @example
 * const element = document.querySelector<HTMLDivElement>('.element')!;
 *
 * const onElementResize = (width: number, height: number) => {
 *   console.log(width, height);
 * };
 *
 * const elementResize = elementResizeHandler(element, onElementResize);
 *
 * setTimeout(() => {
 *   elementResize.disconnect();
 * }, 3000);
 *
 */
export const elementResizeHandler = (
  element: HTMLElement,
  callback: (width: number, height: number) => void
) => {
  const resizeObserver = new ResizeObserver((entries) => {
    for (const entry of entries) {
      const { blockSize, inlineSize } = entry.borderBoxSize[0];
      callback(blockSize, inlineSize);
    }
  });

  resizeObserver.observe(element);

  return resizeObserver;
};

export const onResize = (callback: any) => {
  const resizeListener = document.addEventListener('resize', callback);

  return resizeListener;
};
