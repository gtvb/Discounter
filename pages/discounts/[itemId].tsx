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
  AboutModalWrapper,
  AboutModal,
} from '../../styles/SelectedItemStyles';

import { DiscountItem } from '..';
import { fetchApi } from '../../lib/api-prismic';
import { GetStaticPaths, GetStaticProps } from 'next';
import AppHeader from '../../components/Header';
import { AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Head from 'next/head';

interface CardProps {
  post: DiscountItem;
}

const SelectedModal = ({ post: selectedItem }: CardProps) => {
  const [isModalSelected, setIsModalSelected] = useState<boolean>(false);

  function toggleModal() {
    setIsModalSelected(!isModalSelected);
  }

  return (
    <>
      <Head>
        <title>{selectedItem.node.from} discount</title>
      </Head>
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

              <Link href={selectedItem.node.url_without_discount}>
                <Original whileHover={{ scale: 1.1 }}>
                  Original Website
                </Original>
              </Link>
            </Group>

            <Code>
              <p>Discount code provided:</p>
              <h1>{selectedItem.node.discount_code}</h1>
            </Code>
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

                <h3>{selectedItem.node.site_description}</h3>
              </AboutModal>
            </AboutModalWrapper>
          </AnimatePresence>
        )}
      </Container>
    </>
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
            site_description
            url_without_discount
            post_date
            discount_code    
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
