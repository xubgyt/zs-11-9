import { request, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getProducts = async () => {
    const query = gql`
        query MyQuery {
            products {
            createdAt
            id
            name
            publishedAt
            slug
            updatedAt
            image {
                url
            }
            }
        }      
    `;

    const result = await request(graphqlAPI, query);
    return result.products;
};

export const getProductDetails = async (slug) => {
    const query = gql`
    query getProductDetails($slug : String!) {
        products(where: {slug: $slug}) {
            name
            description
            slug
            nominal
            item
            image {
              url
            }
            cover {
                url
            }
            payments {
              name
              image {
                url
              }
            }
          }
      }
      
    `;

    const result = await request(graphqlAPI, query, {slug});
    return result.products;
};

export const getPayments = async () => {
    const query = gql`
        query getPayments {
            payments {
            name
            image {
                url
            }
            }
        }      
    `;

    const result = await request(graphqlAPI, query);
    return result.payments;
}

export const getSliders = async () => {
    const query = gql`
    query getSlider {
        sliders {
            image {
              url
            }
          }
      }
      
    `

    const result = await request(graphqlAPI, query);
    return result.sliders;
}

export const getContacts = async () => {
    const query = gql`
        query getContacts {
            contacts {
            name
            url
            }
        }
    `

    const result = await request(graphqlAPI, query);
    return result.contacts;
}