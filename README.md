# Deliveroo Task
#### Caroline Benn - September 2017
lineybenn@gmail.com | 07745 802 686

### Getting started:
```
npm install
npm run start
```

Run snapshot testing with:
```
npm test
```

Open `http://localhost:3000` if it doesn't do so automatically.

### Test plan:
- Setup simple React App using `create-react-app`
- Use data from JSON file and import that where needed
- Simple snapshot testing of components in various states.
- Sort layout into reusable components:

	**Global styles**
	- Header
	- Fonts

	**Neighbourhood Page**

	- Header (with hero image)
	- List of restaurants
	- Restaurant items

Instead of `<a>` tags I'd normally like to use React Router's `<Link>` to take users to the correct location rather than the anchor tags take them out of the app by refreshing the page.

### What could be next?
- Incorporate React Storybook to build componets in isolation
- Move stateful container components into their own directory, and only have presentational components (i.e. stateless) within `/src/components`
- Use `React Router` to create links between Neighbourhood and Restaurant page
- Create show page for each restaurant:

    **Single Restaurant Page**  
    - Header (with hero image)
    - Menu
    - Menu items
    - Delivery time component using an SVG to represent visually how long delivery will take.
- Serve real data from from API
