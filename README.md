# Different behaviour in different browsers when overwriting a page after POST using `window.history.replaceState`

## Problem Summary

**Occurrence Condition**
<!-- **発生条件** -->

Occurs if the post-transition URL is rewritten at least once using `window.history.replaceState` after a `POST` transition.
<!-- `POST`遷移後に`window.history.replaceState`を利用して、遷移後のURLを一度でも書き換えている場合に発生します。 -->

**What happens**
<!-- **何が起きるか** -->

When a page is reloaded with the aforementioned occurrence conditions met, a GET request is executed in Chrome and Firefox, and a POST request is executed in Safari.
<!-- 前述の発生条件を満たした状態で、ページをリロードすると、ChromeやFirefoxではGETリクエストが実行され、SafariではPOSTリクエストが実行されます。 -->

__Examples__

For example, if you use next.js 12.1.0 in its standard state, you will face this problem if you use `window.history.replaceState`.
<!-- 例えばnext.js 12.1.0を標準の状態で利用した場合、`window.history.replaceState`を利用している場合にこの問題に直面します。 -->

**Behaviour when the conditions for occurrence are not met**
<!-- **発生条件を満たさない場合の挙動** -->

If `window.history.replaceState` is not used after a `POST` transition, any browser will perform another `POST`.
<!-- `POST`遷移後に`window.history.replaceState`を利用しない場合は、どのブラウザも再度`POST`が実行されます。 -->


## Experiments

### Google Chrome

`Version 100.0.4896.60 (Official Build) (x86_64)`

![Google Chrome](./movie/chrome.mov)

### Firefox

`98.0.2 (64-bit)`

![Firefox](./movie/firefox.mov)

### Safari

`Version 14.1.2 (15611.3.10.1.5, 15611)`

![Safari](./movie/safari.mov)

## Setup

```bash
pnpm i
pnpm run server
```

or

```bas
yarn
yarn run server
```

or

```bash
npm i
npm run server
```

## License

MIT
