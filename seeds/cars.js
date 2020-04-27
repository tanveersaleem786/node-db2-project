
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  //return knex('cars').del()
  await knex("cars").truncate()
    
  // Inserts seed entries
  await knex('cars').insert([
    {id: 1, vin: "JH4DC4440SS014645", make:"BMW", model: "3-Series", mileage: "5000", transmission_type: "Manual", title: "salvage"},
    {id: 2, vin: "1FAFP45X83F403461", make:"BMW", model: "4-Series", mileage: "2000", transmission_type: "Automatic", title: "clear"},
    {id: 3, vin: "2T1BR32E56C640079", make:"Honda", model: "Civic 2005", mileage: "70000", transmission_type: null, title: "salvage"},
    {id: 4, vin: "KL5JD56Z85K139936", make:"Toyota", model: "Sienna 2007", mileage: "15000", transmission_type: "Automatic", title: "clear"},
    {id: 5, vin: "4S3BJ6321N6900903", make:"Volkswagen", model: "Golf 2010", mileage: "4000", transmission_type: "Manual", title: "salvage"}
  ]);
    
};
