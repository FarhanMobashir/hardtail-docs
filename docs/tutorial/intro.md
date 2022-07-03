---
sidebar_position: 1
---

# Getting Started

### - An easy way to handle api calls in react application

Let's discover **Hardtail in less than 5 minutes**.

## Purpose

Making API calls in any application is one of the basic stuff and there are many ways one can handle those in clean and non repetitive way. Hardtail also offers an easy way to handle you API calls with writing less code.

## Installation

Get started by **installing hardtail** on any react application

```
npm i hardtail
```

or

```
yarn add hardtail
```

## What's Included

Hardtail includes these APIs:

- [`API Provider`](../api/configureStore.mdx): A React context provider which can be wrap you App component and has all the functionality to configure all your api calls.

- [`useApi`](../api/configureStore.mdx): A React hook to consume the ApiProvider

- [`fetchBaseQuery`](../api/createReducer.mdx): A wrapper over the fetch-API to let you make a base query by adding your base url and headers if needed. This will be used in the API Provider