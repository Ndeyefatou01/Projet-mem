package com.eyroom.backend.services;

import com.eyroom.backend.models.Utilisateur;
import java.util.Optional;

public interface UtilisateurService {
    Utilisateur enregistrer(Utilisateur utilisateur);
    Optional<Utilisateur> trouverParEmail(String email);
}
