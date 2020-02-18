/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.zeca.lotofacil;

/**
 *
 * @author Junior
 */
public class Volante {
    
    private int[][] jogos = null;

    public Volante() {//quantidade de jogos para criar
        //jogos = new int[qtd][15];
    }//construtor

    public void cadastrarJogo(int[][] jogos) {//recebe os jogos para manipulação
        this.jogos = jogos;
    }

    public void imprimirJogo() {//imprime os jogos cadastrados
        if (jogos.length > 0) {
            for (int i = 0; i < jogos.length; i++) {
                System.out.printf("Jogo %d [",i);
                for (int j = 0; j < jogos[i].length; j++) {
                    System.out.printf("%d  ",jogos[i][j]);
                }
                System.out.printf("]\n");
            }
        }
    }

    public int[][] getJogos() {
        return jogos;
    }      
    
}//classe
