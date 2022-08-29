package com.bun.principal;

import com.bun.herencia.BasePadre;

import java.util.Scanner;

public class Execute {
    public void Execute() {
        BasePadre basePadre = new BasePadre();
        Scanner sc = new Scanner(System.in);
        System.out.println("Ingrese el valor de a (es entero)");
        int a= sc.nextInt();
        basePadre.setA(a);
        System.out.println("Ingrese el valor de b (es double)");
        double b= sc.nextDouble();
        basePadre.setB(b);
        System.out.println("Ingrese el valor de c (es string)");
        String c=sc.next();
        basePadre.setC(c);
        basePadre.visualizarA();
        basePadre.visualizarABC();
    }
}