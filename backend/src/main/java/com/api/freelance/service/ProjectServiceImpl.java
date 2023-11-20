package com.api.freelance.service;

import com.api.freelance.entity.Project;
import com.api.freelance.repository.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProjectServiceImpl implements ProjectService{
    @Autowired
    private ProjectRepository projectRepository;
    @Override
    public List<Project> getAllProject() {
        return projectRepository.findAll();
    }

    @Override
    public List<Project> getProjectByCreatedById(Long createdById) {
        return projectRepository.findAllByCreatedById(createdById);
    }

    @Override
    public List<Project> getProjectByAssignedToId(Long assignedToId) {
        return projectRepository.findAllByAssignedToId(assignedToId);
    }

    @Override
    public Project addProject(Project project) {
        return projectRepository.save(project);
    }

    @Override
    public Project updateProject(Long id,Project project) {
        Project currentProject= projectRepository.findById(id).orElseThrow(() -> new RuntimeException("Project not found with id: "+ id));
        currentProject.setTitle(project.getTitle());
        currentProject.setDescription(project.getDescription());
        currentProject.setAssignedToId(project.getAssignedToId());
        currentProject.setCreatedById(project.getCreatedById());

        return projectRepository.save(currentProject);
    }

    @Override
    public List<Project> getAllPendingProject() {
        return projectRepository.findAllPendingProject();
    }

    @Override
    public String deleteById(Long id) {
        projectRepository.deleteById(id);
        return "SuccessFully Deleted";
    }
}
