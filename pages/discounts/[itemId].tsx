import React, { useState } from 'react';
import { FiX } from 'react-icons/fi';
import {
  Container,
  Wrapper,
  ImgHolder,
  ContentContainer,
  Group,
  About,
  Header,
  Heading,
  Original,
  Code,
  ForWrapper,
  AboutModalWrapper,
  AboutModal,
} from '../../styles/SelectedItemStyles';

import { DiscountItem } from '../discounts-dashboard';
import { fetchApi } from '../../lib/api-prismic';
import { GetStaticPaths, GetStaticProps } from 'next';
import AppHeader from '../../components/Header';
import { AnimateSharedLayout, AnimatePresence } from 'framer-motion';

interface CardProps {
  post: DiscountItem;
}

const SelectedModal = ({ post: selectedItem }: CardProps) => {
  const [isModalSelected, setIsModalSelected] = useState<boolean>(false);

  function toggleModal() {
    setIsModalSelected(!isModalSelected);
  }

  return (
    <Container>
      <AppHeader />

      <Wrapper>
        <ImgHolder data-aos="fade-right">
          <img src="/discount.svg" alt="" />
        </ImgHolder>

        <ContentContainer data-aos="fade-left">
          <Header>
            <Heading>{selectedItem.node.from} Discount</Heading>
            <p>Post date: {selectedItem.node.post_date}</p>
          </Header>

          <Group>
            <About whileHover={{ scale: 1.1 }} onClick={toggleModal}>
              About {selectedItem.node.from}
            </About>

            <Original whileHover={{ scale: 1.1 }}>Original Website</Original>
          </Group>

          <Group>
            <Code>
              <p>Discount code:</p>
              <h1>{selectedItem.node.discount_code}</h1>
            </Code>

            <ForWrapper>
              <div>
                <p>{selectedItem.node.discount_for.alt}</p>
                <img
                  src={selectedItem.node.discount_for.url}
                  alt={selectedItem.node.from}
                />
              </div>
            </ForWrapper>
          </Group>
        </ContentContainer>
      </Wrapper>

      {isModalSelected && (
        <AnimatePresence>
          <AboutModalWrapper>
            <AboutModal
              initial={{ y: 300, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <FiX size={20} color="#f13030" onClick={toggleModal} />

              <p>{selectedItem.node.from}</p>

              <h3>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                orci magna, molestie vel fringilla vel, facilisis sit amet
                lectus. Integer tortor turpis, rhoncus et ultrices eget,
                tincidunt in erat. Aliquam erat volutpat. Etiam porttitor enim
                nec lorem egestas, id accumsan lorem vestibulum. Aenean
                convallis neque id ex efficitur tincidunt. Cras sit amet
                porttitor diam, eu auctor ex. Morbi fringilla felis ligula, id
                tincidunt risus pretium ac. Fusce congue, tellus in bibendum
                venenatis, nisi nibh malesuada nibh, at vulputate augue ex et
                mauris
              </h3>
            </AboutModal>
          </AboutModalWrapper>
        </AnimatePresence>
      )}
    </Container>
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

export const getStaticProps = async ({ params }) => {
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
            url_without_discount
            discount_for
            post_date
            discount_code
            still_available
            category    
          }
        }
      }
    }
  `,
    { id: params.itemId }
  );

  const formatedCardData = post.allDiscountitems.edges[0];

  return {
    props: {
      post: formatedCardData,
    },
  };
};
