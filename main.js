const currency = "EUR";
const exact_date = "10.09.2024";

const nbuUrl = new URL("https://bank.gov.ua/");

nbuUrl.pathname = "/NBU_ovdp";

nbuUrl.searchParams.set("val_code", currency);
nbuUrl.searchParams.set("date", exact_date);
nbuUrl.searchParams.set("json", "");

console.log(nbuUrl.toString());