# Frontend Developper Test Application requirements

## Introduction

The purpose of this test is to evaluate your skills as a frontend developer. You will be asked to develop a small application that will be used to manage a list of users and to use a third party API to search for products.

## Requirements

- The application must be developed using ReactJS and Vite
- The application must be responsive and use Chakra UI
- The application must be MOBILE FIRST
- The application must be developed using Typescript
- The application must be developed using React Query
- The application must be developed using React Router
- The application must be developed using React Hooks
- The application must be developed using Recoil for state management

What are we looking for:

- A good understanding of the requirements
- A good implementation of the requirements
- A good understanding of ReactJS
- A good understanding of Typescript
- A good understanding of React Query
- A good understanding of React Router
- A good understanding of React Hooks
- A good understanding of Recoil (Not required but a plus)
- A good understanding of Chakra UI
- Ability to integrate a third party API
- Ability to explore an API and use it even though it is not documented well
- !Creativity

## Application

The application on this link must be replicated as much as possible: `https://d2l5gumhi3yv72.cloudfront.net`. You can log in using the following credentials:

- User: `Developer Test`
- PIN: `1234`

The functionality is much much more important than the design. The design must be as close as possible to the original application. We do not expect the application to be pixel perfect or complete. We are looking for a good understanding of the requirements and a good implementation of the requirements.

You do not need to implement the following features:

- Creating or editing new users BUT you must be able to navigate to the page and see the form
- Creating or editing thresholds BUT you must be able to navigate to the page and see the form

## API

### Users API Documentation

- `Store ID`: `aaae5ce8-b72e-41d0-9222-3b19e14143da`
- `Roles`: `ADMIN`, `CASHIER`, `MANAGER`, `RECEIPT_CHECKER`, `WAITER`

#### 1. Create a User

- **Endpoint:** `POST /users`
- **URL:** `https://bewty7mih9.execute-api.eu-central-1.amazonaws.com/users`
- **Request Body:**
  ```json
  {
    "roles": ["ADMIN"],
    "name": "some-name",
    "phone_number": "some-phone-number",
    "email": "some-email",
    "username": "some-username",
    "store_id": "some-store-id",
    "PIN": "1234"
  }
  ```

#### 2. Update User

- **Endpoint:** `PUT /users`
- **URL:** `https://bewty7mih9.execute-api.eu-central-1.amazonaws.com/users`
- **Request Body:**
  ```json
  {
    "roles": ["ADMIN", "CASHIER"],
    "name": "some-name",
    "phone_number": "483373838",
    "id": "some-id",
    "email": "some-email",
    "username": "some-username",
    "store_id": "ef4b27ca-5834-4ca0-a06a-8008762c78a1",
    "PIN": "1234",
    "is_active": true
  }
  ```

#### 3. Verify User

- **Endpoint:** `POST /users/verify`
- **URL:** `https://bewty7mih9.execute-api.eu-central-1.amazonaws.com/users/verify`
- **Request Body:**
  ```json
  {
    "id": "some-id",
    "PIN": "1234"
  }
  ```

#### 4. Get a User

- **Endpoint:** `GET /users/{userId}`
- **URL:** `https://bewty7mih9.execute-api.eu-central-1.amazonaws.com/users/{userId}`
- **Path Params:**
  - `userId`: `some-user-id`

#### 5. Get Users

- **Endpoint:** `GET /users`
- **URL:** `https://bewty7mih9.execute-api.eu-central-1.amazonaws.com/users`
- **Query Params:**
  - `store_id`: `aaae5ce8-b72e-41d0-9222-3b19e14143da`
  - `limit`: `50`

### Search API Documentation

#### Search Products

!This maybe the most challenging part of the test. You will use typesense to search. Below are some userful links:

- [Typesense Documentation](https://typesense.org/docs/0.25.1/api/)
- [Youtube Video 1](https://www.youtube.com/watch?v=cIU19iA8I7U&ab_channel=ZaisteProgramming)
- [Youtube Video 2](https://www.youtube.com/watch?v=iO0d_Ncjc7U&ab_channel=CoderOne)
- [React Instant Search](https://www.algolia.com/doc/guides/building-search-ui/what-is-instantsearch/react/?utm_source=instantsearch.js&utm_campaign=repository)

For the product database you will use Typesense Cloud. !You do not need to setup your own server. You will use the following credentials:

- `Search only API Key`: `leYaJxicJjyC6sIE8djLfSzHo3d5taRH`
- `Host`: `5dbt14p7fze0l6sip-1.a1.typesense.net`
- `Port`: `443`
- `Protocol`: `https`
- `Index`: `loyverse-items-kuri`

You will use the following fields to search:

- `name`
- `description`

#### Photos

To display any photos, you will use the following endpoint: `https://dghhemym84nng.cloudfront.net/bofrak-uploads/{sku}.png`
Here the `sku` is the `sku` of the product. It can be found in the `sku` field of the product object. Here's an example: `https://dghhemym84nng.cloudfront.net/bofrak-uploads/11142.png`

A product object looks like this:

```typescript
interface TypesenseItem {
  name: string;
  description: string;
  track_stock: boolean;
  is_composite: boolean;
  is_available_for_sale: boolean;
  inventory: number;
  updated_at: string;
  id: string;
  item: LoyverseItem;
  relationship?: RelationshipDto;
  mother: LoyverseItem;
  is_manually_controlled: boolean;
  profit_margin: number;
  has_low_stock: boolean;
  out_of_stock: boolean;
  cost: number;
  price: number;
  sku: string;
}

interface RelationshipDto {
  mother_id: string;
  children: RelationshipProps[];
}

interface RelationshipProps {
  mother_id: string;
  child_id: string;
  inventory_variant_id: string;
  mother_name: string;
  child_name: string;
}

interface LoyverseItem {
  id: string;
  handle: string;
  item_name: string;
  reference_id: string | null;
  description: string | null;
  category_id: null | string;
  track_stock: boolean;
  sold_by_weight: boolean;
  is_composite: boolean;
  use_production: boolean;
  components: Component[];
  primary_supplier_id: string | null;
  tax_ids: string[];
  modifiers_ids: string[] | null | undefined;
  form: Form;
  color: Color;
  image_url: string | null;
  option1_name: string | null;
  option2_name: string | null;
  option3_name: string | null;
  created_at: string;
  updated_at: string | null;
  deleted_at: string | null;
  variants: Variant[];
}

interface Variant {
  variant_id: string;
  item_id: string;
  sku: string;
  reference_variant_id: string | null;
  option1_value: string | null;
  option2_value: string | null;
  option3_value: string | null;
  barcode: string | null;
  cost: number | null;
  purchase_cost: number | null;
  default_pricing_type: DefaultPricingType;
  default_price: number | null;
  stores: Store[];
  created_at: string | null;
  updated_at: string | null;
  deleted_at: string | null;
}

export enum Form {
  SQUARE = "SQUARE",
  CIRCLE = "CIRCLE",
  SUN = "SUN",
  OCTAGON = "OCTAGON",
}

export enum Color {
  GREY = "GREY",
  RED = "RED",
  PINK = "PINK",
  ORANGE = "ORANGE",
  YELLOW = "YELLOW",
  GREEN = "GREEN",
  BLUE = "BLUE",
  PURPLE = "PURPLE",
}

interface Store {
  store_id: string;
  pricing_type: string;
  price: number | null;
  available_for_sale: boolean;
  optimal_stock: null | number;
  low_stock: null | number;
}
```
