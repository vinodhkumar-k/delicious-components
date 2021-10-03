# Delicious Components

Created this project to create reusable components that will be used across delicious-basket project.
You can find delicious recipe project at:
https://github.com/vinodhkumar-k/delicious-basket

## COMPONENTS

These components are based on the styled-system specification and rendered using styled-components.


### Box

The Box component serves as a wrapper component for layout related needs. Use Box to set values such as display, width, height, and more. In practice, this component is used as a wrapper around other components to achieve Box Model related styling.

This component uses the following functions from the styled-system: background, border, color, flexbox, layout, position, shadow, and space.


### Button

The Button component can use two different variants; primary and secondary, that can be manipulated through the variant property.

This component uses the following functions from styled-system: layout, space.


### Flex

The Flex component behaves the same as the Box component except that it has display: flex set by default.


### Grid

Grid is implemented through the styled-bootstrap-grid [https://github.com/dragma/styled-bootstrap-grid](https://github.com/dragma/styled-bootstrap-grid)


### List

The List component renders a ul element with list-style-type: none set by default.

This component uses the following functions from styled-system: layout, space.


### ListItem

The ListItem component renders a li element, and it's recommended to be used as the children of the List component.


### Text

The Text component is a wrapper component that will apply typography styles to the text inside. It renders a div element as default, but using the ["as" polyphormic property from the styled-components specification](https://styled-components.com/docs/api#as-polymorphic-prop) can render any text element, such as p, h1, span, etc.


## USAGE


### npm install

npm i delicious-components


### CommonJS

Example:
const Components = require('delicious-components');

const Box = Components.Box;
<Box color={'Green'}>Hello Delicious Basket</Box>


### ES6

Example:
// @ts-ignore
import { Box } from 'delicious-components';
<Box color={'Red'}>Hello Delicious Basket</Box>
