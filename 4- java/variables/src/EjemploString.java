public class EjemploString {
    public static void main(String[] args){
        String curso = "No entendiendo el curso en Java";
        System.out.println("curso = " + curso);
        String nombre = "Brandon";
        String resultado = new String("No entendiendo el curso en java");
        System.out.println("resultado = " + resultado);

        boolean esigual = curso == resultado;
        System.out.println("esigual = " + esigual);

        esigual = curso.equalsIgnoreCase(resultado);
        System.out.println("esigual = " + esigual);

        String concat = curso +" "+ nombre;
        System.out.println("concat = " + concat);
        String dia = "Jueves";

        String concat1 = concat.concat(" ").concat(dia);
    }
}



