package com.jobrestapi.JobRestAPI.Job;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

//We are using RestController because Response we are sending is the JSON Format
@RestController
public class JobContoller
{
     @Autowired
    JobService jobService;

    @GetMapping("/jobs")
    public List<job> givealljobs(){
       return jobService.getallJobs();
    }

    @PostMapping("/jobs")
    public String addjob(@RequestBody job jobadd){
      jobService.addJob(jobadd);
        return "The Job Added SucessFully";
    }

    @GetMapping("/jobs/{id}")
    public ResponseEntity<job> SearchjobByID(@PathVariable Long id){
        job jobs = jobService.getJobById(id);
        if(jobs != null){
            return new ResponseEntity<>(jobs,HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);

    }

    @DeleteMapping("/jobs/{id}")
    public ResponseEntity  DeleteJobById(@PathVariable Long id){
       boolean result =  jobService.DeleteJobByID(id);
       if(result){
           return new ResponseEntity<>("Job Deleted Successfully",HttpStatus.OK);
        }
       return  new ResponseEntity<>("Id Not founded ",HttpStatus.NOT_FOUND);



    }
}
