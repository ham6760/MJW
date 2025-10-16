/*
package com.bo.user.service;

import com.bo.user.domain.User;
import com.bo.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public Optional<User> getUserById(String id) {
        return userRepository.findById(id);
    }

    */
/*public void register(SignupRequest request) {
        if (userRepository.existsById(request.getId()))
            throw new IllegalArgumentException("이미 존재하는 ID입니다");

        User user = User.builder()
                .id(request.getId())
                .password(passwordEncoder.encode(request.getPassword()))
                .name(request.getName())
                .email(request.getEmail())
                .role(Optional.ofNullable(request.getRole()).orElse(Role.USER))
                .build();

        userRepository.save(user);
    }*//*

}
*/
