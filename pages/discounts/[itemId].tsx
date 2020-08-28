import React from 'react';

import {
  Wrapper,
  Container,
  Group,
  From,
  Availability,
  Content,
  Original,
  Code,
  Full,
  StillValid,
} from '../../styles/Modal';

import { AnimatePresence } from 'framer-motion';
import { DiscountItem } from '../discounts-dashboard';
import { fetchApi } from '../../lib/api-prismic';
import { GetStaticPaths, GetStaticProps } from 'next';

const SelectedModal = () => {
  return (
    <Wrapper>
      <h1>Hello</h1>
      {/* <Container>
        <Group>
          <From>{selectedItem.node.from}</From>

          <Availability>Posted: {selectedItem.node.post_date}</Availability>
        </Group>

        <Content>
          {selectedId && (
            <AnimatePresence>
              <Group>
                <Original>
                  Original URL: {selectedItem.node.url_without_discount}
                </Original>
                <Code>Discount Code: {selectedItem.node.discount_code}</Code>
              </Group>

              <Full>
                Complete URL:{' '}
                <a href={selectedItem.node.full_url}>
                  {selectedItem.node.full_url}
                </a>
              </Full>
            </AnimatePresence>
          )}

          <StillValid>
            <section
              style={{
                background: selectedItem.node.still_available
                  ? 'var(--bg-green)'
                  : 'var(--bg-red)',
              }}
            >
              <p
                style={{
                  color: selectedItem.node.still_available
                    ? 'var(--strong-green)'
                    : 'var(--strong-red)',
                }}
              >
                {selectedItem.node.still_available
                  ? 'Available'
                  : 'Unavailable'}
              </p>
            </section>

            <p>{selectedItem.node.category}</p>
          </StillValid>
        </Content>
      </Container> */}
    </Wrapper>
  );
};

export default SelectedModal;

export const getStaticPaths: GetStaticPaths = async () => {
  const ids = await fetchApi(
    `
    query {
      allDiscountitems {
        edges {
          node {
           _meta {
              id
            }
          }
        }
      }
    }
  `,
    {}
  );

  const allIds = ids.allDiscountitems.edges.map(
    (item: DiscountItem) => `/discounts/${item.node._meta.id}`
  );

  return {
    paths: allIds,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = await fetchApi(
    `
    query ($id: String!) {
      allDiscountitems (id: $id)  {
        edges {
          node{
            _meta {
              id
            }
            from
            post_date
            still_available
            category 
          }
        }
      }
    }
  `,
    { id: params.itemId }
  );

  return {
    props: post,
  };
};
