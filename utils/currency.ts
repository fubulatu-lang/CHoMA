export function currency(value:number){

return new Intl.NumberFormat(

"en-GH",

{

style:"currency",

currency:"GHS"

}

).format(value);

}