package com.jobrestapi.JobRestAPI.Job.Impl;


import com.jobrestapi.JobRestAPI.Job.JobRepository;
import com.jobrestapi.JobRestAPI.Job.JobService;
import com.jobrestapi.JobRestAPI.Job.job;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

@Service
public class JobServiceImpl implements JobService {

    //Create an Object for Repo
    @Autowired
    JobRepository jobRepository ;

    @Override
    public List<job> getallJobs() {
      return jobRepository.findAll();//Which will give all data from the respective table
    }

    @Override
    public void addJob(job Jobadd) {
        //Incrementing the ID for every calll for unique value
       jobRepository.save(Jobadd);//this is used to create an Entity which is an row

    }

    @Override
    public job getJobById(Long jobsearch) {
       return jobRepository.findById(jobsearch).orElse(null);
       //Because .finbyid is an optional class so wee should provide orElse


        }

    }

    @Override
    public boolean DeleteJobByID(Long id) {

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
