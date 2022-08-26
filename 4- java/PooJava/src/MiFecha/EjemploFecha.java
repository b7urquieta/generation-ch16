package MiFecha;


public class EjemploFecha {

    public static void main(String[] args) {
        Fecha dt = new Fecha();
        dt.setDia(31);
        dt.setAño(2000);
        dt.setMes(12);

        System.out.println("El año es: " + dt.getAño());
        System.out.println("El dia es: " + dt.getDia());
        System.out.println("El mes es: " + dt.getMes());

        Fecha dc = new Fecha(12,3,2021);
        dc.formatF();
        System.out.println(dc.formatF());

        System.out.println(dt.formatF());

    }

}
