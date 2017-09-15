export default function printMe() {
  const spreader = {
    test: 'yo',
    ok: 'ha',
  }
  const test = {...spreader, poo: 'afd'};
  console.log(test);
};