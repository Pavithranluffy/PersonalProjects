package com.jobrestapi.JobRestAPI.Job.Impl;


import com.jobrestapi.JobRestAPI.Job.JobService;
import com.jobrestapi.JobRestAPI.Job.job;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class JobServiceImpl implements JobService {
    List<job> jobs = new ArrayList<>();
    @Override
    public List<job> getallJobs() {
      return jobs;
    }

    @Override
    public void addJob(job Jobadd) {
        jobs.add(Jobadd);

    }
}
