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

### The Task:
I've shared a folder with the assets for a new page on the site that we would like you to mark up and style. It's pretty simple but what we're looking for is attention to detail. In the folder there's a Sketch file of the design, the fonts and some flattened images of both the phone width and the desktop width layouts. If you don't have Sketch there's a trial version you can use and its simple enough to slice images out should you need to. In terms of layout break points I'm happy for you to make some sensible choices here to cover a reasonable selection of screen sizes. In addition to this we're looking for maintainability and reusability of the components you produce, a11y, performance and layout. Just everything that makes for a good quality piece of UI. You don't need to reuse anything from the existing site unless you want to (although if there are things like web fonts you might want to poach from there then go ahead). Please feel free to make use of any frameworks and tools you feel is appropriate.


### Three-hour test plan:
- Setup simple React App
- Use hardcoded data
- Simple snapshot testing
- Sort layout into reusable components:

	**Global styles**
	- Header
	- Fonts

	**Neighbourhood Page**
	
	- Header (with hero image)
	- List of restaurants
	- Restaurant items
	
	**Single Restaurant Page**
	
	- Header (with hero image)
	- Menu
	- Menu items

_Time allocation: 2 hours building, 1 hour styling_


### What's next?
- Use `React Router` to create link between Neighbourhood and Restaurant page
- Move data into its own JSON file and import that where needed
