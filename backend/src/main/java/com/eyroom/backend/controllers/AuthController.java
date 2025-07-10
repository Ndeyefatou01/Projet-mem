package com.eyroom.backend.controllers;

import com.eyroom.backend.models.Utilisateur;
import com.eyroom.backend.services.UtilisateurService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*") // autorise Angular à communiquer avec l'API
public class AuthController {

    @Autowired
    private UtilisateurService utilisateurService;

    @PostMapping("/register")
    public ResponseEntity<Map<String, String>> inscription(@RequestBody Utilisateur utilisateur) {
        utilisateurService.enregistrer(utilisateur);
        Map<String, String> response = new HashMap<>();
        response.put("message", "Inscription réussie");
        return ResponseEntity.ok(response);
    }

    @PostMapping("/login")
    public ResponseEntity<Map<String, String>> connexion(@RequestBody Map<String, String> body) {
        String email = body.get("email");
        String motDePasse = body.get("motDePasse");

        Optional<Utilisateur> utilisateur = utilisateurService.trouverParEmail(email);
        Map<String, String> response = new HashMap<>();

        if (utilisateur.isPresent() && utilisateur.get().getMotDePasse().equals(motDePasse)) {
            response.put("message", "Connexion réussie");
        } else {
            response.put("message", "Email ou mot de passe incorrect");
        }

        return ResponseEntity.ok(response);
    }
}
