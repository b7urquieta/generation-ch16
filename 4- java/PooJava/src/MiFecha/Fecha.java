package MiFecha;

import MiFecha.Fecha;

public class Fecha {


        private int dia;
        private int mes;
        private int año;

    public Fecha() {
    }

    public Fecha(int day, int month, int year) {

        this.dia = day;
        this.mes = month;
        this.año = year;
    }

    public static void main(String[] args) {

      Fecha dt = new Fecha(28, 07,2023);

      System.out.println(dt.dia+ ", " + dt.mes +", "+ dt.año);

    }

    public int getAño() {
        return año;
    }

    public int getMes() {
        return mes;
    }

    public int getDia() {
        return dia;
    }

    public void setAño(int año) {
        this.año = año;
    }

    public void setMes(int mes) {
        this.mes = mes;
    }

    public void setDia(int dia) {
        this.dia = dia;
    }

    public String formatF() {
        return ""+getDia()+"/"+getMes()+"/"+getAño();
    }
}