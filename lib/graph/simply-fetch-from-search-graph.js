import simplyFetchFromGraph from './simply-fetch-from-graph';
import {CRYSTALLIZE_TENANT_IDENTIFIER} from '@env';

export function simplyFetchFromSearchGraph(args) {
  return simplyFetchFromGraph({
    uri: `https://api-dev.crystallize.digital/${CRYSTALLIZE_TENANT_IDENTIFIER}/search`,
    ...args,
  });
}
