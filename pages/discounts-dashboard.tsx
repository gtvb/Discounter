import React, { useState } from 'react';
import Link from 'next/link';
import { fetchApi } from '../lib/api-prismic';
import DiscountCard from '../components/DiscountCard';
import { Container, Heading, DiscountGrid } from '../styles/DiscountPageStyles';
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion';

export interface DiscountItem {
  node: {
    _meta: {
      id: string;
      uid: string;
    };
    from: string;
    category: string;
    url_without_discount: string;
    discount_code: string;
    full_url: string;
    still_available: boolean;
    post_date: string;
  };
}

interface DashboardProps {
  discountItems: DiscountItem[];
}

const DiscountsDashboard: React.FC<DashboardProps> = ({ discountItems }) => {
  const [selectedCardId, setSelectedCardId] = useState<string | null>(null);

  return (
    <AnimateSharedLayout type="crossfade">
      <Container>
        <Heading>
          <h1>Discounter</h1>
        </Heading>

        <DiscountGrid>
          {discountItems.map((item) => (
            <Link
              href="/discounts/[itemId]"
              as={`/discounts/${item.node._meta.id}`}
              key={item.node._meta.id}
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
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
