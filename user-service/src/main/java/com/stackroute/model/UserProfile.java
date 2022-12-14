package com.stackroute.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.stereotype.Component;

import java.util.Date;

@Data
@Document(collection = "userCollection")
public class UserProfile {
    @Id
    private String email;
    private String firstName;
    private String lastName;
    private String dob;
    private String gender;
     private String password;
    private String contactNumber;

   public UserProfile(String email, String password) {
       super();
       this.email = email;
        this.password = password;
   }
   public UserProfile(){
        
   }
}

