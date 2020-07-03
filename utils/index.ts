import { promisify } from 'util';


/**
 *
 * @param functionList
 */
export function convertCallbackClientToPromise(functionList: any): object {
  // TO REVIEW
  const promises: any = {};
  const list = Object.keys(Object.getPrototypeOf(functionList));


  //// TO REVIEW
  const fn = list.filter((functions: string) => {
    if (!functions.startsWith('$')) {
      return functions;
    }
  });

  fn.map((i: any) => {
    promises[i] = promisify(functionList[i]).bind(functionList);
    return Object.assign({}, promises);
  });

  return promises;
}
