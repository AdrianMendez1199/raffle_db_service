import * as Knex from "knex";

export async function seed(knex: Knex): Promise<any> {
  // Deletes ALL existing entries
  return knex("users").del()
    .then(() => {
      // Inserts seed entries
      return knex("users").insert([
        { name: "Adrian", identificationCard: "40211031212", code: 1234 },
        { name: "Wilo", identificationCard: "40211031211", code: 1235 },
        { name: "Raymon", identificationCard: "40211031215", code: 1238 },
      ]);
    });
}

