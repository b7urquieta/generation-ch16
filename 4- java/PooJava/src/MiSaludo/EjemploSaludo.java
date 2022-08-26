package MiSaludo;

public class EjemploSaludo {
    public static void main(String[] args) {
        Saludo objSaludo; //declarar el objeto
        objSaludo = new Saludo(); // crear el objeto con new
        objSaludo.saludar(); // llamando al objeto

        objSaludo.saludar0();

        Saludo objSaludo0 = new Saludo();

        System.out.println(objSaludo0.saludar0());
        System.out.println("este es otro objeto: -> "+ objSaludo0.saludar0());
        objSaludo.textoS = "Hola";

        System.out.println("objetoSaludo0 = " + objSaludo.a);

        objSaludo0.a = 4;
        System.out.println("objSaludo0 = " + objSaludo0);




    }
}
