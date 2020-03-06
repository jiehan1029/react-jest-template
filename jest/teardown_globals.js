export function teardownGlobals() {
  console.log('jest global teardown');

  // reset window vars as needed
  // ...

  // clear fetch mock
  global.fetch.mockClear();
}