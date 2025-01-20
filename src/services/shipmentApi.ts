"use server"

export async function getReq(){
   const res = await fetch("https://api.shipengine.com/v1/carriers",{
    method:"GET",

    headers:{
        "API-Key" :process.env.NEXT_PUBLIC_SHIPENGINE_API_KEY as string,
        "Content-Type" :"application/json"
    }
   })

   const data = await res.json()
  
   return data
}
// // -----------------------------------------POST REQUEST

interface Data{
    name:string,
    phone:string,
    address:string,
    city:string,
   
}


export async  function postReq(item:Data){

   const {name,phone,address,city,} = item 

 const res = await fetch("https://api.shipengine.com/v1/labels",{
    method:"POST",

    headers:{
        "API-Key":process.env.NEXT_PUBLIC_SHIPENGINE_API_KEY as string,
        "Content-Type":"application/json"
    },

    body:JSON.stringify({
        "shipment": {
          "carrier_id": "se-1577675",
          "service_code": "usps_priority_mail_express",
          "ship_to": {
            "name": name,
            "phone": phone,
            "address_line1":address,
            "city_locality":city,
            "state_province": "CA",
            "postal_code": "95128",
            "country_code": "US",
            "address_residential_indicator": "yes"
          },
          "ship_from": {
            "name":"Ali",
            "company_name":"XYZ" ,
            "phone":"+92400076543",
            "address_line1":"NY main street",
            "city_locality": "Newyark",
            "state_province": "TX",
            "postal_code": "78731",
            "country_code": "US",
            "address_residential_indicator": "no"
          },
          "packages": [
            {
              "weight": {
                "value": 6,
                "unit": "ounce"
              },
              "dimensions": {
                "height": 11,
                "width": 5,
                "length": 3,
                "unit": "inch"
              }
            }
          ]
        }
      })

    
 })

 const data = await res.json()
 return data

}
