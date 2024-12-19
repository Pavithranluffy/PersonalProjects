package com.jobrestapi.JobRestAPI.Job;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

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
}
