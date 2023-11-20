package com.api.freelance.repository;

import com.api.freelance.entity.Project;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProjectRepository extends JpaRepository<Project,Long> {
    List<Project> findAllByCreatedById(Long createdById);
    List<Project> findAllByAssignedToId(Long assignedToId);
    @Query("SELECT p FROM Project p WHERE p.assignedToId IS NULL")
    List<Project> findAllPendingProject();
}
