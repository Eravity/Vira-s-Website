import React, { useEffect, useState } from 'react';
import { getCabinPrice } from '../others/data-service';

type PriceProps = {
  cabinId: number;
};

const Price: React.FC<PriceProps> = ({ cabinId }) => {
  const [priceData, setPriceData] = useState<{ regularPrice: number; discount: number } | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPrice = async () => {
      try {
        const data = await getCabinPrice(cabinId);
        setPriceData(data);
      } catch (error) {
        console.error('Error fetching cabin price:', error);
        setPriceData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchPrice();
  }, [cabinId]);

  if (loading) return <p>Loading...</p>;

  if (!priceData) return <p>Price data is not available.</p>;

  const { regularPrice, discount } = priceData;

  return (
    <p className="mt-12 text-3xl flex gap-3 items-baseline">
      {discount > 0 ? (
        <>
          <span className="text-3xl font-[350]">
            ${regularPrice - discount}
          </span>
          <span className="line-through font-semibold text-primary-600">
            ${regularPrice}
          </span>
        </>
      ) : (
        <span className="text-3xl font-[350]">${regularPrice}</span>
      )}
      <span className="text-primary-200">/ night</span>
    </p>
  );
};

export default Price;
