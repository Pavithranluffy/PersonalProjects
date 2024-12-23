package com.jobrestapi.JobRestAPI.Job;

import java.util.List;

//We are Just Initializing here for handle Loose Coupling
public interface JobService {

    List<job> getallJobs();
     void addJob(job Jobadd);

    job getJobById(Long jobsearch);

    boolean DeleteJobByID(Long id);
}
