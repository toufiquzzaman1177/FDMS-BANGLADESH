package com.fdms.service;

import com.fdms.dto.AuthRequest;
import com.fdms.dto.AuthResponse;
import com.fdms.dto.RegisterRequest;
import com.fdms.entity.User;
import com.fdms.repository.UserRepository;
import com.fdms.security.JwtTokenProvider;
import com.fdms.security.UserPrincipal;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final JwtTokenProvider tokenProvider;

    public AuthResponse authenticateUser(AuthRequest loginRequest) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        loginRequest.getIdentifier(),
                        loginRequest.getPassword()
                )
        );

        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = tokenProvider.generateToken(authentication);
        UserPrincipal userPrincipal = (UserPrincipal) authentication.getPrincipal();

        return AuthResponse.builder()
                .token(jwt)
                .tokenType("Bearer")
                .userId(userPrincipal.getUserId())
                .fullName(userPrincipal.getFullName())
                .phone(userPrincipal.getPhone())
                .role(userPrincipal.getRole())
                .build();
    }

    @Transactional
    public AuthResponse registerUser(RegisterRequest signUpRequest) {
        if (userRepository.existsByPhone(signUpRequest.getPhone())) {
            throw new IllegalArgumentException("Phone number is already registered!");
        }

        if (userRepository.existsByNidNo(signUpRequest.getNidNo())) {
            throw new IllegalArgumentException("National ID number is already registered!");
        }

        User user = User.builder()
                .nidNo(signUpRequest.getNidNo())
                .fullName(signUpRequest.getFullName())
                .phone(signUpRequest.getPhone())
                .passwordHash(passwordEncoder.encode(signUpRequest.getPassword()))
                .role(signUpRequest.getRole())
                .isActive(true)
                .build();

        userRepository.save(user);

        // Auto authenticate after registration
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(signUpRequest.getPhone(), signUpRequest.getPassword())
        );

        String jwt = tokenProvider.generateToken(authentication);

        return AuthResponse.builder()
                .token(jwt)
                .tokenType("Bearer")
                .userId(user.getUserId())
                .fullName(user.getFullName())
                .phone(user.getPhone())
                .role(user.getRole())
                .build();
    }
}
