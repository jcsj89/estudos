/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.zeca.lotofacil;

import java.util.Arrays;
import java.util.Comparator;

/**
 *
 * @author Junior
 */
public class testes {
    
    public void teste(){
        int[] num = new int[6];
        num[0] = 56;
        num[1] = 3;
        num[2] = 6;
        num[3] = 12;
        num[4] = 526;
        num[5] = 1;
        
        for (int i = 0; i < 6; i++) {
            System.out.println(num[i]);
        }
        Arrays.sort(num);
        for (int i = 0; i < 6; i++) {
            System.out.println(num[i]);
        }
    }
    
    
    public static void main(String[] args) {
        final Integer[][] doubles = new Integer[][]{{5, 4}, {1, 1}, {4, 6}};
        
    final Comparator<Integer[]> arrayComparator = new Comparator<Integer[]>() {
            @Override
            public int compare(Integer[] o1, Integer[] o2) {
                return o1[1].compareTo(o2[1]);
            }
        };
    Arrays.sort(doubles, arrayComparator);
    
    for (final Integer[] arr : doubles) {
        System.out.println(Arrays.toString(arr));
    }
        new testes().teste();
    }
}
