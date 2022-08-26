package llamadasSys;

import MenuP.MenuOp;
import MiEjemploJava.Persona;
import MiFecha.Fecha;
import MiSaludo.Saludo;

import java.util.Scanner;

public class EnlaceSys {

    public void enlazar(){
        Scanner sc = new Scanner(System.in);
        MenuOp menuOp = new MenuOp();
        int op;

        do {
            menuOp.menu();
            System.out.println("Elija una opcion -> ");
            op=sc.nextInt();
            //int op=2;

            switch (op) {
                case 1:
                    Saludo s = new Saludo();
                    s.saludar();
                    System.out.println(s.saludar0());
                    break;

                case 2:
                    Persona p = new Persona();
                    p.setNombre("Brandon");
                    p.setEdad(29);
                    p.setNss(454);
                    System.out.println("el valor de la variable de instancia p.nss ->" +p.getNss());
                    System.out.println("el valor de la variable de instancia p. edad ->"+p.getEdad());
                    System.out.println("el valor de la variable de instancia p.nombre -> "+ p.getNombre());

                    break;

                case 3:
                    Fecha dc = new Fecha(12,3,2021);
                    dc.formatF();
                    System.out.println(dc.formatF());

                    break;
                case 4:
                    System.out.println("aqui va la actividad del dia");
                    break;
                default:
                    System.out.println("opcion no valida --->");
                    op= sc.nextInt();
                    break;

            }

        }while(op<=5);


    }

}