import React, { useEffect, useState } from 'react';
import { getCountries } from '../others/data-service';

type Country = {
  name: string;
  flag: string;
};

type SelectCountryProps = {
  defaultCountry: string;
  name: string;
  id: number; // id is a number in props
  className: string;
};

const SelectCountry: React.FC<SelectCountryProps> = ({ defaultCountry, name, id, className }) => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const data = await getCountries();
        setCountries(data);
      } catch (err) {
        setError('Failed to load countries');
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  // Display loading or error state
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  // Find the flag for the default country
  const flag = countries.find((country) => country.name === defaultCountry)?.flag ?? '';

  return (
    <select
      name={name}
      id={id.toString()} // Convert id to string
      defaultValue={`${defaultCountry}%${flag}`}
      className={className}
    >
      <option value=''>Select country...</option>
      {countries.map((c) => (
        <option key={c.name} value={`${c.name}%${c.flag}`}>
          {c.name}
        </option>
      ))}
    </select>
  );
};

export default SelectCountry;
