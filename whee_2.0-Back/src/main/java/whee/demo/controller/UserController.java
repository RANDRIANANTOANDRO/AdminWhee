package whee.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import whee.demo.entity.User;
import whee.demo.exception.ResourceNotFoundException;
import whee.demo.repository.UserRepository;

import java.util.List;

@CrossOrigin(origins = { "http://localhost:3001", "http://localhost:3000" }, allowCredentials = "true")
@RestController
@RequestMapping("/api/whee/")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/newCompte")
    public List<User> getAllCompte() {
        return userRepository.findAll();
    }

    //@PostMapping("/newCompte")
    //public User createCompte(@RequestBody User user) {
        //return userRepository.save(user);
    //}

    // build get user by id REST API
    @GetMapping("{id}")
    public ResponseEntity<User> getUserById(@PathVariable  long id){
        User user = userRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("User not exist with id:" + id));
        return ResponseEntity.ok(user);
    }

    // build update user REST API
    @PutMapping("{id}")
    public ResponseEntity<User> updateUser(@PathVariable long id,@RequestBody User userDetails) {
        User updateUser = userRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("User not exist with id: " + id));

        updateUser.setNom(userDetails.getNom());
        updateUser.setPrenom(userDetails.getPrenom());
        updateUser.setMail(userDetails.getMail());
        updateUser.setPassword(userDetails.getPassword());
        updateUser.setGenre(userDetails.getGenre());
        updateUser.setAdresse(userDetails.getAdresse());
        updateUser.setContact(userDetails.getContact());
        updateUser.setPhoto(userDetails.getPhoto());
        updateUser.setDate_naissance(userDetails.getDate_naissance());

        userRepository.save(updateUser);

        return ResponseEntity.ok(updateUser);
    }

    // build delete user REST API
    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> deleteUser(@PathVariable long id){

        User user = userRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("User not exist with id: " + id));

        userRepository.delete(user);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);

    }


    
}
