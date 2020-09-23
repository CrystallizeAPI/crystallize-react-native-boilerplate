export const orderByOptions = [
  {
    field: 'ITEM_NAME',
    direction: 'ASC',
    name: 'Name A - Z',
  },
  {
    field: 'ITEM_NAME',
    direction: 'DESC',
    name: 'Name Z - A',
  },
  {
    field: 'PRICE',
    direction: 'ASC',
    name: 'Price low - high',
  },
  {
    field: 'PRICE',
    direction: 'DESC',
    name: 'Price high - low',
  },
  {
    field: 'STOCK',
    direction: 'ASC',
    name: 'Stock low - high',
  },
  {
    field: 'STOCK',
    direction: 'DESC',
    name: 'Stock high - low',
  },
].map((o) => ({value: `${o.field}_${o.direction}`, ...o}));

const defaultSpec = {
  first: 50,
  orderBy: {
    field: orderByOptions[0].field,
    direction: orderByOptions[0].direction,
  },
  filter: {},
};

export function urlToSpec({query}) {
  const spec = {
    ...defaultSpec,
  };

  // if (asPath !== '/search') {
  //   spec.filter = {
  //     include: {
  //       paths: [asPath]
  //     }
  //   };
  // }

  try {
    const first = parseInt(query.first, 10);
    const after = parseInt(query.after, 10);
    const orderBy = orderByOptions.find((o) => o.value === query.orderby);
    const filter = JSON.parse(query.filter);

    return {
      ...spec,
      ...(!isNaN(first) && {first}),
      ...(!isNaN(after) && {after}),
      ...(orderBy && {
        orderBy: {direction: orderBy.direction, field: orderBy.field},
      }),
      ...(filter && {filter}),
    };
  } catch (error) {}

  return spec;
}

export function specToQuery(spec) {
  const {orderBy, filter, ...rest} = spec;

  let query = {
    ...rest,
  };

  if (orderBy) {
    query.orderby = orderByOptions.find(
      (o) => o.field === orderBy.field && o.direction === orderBy.direction,
    ).value;
  }
  if (filter) {
    query.filter = JSON.stringify(filter);
  }

  return query;
}
