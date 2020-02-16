/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.zeca.lotofacil;

import java.io.FileWriter;
import java.io.IOException;
import java.io.FileReader;
import java.util.Iterator;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
/**
 *
 * @author Junior
 */
public class JSON {

    private JSONParser jSONParser = null;
    private JSONObject jsonObject = null;
    private JSONArray jsonArray = null;
    private FileWriter writeFile = null;

    public JSON() {
        jSONParser = new JSONParser();
        jsonObject = new JSONObject();
    }

    //le um arquivo json e retorn um array com os jogos
    //array multidimensional [][]
    public int[][] LerJSON(String nomeJSON) throws ParseException {
        int[][] jogos = null;
        try {
            Object obj = jSONParser.parse(new FileReader(nomeJSON));
            // A JSON object. Key value pairs are unordered. JSONObject supports java.util.Map interface.
            JSONObject jsonObj = (JSONObject) obj;
            jogos = new int[jsonObj.size()][15];
            

            for (int i = 0; i < jsonObj.size(); i++) {
                jsonArray = (JSONArray) jsonObj.get("jogo" + i);
                
                for (int j = 0; j < jsonArray.size(); j++) {
                    jogos[i][j] = Integer.parseInt(jsonArray.get(j).toString());                    
                }
                jsonArray = null;
            }
            
            // A JSON array. JSONObject supports java.util.List interface.
            JSONArray jsonArray = (JSONArray) jsonObj.get("jogo0");
            //JSONArray jsonArray = (JSONArray) jsonObj;
            // An iterator over a collection. Iterator takes the place of Enumeration in the Java Collections Framework.
            // Iterators differ from enumerations in two ways:
            // 1. Iterators allow the caller to remove elements from the underlying collection during the iteration with well-defined semantics.
            // 2. Method names have been improved.
            Iterator<JSONObject> iterator = jsonArray.iterator();
            while (iterator.hasNext()) {
                System.out.println(iterator.next());
            }
            System.out.println("Tamanho do objeto: " + jsonObj.size());
        } catch (IOException e) {
            e.printStackTrace();
        }
        return jogos;
    }

    //Escreve um arquivo .json com os jogos recebidos pelo array como parametro
    //array multidimensional para varios jogos
    public void escreveJSON(int[][] jogos) {
        //Cria um Objeto JSON        

        for (int i = 0; i < jogos.length; i++) {
            jsonArray = new JSONArray();
            for (int j = 0; j < jogos[i].length; j++) {
                jsonArray.add(j, jogos[i][j]);
            }
            jsonObject.put("jogo" + i, jsonArray);
            jsonArray = null;
        }

        try {
            writeFile = new FileWriter("saida.json");
            //Escreve no arquivo conteudo do Objeto JSON
            writeFile.write(jsonObject.toJSONString());
            writeFile.close();
        } catch (IOException e) {
            e.printStackTrace();
        }

        //Imprimne na Tela o Objeto JSON para vizualização
        System.out.println("Método escreveJSON, conteudo escrito abaixo.");
        System.out.println(jsonObject);
    }

}
