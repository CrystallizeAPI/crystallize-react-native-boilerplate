import {simplyFetchFromSearchGraph} from './graph/simply-fetch-from-search-graph';

export default async (req, res) => {
  const response = await simplyFetchFromSearchGraph({
    query: `
      query CATALOGUE_SEARCH (
        $first: Int
        $after: Int
        $orderBy: OrderBy
        $filter: CatalogueSearchFilter
      ) {
        catalogueSearch (
          tenantId: "5dc17a7acef2403d3aed8d1e"
          first: $first
          after: $after
          orderBy: $orderBy
          filter: $filter
        ) {
          totalCount
          items {
            type
            name
            path
          }
        }
      }
    `,
    variables: req.body,
  });

  res.json(response);
};
