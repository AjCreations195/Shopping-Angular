export interface ProductModelServer{
    id:number;
    title:string;
    category:string;
    description:string;
    image:string;
    price:number;
    quantity:number;
}

export interface ServerResponse{
    count:number;
    products:ProductModelServer[];
}