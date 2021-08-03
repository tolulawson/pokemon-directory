# Pokémon Directory

A simple Pokémon directory application with browsing and search functionality, built with Typescript, Next.js and Tailwind CSS.

<p align="center">
  <img src='https://user-images.githubusercontent.com/55362043/128029005-2060398c-de52-454c-b93c-3c67c5251b5d.PNG' width='500px' />
</p>

## Preview

https://staging-pokemon-challenge.vercel.app/

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


## Motivation
- prepend coding challenge [(notion)](https://www.notion.so/The-Pok-mon-Frontend-Coding-Challenge-91e21b9bbc2b4d309f64449b9cedab9a)

## Solution Discussion
- ### Overview
  **Pages:**
  
  - '**/page/[page]**' : A dynamic route that resolves all of the fetched Pokémon into statically rendered pages.
  
  - '**/pokemon/[name]**' : A dynamic route that shows fulls details for a single Pokémon. Pokémon pages are fetched and statically rendered at build time.
  
  - '**/**' : Statically rendered home page. This page exports '**/page/[page]**' and is effectively the first page of that route.
  
  - '**/search?q=**' : A serve-rendered page that fetches data from the search API backend. Search query can be passed from URL parameter or by typing in the provided search box.
  
  **API Route:**
  - **search** : An API route that accepts a search query and returns a list of matching Pokémon.

- ### Implementation Details
  - **Search**: The search API route caches the Pokémon data in-memory to improve search response times. 

- ### Potential Improvements
  - **Autocomplete suggestions**: The backend should return autocomplete suggestions as the user types into the search box.
   
  - **Search across multiple fields**: Presently, the application only searches within the name field for matching Pokémon. Other fields, including types, moves, species, etc, should be included in search suggestions and results.
  
  - **Categories**: Pokémon should be able to be viewed by properties such as types, moves, species, etc. These properties on each individual Pokémon should be clickable in order to see other Pokémon with similar properties.
  
  - **Related Pokémon**: Related Pokémon (as determined by their species value) should be listed on an individual Pokémon's page.
