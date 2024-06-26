import { Card, List, ListItem } from '@tremor/react';

export function CardList() {
  const cities = [
    {
      city: 'Athens',
      rating: '2 open PR',
    },
    {
      city: 'Lucerne',
      rating: '1 open PR',
    },
    {
      city: 'Zurich',
      rating: '0 open PR',
    },
    {
      city: 'Vienna',
      rating: '1 open PR',
    },
    {
      city: 'Lissbon',
      rating: '0 open PR',
    },
    {
        city: 'Helsinki',
        rating: '0 open PR',
      },
      {
        city: 'Oslo',
        rating: '0 open PR',
      },
  ];
  return (
    <Card className="mx-auto max-w-md">
      <h3 className="text-tremor-content-strong dark:text-dark-tremor-content-strong font-medium">Transacciones</h3>
      <List className="mt-2">
        {cities.map((item) => (
          <ListItem key={item.city}>
            <span>{item.city}</span>
            <span>{item.rating}</span>
          </ListItem>
        ))}
      </List>
    </Card>
  );
}