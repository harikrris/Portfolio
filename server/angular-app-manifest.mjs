
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://harikrris.github.io/Portfolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Portfolio"
  },
  {
    "renderMode": 2,
    "route": "/Portfolio/about"
  },
  {
    "renderMode": 2,
    "route": "/Portfolio/experience"
  },
  {
    "renderMode": 2,
    "redirectTo": "/Portfolio",
    "route": "/Portfolio/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1261, hash: '5461824f70f550c4c5462221a2ba1ac0f0171464c339b4513ad4bd776a727bda', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1472, hash: '9433b34cda33343102d26ce2f1fdd98af49a12245e180d0bcb26aa08eb735d9a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 30695, hash: '166290238c4befe3fbeebbe76deffbcbc112530c81f1dc0f4a880aac78edfa63', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'experience/index.html': {size: 30695, hash: '166290238c4befe3fbeebbe76deffbcbc112530c81f1dc0f4a880aac78edfa63', text: () => import('./assets-chunks/experience_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 30695, hash: '166290238c4befe3fbeebbe76deffbcbc112530c81f1dc0f4a880aac78edfa63', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'styles-COTYKCZJ.css': {size: 260, hash: '6xqua/r6M04', text: () => import('./assets-chunks/styles-COTYKCZJ_css.mjs').then(m => m.default)}
  },
};
