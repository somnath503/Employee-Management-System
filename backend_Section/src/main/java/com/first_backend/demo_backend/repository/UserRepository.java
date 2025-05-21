package com.first_backend.demo_backend.repository;
import com.first_backend.demo_backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User , Long> {


}
