import React from 'react';
import { DiscountItem } from '../../pages';
import {
  Container,
  Group,
  From,
  Availability,
  Content,
  StillValid,
} from './styles';

interface CardProps {
  itemDetails: DiscountItem;
}

const DiscountCard: React.FC<CardProps> = ({ itemDetails }) => {
  return (
    <Container>
      <Group>
        <From>{itemDetails.node.from}</From>

        <Availability>Posted: {itemDetails.node.post_date}</Availability>
      </Group>

      <Content>
        <StillValid>
          <section
            style={{
              background: itemDetails.node.still_available
                ? 'var(--bg-green)'
                : 'var(--bg-red)',
            }}
          >
            <p
              style={{
                color: itemDetails.node.still_available
                  ? 'var(--strong-green)'
                  : 'var(--strong-red)',
              }}
            >
              {itemDetails.node.still_available ? 'Available' : 'Unavailable'}
            </p>
          </section>

          <p>{itemDetails.node.category}</p>
        </StillValid>
      </Content>
    </Container>
  );
};

export default DiscountCard;
