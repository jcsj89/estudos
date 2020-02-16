/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.zeca.lotofacil;

import org.json.simple.parser.ParseException;

/**
 *
 * @author Junior
 */
public class Jogar {
    
    
    public static void main(String[] args) throws ParseException {
        Volante volante1 = new Volante();
        JSON jsonteste = new JSON();        
        
        volante1.cadastrarJogo( jsonteste.LerJSON("jogos.json") );
        System.out.println(" ");
        volante1.imprimirJogo();
        //volante1.json();
    }
}
