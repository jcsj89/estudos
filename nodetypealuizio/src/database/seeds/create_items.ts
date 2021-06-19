import { Knex } from "knex";

export async function seed(knex: Knex) {
    await knex('items').insert([
        { title: "Papeis e Papelao", image: "papel.png" },
        { title: "Vidros e Lampadas", image: "vidro.png" },
        { title: "Oleo de Cozinha", image: "oleo.png" },
        { title: "Residuos Organicos", image: "organico.png" },
        { title: "Baterias e Pilhas", image: "bateria.png" },
        { title: "Eletronicos", image: "eletronico.png" },
    ]);
}