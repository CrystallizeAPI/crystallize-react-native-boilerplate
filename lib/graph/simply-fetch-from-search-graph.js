import simplyFetchFromGraph from './simply-fetch-from-graph';

export function simplyFetchFromSearchGraph(args) {
  return simplyFetchFromGraph({
    uri: 'https://api-dev.crystallize.digital/furniture/search',
    ...args,
  });
}
