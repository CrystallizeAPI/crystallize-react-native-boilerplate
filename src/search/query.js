export default `
query CATALOGUE_SEARCH (
  $filter: CatalogueSearchFilter
  $orderBy: OrderBy
) {
  search (
    tenantId: "5dc17a7acef2403d3aed8d1e"
    filter: $filter
    orderBy: $orderBy
  ) {
    pageInfo {
      totalNodes
    }
    edges {
      node{
        id
        name
        type
        path
      }
    }
  }
}
`;
