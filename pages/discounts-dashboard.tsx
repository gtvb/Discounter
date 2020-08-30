import React, { useState } from 'react';
import Link from 'next/link';
import { fetchApi } from '../lib/api-prismic';
import DiscountCard from '../components/DiscountCard';
import { Container, DiscountGrid } from '../styles/DiscountPageStyles';
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion';
import Header from '../components/Header';

export interface DiscountItem {
  node: {
    _meta: {
      id: string;
    };
    from: string;
    category: string;
    discount_for: {
      alt: string;
      url: string;
    };
    url_without_discount: string;
    discount_code: string;
    still_available: boolean;
    post_date: string;
  };
}

interface DashboardProps {
  discountItems: DiscountItem[];
}

const DiscountsDashboard: React.FC<DashboardProps> = ({ discountItems }) => {
  return (
    <AnimateSharedLayout type="crossfade">
      <Container>
        <Header />

        <DiscountGrid data-aos="fade-up">
          {discountItems.map((item) => (
            <Link
              href={
                item.node.still_available
                  ? '/discounts/[itemId]'
                  : '/discounts-dashboard'
              }
              as={
                item.node.still_available
                  ? `/discounts/${item.node._meta.id}`
                  : '/discounts-dashboard'
              }
              key={item.node._meta.id}
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1.2 }}
                layoutId={item.node._meta.id}
              >
                <DiscountCard itemDetails={item} />
              </motion.div>
            </Link>
          ))}
        </DiscountGrid>
      </Container>
    </AnimateSharedLayout>
  );
};

export default DiscountsDashboard;

export async function getStaticProps() {
  const discountItems = await fetchApi(
    `
    query {
      allDiscountitems {
        edges {
           node {
            _meta {
              id
              uid
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
    {}
  );

  return {
    props: {
      discountItems: discountItems.allDiscountitems.edges,
    },
  };
}
