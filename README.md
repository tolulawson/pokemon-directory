# Pokémon Directory

A simple Pokémon directory application with browsing and search functionality, built with Typescript, Next.js and Tailwind CSS.

<p align="center">
  <img src='https://user-images.githubusercontent.com/55362043/128029005-2060398c-de52-454c-b93c-3c67c5251b5d.PNG' width='500px' />
</p>

## Preview

https://staging-pokemon-challenge.vercel.app/

## Deploy with Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Ftolulawson%2Fpokemon-challenge&project-name=pokemon-directory&repo-name=pokemon-directory&demo-title=Pokemon%20Directory&demo-description=A%20simple%20Pok%C3%A9mon%20directory%20application%20with%20browsing%20and%20search%20functionality%2C%20built%20with%20Typescript%2C%20Next.js%20and%20Tailwind%20CSS.)

## Development

- Clone the repo:

```bash
$ git clone https://github.com/tolulawson/pokemon-challenge.git
```

- Go to the project directory and install dependencies:

```bash
$ cd pokemon-challenge && yarn install
```

To run the application in development mode:

```bash
$ yarn run dev
```

To build a production version:

```bash
$ yarn run build
```

To run the production build:

```bash
$ yarn run start
```

## Features 
- Paginated list of all Pokémon in summary cards
- Text search
- Detail view of individual Pokémon

## Implementation Details
- ### Overview
  **Pages:**
  
  - '**/page/[page]**' : A dynamic route that resolves all of the fetched Pokémon into statically rendered pages.
  
  - '**/pokemon/[name]**' : A dynamic route that shows fulls details for a single Pokémon. Pokémon pages are fetched and statically rendered at build time.
  
  - '**/**' : Statically rendered home page. This page exports '**/page/[page]**' and is effectively the first page of that route.
  
  - '**/search?q=**' : A serve-rendered page that fetches data from the search API backend. Search query can be passed from URL parameter or by typing in the provided search box.
  
  **API Route:**
  - **search** : An API route that accepts a search query and returns a list of matching Pokémon. The search API route caches the Pokémon data in-memory to improve search response times.

- ### Potential Improvements
  - **Autocomplete suggestions**: The backend should return autocomplete suggestions as the user types into the search box.
   
  - **Search across multiple fields**: Presently, the application only searches within the name field for matching Pokémon. Other fields, including types, moves, species, etc, should be included in search suggestions and results.
  
  - **Categories**: Pokémon should be able to be viewed by properties such as types, moves, species, etc. These properties on each individual Pokémon should be clickable in order to see other Pokémon with similar properties.
  
  - **Related Pokémon**: Related Pokémon (as determined by their species value) should be listed on an individual Pokémon's page.
