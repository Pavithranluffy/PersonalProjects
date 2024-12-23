package com.jobrestapi.JobRestAPI.Job.Impl;


import com.jobrestapi.JobRestAPI.Job.JobService;
import com.jobrestapi.JobRestAPI.Job.job;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Iterator;
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

    @Override
    public boolean UpdateJobById(job jobAdd, Long id) {
        Iterator<job> JobIterator = jobs.iterator();
        while (JobIterator.hasNext()) {
            job Jobs = JobIterator.next();
            if (Jobs.getId().equals(id)) {
                // Update only the non-null fields from jobAdd
                if (jobAdd.getJob_description() != null) {
                    Jobs.setJob_description(jobAdd.getJob_description());
                }
                if (jobAdd.getJob_title() != null) {
                    Jobs.setJob_title(jobAdd.getJob_title());
                }
                if (jobAdd.getContact() != null) {
                    Jobs.setContact(jobAdd.getContact());
                }
                if (jobAdd.getMin_salary() != null) {
                    Jobs.setMin_salary(jobAdd.getMin_salary());
                }
                if (jobAdd.getMax_salary() != null) {
                    Jobs.setMax_salary(jobAdd.getMax_salary());
                }
                return true; // Successfully updated
            }
        }
        return false; // Job with the given ID not found
    }}
