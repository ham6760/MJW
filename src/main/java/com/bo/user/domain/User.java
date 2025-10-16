/*
package com.bo.user.domain;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import java.util.Date;

@Entity
@Table(name = "users")
@Getter
@NoArgsConstructor(force = true, access = AccessLevel.PROTECTED)
public class User {
    @Id
    private String id;

    private String password;

    @Column(nullable = false)
    private String name;

    @Column(unique = true)
    private String email;

    @Column(nullable = false)
    private String emailYn;

    private String provider;

    @Column(unique = true)
    private String providerId;

    @CreationTimestamp
    @Temporal(TemporalType.TIMESTAMP)
    private Date created_at;

    @Temporal(TemporalType.TIMESTAMP)
    private Date updated_at;

    public User(String id, String password, String name, String email, String emailYn, String provider, String providerId) {
        this.id = id;
        this.password = password;
        this.name = name;
        this.email = email;
        this.emailYn = emailYn;
        this.provider = provider;
        this.providerId = providerId;
    }
}
*/
