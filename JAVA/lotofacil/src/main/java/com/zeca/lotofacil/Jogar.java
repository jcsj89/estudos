/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.zeca.lotofacil;

import java.util.Arrays;
import java.util.Comparator;
import java.util.Random;
import java.util.Scanner;
import org.json.simple.parser.ParseException;

/**
 *
 * @author Junior
 */
public class Jogar {

    private int[] frequencia = null;//frequencia dos numeros nos jogos
    private Integer[][] freqPar = null;//frequencia dos numeros nos jogos
    private Integer[][] freqImpar = null;//frequencia dos numeros nos jogos   
    private Integer[][] jogos = null;

    private Integer freqUsada;
    private Integer numeroDePares; //padrão 8, quantidade de números pares no jogo
    private Integer numeroDeJogos;//numero de jogos(15 numeros) que quer gerar
    private Boolean QtdOk;
    private Volante volante = null;
    private JSON json = null;

    //construtor
    public Jogar() {
        this.volante = new Volante();
        this.json = new JSON();

        this.frequencia = new int[25];
        this.freqPar = new Integer[12][2];
        this.freqImpar = new Integer[13][2];

        this.freqUsada = 4;
        this.numeroDeJogos = 1;
        this.numeroDePares = 8;

        this.QtdOk = false;
    }

    //comparador de array bidimensional
    final Comparator<Integer[]> arrayComparator = new Comparator<Integer[]>() {
        @Override
        public int compare(Integer[] o1, Integer[] o2) {
            return o2[1].compareTo(o1[1]);
        }
    };

    public void cadastrarJogos(String json) throws ParseException {
        this.volante.cadastrarJogo(this.json.LerJSON(json));
    }

    //Método calcula a frequencia dos numeros dos jogos
    public void calcularFrequencia() {

        for (int i = 0; i < this.volante.getJogos().length; i++) {
            for (int j = 0; j < this.volante.getJogos()[i].length; j++) {

                switch (this.volante.getJogos()[i][j]) {
                    case 1:
                        this.frequencia[0]++;
                        break;
                    case 2:
                        this.frequencia[1]++;
                        break;
                    case 3:
                        this.frequencia[2]++;
                        break;
                    case 4:
                        this.frequencia[3]++;
                        break;
                    case 5:
                        this.frequencia[4]++;
                        break;
                    case 6:
                        this.frequencia[5]++;
                        break;
                    case 7:
                        this.frequencia[6]++;
                        break;
                    case 8:
                        this.frequencia[7]++;
                        break;
                    case 9:
                        this.frequencia[8]++;
                        break;
                    case 10:
                        this.frequencia[9]++;
                        break;
                    case 11:
                        this.frequencia[10]++;
                        break;
                    case 12:
                        this.frequencia[11]++;
                        break;
                    case 13:
                        this.frequencia[12]++;
                        break;
                    case 14:
                        this.frequencia[13]++;
                        break;
                    case 15:
                        this.frequencia[14]++;
                        break;
                    case 16:
                        this.frequencia[15]++;
                        break;
                    case 17:
                        this.frequencia[16]++;
                        break;
                    case 18:
                        this.frequencia[17]++;
                        break;
                    case 19:
                        this.frequencia[18]++;
                        break;
                    case 20:
                        this.frequencia[19]++;
                        break;
                    case 21:
                        this.frequencia[20]++;
                        break;
                    case 22:
                        this.frequencia[21]++;
                        break;
                    case 23:
                        this.frequencia[22]++;
                        break;
                    case 24:
                        this.frequencia[23]++;
                        break;
                    case 25:
                        this.frequencia[24]++;
                        break;
                    default:
                        break;
                }
            }
        }
        //cadastra frequencia pares e impares
        int indexPar = 0;
        int indexImpar = 0;
        for (int i = 0; i < this.frequencia.length; i++) {
            if (i % 2 == 0) {

                this.freqImpar[indexImpar][0] = i + 1;
                this.freqImpar[indexImpar][1] = this.frequencia[i];
                indexImpar++;
            } else {

                this.freqPar[indexPar][0] = i + 1;
                this.freqPar[indexPar][1] = this.frequencia[i];
                indexPar++;
            }
        }
        Arrays.sort(this.freqPar, arrayComparator);
        Arrays.sort(this.freqImpar, arrayComparator);
    }//frequencia
    //mostra a frequencia dos numeros

    public void imprimirFrequencia() {
        System.out.println();
        System.out.printf("Frequencia dos Números Sorteados\n");
        for (int i = 0; i < this.frequencia.length; i++) {
            System.out.printf("Numero:\t%d Frequencia:\t%d\n", i + 1, this.frequencia[i]);
        }
        System.out.println();
    }

    public void imprimirParesFreq() {
        System.out.printf("Numero\tFrequencia\n");
        for (final Integer[] arr : freqPar) {
            System.out.println(Arrays.toString(arr));
        }
    }

    public void imprimirImparesFreq() {
        System.out.printf("Numero\tFrequencia\n");
        for (final Integer[] arr : this.freqImpar) {
            System.out.println(Arrays.toString(arr));
        }
    }

