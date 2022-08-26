package EjemplosResumen; // Se le declara un paquete

public class Animal {

    public String raza;
    public String nombre;
    public int edad;

    public Animal(String raza, String nombre, int edad) {
        this.raza = raza;
        this.nombre = nombre;
        this.edad = edad;
    }

    public Animal(){
        String nuevoNombre = new String();
        nombre = nuevoNombre; // Se le da un nombre al animal
    }

    //Metodo para obtener la edad del animal


    public int getEdad() {
        return edad;
    }

    //Metodo para establecer la edad del animal

    public void setEdad(int edad) {
        this.edad = edad;
    }

    //Metodo para obtener el nombre del animal

    public String getNombre() {
        return nombre;
    }
    
    public String setNombre() {
        return this.nombre;
    }

    public void setRaza(String schnauzer) {
    }

    public String getRaza() {
        return raza;
    }

    public void setNombre(String puffy) {
    }
}
