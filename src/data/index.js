export const restaurants = [
  {
    id: 1,
    name: 'Bobo Social',
    tags: ['Vietnamese'],
    priceCategory: '££',
    time: '30',
    permalink: '/bobo-social'
  },
  {
    id: 2,
    name: 'Tsunami',
    tags: ['Vietnamese'],
    priceCategory: '££',
    time: '30',
    permalink: 'tsunami'
  },
  {
    id: 3,
    name: 'Wild Game Co',
    tags: ['Vietnamese'],
    priceCategory: '££',
    time: '30',
    permalink: 'wild-game-co'
  }
];

export const restaurant = {
  name: 'Bobo Social',
  tags: ['Burgers'],
  priceCategory: '££',
  blurb: 'Serving the highest-quality burgers and sides with an array of creative and tasty toppings, Bobo Social cooks its rare-breed beed in a special oven to take you to burger heaven!',
  menu: [
    {
      category: 'Burgers',
      options: [
        {
          id: 1,
          name: 'Bobo',
          desc: '6oz rare-breed beef, lettuce, tomatoes, charcoal-roasted red onions, BOBO sauce',
          price: '£8.95',
        },
        {
          id: 2,
          name: 'Bobo with Cheese',
          desc: '6oz rare-breed beef, Westcombe Cheddar, lettuce, tomatoes, charcoal-roasted red onions, BOBO sauce',
          price: '£9.95',
        }
      ],  
    }
  ],
};


export const neighbourhood = {
  name: 'Hampstead',
  description: 'Hampstead is a great place to while away a whole day. As well as three of London’s biggest and best museums, there’re plenty of other things to do that are sure to entertain and amuse everyone in your group.',
  count: 34,
  restaurants: restaurants,
};
