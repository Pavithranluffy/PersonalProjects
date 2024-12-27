package com.jobrestapi.JobRestAPI.Job.Impl;


import com.jobrestapi.JobRestAPI.Job.JobRepository;
import com.jobrestapi.JobRestAPI.Job.JobService;
import com.jobrestapi.JobRestAPI.Job.job;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Iterator;
import java.util.List;
import java.util.Optional;

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



    @Override
    public boolean DeleteJobByID(Long id) {
        //In case of Deletebyid function which is not optional type so we need to handle the missing cases

        try {
            jobRepository.deleteById(id);
            return  true;
        } catch (Exception e) {
          return false;
        }

    }

    @Override
    public boolean UpdateJobById(job jobAdd, Long id) {
        //To find the Job by id we use optional Object

        Optional<job> jobOptional = jobRepository.findById(id);
        if(jobOptional.isPresent()){
            job Jobs = jobOptional.get();
            Jobs.setJob_description(jobAdd.getJob_description());
            Jobs.setJob_title(jobAdd.getJob_title());
            Jobs.setContact(jobAdd.getContact());
            Jobs.setMin_salary(jobAdd.getMin_salary());
            Jobs.setMax_salary(jobAdd.getMax_salary());

            //After setting and updating the Fields
            //Save the Job
            jobRepository.save(Jobs);
            return true;


        }
        return false; // Job with the given ID not found
    }}
