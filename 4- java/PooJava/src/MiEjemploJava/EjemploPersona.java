package MiEjemploJava;

public class EjemploPersona {
    public static void main(String[] args) {
        Persona p = new Persona();
        p.setNombre("Diego");
        p.setEdad(29);
        p.setNss(14689);
        System.out.println("el valor de la variable de instancia p.nss ->" +p.getNss());
        System.out.println("el valor de la variable de instancia p. edad ->"+p.getEdad());
        System.out.println("el valor de la variable de instancia p.nombre -> "+ p.getNombre());


    }
}
