package com.api.freelance.controller;

import com.api.freelance.entity.Project;
import com.api.freelance.service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/projects")
public class ProjectController {
    @Autowired
    private ProjectService projectService;

    @GetMapping("/all")
    public ResponseEntity<List<Project>> getAllProjects() {
        List<Project> projects = projectService.getAllProject();
        return new ResponseEntity<>(projects, HttpStatus.OK);
    }

    @CrossOrigin
    @GetMapping("/createdById")
    public ResponseEntity<List<Project>> getProjectsByCreatedById(@RequestParam Long createdById) {
        List<Project> projects = projectService.getProjectByCreatedById(createdById);
        return new ResponseEntity<>(projects, HttpStatus.OK);
    }

    @CrossOrigin
    @GetMapping("/assignedToId")
    public ResponseEntity<List<Project>> getProjectsByAssignedToId(@RequestParam Long assignedToId) {
        List<Project> projects = projectService.getProjectByAssignedToId(assignedToId);
        return new ResponseEntity<>(projects, HttpStatus.OK);
    }

    @CrossOrigin
    @PostMapping("/add")
    public ResponseEntity<Project> addProject(@RequestBody Project project) {
        Project addedProject = projectService.addProject(project);
        return new ResponseEntity<>(addedProject, HttpStatus.CREATED);
    }

    @CrossOrigin
    @PutMapping("/update/{projectId}")
    public ResponseEntity<Project> updateProject(@PathVariable Long projectId, @RequestBody Project project) {
        project.setId(projectId);
        Project updatedProject = projectService.updateProject(projectId,project);
        return new ResponseEntity<>(updatedProject, HttpStatus.OK);
    }

    @CrossOrigin
    @GetMapping("/pending")
    public ResponseEntity<List<Project>> getAllPendingProjects() {
        List<Project> pendingProjects = projectService.getAllPendingProject();
        return new ResponseEntity<>(pendingProjects, HttpStatus.OK);
    }

    @CrossOrigin
    @DeleteMapping("/delete/{projectId}")
    public ResponseEntity<String> deleteProjectById(@PathVariable Long projectId){
        String message=projectService.deleteById(projectId);
        return new ResponseEntity<>(message,HttpStatus.OK);
    }
}
