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
    private int[][] frequencia;//frequencia dos numeros nos jogos
    private int numeroDePares; //padrão 8, quantidade de números pares no jogo
    private Volante volante = null;
    private JSON json = null;
    
    //construtor
    public Jogar() {
        this.volante = new Volante();
        this.json = new JSON();
        this.frequencia = new int[25][1];
        numeroDePares = 8;
    }
    public void cadastrarJogos(String json) throws ParseException{
        this.volante.cadastrarJogo( this.json.LerJSON( json ) );
    }
    
    //Método calcula a frequencia dos numeros dos jogos
    public void calcularFrequencia(){
        
        for (int i = 0; i < this.volante.getJogos().length; i++) {
            for (int j = 0; j < this.volante.getJogos()[i].length; j++) {
                
                switch( this.volante.getJogos()[i][j] ){
                    case 1:
                        this.frequencia[0][0]++;
                        break;
                    case 2:
                        this.frequencia[1][0]++;
                        break;
                    case 3:
                        this.frequencia[2][0]++;
                        break;
                    case 4:
                        this.frequencia[3][0]++;
                        break;
                    case 5:
                        this.frequencia[4][0]++;
                        break;
                    case 6:
                        this.frequencia[5][0]++;
                        break;
                    case 7:
                        this.frequencia[6][0]++;
                        break;
                    case 8:
                        this.frequencia[7][0]++;
                        break;
                    case 9:
                        this.frequencia[8][0]++;
                        break;
                    case 10:
                        this.frequencia[9][0]++;
                        break;
                    case 11:
                        this.frequencia[10][0]++;
                        break;
                    case 12:
                        this.frequencia[11][0]++;
                        break;
                    case 13:
                        this.frequencia[12][0]++;
                        break;
                    case 14:
                        this.frequencia[13][0]++;
                        break;
                    case 15:
                        this.frequencia[14][0]++;
                        break;
                    case 16:
                        this.frequencia[15][0]++;
                        break;
                    case 17:
                        this.frequencia[16][0]++;
                        break;
                    case 18:
                        this.frequencia[17][0]++;
                        break;
                    case 19:
                        this.frequencia[18][0]++;
                        break;
                    case 20:
                        this.frequencia[19][0]++;
                        break;
                    case 21:
                        this.frequencia[20][0]++;
                        break;
                    case 22:
                        this.frequencia[21][0]++;
                        break;
                    case 23:
                        this.frequencia[22][0]++;
                        break;
                    case 24:
                        this.frequencia[23][0]++;
                        break;
                    case 25:
                        this.frequencia[24][0]++;
                        break;
                    default :
                        break;
                }
            }
        }
    }//frequencia
    public void imprimirFrequencia(){
        for (int i = 0; i < this.frequencia.length; i++) {
            System.out.println("frequencia " + i);
            for (int j = 0; j < this.frequencia[i].length; j++) {
                System.out.println(this.frequencia[i][j]);
            }
        }
    }
       
    
    
    
    
    
    
    
    
    public static void main(String[] args) throws ParseException {
        Jogar jogar = new Jogar();
        jogar.cadastrarJogos("jogos.json");
        jogar.calcularFrequencia();
        
        jogar.imprimirFrequencia();
        jogar.volante.imprimirJogo();
        
    }//main    
}//classe
