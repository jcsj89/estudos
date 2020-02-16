/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.zeca.lotofacil;
import java.io.FileWriter;
import java.io.IOException;
import org.json.JSONObject;
/**
 *
 * @author Junior
 */
public class Volante {
    
    private int[] numeros = new int[25];//array com 25 posições, numeros do jogo da loto
    JSONObject jsonObject = new JSONObject();
    FileWriter writeFile = null;
    public Volante() {
       this.numeros[0] = 1;
       this.numeros[1] = 21;
       this.numeros[2] = 13;
       this.numeros[3] = 14;
       this.numeros[4] = 16;
       
    }//construtor
    
    public void json(){
        jsonObject.put("num1", 1);
        jsonObject.put("num2", 3);
        jsonObject.put("num3", 6);
        jsonObject.put("num4", 12);
        try{
            writeFile = new FileWriter("saida.json");
            //Escreve no arquivo conteudo do objeto JSON
            writeFile.write(jsonObject.toString());
            writeFile.close();
        }catch( IOException e ){
            e.printStackTrace();
        }
        //Imprime na tela o Objeto JSON para vizualização
        System.out.println(jsonObject);
    }
    public void cadastrarJogo(int num){
        
        for (int i = 0; i < this.numeros.length; i++) {
            if( 0 == this.numeros[i] ){
                
            }
        }
    }
    
    public void imprimirJogo(){
        for ( int i : this.numeros ) {
            System.out.println(i);            
        }
    }
    
    public int[] getNumeros(){
        return this.numeros;
    }
}//classe
