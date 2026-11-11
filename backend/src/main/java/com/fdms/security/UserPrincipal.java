package com.fdms.security;

import com.fdms.entity.User;
import com.fdms.enums.UserRole;
import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.Collections;
import java.util.UUID;

@Getter
@AllArgsConstructor
public class UserPrincipal implements UserDetails {

    private final UUID userId;
    private final String phone;
    private final String nidNo;
    private final String fullName;
    private final String password;
    private final UserRole role;
    private final boolean active;

    public static UserPrincipal create(User user) {
        return new UserPrincipal(
                user.getUserId(),
                user.getPhone(),
                user.getNidNo(),
                user.getFullName(),
                user.getPasswordHash(),
                user.getRole(),
                Boolean.TRUE.equals(user.getIsActive())
        );
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return Collections.singletonList(new SimpleGrantedAuthority("ROLE_" + role.name()));
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return phone;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return active;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return active;
    }
}
