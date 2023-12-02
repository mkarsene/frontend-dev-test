import { Component } from "react";

export interface TypesenseItem {
    map(arg0: (m: any) => import("react/jsx-runtime").JSX.Element): any;
    find(arg0: (product: any) => boolean): unknown;
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
  
  export interface RelationshipDto {
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
  
  export interface LoyverseItem {
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
  
  export interface Variant {
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
    // default_pricing_type: DefaultPricingType;
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
  
  export interface Store {
    store_id: string;
    pricing_type: string;
    price: number | null;
    available_for_sale: boolean;
    optimal_stock: null | number;
    low_stock: null | number;
  }