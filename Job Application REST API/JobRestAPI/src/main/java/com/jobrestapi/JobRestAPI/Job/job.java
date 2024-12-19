package com.jobrestapi.JobRestAPI.Job;


//Define the Model for Job Object
public class job {
    private Long id;
    private String Job_title;
    private String Job_description;

    public job(Long id, String job_title, String job_description, String min_salary, String max_salary, String contact) {
        this.id = id;
        this.Job_title = job_title;
        this.Job_description = job_description;
        this.min_salary = min_salary;
        this.max_salary = max_salary;
        this.Contact = contact;
    }

    private  String min_salary;
    private  String max_salary;

    public Long getId() {
        return id;
    }

    public void addid(){
        this.id = this.id + 1L;
    }
    public void setId(Long id) {
        this.id = id;
    }

    public String getJob_title() {
        return Job_title;
    }

    public void setJob_title(String job_title) {
        this.Job_title = job_title;
    }

    public String getJob_description() {
        return this.Job_description;
    }

    public void setJob_description(String job_description) {
        this.Job_description = job_description;
    }

    public String getMin_salary() {
        return min_salary;
    }

    public void setMin_salary(String min_salary) {
        this.min_salary = min_salary;
    }

    public String getMax_salary() {
        return max_salary;
    }

    public void setMax_salary(String max_salary) {
        this.max_salary = max_salary;
    }

    public String getContact() {
        return Contact;
    }

    public void setContact(String contact) {
        this.Contact = contact;
    }

    private  String Contact;

}
