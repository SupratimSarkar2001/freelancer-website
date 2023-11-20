package com.api.freelance.service;

import com.api.freelance.entity.Project;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ProjectService {
    List<Project> getAllProject();
    List<Project> getProjectByCreatedById(Long createdById);
    List<Project> getProjectByAssignedToId(Long assignedToId);
    Project addProject(Project project);
    Project updateProject(Long id,Project project);
    List<Project> getAllPendingProject();
    String deleteById(Long id);
}
