import {NoRxJS} from './noRxJS';

export const store = new NoRxJS({
  isMobile: window.innerWidth <= 992,
  data: null
});


const mediaQueryList = window.matchMedia('(max-width: 600px)');


mediaQueryList.addListener(media => {
  store.commit({
    isMobile: media.matches
  });
});
