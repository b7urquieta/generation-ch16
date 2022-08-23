import java.util.Scanner;

public class Edad {

    public static void main(String[] args) {

        // Determinar si es una mayor de edad

        // tener la edad - pedir al usuario
        // condicional para saber si es menor de 18
        System.out.println();
        // let nombre = prompt("Escribe tu edad")
        Scanner escaner = new Scanner(System.in); // instanciar
        System.out.println("Escribe tu edad");
        int edad = escaner.nextInt();
        escaner.close(); // cuando ya no se necesita leer mas datos

        if(edad >= 18){
            System.out.println("Eres mayor de edad");
        } else {
            System.out.println("Eres menor de edad");
        }

        // Operador ternario
        String resultado = (edad >= 18) ? "Eres mayor de edad" : "Eres menor de edad";
        System.out.println(resultado);


    }

}
