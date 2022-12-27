# Project Particularities

- namespace: tp
- data attributes: data-tp

# Resize

```ts
import { Breakpoints } from '../utilities/enums/breakpoints';

const onResize = () => {
  if (window.matchMedia(`(min-width: ${Breakpoints.XXL}px)`).matches) {
    console.log(`> ${Breakpoints.XXL}px`);
  } else {
    console.log(`< ${Breakpoints.XXL}px`);
  }

  if (window.matchMedia(`(min-width: ${Breakpoints.XL}px)`).matches) {
    console.log(`> ${Breakpoints.XL}px`);
  } else {
    console.log(`< ${Breakpoints.XL}px`);
  }

  if (window.matchMedia(`(min-width: ${Breakpoints.LG}px)`).matches) {
    console.log(`> ${Breakpoints.LG}px`);
  } else {
    console.log(`< ${Breakpoints.LG}px`);
  }

  if (window.matchMedia(`(min-width: ${Breakpoints.MD}px)`).matches) {
    console.log(`> ${Breakpoints.MD}px`);
  } else {
    console.log(`< ${Breakpoints.MD}px`);
  }

  if (window.matchMedia(`(min-width: ${Breakpoints.SM}px)`).matches) {
    console.log(`> ${Breakpoints.SM}px`);
  } else {
    console.log(`< ${Breakpoints.SM}px`);
  }
};

window.addEventListener('resize', onResize);
```

# Scroll

```ts
let scrollPosition = 0;

const onScroll = () => {
  if (document.body.getBoundingClientRect().top > scrollPosition) {
    console.log('up');
  } else {
    console.log('down');
  }
  scrollPosition = document.body.getBoundingClientRect().top;
};

window.addEventListener('scroll', onScroll);
```