    public void cadastrarOpcoes() {
        Scanner input = new Scanner(System.in);
        System.out.printf("\nQUANTOS NUMEROS PARES SEUS JOGOS VAO TER?\t");
        this.numeroDePares = input.nextInt();
        System.out.printf("\nQUANTOS NUMEROS DE MAIOR FREQUENCIA VOCE VAI USAR?\t");
        this.freqUsada = input.nextInt();
    }

    public void cadastrarQtd() {
        if (QtdOk == false) {
            Scanner input = new Scanner(System.in);
            System.out.printf("QUANTOS JOGOS VOCE QUER FAZER?\t");
            this.numeroDeJogos = input.nextInt();
            this.jogos = new Integer[numeroDeJogos][15];
            this.QtdOk = true;
        } else {
            System.out.println("Quantidade já cadastrada!");
        }

    }

    public void fazerJogos() {
        Integer[] numeros = new Integer[]{1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25};
        Random gerador = new Random();
        Integer numGerado = 0;
        int contaPar = this.freqUsada;

        Integer[] jogo = new Integer[15];

        for (int i = 0; i < freqUsada; i++) {
            jogo[i] = this.freqPar[i][0];
            jogo[i + freqUsada] = this.freqImpar[i][0];
            for (int j = 0; j < numeros.length; j++) {
                if (numeros[j] == jogo[i] || numeros[j] == jogo[i + freqUsada]) {
                    numeros[j] = 0;
                }
            }
        }

        for (int i = 0; i < 15 - freqUsada * 2; i++) {
            Boolean aux = true;
            while (aux) {
                numGerado = gerador.nextInt(26);
                //for para preencher com a qtd de numeros pares
                for (int j = 0; j < numeros.length; j++) {
                    if (aux && numGerado == numeros[j] && numGerado != 0) {
                        if (numGerado % 2 == 0 && contaPar < this.numeroDePares) {
                            contaPar++;
                            numeros[j] = 0;
                            jogo[i + freqUsada * 2] = numGerado;
                            aux = false;
                        }
                    }
                }

                //for para preencher numeros impares restantes
                for (int j = 0; j < numeros.length; j++) {
                    if (aux && numGerado == numeros[j] && numGerado != 0) {
                        if (numGerado % 2 != 0 && contaPar >= this.numeroDePares) {
                            numeros[j] = 0;
                            jogo[i + freqUsada * 2] = numGerado;
                            aux = false;
                        }
                    }
                }
            }
        }
        if (QtdOk && numeroDeJogos > 0) {
            this.jogos[numeroDeJogos - 1] = jogo;
            numeroDeJogos--;
        }

    }//fazer jogos

    public void imprimirJogosGerados() {
        if (QtdOk && this.numeroDeJogos == 0) {
            Arrays.sort(jogos, arrayComparator);
            for (Integer[] arr : jogos) {
                System.err.println(Arrays.toString(arr));
            }
        }else{
            System.out.println("Termine os jogos");
        }
    }
    public void gravarArquivo(){
        this.getJson().escreveJSON(jogos);
    }
    public void menu() {
        int opcao = 1;
        Scanner input = new Scanner(System.in);

        while (opcao != 0) {

            System.out.printf("1\t-Imprimir Jogos Cadastrados\n");
            System.out.printf("2\t-Imprimir Frequencia dos Jogos\n");
            System.out.printf("3\t-Imprimir Pares Maior Frequencia\n");
            System.out.printf("4\t-Imprimir Impares Maior Frequencia\n");
            System.out.printf("5\t-MUDE AS OPÇÕES DE JOGO\n");
            System.out.printf("6\t-INFORME QUANTOS JOGOS VAI FAZER\n");
            System.out.printf("7\t-GERAR JOGOS\n");
            System.out.printf("8\t-IMPRIMIR JOGOS GERADOS\n");
            System.out.printf("9\t-GRAVAR JOGOS EM saida.json\n");
            System.out.printf("0\t-ENCERRAR\n");
            System.out.printf("Didite a opção:\t");
            opcao = input.nextInt();
            switch (opcao) {
                case 1:
                    getVolante().imprimirJogo();
                    break;
                case 2:
                    this.imprimirFrequencia();
                    break;
                case 3:
                    this.imprimirParesFreq();
                    break;
                case 4:
                    this.imprimirImparesFreq();
                    break;
                case 5:
                    this.cadastrarOpcoes();
                    break;
                case 6:
                    this.cadastrarQtd();
                    break;
                case 7:
                    this.fazerJogos();
                    break;
                case 8:
                    this.imprimirJogosGerados();
                    break;
                case 9:
                    this.gravarArquivo();
                    break;
                case 0:
                    break;
            }
        }
    }

    public static void main(String[] args) throws ParseException {
        Jogar jogar = new Jogar();
        jogar.cadastrarJogos("jogos.json");//cadastra jogos do arquivo json para o volante
        jogar.calcularFrequencia();// calcula a frequencia na qual os numeros saem, com base no cadastro

        jogar.menu();

    }//main    

    public Volante getVolante() {
        return volante;
    }

    public JSON getJson() {
        return json;
    }

    public void debug(String txt) {
        System.out.println(txt);
    }
}//classe
