
exports.up = async function(knex) {
    
    await knex.schema.createTable("cars", (table) => {
           table.increments("id"),
           table.text("vin").notNull().unique(),
           table.text("make").notNull(),
           table.text("model").notNull(),
           table.integer("mileage").notNull(),
           table.text("transmission_type").default(null),
           table.text("title").default(null)
    })
  
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("cars")  
};
