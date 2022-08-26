package EjemplosResumen;

public class EjemploAnimal {

    public static void main(String[] args) {

        //Creamos un animal cuyo nombre sera Falco
        Animal miAnimal = new Animal();
        //Le establece,ps 3 años de edad a Falco.
        miAnimal.setEdad(15);
        //Mostraremos el nombre del animal por pantalla
        System.out.println("El nombre es; " + miAnimal.getNombre());
        //Mostramos la edad del animal por pantalla
        System.out.println("y tiene "+ miAnimal.getEdad()+ "años");
        //Este codigo deberia de imprimir "El nombre es: Falco y tiene 3 años"

        Animal animalito = new Animal();
        animalito.setEdad(14);
        animalito.setNombre("Puffy");
        animalito.setRaza("Schnauzer");
        System.out.println("animalito es "+ animalito.getEdad());
        System.out.println("animalito es "+ animalito.getNombre());
        System.out.println("animalito es "+ animalito.getRaza());

    }
}
