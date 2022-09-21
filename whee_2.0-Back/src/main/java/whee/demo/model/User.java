package whee.demo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "newCompte")

public class User {

    @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    
    @Column (name = "nom")
    private String Nom;

    @Column (name = "prenom")
    private String Prenom;

    @Column (name = "mail")
    private String Mail;

    @Column (name = "password")
    private String Password;

    @Column (name = "genre")
    private String Genre;

    @Column (name = "adresse")
    private String Adresse;

    @Column (name = "contact")
    private String Contact;

    @Column (name = "photo")
    private String Photo;

    @Column (name = "date_naissance")
    private String Date_naissance;

    public User() {

    }

    
    public User(String nom, String prenom, String mail, String password, String genre, String adresse, String contact,
            String photo, String date_naissance) {
        Nom = nom;
        Prenom = prenom;
        Mail = mail;
        Password = password;
        Genre = genre;
        Adresse = adresse;
        Contact = contact;
        Photo = photo;
        Date_naissance = date_naissance;
    }
    public long getId() {
        return id;
    }
    public void setId(long id) {
        this.id = id;
    }
    public String getNom() {
        return Nom;
    }
    public void setNom(String nom) {
        Nom = nom;
    }
    public String getPrenom() {
        return Prenom;
    }
    public void setPrenom(String prenom) {
        Prenom = prenom;
    }
    public String getMail() {
        return Mail;
    }
    public void setMail(String mail) {
        Mail = mail;
    }
    public String getPassword() {
        return Password;
    }
    public void setPassword(String password) {
        Password = password;
    }
    public String getGenre() {
        return Genre;
    }
    public void setGenre(String genre) {
        Genre = genre;
    }
    public String getAdresse() {
        return Adresse;
    }
    public void setAdresse(String adresse) {
        Adresse = adresse;
    }
    public String getContact() {
        return Contact;
    }
    public void setContact(String contact) {
        Contact = contact;
    }
    public String getPhoto() {
        return Photo;
    }
    public void setPhoto(String photo) {
        Photo = photo;
    }
    public String getDate_naissance() {
        return Date_naissance;
    }
    public void setDate_naissance(String date_naissance) {
        Date_naissance = date_naissance;
    }
    

    
}
