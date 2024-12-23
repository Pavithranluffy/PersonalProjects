package com.jobrestapi.JobRestAPI.Job.Impl;


import com.jobrestapi.JobRestAPI.Job.JobService;
import com.jobrestapi.JobRestAPI.Job.job;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class JobServiceImpl implements JobService {
    List<job> jobs = new ArrayList<>();
    private  Long nextId = 1L ;
    @Override
    public List<job> getallJobs() {
      return jobs;
    }

    @Override
    public void addJob(job Jobadd) {
        //Incrementing the ID for every calll for unique value
        Jobadd.setId(nextId++);
        jobs.add(Jobadd);

    }

    @Override
    public job getJobById(Long jobsearch) {
        for(job jobshare : jobs){
            if(jobshare.getId().equals(jobsearch)){
                return jobshare;
            }


        }
return null;
    }

    @Override
    public boolean DeleteJobByID(Long id) {
       if(jobs.removeIf(job -> job.getId().equals(id))){
           return true;
       };
       return false;
    }
}
