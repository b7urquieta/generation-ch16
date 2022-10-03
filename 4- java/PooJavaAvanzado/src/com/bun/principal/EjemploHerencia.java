package com.bun.principal;

import com.bun.herencia.BasePadre;
import com.bun.herencia.Hija;
import com.bun.herencia.Hijo;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class EjemploHerencia {

    public static void main(String[] args) {
        Execute ex = new Execute();
        ex.Execute();
        Hija h = new Hija();
        h.visualizarA();
        Hijo ho = new Hijo();
        ho.setA(14689);
        ho.visualizarABC();

        BasePadre objB = new BasePadre();
        objB.setA(2357);

        Object miObj = new BasePadre();


        System.out.println("Atributo de clase Base Padre -> " + objB.getB());

        System.out.println("Atributo de Clase Hijo -> " + ho.getA());

        int x = 0;
        do {
            System.out.println(x);
            x++;
        } while (x < 10);


        int y = 0;
        while (y < 10) {
            System.out.println(y);
            y++;
        }

        public static void main(String[] args) {
            int x=0;
            System.out.println(x);
            x++;

    }
}
