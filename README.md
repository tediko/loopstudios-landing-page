# Frontend Mentor - Loopstudios landing page

![Design preview for the Loopstudios landing page coding challenge](./design/desktop-preview.jpg)

## Table of contents

- [Overview](#overview)
  - [Intro](#intro)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Features](#features)
  - [Useful resources](#useful-resources)

## Overview

### Intro
Hello! This is my solution to [Todo App - Frontend Mentor](https://www.frontendmentor.io/challenges/loopstudios-landing-page-N88J5Onjw) challenge. That was a simple and fun challenge, although there was room to try new things and learn something new. 

### The challenge

>Your challenge is to build out this landing page and get it looking as close to the design as possible.
>
>This challenge focuses mostly on HTML & CSS. There's a tiny bit of JS included for the mobile navigation toggle. But you could also choose to do this without JS!
>
>You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go.
>
>Your users should be able to:
>
>-View the optimal layout for the site depending on their device's screen size
>-See hover states for all interactive elements on the page

### Links

[LIVE PREVIEW](https://loopstudios-tediko.netlify.app/)

[Frontend Mentor](https://www.frontendmentor.io) challenges allow you to improve your skills in a real-life workflow.

## My process

### Built with

 - Flexbox
 - Grid
 - SCSS
 - Javascript
 - Mobile first
 - Semantic HTML5 markup
 - Intersection observer API

### Features

- Implement prefers-reduced-motion CSS media feature which is used to detect if the user has requested that the system minimize the amount of non-essential motion it uses. Prevent animations in brief.
- Added lazy load animations for creations__gallery-card's. I did it with Intersection Observer API.
- Added sticky nav menu also using Intersection Observer API.
- Tried to create more accessible mobile navigation. Used the aria-expanded and aria-controls attributes.
- As for the Sass part. In the project i used @use since it's recommended to start using this instead of @import that import will be deprecated. 

### Usefull resources
 
- [Video](https://www.youtube.com/watch?v=CR-a8upNjJ0) - Kevin Powell video about @use and @forward. 