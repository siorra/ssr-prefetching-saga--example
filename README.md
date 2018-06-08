## Example of redux-saga prefetching in SSR
### stack:
TypeScript, React, Redux, Redux-saga.
* react 16.3
* react-redux 5.0.2

### install
yarn && yarn build && yarn start

Api calls for fetching content perform only once because has limiter in components

I can't found example about prefetching, but can find example in redux-saga real-world
It was very complex, and wrote own and a bit simpler.

It based on https://github.com/barbar/vortigern and https://github.com/redux-saga/redux-saga/tree/master/examples/real-world

In src/server.tsx you can find comments that can be helpful..
