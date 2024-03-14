setTimeout(() => console.log('console.log 1'), 0);
setTimeout(() => {
  console.log('console.log 2')
  process.nextTick(() => {
    console.log('console.log nextTick inside a setTimeout');
  })
}, 0);
setTimeout(() => {
  console.log('console.log 3');
  Promise.resolve().then(() => console.log('console.log promise inside a setTimeout'))
}, 0);

setTimeout(() => console.log('console.log 4'), 0);
