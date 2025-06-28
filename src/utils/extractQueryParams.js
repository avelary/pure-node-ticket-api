export function extractQueryParams(query) {
    return query
      .slice(1)
      .split("&")
      .filter(Boolean)
      .reduce((queryParams, param) => {
        const [key, value] = param.split("=");
        queryParams[key] = value
        return queryParams
      }, {});
  }
  