import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o9lvy01hx001z2hozq6tle/master',
  cache: new InMemoryCache()
})